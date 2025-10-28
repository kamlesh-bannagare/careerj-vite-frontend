
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { 
  Briefcase, 
  Search,
  MapPin,
  DollarSign,
  Clock,
  Building,
  Star,
  BookmarkIcon,
  Filter,
  X,
  Upload,
  FileText,
  CheckCircle,
  TrendingUp,
  Users
} from "lucide-react"
import Navigation from "@/components/Navigation"

interface Job {
  id: number
  title: string
  company: string
  location: string
  salary: string
  type: string
  experience: string
  posted: string
  match: number
  description: string
  requirements: string[]
  benefits: string[]
  companySize: string
  industry: string
}

export default function Jobs() {
  const [searchQuery, setSearchQuery] = useState("")
  const [locationFilter, setLocationFilter] = useState("")
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [applicationData, setApplicationData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    linkedIn: ""
  })

  const [filters, setFilters] = useState({
    jobType: [] as string[],
    experience: [] as string[],
    salaryRange: [0, 200],
    remote: false
  })

  const allJobs: Job[] = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp",
      location: "Remote",
      salary: "$120k - $150k",
      type: "Full-time",
      experience: "5+ years",
      posted: "2 days ago",
      match: 95,
      description: "We're looking for an experienced React developer to join our team and help build the next generation of web applications. You'll work with a talented team of engineers, designers, and product managers to create exceptional user experiences.",
      requirements: [
        "5+ years of experience with React and TypeScript",
        "Strong understanding of modern web development practices",
        "Experience with state management (Redux, MobX, or similar)",
        "Excellent problem-solving and communication skills",
        "Bachelor's degree in Computer Science or equivalent experience"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "401(k) with company match",
        "Flexible work hours",
        "Remote work options",
        "Professional development budget"
      ],
      companySize: "500-1000",
      industry: "Technology"
    },
    {
      id: 2,
      title: "Full Stack Engineer",
      company: "StartupXYZ",
      location: "San Francisco, CA",
      salary: "$100k - $130k",
      type: "Full-time",
      experience: "3-5 years",
      posted: "1 week ago",
      match: 88,
      description: "Join our fast-growing startup and help build innovative solutions that impact millions of users. We're looking for a versatile engineer who can work across the stack.",
      requirements: [
        "3+ years of full-stack development experience",
        "Proficiency in React, Node.js, and PostgreSQL",
        "Experience with cloud platforms (AWS/GCP)",
        "Strong problem-solving skills",
        "Startup experience preferred"
      ],
      benefits: [
        "Competitive salary and significant equity",
        "Health insurance",
        "Unlimited PTO",
        "Learning stipend",
        "Catered meals"
      ],
      companySize: "50-100",
      industry: "SaaS"
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "WebSolutions",
      location: "New York, NY",
      salary: "$90k - $120k",
      type: "Full-time",
      experience: "2-4 years",
      posted: "3 days ago",
      match: 92,
      description: "We need a creative frontend developer to craft beautiful, responsive web applications. You'll collaborate closely with our design team to bring mockups to life.",
      requirements: [
        "2+ years of frontend development experience",
        "Expert knowledge of HTML, CSS, JavaScript",
        "Experience with React or Vue.js",
        "Understanding of responsive design",
        "Portfolio of previous work"
      ],
      benefits: [
        "Competitive compensation",
        "Health benefits",
        "401(k) matching",
        "Flexible schedule",
        "Remote Fridays"
      ],
      companySize: "200-500",
      industry: "Digital Agency"
    },
    {
      id: 4,
      title: "React Native Developer",
      company: "MobileFirst",
      location: "Remote",
      salary: "$110k - $140k",
      type: "Full-time",
      experience: "4+ years",
      posted: "5 days ago",
      match: 89,
      description: "Build cross-platform mobile applications that delight users. We're looking for someone passionate about mobile development and user experience.",
      requirements: [
        "4+ years of React Native experience",
        "Published apps on iOS and Android",
        "Understanding of mobile UI/UX best practices",
        "Experience with native modules",
        "Strong debugging skills"
      ],
      benefits: [
        "Remote work",
        "Competitive salary",
        "Stock options",
        "Health insurance",
        "Annual retreats"
      ],
      companySize: "100-200",
      industry: "Mobile Apps"
    },
    {
      id: 5,
      title: "UI/UX Developer",
      company: "DesignHub",
      location: "Austin, TX",
      salary: "$95k - $125k",
      type: "Contract",
      experience: "3-5 years",
      posted: "1 day ago",
      match: 85,
      description: "Bridge the gap between design and development. We need someone who can both design beautiful interfaces and implement them with pixel-perfect precision.",
      requirements: [
        "3+ years of UI/UX development",
        "Proficiency in Figma and modern CSS",
        "Experience with React and Tailwind CSS",
        "Strong design sensibility",
        "Portfolio required"
      ],
      benefits: [
        "Contract-to-hire potential",
        "Flexible hours",
        "Creative freedom",
        "Modern tech stack"
      ],
      companySize: "50-100",
      industry: "Design"
    },
    {
      id: 6,
      title: "JavaScript Engineer",
      company: "CodeFactory",
      location: "Seattle, WA",
      salary: "$100k - $135k",
      type: "Full-time",
      experience: "4-6 years",
      posted: "1 week ago",
      match: 87,
      description: "Work on challenging problems with modern JavaScript. We're building tools that developers love to use.",
      requirements: [
        "4+ years of JavaScript experience",
        "Deep understanding of ES6+ features",
        "Experience with Node.js and Express",
        "Knowledge of testing frameworks",
        "Open source contributions a plus"
      ],
      benefits: [
        "Competitive salary",
        "Comprehensive benefits",
        "Remote options",
        "Conference budget",
        "Latest equipment"
      ],
      companySize: "300-500",
      industry: "Developer Tools"
    }
  ]

  const filteredJobs = allJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesLocation = !locationFilter || job.location.toLowerCase().includes(locationFilter.toLowerCase())
    
    return matchesSearch && matchesLocation
  })

  const handleApply = () => {
    console.log("Application submitted:", { ...applicationData, resume: resumeFile })
    setIsApplyModalOpen(false)
    // Reset form
    setApplicationData({
      fullName: "",
      email: "",
      phone: "",
      coverLetter: "",
      linkedIn: ""
    })
    setResumeFile(null)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0])
    }
  }

  return (
    <div className="min-h-screen bg-background">

      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 pt-20 sm:pt-24">
        {/* Search Section */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Find Your Dream Job</h1>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">Discover opportunities that match your skills and aspirations</p>
          
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 sm:top-3.5 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
              <Input
                placeholder="Job title, keywords, or company"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 sm:pl-10 h-10 sm:h-12 text-sm sm:text-base"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-3 sm:top-3.5 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                <Input
                  placeholder="Location"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="pl-9 sm:pl-10 h-10 sm:h-12 text-sm sm:text-base"
                />
              </div>
              <div className="flex gap-2 sm:gap-4">
                <Button size="default" className="h-10 sm:h-12 px-4 sm:px-8 flex-1 sm:flex-none text-sm sm:text-base">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 sm:mr-2" />
                  <span className="hidden sm:inline">Search</span>
                </Button>
                <Button 
                  size="default" 
                  variant="outline" 
                  className="h-10 sm:h-12 px-4 text-sm sm:text-base"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="w-4 h-4 sm:w-5 sm:h-5 sm:mr-2" />
                  <span className="hidden sm:inline">Filters</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <Card className="mb-6 sm:mb-8">
            <CardContent className="pt-4 sm:pt-6 px-3 sm:px-6">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h3 className="font-bold text-base sm:text-lg">Filters</h3>
                <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="space-y-3">
                  <Label className="font-bold text-sm sm:text-base">Job Type</Label>
                  <div className="space-y-2">
                    {["Full-time", "Part-time", "Contract", "Internship"].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox id={type} />
                        <label htmlFor={type} className="text-xs sm:text-sm cursor-pointer">{type}</label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <Label className="font-bold text-sm sm:text-base">Experience Level</Label>
                  <div className="space-y-2">
                    {["Entry Level", "Mid Level", "Senior", "Lead"].map((level) => (
                      <div key={level} className="flex items-center space-x-2">
                        <Checkbox id={level} />
                        <label htmlFor={level} className="text-xs sm:text-sm cursor-pointer">{level}</label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <Label className="font-bold text-sm sm:text-base">Salary Range (k)</Label>
                  <div className="pt-4">
                    <Slider
                      defaultValue={[0, 200]}
                      max={200}
                      step={10}
                      className="mb-4"
                    />
                    <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground">
                      <span>$0k</span>
                      <span>$200k+</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <Label className="font-bold text-sm sm:text-base">Work Mode</Label>
                  <div className="space-y-2">
                    {["Remote", "Hybrid", "On-site"].map((mode) => (
                      <div key={mode} className="flex items-center space-x-2">
                        <Checkbox id={mode} />
                        <label htmlFor={mode} className="text-xs sm:text-sm cursor-pointer">{mode}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Results Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">
              {filteredJobs.length} Jobs Found
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">Based on your profile and search criteria</p>
          </div>
          <Select defaultValue="match">
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="match">Best Match</SelectItem>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="salary-high">Salary: High to Low</SelectItem>
              <SelectItem value="salary-low">Salary: Low to High</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Job Listings */}
        <div className="grid gap-3 sm:gap-4">
          {filteredJobs.map((job) => (
            <Card 
              key={job.id} 
              className="hover:border-primary/50 transition-all cursor-pointer"
              onClick={() => setSelectedJob(job)}
            >
              <CardContent className="pt-4 sm:pt-6 p-3 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl sm:text-2xl flex-shrink-0">
                    {job.company.charAt(0)}
                  </div>
                  <div className="flex-1 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-0 mb-2">
                      <div className="flex-1">
                        <h3 className="text-base sm:text-xl font-bold mb-1">{job.title}</h3>
                        <p className="text-sm sm:text-base text-muted-foreground flex items-center gap-2">
                          <Building className="w-3 h-3 sm:w-4 sm:h-4" />
                          {job.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs sm:text-sm font-medium">
                          <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-green-500" />
                          {job.match}% Match
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10">
                          <BookmarkIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-3 h-3 sm:w-4 sm:h-4" />
                        {job.salary}
                      </span>
                      <Badge variant="secondary" className="text-xs">{job.type}</Badge>
                      <span className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                        {job.experience}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        {job.posted}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-2">
                      {job.description}
                    </p>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                      <Button 
                        size="sm"
                        className="text-xs sm:text-sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedJob(job)
                          setIsApplyModalOpen(true)
                        }}
                      >
                        Apply Now
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs sm:text-sm">View Details</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Job Detail Modal */}
      <Dialog open={selectedJob !== null && !isApplyModalOpen} onOpenChange={(open) => !open && setSelectedJob(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedJob && (
            <>
              <DialogHeader>
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl sm:text-2xl flex-shrink-0">
                    {selectedJob.company.charAt(0)}
                  </div>
                  <div className="flex-1 w-full">
                    <DialogTitle className="text-xl sm:text-2xl mb-2">{selectedJob.title}</DialogTitle>
                    <DialogDescription className="text-sm sm:text-base">
                      <div className="flex items-center gap-2 mb-2">
                        <Building className="w-3 h-3 sm:w-4 sm:h-4" />
                        {selectedJob.company}
                      </div>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                          {selectedJob.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-3 h-3 sm:w-4 sm:h-4" />
                          {selectedJob.salary}
                        </span>
                        <Badge variant="secondary" className="text-xs">{selectedJob.type}</Badge>
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                          {selectedJob.companySize} employees
                        </span>
                      </div>
                    </DialogDescription>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs sm:text-sm font-medium shrink-0">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-green-500" />
                    {selectedJob.match}% Match
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-4 sm:space-y-6 py-4">
                <div>
                  <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">About the Role</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{selectedJob.description}</p>
                </div>

                <div>
                  <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">Benefits</h3>
                  <ul className="space-y-2">
                    {selectedJob.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 pt-2 sm:pt-4">
                  <Button 
                    size="default"
                    className="flex-1 text-sm sm:text-base"
                    onClick={() => setIsApplyModalOpen(true)}
                  >
                    Apply for this Position
                  </Button>
                  <Button size="default" variant="outline" className="text-sm sm:text-base">
                    <BookmarkIcon className="w-4 h-4 sm:w-5 sm:h-5 sm:mr-2" />
                    <span className="hidden sm:inline">Save Job</span>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Apply Modal */}
      <Dialog open={isApplyModalOpen} onOpenChange={setIsApplyModalOpen}>
        <DialogContent className="max-w-[95vw] sm:max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl">Apply for {selectedJob?.title}</DialogTitle>
            <DialogDescription className="text-sm sm:text-base">
              Complete your application for {selectedJob?.company}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 sm:space-y-4 py-4">
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-sm">Full Name *</Label>
                <Input
                  id="fullName"
                  placeholder="John Doe"
                  value={applicationData.fullName}
                  onChange={(e) => setApplicationData({...applicationData, fullName: e.target.value})}
                  className="text-sm"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={applicationData.email}
                  onChange={(e) => setApplicationData({...applicationData, email: e.target.value})}
                  className="text-sm"
                  required
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={applicationData.phone}
                  onChange={(e) => setApplicationData({...applicationData, phone: e.target.value})}
                  className="text-sm"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedIn" className="text-sm">LinkedIn Profile</Label>
                <Input
                  id="linkedIn"
                  placeholder="linkedin.com/in/johndoe"
                  value={applicationData.linkedIn}
                  onChange={(e) => setApplicationData({...applicationData, linkedIn: e.target.value})}
                  className="text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="resume" className="text-sm">Resume / CV *</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-4 sm:p-6 text-center hover:border-primary/50 transition-colors">
                <input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label htmlFor="resume" className="cursor-pointer">
                  {resumeFile ? (
                    <div className="flex items-center justify-center gap-2 text-primary">
                      <FileText className="w-6 h-6 sm:w-8 sm:h-8" />
                      <div>
                        <p className="font-medium text-sm sm:text-base">{resumeFile.name}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <Upload className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 text-muted-foreground" />
                      <p className="font-medium mb-1 text-sm sm:text-base">Click to upload your resume</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        PDF, DOC, or DOCX (max 5MB)
                      </p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="coverLetter" className="text-sm">Cover Letter</Label>
              <Textarea
                id="coverLetter"
                placeholder="Tell us why you're a great fit for this role..."
                rows={5}
                value={applicationData.coverLetter}
                onChange={(e) => setApplicationData({...applicationData, coverLetter: e.target.value})}
                className="text-sm"
              />
            </div>

            <div className="flex items-start gap-2">
              <Checkbox id="terms" />
              <label htmlFor="terms" className="text-xs sm:text-sm text-muted-foreground cursor-pointer leading-tight">
                I agree to the terms and conditions and privacy policy. I consent to having JobFinder 
                store my submitted information so they can respond to my inquiry.
              </label>
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row gap-2 justify-end">
            <Button variant="outline" onClick={() => setIsApplyModalOpen(false)} className="text-sm sm:text-base">
              Cancel
            </Button>
            <Button onClick={handleApply} className="text-sm sm:text-base">
              Submit Application
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
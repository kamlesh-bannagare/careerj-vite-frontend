"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { 
  Briefcase, 
  Plus,
  Users,
  FileText,
  TrendingUp,
  Eye,
  Clock,
  MapPin,
  DollarSign,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  Star
} from "lucide-react"
import Navigation from "@/components/Navigation"

export default function CompanyDashboard() {
  const [isPostJobOpen, setIsPostJobOpen] = useState(false)
  const [jobForm, setJobForm] = useState({
    title: "",
    department: "",
    location: "",
    type: "full-time",
    salary: "",
    description: "",
    requirements: ""
  })

  const activeJobs = [
    { 
      id: 1, 
      title: "Senior React Developer", 
      department: "Engineering", 
      applicants: 45, 
      views: 230, 
      posted: "5 days ago",
      status: "active",
      location: "Remote",
      type: "Full-time"
    },
    { 
      id: 2, 
      title: "Product Manager", 
      department: "Product", 
      applicants: 32, 
      views: 180, 
      posted: "1 week ago",
      status: "active",
      location: "San Francisco",
      type: "Full-time"
    },
    { 
      id: 3, 
      title: "UX Designer", 
      department: "Design", 
      applicants: 28, 
      views: 150, 
      posted: "3 days ago",
      status: "active",
      location: "Hybrid",
      type: "Full-time"
    }
  ]

  const recentApplicants = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Senior React Developer",
      appliedDate: "2 hours ago",
      match: 95,
      status: "new",
      experience: "5 years",
      location: "San Francisco"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Senior React Developer",
      appliedDate: "1 day ago",
      match: 92,
      status: "reviewing",
      experience: "7 years",
      location: "New York"
    },
    {
      id: 3,
      name: "Emily Davis",
      position: "Product Manager",
      appliedDate: "2 days ago",
      match: 88,
      status: "shortlisted",
      experience: "4 years",
      location: "Austin"
    },
    {
      id: 4,
      name: "David Wilson",
      position: "UX Designer",
      appliedDate: "3 days ago",
      match: 85,
      status: "interview",
      experience: "6 years",
      location: "Seattle"
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setJobForm({
      ...jobForm,
      [e.target.id]: e.target.value
    })
  }

  const handlePostJob = () => {
    console.log("Posting job:", jobForm)
    setIsPostJobOpen(false)
    // Reset form
    setJobForm({
      title: "",
      department: "",
      location: "",
      type: "full-time",
      salary: "",
      description: "",
      requirements: ""
    })
  }

  const getStatusBadge = (status: string) => {
    switch(status) {
      case "new":
        return <Badge className="bg-blue-500">New</Badge>
      case "reviewing":
        return <Badge variant="secondary">Reviewing</Badge>
      case "shortlisted":
        return <Badge className="bg-green-500">Shortlisted</Badge>
      case "interview":
        return <Badge className="bg-purple-500">Interview</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-background">

      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 pt-20 sm:pt-24">
        {/* Welcome Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">Welcome, TechCorp! 👋</h1>
            <p className="text-sm sm:text-base text-muted-foreground">Manage your job postings and candidates</p>
          </div>
          <Dialog open={isPostJobOpen} onOpenChange={setIsPostJobOpen}>
            <DialogTrigger asChild>
              <Button size="default" className="w-full sm:w-auto">
                <Plus className="w-4 h-4 mr-2" />
                Post New Job
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto mx-4">
              <DialogHeader>
                <DialogTitle>Post a New Job</DialogTitle>
                <DialogDescription>Fill in the details to create a new job posting</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Job Title</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Senior React Developer"
                    value={jobForm.title}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Input
                      id="department"
                      placeholder="e.g., Engineering"
                      value={jobForm.department}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      placeholder="e.g., Remote, San Francisco"
                      value={jobForm.location}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="type">Job Type</Label>
                    <Select value={jobForm.type} onValueChange={(value) => setJobForm({...jobForm, type: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="internship">Internship</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="salary">Salary Range</Label>
                    <Input
                      id="salary"
                      placeholder="e.g., $120k - $150k"
                      value={jobForm.salary}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Job Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the role, responsibilities, and what the candidate will be doing..."
                    rows={5}
                    value={jobForm.description}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="requirements">Requirements</Label>
                  <Textarea
                    id="requirements"
                    placeholder="List the required skills, experience, and qualifications..."
                    rows={5}
                    value={jobForm.requirements}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex gap-2 justify-end">
                <Button variant="outline" onClick={() => setIsPostJobOpen(false)}>Cancel</Button>
                <Button onClick={handlePostJob}>Post Job</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
          <Card>
            <CardContent className="pt-4 sm:pt-6">
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-1">{activeJobs.length}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Active Jobs</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4 sm:pt-6">
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                </div>
                <Badge variant="secondary" className="text-xs">+12</Badge>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-1">105</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Applicants</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4 sm:pt-6">
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-1">560</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Total Views</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4 sm:pt-6">
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                </div>
                <Badge variant="secondary" className="bg-green-500/10 text-green-500 text-xs">+15%</Badge>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-1">23%</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">App Rate</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Active Job Postings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                  Active Job Postings
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">Manage your current job listings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeJobs.map((job) => (
                  <div key={job.id} className="p-3 sm:p-4 rounded-lg border border-border hover:border-primary/50 transition-all">
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-3 mb-3">
                      <div className="flex-1">
                        <h4 className="font-bold mb-1 text-sm sm:text-base">{job.title}</h4>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                          <span>{job.department}</span>
                          <span className="hidden sm:inline">•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {job.location}
                          </span>
                          <Badge variant="outline" className="text-xs">{job.type}</Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 self-end sm:self-auto">
                        <Button size="sm" variant="ghost">
                          <Edit className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 sm:gap-4">
                      <div className="text-center p-2 sm:p-3 rounded-lg bg-muted">
                        <div className="text-lg sm:text-2xl font-bold text-blue-500">{job.applicants}</div>
                        <div className="text-[10px] sm:text-xs text-muted-foreground">Applicants</div>
                      </div>
                      <div className="text-center p-2 sm:p-3 rounded-lg bg-muted">
                        <div className="text-lg sm:text-2xl font-bold text-purple-500">{job.views}</div>
                        <div className="text-[10px] sm:text-xs text-muted-foreground">Views</div>
                      </div>
                      <div className="text-center p-2 sm:p-3 rounded-lg bg-muted">
                        <div className="text-[10px] sm:text-xs font-bold text-muted-foreground mb-1">Posted</div>
                        <div className="text-[10px] sm:text-xs text-muted-foreground">{job.posted}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Applicants */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                  Recent Applicants
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">Review and manage candidate applications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentApplicants.map((applicant) => (
                  <div key={applicant.id} className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border border-border hover:border-primary/50 transition-all">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0 text-sm sm:text-base">
                      {applicant.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 w-full">
                      <div className="flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-0 mb-2">
                        <div className="flex-1">
                          <h4 className="font-bold mb-1 text-sm sm:text-base">{applicant.name}</h4>
                          <p className="text-xs sm:text-sm text-muted-foreground mb-1">{applicant.position}</p>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-muted-foreground">
                            <span>{applicant.experience} experience</span>
                            <span className="hidden sm:inline">•</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {applicant.location}
                            </span>
                          </div>
                        </div>
                        <div className="flex sm:flex-col items-center sm:items-end gap-2 self-start">
                          <div className="flex items-center gap-1 sm:gap-2 px-2 py-1 rounded-full bg-green-500/10 text-green-500 text-[10px] sm:text-xs font-medium">
                            <Star className="w-3 h-3 fill-green-500" />
                            {applicant.match}%
                          </div>
                          {getStatusBadge(applicant.status)}
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mt-3">
                        <Button size="sm" className="text-xs">View Profile</Button>
                        <Button size="sm" variant="outline" className="text-xs">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-1" />
                          <span className="hidden sm:inline">Shortlist</span>
                        </Button>
                        <Button size="sm" variant="outline" className="text-xs">
                          <XCircle className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-1" />
                          <span className="hidden sm:inline">Reject</span>
                        </Button>
                      </div>
                      <p className="text-[10px] sm:text-xs text-muted-foreground mt-2">Applied {applicant.appliedDate}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start text-sm" onClick={() => setIsPostJobOpen(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Post New Job
                </Button>
                <Link to="/company-dashboard/candidates" className="block">
                  <Button className="w-full justify-start text-sm" variant="outline">
                    <Users className="w-4 h-4 mr-2" />
                    All Candidates
                  </Button>
                </Link>
                <Link to="/company-dashboard/analytics" className="block">
                  <Button className="w-full justify-start text-sm" variant="outline">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    View Analytics
                  </Button>
                </Link>
                <Link to="/company-dashboard/reports" className="block">
                  <Button className="w-full justify-start text-sm" variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    Generate Report
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Hiring Pipeline */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Hiring Pipeline</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm">New Applications</span>
                  <Badge className="text-xs">23</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm">Under Review</span>
                  <Badge variant="secondary" className="text-xs">15</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm">Shortlisted</span>
                  <Badge variant="secondary" className="text-xs">8</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm">Interview Scheduled</span>
                  <Badge variant="secondary" className="text-xs">5</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm">Offer Extended</span>
                  <Badge className="bg-green-500 text-xs">2</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Performance Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm">Avg. Time to Hire</span>
                    <span className="text-xs sm:text-sm font-bold">28 days</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500" style={{ width: '65%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm">Application Rate</span>
                    <span className="text-xs sm:text-sm font-bold">23%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: '23%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm">Offer Accept Rate</span>
                    <span className="text-xs sm:text-sm font-bold">85%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500" style={{ width: '85%' }} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
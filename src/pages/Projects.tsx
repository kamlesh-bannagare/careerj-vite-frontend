"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  DollarSign,
  Clock,
  MapPin,
  Search,
  Filter,
  CheckCircle2,
  AlertCircle,
  Briefcase,
  Calendar,
  Star,
  Send,
  User,
  Globe,
} from "lucide-react"
import { toast } from "sonner"

interface FreelanceProject {
  id: number
  title: string
  description: string
  shortDescription: string
  skills: string[]
  category: string
  budgetType: "Fixed" | "Hourly"
  budgetMin: number
  budgetMax: number
  duration: string
  experienceLevel: "Entry" | "Intermediate" | "Expert"
  status: "Open" | "In Progress" | "Completed"
  proposals: number
  clientName: string
  clientRating: number
  clientCountry: string
  clientProjectsPosted: number
  postedAt: string
  deadline: string
}

const FREELANCE_PROJECTS: FreelanceProject[] = [
  {
    id: 1,
    title: "E-Commerce Website Development",
    description: "Looking for an experienced developer to build a complete e-commerce platform with product management, shopping cart, payment integration (Stripe/PayPal), and admin dashboard. The website should be mobile-responsive and SEO-optimized. Must have experience with similar projects.",
    shortDescription: "Build a full-featured e-commerce platform with payments",
    skills: ["React", "Node.js", "Stripe", "MongoDB", "Tailwind CSS"],
    category: "Web Development",
    budgetType: "Fixed",
    budgetMin: 3000,
    budgetMax: 5000,
    duration: "1-2 months",
    experienceLevel: "Expert",
    status: "Open",
    proposals: 12,
    clientName: "TechStart Inc.",
    clientRating: 4.8,
    clientCountry: "United States",
    clientProjectsPosted: 15,
    postedAt: "2024-01-15",
    deadline: "2024-03-15"
  },
  {
    id: 2,
    title: "Mobile App UI/UX Design",
    description: "Need a talented UI/UX designer to create modern and intuitive designs for a fitness tracking mobile app. Deliverables include wireframes, high-fidelity mockups, and interactive prototypes. Experience with health/fitness apps is a plus.",
    shortDescription: "Design UI/UX for a fitness tracking mobile app",
    skills: ["Figma", "UI Design", "UX Research", "Prototyping", "Mobile Design"],
    category: "Design",
    budgetType: "Fixed",
    budgetMin: 1500,
    budgetMax: 2500,
    duration: "2-3 weeks",
    experienceLevel: "Intermediate",
    status: "Open",
    proposals: 28,
    clientName: "FitLife Solutions",
    clientRating: 4.9,
    clientCountry: "Canada",
    clientProjectsPosted: 8,
    postedAt: "2024-01-18",
    deadline: "2024-02-15"
  },
  {
    id: 3,
    title: "WordPress Blog Migration & Optimization",
    description: "Migrate existing blog (500+ posts) from Blogger to WordPress. Need SEO preservation, performance optimization, custom theme implementation, and training on content management. Speed optimization is critical.",
    shortDescription: "Migrate blog to WordPress with SEO optimization",
    skills: ["WordPress", "PHP", "SEO", "MySQL", "Performance Optimization"],
    category: "Web Development",
    budgetType: "Fixed",
    budgetMin: 800,
    budgetMax: 1200,
    duration: "1-2 weeks",
    experienceLevel: "Intermediate",
    status: "Open",
    proposals: 45,
    clientName: "Digital Content Co.",
    clientRating: 4.5,
    clientCountry: "United Kingdom",
    clientProjectsPosted: 22,
    postedAt: "2024-01-20",
    deadline: "2024-02-10"
  },
  {
    id: 4,
    title: "Python Data Analysis Script",
    description: "Develop a Python script to analyze sales data from multiple CSV files, generate insights, and create automated reports. Should include data visualization using matplotlib/seaborn and export capabilities to Excel/PDF.",
    shortDescription: "Create Python scripts for sales data analysis",
    skills: ["Python", "Pandas", "Data Analysis", "Matplotlib", "Automation"],
    category: "Data Science",
    budgetType: "Hourly",
    budgetMin: 40,
    budgetMax: 60,
    duration: "1-2 weeks",
    experienceLevel: "Intermediate",
    status: "Open",
    proposals: 18,
    clientName: "Analytics Pro",
    clientRating: 4.7,
    clientCountry: "Germany",
    clientProjectsPosted: 12,
    postedAt: "2024-01-22",
    deadline: "2024-02-05"
  },
  {
    id: 5,
    title: "React Native App Development",
    description: "Build a cross-platform mobile app for a food delivery service. Features include user authentication, restaurant listings, order management, real-time tracking, and payment integration. API backend will be provided.",
    shortDescription: "Develop cross-platform food delivery app",
    skills: ["React Native", "TypeScript", "Redux", "Firebase", "Maps API"],
    category: "Mobile Development",
    budgetType: "Fixed",
    budgetMin: 8000,
    budgetMax: 12000,
    duration: "2-3 months",
    experienceLevel: "Expert",
    status: "Open",
    proposals: 8,
    clientName: "FoodExpress Ltd.",
    clientRating: 4.6,
    clientCountry: "Australia",
    clientProjectsPosted: 5,
    postedAt: "2024-01-10",
    deadline: "2024-04-10"
  },
  {
    id: 6,
    title: "Logo & Brand Identity Design",
    description: "Create a complete brand identity for a new tech startup. Deliverables include logo (multiple formats), color palette, typography guidelines, business cards, and brand style guide. Modern and innovative style preferred.",
    shortDescription: "Design complete brand identity for tech startup",
    skills: ["Logo Design", "Branding", "Adobe Illustrator", "Typography", "Color Theory"],
    category: "Design",
    budgetType: "Fixed",
    budgetMin: 500,
    budgetMax: 1000,
    duration: "1-2 weeks",
    experienceLevel: "Intermediate",
    status: "Open",
    proposals: 65,
    clientName: "InnovateTech",
    clientRating: 4.4,
    clientCountry: "Netherlands",
    clientProjectsPosted: 3,
    postedAt: "2024-01-25",
    deadline: "2024-02-08"
  },
  {
    id: 7,
    title: "API Integration & Backend Development",
    description: "Integrate multiple third-party APIs (payment, shipping, CRM) into existing Node.js backend. Need proper error handling, rate limiting, and comprehensive documentation. Experience with microservices architecture preferred.",
    shortDescription: "Integrate third-party APIs into Node.js backend",
    skills: ["Node.js", "Express", "REST APIs", "PostgreSQL", "Docker"],
    category: "Backend Development",
    budgetType: "Hourly",
    budgetMin: 50,
    budgetMax: 80,
    duration: "3-4 weeks",
    experienceLevel: "Expert",
    status: "In Progress",
    proposals: 15,
    clientName: "SaaS Solutions",
    clientRating: 4.9,
    clientCountry: "United States",
    clientProjectsPosted: 28,
    postedAt: "2024-01-08",
    deadline: "2024-02-28"
  },
  {
    id: 8,
    title: "Content Writing for Tech Blog",
    description: "Write 10 high-quality, SEO-optimized blog posts about cloud computing, DevOps, and software development. Each post should be 1500-2000 words with proper research and technical accuracy. Weekly delivery expected.",
    shortDescription: "Write SEO-optimized tech blog posts",
    skills: ["Technical Writing", "SEO", "Cloud Computing", "Content Strategy", "Research"],
    category: "Writing",
    budgetType: "Fixed",
    budgetMin: 1000,
    budgetMax: 1500,
    duration: "4-6 weeks",
    experienceLevel: "Intermediate",
    status: "Open",
    proposals: 52,
    clientName: "CloudTech Media",
    clientRating: 4.7,
    clientCountry: "India",
    clientProjectsPosted: 45,
    postedAt: "2024-01-19",
    deadline: "2024-03-01"
  },
  {
    id: 9,
    title: "Machine Learning Model Development",
    description: "Develop a machine learning model for customer churn prediction. Dataset will be provided. Need data preprocessing, feature engineering, model training (multiple algorithms), and deployment-ready code with documentation.",
    shortDescription: "Build ML model for customer churn prediction",
    skills: ["Python", "Machine Learning", "Scikit-learn", "TensorFlow", "Data Preprocessing"],
    category: "Data Science",
    budgetType: "Fixed",
    budgetMin: 2500,
    budgetMax: 4000,
    duration: "3-4 weeks",
    experienceLevel: "Expert",
    status: "Open",
    proposals: 22,
    clientName: "DataDriven Corp",
    clientRating: 4.8,
    clientCountry: "Singapore",
    clientProjectsPosted: 18,
    postedAt: "2024-01-17",
    deadline: "2024-02-20"
  },
  {
    id: 10,
    title: "Shopify Store Customization",
    description: "Customize existing Shopify store with custom theme modifications, new product pages, improved checkout flow, and integration with inventory management system. Must maintain mobile responsiveness.",
    shortDescription: "Customize and optimize Shopify e-commerce store",
    skills: ["Shopify", "Liquid", "JavaScript", "CSS", "E-commerce"],
    category: "Web Development",
    budgetType: "Fixed",
    budgetMin: 600,
    budgetMax: 1000,
    duration: "1 week",
    experienceLevel: "Entry",
    status: "Completed",
    proposals: 38,
    clientName: "Fashion Forward",
    clientRating: 4.3,
    clientCountry: "France",
    clientProjectsPosted: 7,
    postedAt: "2024-01-05",
    deadline: "2024-01-20"
  },
  {
    id: 11,
    title: "Video Editing for YouTube Channel",
    description: "Edit 8 YouTube videos per month (10-15 minutes each). Need professional editing, color grading, motion graphics, sound design, and thumbnail creation. Fast turnaround required. Gaming/tech content.",
    shortDescription: "Edit YouTube videos with motion graphics",
    skills: ["Video Editing", "After Effects", "Premiere Pro", "Motion Graphics", "Color Grading"],
    category: "Video & Animation",
    budgetType: "Hourly",
    budgetMin: 25,
    budgetMax: 40,
    duration: "Ongoing",
    experienceLevel: "Intermediate",
    status: "Open",
    proposals: 72,
    clientName: "GameTech Reviews",
    clientRating: 4.6,
    clientCountry: "Japan",
    clientProjectsPosted: 32,
    postedAt: "2024-01-21",
    deadline: "2024-02-01"
  },
  {
    id: 12,
    title: "AWS Infrastructure Setup",
    description: "Set up production-ready AWS infrastructure including EC2, RDS, S3, CloudFront, and Lambda functions. Need proper VPC configuration, security groups, IAM policies, and CI/CD pipeline with CloudFormation/Terraform.",
    shortDescription: "Configure AWS cloud infrastructure",
    skills: ["AWS", "Terraform", "Docker", "CI/CD", "Linux"],
    category: "DevOps",
    budgetType: "Fixed",
    budgetMin: 2000,
    budgetMax: 3500,
    duration: "2-3 weeks",
    experienceLevel: "Expert",
    status: "Open",
    proposals: 14,
    clientName: "ScaleUp Ventures",
    clientRating: 4.9,
    clientCountry: "United States",
    clientProjectsPosted: 11,
    postedAt: "2024-01-23",
    deadline: "2024-02-15"
  }
]

const CATEGORIES = [
  "All Categories",
  "Web Development",
  "Mobile Development",
  "Design",
  "Data Science",
  "Backend Development",
  "Writing",
  "Video & Animation",
  "DevOps"
]

export default function Projects() {
  const [projects, setProjects] = useState<FreelanceProject[]>([])
  const [filteredProjects, setFilteredProjects] = useState<FreelanceProject[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState<string>("All Categories")
  const [experienceFilter, setExperienceFilter] = useState<string>("all")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [selectedProject, setSelectedProject] = useState<FreelanceProject | null>(null)
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [showProposalModal, setShowProposalModal] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const [proposalForm, setProposalForm] = useState({
    coverLetter: "",
    bidAmount: "",
    deliveryTime: "",
    portfolio: "",
  })

  useEffect(() => {
    fetchProjects()
  }, [])

  useEffect(() => {
    applyFilters()
  }, [projects, searchTerm, categoryFilter, experienceFilter, statusFilter])

  const fetchProjects = async () => {
    try {
      setLoading(true)
      await new Promise(resolve => setTimeout(resolve, 500))
      setProjects(FREELANCE_PROJECTS)
      setFilteredProjects(FREELANCE_PROJECTS)
    } catch (error) {
      console.error("Error loading projects:", error)
      toast.error("Failed to load projects")
    } finally {
      setLoading(false)
    }
  }

  const applyFilters = () => {
    let filtered = [...projects]

    if (searchTerm) {
      const search = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(search) ||
          p.shortDescription.toLowerCase().includes(search) ||
          p.skills.some(skill => skill.toLowerCase().includes(search))
      )
    }

    if (categoryFilter !== "All Categories") {
      filtered = filtered.filter((p) => p.category === categoryFilter)
    }

    if (experienceFilter !== "all") {
      filtered = filtered.filter((p) => p.experienceLevel === experienceFilter)
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((p) => p.status === statusFilter)
    }

    setFilteredProjects(filtered)
  }

  const handleProjectClick = (project: FreelanceProject) => {
    setSelectedProject(project)
    setShowDetailModal(true)
  }

  const handleSubmitProposal = (project: FreelanceProject) => {
    setSelectedProject(project)
    setShowDetailModal(false)
    setShowProposalModal(true)
  }

  const handleProposalSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!selectedProject) return

    if (!proposalForm.coverLetter || !proposalForm.bidAmount || !proposalForm.deliveryTime) {
      toast.error("Please fill in all required fields")
      return
    }

    try {
      setSubmitting(true)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log("Proposal submitted:", {
        projectId: selectedProject.id,
        projectTitle: selectedProject.title,
        proposal: proposalForm
      })

      toast.success("Proposal submitted successfully! The client will review your bid.")
      setShowProposalModal(false)
      setProposalForm({ coverLetter: "", bidAmount: "", deliveryTime: "", portfolio: "" })
    } catch (error) {
      console.error("Error submitting proposal:", error)
      toast.error("Failed to submit proposal. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  const getExperienceColor = (level: string) => {
    switch (level) {
      case "Entry":
        return "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300"
      case "Expert":
        return "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300"
      case "In Progress":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300"
      case "Completed":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-300"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const formatBudget = (project: FreelanceProject) => {
    if (project.budgetType === "Hourly") {
      return `$${project.budgetMin} - $${project.budgetMax}/hr`
    }
    return `$${project.budgetMin.toLocaleString()} - $${project.budgetMax.toLocaleString()}`
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Freelance Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              Find freelance opportunities that match your skills. Browse projects from clients worldwide 
              and submit proposals to start earning.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-4 text-center">
                <Briefcase className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-2xl font-bold">{projects.filter(p => p.status === "Open").length}</p>
                <p className="text-sm text-muted-foreground">Open Projects</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
              <CardContent className="p-4 text-center">
                <DollarSign className="w-8 h-8 mx-auto mb-2 text-green-500" />
                <p className="text-2xl font-bold">$50K+</p>
                <p className="text-sm text-muted-foreground">Total Budget</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
              <CardContent className="p-4 text-center">
                <Globe className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                <p className="text-2xl font-bold">12+</p>
                <p className="text-sm text-muted-foreground">Countries</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
              <CardContent className="p-4 text-center">
                <User className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                <p className="text-2xl font-bold">50+</p>
                <p className="text-sm text-muted-foreground">Active Clients</p>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search by title, skills, or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((cat) => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Experience Filter */}
              <Select value={experienceFilter} onValueChange={setExperienceFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="Entry">Entry Level</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Expert">Expert</SelectItem>
                </SelectContent>
              </Select>

              {/* Status Filter */}
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Open">Open</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Filter className="w-4 h-4" />
              <span>Showing {filteredProjects.length} of {projects.length} projects</span>
            </div>
          </div>

          {/* Projects List */}
          {loading ? (
            <div className="space-y-4">
              {[...Array(4)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-6">
                    <div className="h-6 bg-muted rounded w-1/2 mb-4" />
                    <div className="h-4 bg-muted rounded w-full mb-2" />
                    <div className="h-4 bg-muted rounded w-3/4" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <AlertCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground">
                Try adjusting your filters or search terms
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="hover:shadow-lg transition-all duration-300 cursor-pointer group border-border/50 hover:border-primary/30"
                  onClick={() => handleProjectClick(project)}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                      {/* Main Content */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <Badge className={getStatusColor(project.status)}>
                            {project.status}
                          </Badge>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {project.shortDescription}
                        </p>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.skills.slice(0, 5).map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {project.skills.length > 5 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.skills.length - 5} more
                            </Badge>
                          )}
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            <span className="font-medium text-foreground">{formatBudget(project)}</span>
                            <span className="text-xs">({project.budgetType})</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{project.duration}</span>
                          </div>
                          <Badge className={getExperienceColor(project.experienceLevel)}>
                            {project.experienceLevel}
                          </Badge>
                          <div className="flex items-center gap-1">
                            <Send className="w-4 h-4" />
                            <span>{project.proposals} proposals</span>
                          </div>
                        </div>
                      </div>

                      {/* Client Info */}
                      <div className="lg:w-64 p-4 bg-muted/30 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                            <User className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-sm">{project.clientName}</p>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-xs">{project.clientRating}</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-1 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>{project.clientCountry}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-3 h-3" />
                            <span>{project.clientProjectsPosted} projects posted</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={showDetailModal} onOpenChange={setShowDetailModal}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 flex-wrap">
                  <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                  <Badge className={getStatusColor(selectedProject.status)}>
                    {selectedProject.status}
                  </Badge>
                </div>
                <DialogDescription className="text-base">
                  Posted by {selectedProject.clientName} • {selectedProject.category}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Budget & Duration */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <DollarSign className="w-4 h-4" />
                      <span className="text-sm">Budget</span>
                    </div>
                    <p className="font-semibold">{formatBudget(selectedProject)}</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">Duration</span>
                    </div>
                    <p className="font-semibold">{selectedProject.duration}</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">Deadline</span>
                    </div>
                    <p className="font-semibold">{new Date(selectedProject.deadline).toLocaleDateString()}</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Send className="w-4 h-4" />
                      <span className="text-sm">Proposals</span>
                    </div>
                    <p className="font-semibold">{selectedProject.proposals}</p>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="font-semibold mb-2">Project Description</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Skills Required */}
                <div>
                  <h4 className="font-semibold mb-2">Skills Required</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Experience Level */}
                <div>
                  <h4 className="font-semibold mb-2">Experience Level</h4>
                  <Badge className={getExperienceColor(selectedProject.experienceLevel)}>
                    {selectedProject.experienceLevel}
                  </Badge>
                </div>

                {/* Client Info */}
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold mb-3">About the Client</h4>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{selectedProject.clientName}</p>
                      <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{selectedProject.clientRating} rating</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{selectedProject.clientCountry}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{selectedProject.clientProjectsPosted} projects</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button
                    className="flex-1"
                    onClick={() => handleSubmitProposal(selectedProject)}
                    disabled={selectedProject.status !== "Open"}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Submit Proposal
                  </Button>
                  <Button variant="outline" onClick={() => setShowDetailModal(false)}>
                    Close
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Submit Proposal Modal */}
      <Dialog open={showProposalModal} onOpenChange={setShowProposalModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Submit Proposal</DialogTitle>
            <DialogDescription>
              {selectedProject && `Submit your proposal for "${selectedProject.title}"`}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleProposalSubmit} className="space-y-6 mt-4">
            {/* Bid Amount */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="bidAmount">Your Bid Amount *</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="bidAmount"
                    type="number"
                    placeholder={selectedProject?.budgetType === "Hourly" ? "Hourly rate" : "Total amount"}
                    value={proposalForm.bidAmount}
                    onChange={(e) => setProposalForm(prev => ({ ...prev, bidAmount: e.target.value }))}
                    className="pl-10"
                    required
                  />
                </div>
                {selectedProject && (
                  <p className="text-xs text-muted-foreground">
                    Client budget: {formatBudget(selectedProject)}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="deliveryTime">Delivery Time *</Label>
                <Select
                  value={proposalForm.deliveryTime}
                  onValueChange={(value) => setProposalForm(prev => ({ ...prev, deliveryTime: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select delivery time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="less-than-week">Less than 1 week</SelectItem>
                    <SelectItem value="1-2-weeks">1-2 weeks</SelectItem>
                    <SelectItem value="2-4-weeks">2-4 weeks</SelectItem>
                    <SelectItem value="1-2-months">1-2 months</SelectItem>
                    <SelectItem value="2-3-months">2-3 months</SelectItem>
                    <SelectItem value="more-than-3-months">More than 3 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Cover Letter */}
            <div className="space-y-2">
              <Label htmlFor="coverLetter">Cover Letter *</Label>
              <Textarea
                id="coverLetter"
                placeholder="Explain why you're the best fit for this project. Include your relevant experience and approach..."
                value={proposalForm.coverLetter}
                onChange={(e) => setProposalForm(prev => ({ ...prev, coverLetter: e.target.value }))}
                className="min-h-[150px]"
                required
              />
            </div>

            {/* Portfolio Link */}
            <div className="space-y-2">
              <Label htmlFor="portfolio">Portfolio Link (Optional)</Label>
              <Input
                id="portfolio"
                type="url"
                placeholder="https://your-portfolio.com"
                value={proposalForm.portfolio}
                onChange={(e) => setProposalForm(prev => ({ ...prev, portfolio: e.target.value }))}
              />
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4 pt-4">
              <Button type="submit" className="flex-1" disabled={submitting}>
                {submitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Submit Proposal
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowProposalModal(false)}
                disabled={submitting}
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

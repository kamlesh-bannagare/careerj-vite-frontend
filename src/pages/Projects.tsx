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
  Code2,
  Clock,
  Users,
  TrendingUp,
  Search,
  Filter,
  CheckCircle2,
  AlertCircle,
} from "lucide-react"
import { toast } from "sonner"

interface Project {
  id: number
  title: string
  description: string
  shortDescription: string
  techStack: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  duration: string
  requirements: string
  learningOutcomes: string
  status: "Open" | "In Progress" | "Closed"
  maxParticipants: number
  currentParticipants: number
  createdAt: string
}

// Static project data
const STATIC_PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform Frontend",
    description: "Build a modern, responsive e-commerce platform with Next.js and TypeScript. This project involves creating product listings, shopping cart functionality, checkout process, and user authentication. You'll work with real-world scenarios including state management, API integration, and payment processing.",
    shortDescription: "Build a modern e-commerce platform with Next.js",
    techStack: "Next.js, TypeScript, Tailwind CSS, Stripe",
    difficulty: "Intermediate",
    duration: "8-10 weeks",
    requirements: "Knowledge of React, basic TypeScript, understanding of REST APIs",
    learningOutcomes: "Learn state management, payment integration, authentication flows, and production-ready code practices",
    status: "Open",
    maxParticipants: 5,
    currentParticipants: 3,
    createdAt: "2024-01-15"
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    description: "Develop a real-time chat application using WebSockets and React. Features include private messaging, group chats, file sharing, and online status indicators. This project will teach you about real-time communication, socket programming, and scalable architecture.",
    shortDescription: "Create a real-time messaging app with WebSocket",
    techStack: "React, Node.js, Socket.io, MongoDB",
    difficulty: "Advanced",
    duration: "10-12 weeks",
    requirements: "Strong JavaScript knowledge, experience with Node.js, database basics",
    learningOutcomes: "Master WebSocket communication, real-time data synchronization, and building scalable chat systems",
    status: "Open",
    maxParticipants: 4,
    currentParticipants: 2,
    createdAt: "2024-01-20"
  },
  {
    id: 3,
    title: "Task Management Dashboard",
    description: "Create a comprehensive task management system similar to Trello or Asana. Implement drag-and-drop functionality, task assignments, deadline tracking, and progress visualization. Perfect for learning modern UI/UX patterns and complex state management.",
    shortDescription: "Build a drag-and-drop task management system",
    techStack: "React, TypeScript, DnD Kit, Zustand",
    difficulty: "Beginner",
    duration: "6-8 weeks",
    requirements: "Basic React knowledge, willingness to learn TypeScript",
    learningOutcomes: "Learn drag-and-drop libraries, state management with Zustand, and component architecture",
    status: "Open",
    maxParticipants: 6,
    currentParticipants: 4,
    createdAt: "2024-01-25"
  },
  {
    id: 4,
    title: "AI-Powered Blog Platform",
    description: "Build a blogging platform with AI-powered content suggestions and SEO optimization. Integrate with OpenAI API for content generation, implement rich text editing, and create an admin dashboard for content management.",
    shortDescription: "Develop a blog platform with AI content assistance",
    techStack: "Next.js, OpenAI API, Prisma, PostgreSQL",
    difficulty: "Advanced",
    duration: "12-14 weeks",
    requirements: "Full-stack development experience, API integration knowledge, database design skills",
    learningOutcomes: "AI integration, SEO optimization, content management systems, and advanced database design",
    status: "Open",
    maxParticipants: 3,
    currentParticipants: 1,
    createdAt: "2024-02-01"
  },
  {
    id: 5,
    title: "Fitness Tracking Mobile App",
    description: "Create a cross-platform fitness tracking app with React Native. Features include workout logging, progress charts, social sharing, and integration with health APIs. Learn mobile development while building a practical health application.",
    shortDescription: "Build a cross-platform fitness tracker",
    techStack: "React Native, Expo, Firebase, Chart.js",
    difficulty: "Intermediate",
    duration: "8-10 weeks",
    requirements: "React basics, interest in mobile development",
    learningOutcomes: "Mobile app development, health API integration, data visualization, and Firebase services",
    status: "In Progress",
    maxParticipants: 5,
    currentParticipants: 5,
    createdAt: "2024-02-05"
  },
  {
    id: 6,
    title: "Social Media Analytics Dashboard",
    description: "Develop an analytics dashboard for social media metrics. Implement data visualization with charts and graphs, real-time updates, and customizable reports. Great for learning data handling and visualization techniques.",
    shortDescription: "Create analytics dashboard for social media insights",
    techStack: "React, D3.js, Node.js, Express",
    difficulty: "Intermediate",
    duration: "6-8 weeks",
    requirements: "JavaScript proficiency, basic understanding of data structures",
    learningOutcomes: "Data visualization with D3.js, API development, real-time data handling, and dashboard design",
    status: "Open",
    maxParticipants: 4,
    currentParticipants: 2,
    createdAt: "2024-02-10"
  },
  {
    id: 7,
    title: "Recipe Sharing Community",
    description: "Build a community platform for sharing and discovering recipes. Features include user profiles, recipe ratings, comments, search functionality, and meal planning tools. Perfect for learning community features and social interactions.",
    shortDescription: "Develop a recipe sharing platform",
    techStack: "Vue.js, Nuxt, Supabase, Tailwind CSS",
    difficulty: "Beginner",
    duration: "6-8 weeks",
    requirements: "Basic web development knowledge, enthusiasm to learn Vue.js",
    learningOutcomes: "Vue.js framework, Supabase backend, user authentication, and community features",
    status: "Open",
    maxParticipants: 6,
    currentParticipants: 3,
    createdAt: "2024-02-15"
  },
  {
    id: 8,
    title: "Video Streaming Platform",
    description: "Create a video streaming service similar to YouTube or Netflix. Implement video upload, transcoding, adaptive streaming, and content recommendations. An advanced project for those interested in media processing.",
    shortDescription: "Build a video streaming service",
    techStack: "React, Node.js, FFmpeg, AWS S3, Redis",
    difficulty: "Advanced",
    duration: "14-16 weeks",
    requirements: "Strong full-stack skills, experience with cloud services, understanding of video formats",
    learningOutcomes: "Video processing, CDN integration, scalable architecture, and recommendation algorithms",
    status: "Open",
    maxParticipants: 3,
    currentParticipants: 1,
    createdAt: "2024-02-20"
  },
  {
    id: 9,
    title: "Weather Forecast Progressive Web App",
    description: "Develop a PWA that provides weather forecasts with offline capabilities. Integrate with weather APIs, implement location services, and create beautiful data visualizations for weather patterns.",
    shortDescription: "Create a PWA for weather forecasting",
    techStack: "React, PWA, OpenWeather API, Service Workers",
    difficulty: "Beginner",
    duration: "4-6 weeks",
    requirements: "Basic React knowledge, interest in PWA concepts",
    learningOutcomes: "Progressive Web Apps, service workers, offline functionality, and API integration",
    status: "Open",
    maxParticipants: 8,
    currentParticipants: 5,
    createdAt: "2024-02-25"
  },
  {
    id: 10,
    title: "Cryptocurrency Portfolio Tracker",
    description: "Build a cryptocurrency portfolio management tool with real-time price tracking, portfolio analytics, and price alerts. Integrate with crypto APIs and implement advanced charting capabilities.",
    shortDescription: "Track crypto portfolios with real-time data",
    techStack: "Next.js, CoinGecko API, TradingView, PostgreSQL",
    difficulty: "Intermediate",
    duration: "8-10 weeks",
    requirements: "JavaScript/TypeScript skills, understanding of financial concepts",
    learningOutcomes: "Real-time data handling, financial calculations, charting libraries, and API rate limiting",
    status: "Closed",
    maxParticipants: 4,
    currentParticipants: 4,
    createdAt: "2024-01-10"
  }
]

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [difficultyFilter, setDifficultyFilter] = useState<string>("all")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [showApplicationModal, setShowApplicationModal] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const [applicationForm, setApplicationForm] = useState({
    name: "",
    email: "",
    experienceLevel: "",
    motivation: "",
  })

  useEffect(() => {
    fetchProjects()
  }, [])

  useEffect(() => {
    applyFilters()
  }, [projects, searchTerm, difficultyFilter, statusFilter])

  const fetchProjects = async () => {
    try {
      setLoading(true)
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500))
      setProjects(STATIC_PROJECTS)
      setFilteredProjects(STATIC_PROJECTS)
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
          p.techStack.toLowerCase().includes(search)
      )
    }

    if (difficultyFilter !== "all") {
      filtered = filtered.filter((p) => p.difficulty === difficultyFilter)
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((p) => p.status === statusFilter)
    }

    setFilteredProjects(filtered)
  }

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setShowDetailModal(true)
  }

  const handleApplyClick = (project: Project) => {
    setSelectedProject(project)
    setShowDetailModal(false)
    setShowApplicationModal(true)
  }

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!selectedProject) return

    if (!applicationForm.name || !applicationForm.email || !applicationForm.experienceLevel || !applicationForm.motivation) {
      toast.error("Please fill in all fields")
      return
    }

    try {
      setSubmitting(true)
      // Simulate API submission delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Static success response
      console.log("Application submitted:", {
        projectId: selectedProject.id,
        projectTitle: selectedProject.title,
        applicant: applicationForm
      })

      toast.success("Application submitted successfully! We'll contact you soon.")
      setShowApplicationModal(false)
      setApplicationForm({ name: "", email: "", experienceLevel: "", motivation: "" })
    } catch (error) {
      console.error("Error submitting application:", error)
      toast.error("Failed to submit application. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "Advanced":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "In Progress":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "Closed":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-background">

      <div className="pt-24 pb-12">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Live Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Work on real-world projects to gain practical experience. Choose from a variety of projects 
              across different tech stacks and difficulty levels.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search projects by title, description, or tech stack..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Difficulty Filter */}
              <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Difficulties</SelectItem>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>

              {/* Status Filter */}
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="Open">Open</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Filter className="w-4 h-4" />
              <span>Showing {filteredProjects.length} of {projects.length} projects</span>
            </div>
          </div>

          {/* Projects Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader>
                    <div className="h-6 bg-muted rounded w-3/4 mb-2" />
                    <div className="h-4 bg-muted rounded w-full" />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="h-4 bg-muted rounded w-full" />
                      <div className="h-4 bg-muted rounded w-5/6" />
                    </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="hover:shadow-lg transition-all cursor-pointer border-2 hover:border-primary/50"
                  onClick={() => handleProjectClick(project)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <Badge className={getDifficultyColor(project.difficulty)}>
                        {project.difficulty}
                      </Badge>
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl leading-tight">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.techStack.split(",").slice(0, 3).map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech.trim()}
                        </Badge>
                      ))}
                      {project.techStack.split(",").length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.techStack.split(",").length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground pt-2 border-t">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>
                          {project.currentParticipants}/{project.maxParticipants}
                        </span>
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
                <div className="flex items-start gap-2 mb-2">
                  <Badge className={getDifficultyColor(selectedProject.difficulty)}>
                    {selectedProject.difficulty}
                  </Badge>
                  <Badge className={getStatusColor(selectedProject.status)}>
                    {selectedProject.status}
                  </Badge>
                </div>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-base">
                  {selectedProject.shortDescription}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Code2 className="w-4 h-4" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.split(",").map((tech, idx) => (
                      <Badge key={idx} variant="secondary">
                        {tech.trim()}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="font-semibold mb-2">About This Project</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Requirements */}
                <div>
                  <h4 className="font-semibold mb-2">Requirements</h4>
                  <p className="text-sm text-muted-foreground">
                    {selectedProject.requirements}
                  </p>
                </div>

                {/* Learning Outcomes */}
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    What You'll Learn
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {selectedProject.learningOutcomes}
                  </p>
                </div>

                {/* Project Info */}
                <div className="grid grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Duration</p>
                    <p className="font-semibold flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {selectedProject.duration}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Participants</p>
                    <p className="font-semibold flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {selectedProject.currentParticipants}/{selectedProject.maxParticipants}
                    </p>
                  </div>
                </div>

                {/* Apply Button */}
                {selectedProject.status === "Open" && 
                 selectedProject.currentParticipants < selectedProject.maxParticipants ? (
                  <Button
                    onClick={() => handleApplyClick(selectedProject)}
                    className="w-full"
                    size="lg"
                  >
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    Apply for This Project
                  </Button>
                ) : (
                  <Button disabled className="w-full" size="lg">
                    {selectedProject.status === "Closed" 
                      ? "Project Closed" 
                      : "Project Full"}
                  </Button>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Application Modal */}
      <Dialog open={showApplicationModal} onOpenChange={setShowApplicationModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Apply for Project</DialogTitle>
            <DialogDescription>
              Fill in the form below to apply for {selectedProject?.title}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleApplicationSubmit} className="space-y-4 mt-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={applicationForm.name}
                onChange={(e) =>
                  setApplicationForm({ ...applicationForm, name: e.target.value })
                }
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={applicationForm.email}
                onChange={(e) =>
                  setApplicationForm({ ...applicationForm, email: e.target.value })
                }
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <Label htmlFor="experienceLevel">Experience Level *</Label>
              <Select
                value={applicationForm.experienceLevel}
                onValueChange={(value) =>
                  setApplicationForm({ ...applicationForm, experienceLevel: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner - Just starting out</SelectItem>
                  <SelectItem value="intermediate">Intermediate - Some experience</SelectItem>
                  <SelectItem value="advanced">Advanced - Highly experienced</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="motivation">Why do you want to join this project? *</Label>
              <Textarea
                id="motivation"
                value={applicationForm.motivation}
                onChange={(e) =>
                  setApplicationForm({ ...applicationForm, motivation: e.target.value })
                }
                placeholder="Tell us about your motivation, what you hope to learn, and how you can contribute..."
                rows={5}
                required
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowApplicationModal(false)}
                className="flex-1"
                disabled={submitting}
              >
                Cancel
              </Button>
              <Button type="submit" className="flex-1" disabled={submitting}>
                {submitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
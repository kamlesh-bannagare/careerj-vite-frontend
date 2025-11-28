"use client"

import { useState } from "react"
import Navigation from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Video,
  FileText,
  Newspaper,
  Code2,
  TrendingUp,
  Users,
  Briefcase,
  Search,
  Star,
  Clock,
  Download,
  ExternalLink,
  Play
} from "lucide-react"

interface Resource {
  id: number
  title: string
  description: string
  type: "course" | "article" | "video" | "ebook" | "tutorial" | "tool"
  category: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  duration: string
  rating: number
  reviews: number
  price: string
  provider: string
  url: string
  image: string
}

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const resources: Resource[] = [
    {
      id: 1,
      title: "Complete React Developer Course",
      description: "Master React from basics to advanced concepts including hooks, context, and Redux",
      type: "course",
      category: "Frontend Development",
      difficulty: "Intermediate",
      duration: "40 hours",
      rating: 4.8,
      reviews: 12543,
      price: "Free",
      provider: "Udemy",
      url: "#",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "System Design Interview Guide",
      description: "Comprehensive guide to acing system design interviews at top tech companies",
      type: "ebook",
      category: "Interview Prep",
      difficulty: "Advanced",
      duration: "200 pages",
      rating: 4.9,
      reviews: 8234,
      price: "Free",
      provider: "ByteByteGo",
      url: "#",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "JavaScript Algorithms and Data Structures",
      description: "Learn essential algorithms and data structures with JavaScript implementations",
      type: "course",
      category: "Computer Science",
      difficulty: "Intermediate",
      duration: "30 hours",
      rating: 4.7,
      reviews: 15678,
      price: "Free",
      provider: "FreeCodeCamp",
      url: "#",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "How to Answer Behavioral Interview Questions",
      description: "Master the STAR method and learn to tell compelling stories in interviews",
      type: "article",
      category: "Interview Prep",
      difficulty: "Beginner",
      duration: "15 min read",
      rating: 4.6,
      reviews: 3421,
      price: "Free",
      provider: "Indeed",
      url: "#",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Building REST APIs with Node.js",
      description: "Complete tutorial on building scalable REST APIs using Node.js and Express",
      type: "tutorial",
      category: "Backend Development",
      difficulty: "Intermediate",
      duration: "10 hours",
      rating: 4.8,
      reviews: 9876,
      price: "Free",
      provider: "YouTube",
      url: "#",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Resume Writing for Software Engineers",
      description: "Professional guide to crafting resumes that get you interviews at FAANG companies",
      type: "ebook",
      category: "Career Development",
      difficulty: "Beginner",
      duration: "50 pages",
      rating: 4.9,
      reviews: 5432,
      price: "Free",
      provider: "Tech Interview Handbook",
      url: "#",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop"
    },
    {
      id: 7,
      title: "AWS Cloud Practitioner Essentials",
      description: "Get started with AWS cloud computing and prepare for certification",
      type: "course",
      category: "Cloud & DevOps",
      difficulty: "Beginner",
      duration: "20 hours",
      rating: 4.7,
      reviews: 11234,
      price: "Free",
      provider: "AWS Training",
      url: "#",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop"
    },
    {
      id: 8,
      title: "Negotiating Your Tech Salary",
      description: "Learn proven strategies to negotiate higher salaries and better benefits",
      type: "video",
      category: "Career Development",
      difficulty: "Intermediate",
      duration: "2 hours",
      rating: 4.8,
      reviews: 6543,
      price: "Free",
      provider: "Levels.fyi",
      url: "#",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop"
    },
    {
      id: 9,
      title: "TypeScript Deep Dive",
      description: "Master TypeScript with advanced patterns and best practices",
      type: "ebook",
      category: "Frontend Development",
      difficulty: "Advanced",
      duration: "300 pages",
      rating: 4.9,
      reviews: 7890,
      price: "Free",
      provider: "Basarat",
      url: "#",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=300&fit=crop"
    },
    {
      id: 10,
      title: "Docker for Developers",
      description: "Learn containerization and Docker best practices for development",
      type: "tutorial",
      category: "Cloud & DevOps",
      difficulty: "Intermediate",
      duration: "8 hours",
      rating: 4.7,
      reviews: 9012,
      price: "Free",
      provider: "Docker",
      url: "#",
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&h=300&fit=crop"
    },
    {
      id: 11,
      title: "Cracking the Coding Interview",
      description: "Classic interview preparation book with 189 programming questions and solutions",
      type: "ebook",
      category: "Interview Prep",
      difficulty: "Intermediate",
      duration: "700 pages",
      rating: 4.9,
      reviews: 25678,
      price: "$35",
      provider: "Amazon",
      url: "#",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop"
    },
    {
      id: 12,
      title: "Git and GitHub Masterclass",
      description: "Complete guide to version control with Git and collaboration on GitHub",
      type: "course",
      category: "Tools",
      difficulty: "Beginner",
      duration: "12 hours",
      rating: 4.8,
      reviews: 13456,
      price: "Free",
      provider: "Coursera",
      url: "#",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=300&fit=crop"
    }
  ]

  const categories = [
    "All",
    "Frontend Development",
    "Backend Development",
    "Interview Prep",
    "Career Development",
    "Computer Science",
    "Cloud & DevOps",
    "Tools"
  ]

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "course":
        return <Video className="w-5 h-5" />
      case "article":
        return <FileText className="w-5 h-5" />
      case "video":
        return <Play className="w-5 h-5" />
      case "ebook":
        return <BookOpen className="w-5 h-5" />
      case "tutorial":
        return <Code2 className="w-5 h-5" />
      case "tool":
        return <Briefcase className="w-5 h-5" />
      default:
        return <FileText className="w-5 h-5" />
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8 pt-24 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Learning Resources</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Curated resources to help you master technical skills, ace interviews, and advance your career
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6 text-center">
              <BookOpen className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{resources.length}+</div>
              <div className="text-sm text-muted-foreground">Resources</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Video className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm text-muted-foreground">Hours of Content</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">50K+</div>
              <div className="text-sm text-muted-foreground">Active Learners</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Star className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">4.8</div>
              <div className="text-sm text-muted-foreground">Avg Rating</div>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search resources by title, topic, or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
          </CardContent>
        </Card>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category.toLowerCase() ? "default" : "outline"}
              onClick={() => setSelectedCategory(category === "All" ? "all" : category)}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {filteredResources.length} of {resources.length} resources
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredResources.map((resource) => (
            <Card key={resource.id} className="hover:border-primary/50 transition-all overflow-hidden">
              <div className="aspect-video relative overflow-hidden bg-muted">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge className={getDifficultyColor(resource.difficulty)}>
                    {resource.difficulty}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="capitalize">
                    {getTypeIcon(resource.type)}
                    <span className="ml-1">{resource.type}</span>
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {resource.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <span className="font-medium">{resource.rating}</span>
                    <span className="text-muted-foreground">({resource.reviews.toLocaleString()})</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{resource.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{resource.provider}</p>
                    <p className="font-bold text-lg text-primary">
                      {resource.price}
                    </p>
                  </div>
                  <Button size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Popular Learning Paths */}
        <Card>
          <CardHeader>
            <CardTitle>Popular Learning Paths</CardTitle>
            <CardDescription>
              Structured paths to help you reach your career goals
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border border-border hover:border-primary/50 transition-all cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Frontend Developer</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Master React, TypeScript, and modern web development
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <Badge variant="secondary">12 Courses</Badge>
                  <Badge variant="secondary">80+ Hours</Badge>
                </div>
              </div>

              <div className="p-6 rounded-lg border border-border hover:border-primary/50 transition-all cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Interview Mastery</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Prepare for technical and behavioral interviews
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <Badge variant="secondary">8 Resources</Badge>
                  <Badge variant="secondary">40+ Hours</Badge>
                </div>
              </div>

              <div className="p-6 rounded-lg border border-border hover:border-primary/50 transition-all cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Full Stack Engineer</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn frontend, backend, and database technologies
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <Badge variant="secondary">15 Courses</Badge>
                  <Badge variant="secondary">120+ Hours</Badge>
                </div>
              </div>

              <div className="p-6 rounded-lg border border-border hover:border-primary/50 transition-all cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Career Advancement</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Develop leadership and professional skills
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <Badge variant="secondary">10 Resources</Badge>
                  <Badge variant="secondary">30+ Hours</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import Navigation from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  TrendingUp,
  Briefcase,
  Code2,
  Users
} from "lucide-react"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  author: {
    name: string
    avatar: string
  }
  date: string
  readTime: string
  image: string
  featured: boolean
}

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "10 Tips to Ace Your Next Technical Interview",
      excerpt: "Learn proven strategies from engineers at top tech companies to prepare for and excel in your next technical interview.",
      category: "Interview Prep",
      author: {
        name: "Sarah Johnson",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
      },
      date: "Dec 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=500&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "How to Build a Developer Portfolio That Gets Noticed",
      excerpt: "A comprehensive guide to creating a portfolio that showcases your skills and attracts recruiters.",
      category: "Career Development",
      author: {
        name: "Michael Chen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
      },
      date: "Dec 12, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop",
      featured: false
    },
    {
      id: 3,
      title: "Negotiating Your Tech Salary: A Complete Guide",
      excerpt: "Master the art of salary negotiation with strategies used by successful tech professionals.",
      category: "Career Development",
      author: {
        name: "Emily Rodriguez",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
      },
      date: "Dec 10, 2024",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop",
      featured: false
    },
    {
      id: 4,
      title: "The Ultimate React Developer Roadmap for 2025",
      excerpt: "A step-by-step guide to becoming a proficient React developer, from basics to advanced concepts.",
      category: "Tech Skills",
      author: {
        name: "David Kim",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
      },
      date: "Dec 8, 2024",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop",
      featured: false
    },
    {
      id: 5,
      title: "Remote Work Best Practices for Software Engineers",
      excerpt: "Essential tips for staying productive and maintaining work-life balance while working remotely.",
      category: "Work Life",
      author: {
        name: "Jessica Williams",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop"
      },
      date: "Dec 5, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop",
      featured: false
    },
    {
      id: 6,
      title: "Understanding System Design Interviews",
      excerpt: "Break down complex system design problems with frameworks used by engineers at FAANG companies.",
      category: "Interview Prep",
      author: {
        name: "Robert Taylor",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
      },
      date: "Dec 3, 2024",
      readTime: "20 min read",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop",
      featured: false
    }
  ]

  const categories = ["All", "Interview Prep", "Career Development", "Tech Skills", "Work Life"]

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPost = blogPosts.find(post => post.featured)

  return (
    <div className="min-h-screen bg-background">

      <div className="container mx-auto px-4 py-8 pt-24 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Career Insights & Tips</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert advice on job search, career development, and technical skills
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
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

        {/* Featured Post */}
        {featuredPost && selectedCategory === "all" && !searchQuery && (
          <Card className="mb-12 overflow-hidden hover:border-primary/50 transition-all cursor-pointer">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-video md:aspect-auto relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4">Featured</Badge>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-4">
                  {featuredPost.category}
                </Badge>
                <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <p className="font-medium">{featuredPost.author.name}</p>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                  </div>
                </div>
                <Button>
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts
            .filter(post => !post.featured || selectedCategory !== "all" || searchQuery)
            .map((post) => (
              <Card key={post.id} className="overflow-hidden hover:border-primary/50 transition-all cursor-pointer">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{post.author.name}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Read Article
                    <ArrowRight className="w-3 h-3 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No articles found matching your search.</p>
          </div>
        )}

        {/* Popular Topics */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Popular Topics</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Briefcase, title: "Interview Prep", count: "24 articles" },
              { icon: TrendingUp, title: "Career Growth", count: "18 articles" },
              { icon: Code2, title: "Technical Skills", count: "32 articles" },
              { icon: Users, title: "Work Culture", count: "15 articles" }
            ].map((topic, index) => (
              <Card key={index} className="hover:border-primary/50 transition-all cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <topic.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{topic.title}</h3>
                  <p className="text-sm text-muted-foreground">{topic.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

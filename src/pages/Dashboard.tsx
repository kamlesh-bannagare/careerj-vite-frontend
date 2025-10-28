"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Briefcase, 
  BookmarkIcon, 
  MessageSquare, 
  FileText, 
  TrendingUp, 
  Users,
  MapPin,
  DollarSign,
  Clock,
  Star,
  ArrowRight,
  Target,
  Zap,
  CheckCircle
} from "lucide-react"
import Navigation from "@/components/Navigation"

export default function Dashboard() {
  const [savedJobs, setSavedJobs] = useState([
    { id: 1, title: "Senior React Developer", company: "TechCorp", location: "Remote", salary: "$120k - $150k", match: 95, saved: true },
    { id: 2, title: "Full Stack Engineer", company: "StartupXYZ", location: "San Francisco", salary: "$100k - $130k", match: 88, saved: true }
  ])

  const recommendedJobs = [
    { id: 3, title: "Frontend Developer", company: "WebSolutions", location: "New York", salary: "$90k - $120k", match: 92, type: "Full-time", posted: "2 days ago" },
    { id: 4, title: "React Native Developer", company: "MobileFirst", location: "Remote", salary: "$110k - $140k", match: 89, type: "Full-time", posted: "1 week ago" },
    { id: 5, title: "UI/UX Developer", company: "DesignHub", location: "Austin", salary: "$95k - $125k", match: 85, type: "Contract", posted: "3 days ago" },
    { id: 6, title: "JavaScript Engineer", company: "CodeFactory", location: "Seattle", salary: "$100k - $135k", match: 87, type: "Full-time", posted: "5 days ago" }
  ]

  const applications = [
    { id: 1, title: "Senior React Developer", company: "TechCorp", status: "Interview Scheduled", date: "Applied 5 days ago", stage: "Interview" },
    { id: 2, title: "Full Stack Engineer", company: "StartupXYZ", status: "Under Review", date: "Applied 1 week ago", stage: "Review" },
    { id: 3, title: "Frontend Lead", company: "BigTech Inc", status: "Application Sent", date: "Applied 2 weeks ago", stage: "Applied" }
  ]

  const upcomingInterviews = [
    { id: 1, company: "TechCorp", position: "Senior React Developer", date: "Tomorrow, 2:00 PM", type: "Technical Interview" },
    { id: 2, company: "StartupXYZ", position: "Full Stack Engineer", date: "Dec 28, 10:00 AM", type: "HR Round" }
  ]

  const profileCompletion = 75

  return (
    <div className="min-h-screen bg-background">

      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 pt-20 sm:pt-24">
        {/* Welcome Section */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Welcome back, John! 👋</h1>
          <p className="text-sm sm:text-base text-muted-foreground">Here's what's happening with your job search</p>
        </div>

        {/* Profile Completion Alert */}
        {profileCompletion < 100 && (
          <Card className="mb-6 sm:mb-8 border-primary/50 bg-primary/5">
            <CardContent className="pt-4 sm:pt-6 p-3 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="flex-1 w-full">
                  <h3 className="font-bold mb-2 text-sm sm:text-base">Complete your profile to get better matches</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                    Your profile is {profileCompletion}% complete. Add more details to attract top employers.
                  </p>
                  <Progress value={profileCompletion} className="mb-3" />
                  <Link to="/profile">
                    <Button size="sm" className="text-xs sm:text-sm">
                      Complete Profile
                      <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
          <Card>
            <CardContent className="pt-4 sm:pt-6 p-3 sm:p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                </div>
                <Badge variant="secondary" className="text-[10px] sm:text-xs">+5 new</Badge>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-0.5 sm:mb-1">32</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Job Matches</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4 sm:pt-6 p-3 sm:p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-0.5 sm:mb-1">12</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Applications Sent</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4 sm:pt-6 p-3 sm:p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
                </div>
                <Badge variant="secondary" className="bg-red-500/10 text-red-500 text-[10px] sm:text-xs">Due</Badge>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-0.5 sm:mb-1">2</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Interviews</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4 sm:pt-6 p-3 sm:p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                  <BookmarkIcon className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-0.5 sm:mb-1">{savedJobs.length}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Saved Jobs</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Upcoming Interviews */}
            {upcomingInterviews.length > 0 && (
              <Card>
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                    Upcoming Interviews
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">Prepare for your scheduled interviews</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                  {upcomingInterviews.map((interview) => (
                    <div key={interview.id} className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border border-border hover:border-primary/50 transition-all">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div className="flex-1 w-full">
                        <h4 className="font-bold mb-1 text-sm sm:text-base">{interview.position}</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground mb-2">{interview.company}</p>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {interview.date}
                          </span>
                          <Badge variant="outline" className="text-[10px] sm:text-xs">{interview.type}</Badge>
                        </div>
                        <Link to="/mock-interview">
                          <Button size="sm" variant="outline" className="text-xs sm:text-sm w-full sm:w-auto">
                            <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                            Practice Mock Interview
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Recommended Jobs */}
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                  Recommended for You
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">Jobs matching your skills and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                {recommendedJobs.map((job) => (
                  <div key={job.id} className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border border-border hover:border-primary/50 transition-all cursor-pointer">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 font-bold text-base sm:text-lg">
                      {job.company.charAt(0)}
                    </div>
                    <div className="flex-1 w-full">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                        <div className="flex-1">
                          <h4 className="font-bold mb-1 text-sm sm:text-base">{job.title}</h4>
                          <p className="text-xs sm:text-sm text-muted-foreground">{job.company}</p>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-[10px] sm:text-xs font-medium shrink-0">
                          <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-green-500" />
                          {job.match}% Match
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-3 h-3 sm:w-4 sm:h-4" />
                          {job.salary}
                        </span>
                        <Badge variant="secondary" className="text-[10px] sm:text-xs">{job.type}</Badge>
                      </div>
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                        <Link to="/jobs" className="flex-1 sm:flex-none">
                          <Button size="sm" className="text-xs sm:text-sm w-full">View Details</Button>
                        </Link>
                        <Button size="sm" variant="outline" className="text-xs sm:text-sm">
                          <BookmarkIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                <Link to="/jobs">
                  <Button variant="outline" className="w-full text-xs sm:text-sm">
                    View All Jobs
                    <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Recent Applications */}
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                  Recent Applications
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">Track your application status</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                {applications.map((app) => (
                  <div key={app.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 sm:p-4 rounded-lg border border-border">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 font-bold text-sm sm:text-base">
                        {app.company.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold mb-1 text-sm sm:text-base">{app.title}</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">{app.company}</p>
                        <p className="text-[10px] sm:text-xs text-muted-foreground">{app.date}</p>
                      </div>
                    </div>
                    <div className="self-start sm:self-auto">
                      <Badge 
                        variant={
                          app.stage === "Interview" ? "default" : 
                          app.stage === "Review" ? "secondary" : 
                          "outline"
                        }
                        className="text-[10px] sm:text-xs"
                      >
                        {app.status}
                      </Badge>
                    </div>
                  </div>
                ))}
                <Link to="/applications">
                  <Button variant="outline" className="w-full text-xs sm:text-sm">
                    View All Applications
                    <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-base sm:text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3 p-4 sm:p-6 pt-0">
                <Link to="/mock-interview">
                  <Button className="w-full justify-start text-xs sm:text-sm" variant="outline">
                    <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Practice Mock Interview
                  </Button>
                </Link>
                <Link to="/resume-enhancer">
                  <Button className="w-full justify-start text-xs sm:text-sm" variant="outline">
                    <FileText className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Enhance Resume
                  </Button>
                </Link>
                <Link to="/skill-analyzer">
                  <Button className="w-full justify-start text-xs sm:text-sm" variant="outline">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Analyze Skills
                  </Button>
                </Link>
                <Link to="/mentors">
                  <Button className="w-full justify-start text-xs sm:text-sm" variant="outline">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Find a Mentor
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Saved Jobs */}
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <BookmarkIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  Saved Jobs ({savedJobs.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3 p-4 sm:p-6 pt-0">
                {savedJobs.map((job) => (
                  <div key={job.id} className="p-2.5 sm:p-3 rounded-lg border border-border hover:border-primary/50 transition-all cursor-pointer">
                    <h4 className="font-bold text-xs sm:text-sm mb-1">{job.title}</h4>
                    <p className="text-[10px] sm:text-xs text-muted-foreground mb-2">{job.company}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[10px] sm:text-xs text-green-500">
                        <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-green-500" />
                        {job.match}% match
                      </div>
                      <Button size="sm" variant="ghost" className="h-5 sm:h-6 px-2 text-[10px] sm:text-xs">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Career Tips */}
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                  Career Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                <div className="space-y-2">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-xs sm:text-sm">Update your resume with recent projects</p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-xs sm:text-sm">Practice common interview questions</p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-xs sm:text-sm">Connect with professionals in your field</p>
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
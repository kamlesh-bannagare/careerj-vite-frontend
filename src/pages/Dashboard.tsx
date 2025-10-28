import { Link } from "react-router-dom";
import { Briefcase, FileText, MessageSquare, Target, TrendingUp, Bookmark, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function Dashboard() {
  const recommendedJobs = [
    {
      id: "1",
      title: "Senior Frontend Developer",
      company: "TechCorp",
      location: "Remote",
      salary: "$120k - $160k",
      match: 95,
      logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop"
    },
    {
      id: "2",
      title: "Full Stack Engineer",
      company: "StartupHub",
      location: "San Francisco, CA",
      salary: "$100k - $140k",
      match: 88,
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop"
    }
  ];

  const recentApplications = [
    {
      id: "1",
      title: "Product Designer",
      company: "DesignCo",
      status: "Under Review",
      date: "2 days ago",
      statusColor: "bg-yellow-500"
    },
    {
      id: "2",
      title: "Frontend Developer",
      company: "WebStudio",
      status: "Interview Scheduled",
      date: "5 days ago",
      statusColor: "bg-green-500"
    },
    {
      id: "3",
      title: "UI/UX Designer",
      company: "Creative Labs",
      status: "Applied",
      date: "1 week ago",
      statusColor: "bg-blue-500"
    }
  ];

  const quickActions = [
    {
      title: "Practice Interview",
      description: "Prepare with AI-powered mock interviews",
      icon: MessageSquare,
      link: "/mock-interview",
      color: "text-blue-500"
    },
    {
      title: "Enhance Resume",
      description: "Get AI feedback on your resume",
      icon: FileText,
      link: "/resume-enhancer",
      color: "text-purple-500"
    },
    {
      title: "Analyze Skills",
      description: "Identify your skill gaps",
      icon: Target,
      link: "/skill-analyzer",
      color: "text-green-500"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome back, John! 👋</h1>
          <p className="text-xl text-muted-foreground">
            Here's what's happening with your job search
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Profile Views
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">127</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">+12%</span> from last week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Applications
              </CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">+3</span> this week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Saved Jobs
              </CardTitle>
              <Bookmark className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-muted-foreground">
                Ready to apply
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Interviews
              </CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">
                Scheduled this month
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {quickActions.map((action, index) => (
                  <Link key={index} to={action.link}>
                    <Card className="hover-lift cursor-pointer h-full">
                      <CardHeader>
                        <action.icon className={`h-8 w-8 mb-2 ${action.color}`} />
                        <CardTitle className="text-lg">{action.title}</CardTitle>
                        <CardDescription>{action.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recommended Jobs */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Recommended for You</h2>
                <Link to="/jobs">
                  <Button variant="ghost">View All</Button>
                </Link>
              </div>
              <div className="space-y-4">
                {recommendedJobs.map((job) => (
                  <Card key={job.id} className="hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <img 
                          src={job.logo} 
                          alt={job.company}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-bold text-lg">{job.title}</h3>
                              <p className="text-muted-foreground">{job.company}</p>
                            </div>
                            <Badge variant="secondary">{job.match}% Match</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            {job.location} • {job.salary}
                          </p>
                          <div className="flex gap-2">
                            <Button size="sm">Apply Now</Button>
                            <Button size="sm" variant="outline">
                              <Bookmark className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Profile Completion */}
            <Card>
              <CardHeader>
                <CardTitle>Profile Strength</CardTitle>
                <CardDescription>Complete your profile to get better matches</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">75% Complete</span>
                  </div>
                  <Progress value={75} />
                </div>
                <Link to="/profile">
                  <Button variant="outline" className="w-full">
                    Complete Profile
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Recent Applications */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold">Recent Applications</h3>
                <Link to="/applications">
                  <Button variant="ghost" size="sm">View All</Button>
                </Link>
              </div>
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    {recentApplications.map((app) => (
                      <div key={app.id} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${app.statusColor}`} />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{app.title}</p>
                          <p className="text-sm text-muted-foreground">{app.company}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="secondary" className="text-xs">
                              {app.status}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{app.date}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

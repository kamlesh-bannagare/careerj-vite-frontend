"use client"


import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Briefcase, 
  TrendingUp,
  Eye,
  MousePointerClick,
  FileText,
  ThumbsUp,
  Calendar,
  Target,
  Award,
  ArrowUp,
  ArrowDown
} from "lucide-react"
import Navigation from "@/components/Navigation"

export default function Analytics() {
  const profileViews = [
    { month: "Jan", views: 120 },
    { month: "Feb", views: 150 },
    { month: "Mar", views: 180 },
    { month: "Apr", views: 220 },
    { month: "May", views: 280 },
    { month: "Jun", views: 320 }
  ]

  const applicationStats = [
    { month: "Jan", applications: 5, interviews: 2, offers: 0 },
    { month: "Feb", applications: 8, interviews: 3, offers: 1 },
    { month: "Mar", applications: 12, interviews: 5, offers: 2 },
    { month: "Apr", applications: 10, interviews: 4, offers: 1 },
    { month: "May", applications: 15, interviews: 6, offers: 2 },
    { month: "Jun", applications: 18, interviews: 8, offers: 3 }
  ]

  const skillTrends = [
    { skill: "React", demand: 95, growth: 12 },
    { skill: "TypeScript", demand: 88, growth: 18 },
    { skill: "Node.js", demand: 82, growth: 8 },
    { skill: "Python", demand: 90, growth: 15 },
    { skill: "AWS", demand: 85, growth: 22 },
    { skill: "Docker", demand: 78, growth: 10 }
  ]

  const topCompanies = [
    { name: "TechCorp", views: 45, matches: 8 },
    { name: "StartupXYZ", views: 38, matches: 6 },
    { name: "WebSolutions", views: 32, matches: 5 },
    { name: "DataInc", views: 28, matches: 4 },
    { name: "CloudCo", views: 25, matches: 4 }
  ]

  const maxViews = Math.max(...profileViews.map(v => v.views))
  const maxApplications = Math.max(...applicationStats.map(s => s.applications))

  return (
    <div className="min-h-screen bg-background">

      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Career Analytics</h1>
          <p className="text-muted-foreground">Track your job search progress and market insights</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <Eye className="w-8 h-8 text-blue-500" />
                <Badge className="bg-green-500">
                  <ArrowUp className="w-3 h-3 mr-1" />
                  15%
                </Badge>
              </div>
              <div className="text-3xl font-bold mb-1">320</div>
              <p className="text-sm text-muted-foreground">Profile Views</p>
              <p className="text-xs text-muted-foreground mt-1">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <FileText className="w-8 h-8 text-purple-500" />
                <Badge className="bg-green-500">
                  <ArrowUp className="w-3 h-3 mr-1" />
                  20%
                </Badge>
              </div>
              <div className="text-3xl font-bold mb-1">18</div>
              <p className="text-sm text-muted-foreground">Applications Sent</p>
              <p className="text-xs text-muted-foreground mt-1">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <MousePointerClick className="w-8 h-8 text-green-500" />
                <Badge className="bg-green-500">
                  <ArrowUp className="w-3 h-3 mr-1" />
                  33%
                </Badge>
              </div>
              <div className="text-3xl font-bold mb-1">8</div>
              <p className="text-sm text-muted-foreground">Interviews</p>
              <p className="text-xs text-muted-foreground mt-1">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <ThumbsUp className="w-8 h-8 text-orange-500" />
                <Badge className="bg-green-500">
                  <ArrowUp className="w-3 h-3 mr-1" />
                  50%
                </Badge>
              </div>
              <div className="text-3xl font-bold mb-1">3</div>
              <p className="text-sm text-muted-foreground">Job Offers</p>
              <p className="text-xs text-muted-foreground mt-1">This month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="skills">Skills Demand</TabsTrigger>
            <TabsTrigger value="companies">Top Companies</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Views Trend</CardTitle>
                <CardDescription>How many times your profile has been viewed over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {profileViews.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{item.month}</span>
                        <span className="text-muted-foreground">{item.views} views</span>
                      </div>
                      <div className="relative h-8 bg-muted rounded-full overflow-hidden">
                        <div
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all"
                          style={{ width: `${(item.views / maxViews) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Conversion Funnel</CardTitle>
                  <CardDescription>Your application conversion rates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Applications Sent</span>
                      <span className="font-bold">68</span>
                    </div>
                    <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                      <div className="absolute inset-y-0 left-0 bg-blue-500" style={{ width: '100%' }} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Interviews</span>
                      <span className="font-bold">28 (41%)</span>
                    </div>
                    <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                      <div className="absolute inset-y-0 left-0 bg-purple-500" style={{ width: '41%' }} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Offers Received</span>
                      <span className="font-bold">9 (13%)</span>
                    </div>
                    <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                      <div className="absolute inset-y-0 left-0 bg-green-500" style={{ width: '13%' }} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Response Rate</CardTitle>
                  <CardDescription>How quickly you hear back from applications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
                    <div>
                      <div className="text-2xl font-bold mb-1">3.2 days</div>
                      <div className="text-sm text-muted-foreground">Average Response Time</div>
                    </div>
                    <Calendar className="w-12 h-12 text-primary" />
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Within 24 hours</span>
                      <Badge>15%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>1-3 days</span>
                      <Badge>35%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>4-7 days</span>
                      <Badge>30%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Over 7 days</span>
                      <Badge variant="secondary">20%</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="applications">
            <Card>
              <CardHeader>
                <CardTitle>Application Activity</CardTitle>
                <CardDescription>Track your applications, interviews, and offers over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {applicationStats.map((stat, index) => (
                    <div key={index} className="space-y-3">
                      <div className="font-medium">{stat.month} 2024</div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <div className="text-sm text-muted-foreground mb-2">Applications</div>
                          <div className="relative h-24 bg-muted rounded-lg overflow-hidden">
                            <div
                              className="absolute bottom-0 inset-x-0 bg-blue-500 transition-all"
                              style={{ height: `${(stat.applications / maxApplications) * 100}%` }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center font-bold text-lg">
                              {stat.applications}
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-2">Interviews</div>
                          <div className="relative h-24 bg-muted rounded-lg overflow-hidden">
                            <div
                              className="absolute bottom-0 inset-x-0 bg-purple-500 transition-all"
                              style={{ height: `${(stat.interviews / 8) * 100}%` }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center font-bold text-lg">
                              {stat.interviews}
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-2">Offers</div>
                          <div className="relative h-24 bg-muted rounded-lg overflow-hidden">
                            <div
                              className="absolute bottom-0 inset-x-0 bg-green-500 transition-all"
                              style={{ height: `${(stat.offers / 3) * 100}%` }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center font-bold text-lg">
                              {stat.offers}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle>Skills in Demand</CardTitle>
                <CardDescription>Market demand and growth trends for your skills</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {skillTrends.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Target className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-bold">{skill.skill}</div>
                          <div className="text-sm text-muted-foreground">
                            {skill.demand}% demand
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-green-500">
                        <ArrowUp className="w-3 h-3 mr-1" />
                        {skill.growth}% growth
                      </Badge>
                    </div>
                    <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-primary/60"
                        style={{ width: `${skill.demand}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="companies">
            <Card>
              <CardHeader>
                <CardTitle>Companies Interested in You</CardTitle>
                <CardDescription>Companies that have viewed your profile</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {topCompanies.map((company, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-bold">{company.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {company.views} profile views • {company.matches} job matches
                        </div>
                      </div>
                    </div>
                    <Button size="sm">
                      View Jobs
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
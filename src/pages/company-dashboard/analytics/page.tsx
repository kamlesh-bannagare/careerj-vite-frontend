
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/Navigation"
import {
  TrendingUp,
  ArrowLeft,
  Users,
  Eye,
  Briefcase,
  Clock,
  Target,
  Download,
  Calendar,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react"

export default function CompanyAnalytics() {
  const analyticsData = {
    overview: {
      totalViews: 2450,
      viewsChange: 12.5,
      totalApplications: 342,
      applicationsChange: 8.3,
      activeJobs: 8,
      jobsChange: -5.2,
      avgTimeToHire: 28,
      timeChange: -15.3
    },
    jobPerformance: [
      {
        title: "Senior React Developer",
        views: 450,
        applications: 85,
        conversionRate: 18.9,
        status: "high"
      },
      {
        title: "Product Manager",
        views: 380,
        applications: 62,
        conversionRate: 16.3,
        status: "high"
      },
      {
        title: "UX Designer",
        views: 320,
        applications: 48,
        conversionRate: 15.0,
        status: "medium"
      },
      {
        title: "Backend Engineer",
        views: 290,
        applications: 35,
        conversionRate: 12.1,
        status: "medium"
      },
      {
        title: "DevOps Engineer",
        views: 210,
        applications: 18,
        conversionRate: 8.6,
        status: "low"
      }
    ],
    applicationSources: [
      { source: "Direct", count: 145, percentage: 42.4 },
      { source: "LinkedIn", count: 98, percentage: 28.7 },
      { source: "Indeed", count: 65, percentage: 19.0 },
      { source: "Referral", count: 34, percentage: 9.9 }
    ],
    hiringFunnel: [
      { stage: "Applications", count: 342, percentage: 100 },
      { stage: "Screening", count: 186, percentage: 54.4 },
      { stage: "Interview", count: 92, percentage: 26.9 },
      { stage: "Offer", count: 34, percentage: 9.9 },
      { stage: "Hired", count: 28, percentage: 8.2 }
    ],
    topSkills: [
      { skill: "React", mentions: 125 },
      { skill: "JavaScript", mentions: 118 },
      { skill: "TypeScript", mentions: 95 },
      { skill: "Node.js", mentions: 87 },
      { skill: "AWS", mentions: 72 }
    ],
    weeklyTrend: [
      { week: "Week 1", applications: 45, views: 320 },
      { week: "Week 2", applications: 52, views: 380 },
      { week: "Week 3", applications: 68, views: 450 },
      { week: "Week 4", applications: 75, views: 520 }
    ]
  }

  const getStatusColor = (status: string) => {
    switch(status) {
      case "high": return "text-green-500 bg-green-500/10"
      case "medium": return "text-yellow-500 bg-yellow-500/10"
      case "low": return "text-red-500 bg-red-500/10"
      default: return "text-muted-foreground bg-muted"
    }
  }

  return (
    <div className="min-h-screen bg-background">

      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 pt-20 sm:pt-24">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <Link to="/company-dashboard" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-2">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Dashboard
            </Link>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />
              Analytics & Insights
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Track your hiring performance and trends
            </p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <Button variant="outline" size="default" className="flex-1 sm:flex-initial">
              <Calendar className="w-4 h-4 mr-2" />
              Last 30 Days
            </Button>
            <Button size="default" className="flex-1 sm:flex-initial">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
          <Card>
            <CardContent className="pt-4 sm:pt-6">
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                </div>
                <div className={`flex items-center gap-1 text-xs ${analyticsData.overview.viewsChange > 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {analyticsData.overview.viewsChange > 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {Math.abs(analyticsData.overview.viewsChange)}%
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-1">{analyticsData.overview.totalViews.toLocaleString()}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Total Views</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4 sm:pt-6">
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                </div>
                <div className={`flex items-center gap-1 text-xs ${analyticsData.overview.applicationsChange > 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {analyticsData.overview.applicationsChange > 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {Math.abs(analyticsData.overview.applicationsChange)}%
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-1">{analyticsData.overview.totalApplications}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Applications</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4 sm:pt-6">
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
                </div>
                <div className={`flex items-center gap-1 text-xs ${analyticsData.overview.jobsChange > 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {analyticsData.overview.jobsChange > 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {Math.abs(analyticsData.overview.jobsChange)}%
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-1">{analyticsData.overview.activeJobs}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Active Jobs</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4 sm:pt-6">
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                </div>
                <div className={`flex items-center gap-1 text-xs ${analyticsData.overview.timeChange < 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {analyticsData.overview.timeChange < 0 ? <ArrowDownRight className="w-3 h-3" /> : <ArrowUpRight className="w-3 h-3" />}
                  {Math.abs(analyticsData.overview.timeChange)}%
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-1">{analyticsData.overview.avgTimeToHire}d</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Time to Hire</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Job Performance */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Job Performance</CardTitle>
              <CardDescription className="text-xs sm:text-sm">Conversion rates by position</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.jobPerformance.map((job, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="font-medium truncate pr-2">{job.title}</span>
                      <Badge className={getStatusColor(job.status)}>
                        {job.conversionRate}%
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
                      <div>Views: <span className="font-semibold text-foreground">{job.views}</span></div>
                      <div>Applications: <span className="font-semibold text-foreground">{job.applications}</span></div>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500" 
                        style={{ width: `${job.conversionRate}%` }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Application Sources */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Application Sources</CardTitle>
              <CardDescription className="text-xs sm:text-sm">Where candidates are coming from</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.applicationSources.map((source, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2 text-xs sm:text-sm">
                      <span className="font-medium">{source.source}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">{source.count}</span>
                        <Badge variant="outline">{source.percentage}%</Badge>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500" 
                        style={{ width: `${source.percentage}%` }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hiring Funnel */}
        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Hiring Funnel</CardTitle>
            <CardDescription className="text-xs sm:text-sm">Candidate journey through hiring stages</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 sm:space-y-4">
              {analyticsData.hiringFunnel.map((stage, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2 text-xs sm:text-sm">
                    <span className="font-medium">{stage.stage}</span>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-lg sm:text-xl font-bold">{stage.count}</span>
                      <Badge variant="outline" className="text-xs">{stage.percentage}%</Badge>
                    </div>
                  </div>
                  <div className="w-full h-3 sm:h-4 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-500 to-blue-500 transition-all" 
                      style={{ width: `${stage.percentage}%` }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Top Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Top Skills in Applications</CardTitle>
              <CardDescription className="text-xs sm:text-sm">Most mentioned skills by candidates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 sm:space-y-4">
                {analyticsData.topSkills.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 sm:gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">
                      #{idx + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1 text-xs sm:text-sm">
                        <span className="font-medium">{item.skill}</span>
                        <span className="text-muted-foreground">{item.mentions} mentions</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary" 
                          style={{ width: `${(item.mentions / analyticsData.topSkills[0].mentions) * 100}%` }} 
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Weekly Trend */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Weekly Trend</CardTitle>
              <CardDescription className="text-xs sm:text-sm">Applications and views over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.weeklyTrend.map((week, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="font-medium text-xs sm:text-sm">{week.week}</div>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <div className="text-[10px] sm:text-xs text-muted-foreground mb-1">Applications</div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-green-500" 
                              style={{ width: `${(week.applications / 100) * 100}%` }} 
                            />
                          </div>
                          <span className="text-xs sm:text-sm font-semibold">{week.applications}</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] sm:text-xs text-muted-foreground mb-1">Views</div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-blue-500" 
                              style={{ width: `${(week.views / 600) * 100}%` }} 
                            />
                          </div>
                          <span className="text-xs sm:text-sm font-semibold">{week.views}</span>
                        </div>
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
  )
}

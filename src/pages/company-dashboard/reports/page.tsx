"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Navigation from "@/components/Navigation"
import {
  FileText,
  ArrowLeft,
  Download,
  Calendar,
  Users,
  Briefcase,
  TrendingUp,
  Clock,
  Target,
  CheckCircle,
  FileSpreadsheet,
  FileBarChart,
  FileJson
} from "lucide-react"

export default function CompanyReports() {
  const [reportType, setReportType] = useState("hiring-summary")
  const [timeRange, setTimeRange] = useState("last-30-days")
  const [format, setFormat] = useState("pdf")
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>([
    "applications",
    "views",
    "conversion-rate",
    "time-to-hire"
  ])

  const reportTypes = [
    {
      id: "hiring-summary",
      name: "Hiring Summary Report",
      description: "Overview of all hiring activities",
      icon: TrendingUp
    },
    {
      id: "candidate-pipeline",
      name: "Candidate Pipeline Report",
      description: "Detailed candidate funnel analysis",
      icon: Users
    },
    {
      id: "job-performance",
      name: "Job Performance Report",
      description: "Performance metrics for each job posting",
      icon: Briefcase
    },
    {
      id: "time-analytics",
      name: "Time Analytics Report",
      description: "Time-based hiring metrics and trends",
      icon: Clock
    },
    {
      id: "source-analysis",
      name: "Source Analysis Report",
      description: "Where your best candidates come from",
      icon: Target
    }
  ]

  const metrics = [
    { id: "applications", label: "Total Applications" },
    { id: "views", label: "Job Views" },
    { id: "conversion-rate", label: "Conversion Rate" },
    { id: "time-to-hire", label: "Time to Hire" },
    { id: "offer-acceptance", label: "Offer Acceptance Rate" },
    { id: "cost-per-hire", label: "Cost per Hire" },
    { id: "quality-of-hire", label: "Quality of Hire" },
    { id: "source-effectiveness", label: "Source Effectiveness" }
  ]

  const recentReports = [
    {
      id: 1,
      name: "Q1 2024 Hiring Summary",
      type: "Hiring Summary",
      generated: "2024-01-28",
      size: "2.4 MB",
      format: "PDF"
    },
    {
      id: 2,
      name: "January Candidate Pipeline",
      type: "Candidate Pipeline",
      generated: "2024-01-25",
      size: "1.8 MB",
      format: "Excel"
    },
    {
      id: 3,
      name: "Job Performance - January",
      type: "Job Performance",
      generated: "2024-01-20",
      size: "3.1 MB",
      format: "PDF"
    },
    {
      id: 4,
      name: "Source Analysis - December",
      type: "Source Analysis",
      generated: "2024-01-15",
      size: "1.5 MB",
      format: "CSV"
    }
  ]

  const handleMetricToggle = (metricId: string) => {
    setSelectedMetrics(prev => 
      prev.includes(metricId)
        ? prev.filter(id => id !== metricId)
        : [...prev, metricId]
    )
  }

  const handleGenerateReport = () => {
    console.log("Generating report:", {
      reportType,
      timeRange,
      format,
      selectedMetrics
    })
    // Simulate report generation
    alert("Report generation started! You'll receive an email when it's ready.")
  }

  const getFormatIcon = (format: string) => {
    switch(format.toLowerCase()) {
      case "pdf":
        return <FileText className="w-4 h-4" />
      case "excel":
        return <FileSpreadsheet className="w-4 h-4" />
      case "csv":
        return <FileBarChart className="w-4 h-4" />
      default:
        return <FileJson className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-background">

      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 pt-20 sm:pt-24">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <Link to="/company-dashboard" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-2">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Dashboard
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-2">
            <FileText className="w-6 h-6 sm:w-8 sm:h-8" />
            Generate Reports
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Create custom reports for your hiring data
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Report Generator */}
          <div className="lg:col-span-2 space-y-6">
            {/* Report Type Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Select Report Type</CardTitle>
                <CardDescription className="text-xs sm:text-sm">Choose the type of report you want to generate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {reportTypes.map((type) => {
                    const Icon = type.icon
                    return (
                      <div
                        key={type.id}
                        onClick={() => setReportType(type.id)}
                        className={`p-3 sm:p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          reportType === type.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            reportType === type.id ? "bg-primary text-primary-foreground" : "bg-muted"
                          }`}>
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-sm sm:text-base mb-1">{type.name}</h4>
                            <p className="text-xs sm:text-sm text-muted-foreground">{type.description}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Configuration */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Report Configuration</CardTitle>
                <CardDescription className="text-xs sm:text-sm">Customize your report parameters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                {/* Time Range */}
                <div className="space-y-2">
                  <Label htmlFor="time-range" className="text-sm sm:text-base">Time Range</Label>
                  <Select value={timeRange} onValueChange={setTimeRange}>
                    <SelectTrigger id="time-range">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="last-7-days">Last 7 Days</SelectItem>
                      <SelectItem value="last-30-days">Last 30 Days</SelectItem>
                      <SelectItem value="last-90-days">Last 90 Days</SelectItem>
                      <SelectItem value="last-6-months">Last 6 Months</SelectItem>
                      <SelectItem value="last-year">Last Year</SelectItem>
                      <SelectItem value="custom">Custom Range</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Format */}
                <div className="space-y-2">
                  <Label htmlFor="format" className="text-sm sm:text-base">Export Format</Label>
                  <Select value={format} onValueChange={setFormat}>
                    <SelectTrigger id="format">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pdf">PDF Document</SelectItem>
                      <SelectItem value="excel">Excel Spreadsheet</SelectItem>
                      <SelectItem value="csv">CSV File</SelectItem>
                      <SelectItem value="json">JSON Data</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Metrics Selection */}
                <div className="space-y-3">
                  <Label className="text-sm sm:text-base">Include Metrics</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {metrics.map((metric) => (
                      <div key={metric.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={metric.id}
                          checked={selectedMetrics.includes(metric.id)}
                          onCheckedChange={() => handleMetricToggle(metric.id)}
                        />
                        <label
                          htmlFor={metric.id}
                          className="text-xs sm:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          {metric.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Generate Button */}
                <Button 
                  onClick={handleGenerateReport}
                  className="w-full"
                  size="lg"
                  disabled={selectedMetrics.length === 0}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Generate Report
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Report Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-muted-foreground">Selected Type:</span>
                  <Badge variant="outline" className="text-xs">
                    {reportTypes.find(t => t.id === reportType)?.name.split(' ')[0]}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-muted-foreground">Time Range:</span>
                  <Badge variant="outline" className="text-xs">{timeRange.replace(/-/g, ' ')}</Badge>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-muted-foreground">Format:</span>
                  <Badge variant="outline" className="text-xs uppercase">{format}</Badge>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-muted-foreground">Metrics:</span>
                  <Badge variant="outline" className="text-xs">{selectedMetrics.length} selected</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Recent Reports */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Recent Reports</CardTitle>
                <CardDescription className="text-xs sm:text-sm">Previously generated reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentReports.map((report) => (
                    <div
                      key={report.id}
                      className="p-3 rounded-lg border border-border hover:border-primary/50 transition-all cursor-pointer"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          {getFormatIcon(report.format)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-xs sm:text-sm mb-1 truncate">{report.name}</h4>
                          <div className="flex items-center gap-2 text-[10px] sm:text-xs text-muted-foreground mb-2">
                            <span>{report.type}</span>
                            <span>•</span>
                            <span>{report.size}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3 h-3" />
                            <span className="text-[10px] sm:text-xs text-muted-foreground">
                              {new Date(report.generated).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <Button size="sm" variant="ghost" className="flex-shrink-0">
                          <Download className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Help Card */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Report Tips</h4>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li>• Reports are generated in real-time</li>
                      <li>• You'll receive an email notification</li>
                      <li>• Reports are stored for 90 days</li>
                      <li>• Export multiple formats anytime</li>
                    </ul>
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

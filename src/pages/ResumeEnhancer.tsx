"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { 
  Briefcase, 
  Upload,
  FileText,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Sparkles,
  Download,
  Eye,
  Zap,
  Target,
  Award,
  ArrowRight
} from "lucide-react"
import Navigation from "@/components/Navigation"

interface Suggestion {
  type: "error" | "warning" | "success"
  category: string
  title: string
  description: string
  example?: string
}

export default function ResumeEnhancer() {
  const [resumeText, setResumeText] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [hasAnalyzed, setHasAnalyzed] = useState(false)
  const [resumeFile, setResumeFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0])
      // Simulate file reading
      setTimeout(() => {
        setResumeText(`John Doe
john.doe@email.com | (555) 123-4567 | San Francisco, CA
LinkedIn: linkedin.com/in/johndoe | GitHub: github.com/johndoe

EXPERIENCE

Senior Frontend Developer | TechCorp Inc. | 2020 - Present
- Built responsive web applications using React and TypeScript
- Worked with the team to deliver features
- Improved website performance
- Handled user feedback and bug fixes

Frontend Developer | StartupXYZ | 2018 - 2020
- Developed web pages and components
- Used JavaScript and React
- Collaborated with designers
- Fixed bugs

EDUCATION

Bachelor of Science in Computer Science
University of California | 2014 - 2018

SKILLS

React, JavaScript, TypeScript, HTML, CSS, Git, Node.js`)
      }, 500)
    }
  }

  const handleAnalyze = () => {
    setIsAnalyzing(true)
    setTimeout(() => {
      setIsAnalyzing(false)
      setHasAnalyzed(true)
    }, 2000)
  }

  const suggestions: Suggestion[] = [
    {
      type: "error",
      category: "Impact",
      title: "Add quantifiable achievements",
      description: "Your bullet points lack metrics. Quantify your impact with numbers, percentages, or specific results.",
      example: "Instead of 'Improved website performance', write 'Improved website load time by 40%, reducing bounce rate from 60% to 35%'"
    },
    {
      type: "warning",
      category: "Action Verbs",
      title: "Use stronger action verbs",
      description: "Replace weak verbs like 'worked', 'handled', and 'used' with powerful action verbs.",
      example: "Replace 'Worked with the team' with 'Collaborated with cross-functional team of 8 engineers'"
    },
    {
      type: "warning",
      category: "Keywords",
      title: "Add industry-specific keywords",
      description: "Include more technical keywords and frameworks that are common in job descriptions.",
      example: "Add: Redux, REST APIs, GraphQL, Webpack, CI/CD, Agile, Jest, Testing Library"
    },
    {
      type: "error",
      category: "Format",
      title: "Inconsistent bullet point structure",
      description: "Your bullet points don't follow a consistent format. Use the X-Y-Z formula: Accomplished [X] as measured by [Y] by doing [Z].",
      example: "'Increased user engagement by 35% (from 2.5M to 3.4M monthly active users) by implementing personalized recommendation algorithm'"
    },
    {
      type: "warning",
      category: "Content",
      title: "Be more specific about technologies",
      description: "Instead of just listing technologies, mention specific libraries, tools, and versions you worked with.",
      example: "Replace 'Used JavaScript and React' with 'Developed modern SPAs using React 18, TypeScript 4.9, and Redux Toolkit'"
    },
    {
      type: "success",
      category: "Length",
      title: "Good resume length",
      description: "Your resume is appropriately sized. For your experience level, 1-2 pages is ideal."
    },
    {
      type: "warning",
      category: "ATS",
      title: "Improve ATS compatibility",
      description: "Add a skills section with keywords that ATS systems scan for. Your technical skills should be prominent.",
      example: "Add a dedicated 'Technical Skills' section: Languages: JavaScript, TypeScript, Python | Frameworks: React, Next.js, Node.js | Tools: Git, Docker, AWS"
    },
    {
      type: "error",
      category: "Impact",
      title: "Show business impact",
      description: "Connect your technical work to business outcomes. Show how your code helped the company.",
      example: "'Architected and deployed microservices infrastructure that reduced operational costs by $250K annually and improved system uptime from 99.2% to 99.9%'"
    }
  ]

  const scores = {
    overall: 68,
    impact: 45,
    clarity: 75,
    keywords: 60,
    formatting: 85,
    atsCompatibility: 55
  }

  const enhancedVersion = `John Doe
john.doe@email.com | (555) 123-4567 | San Francisco, CA
LinkedIn: linkedin.com/in/johndoe | GitHub: github.com/johndoe | Portfolio: johndoe.dev

PROFESSIONAL SUMMARY
Senior Frontend Developer with 5+ years of experience building scalable web applications using React and TypeScript. Proven track record of improving application performance by 40%+ and leading cross-functional teams to deliver high-impact features. Specialized in modern JavaScript frameworks, performance optimization, and user experience enhancement.

TECHNICAL SKILLS
Languages: JavaScript, TypeScript, Python, HTML5, CSS3
Frameworks/Libraries: React, Next.js, Redux, Node.js, Express.js, Tailwind CSS
Tools & Technologies: Git, Docker, AWS, Webpack, Vite, Jest, Testing Library, CI/CD
Methodologies: Agile, Scrum, Test-Driven Development, Code Review Best Practices

PROFESSIONAL EXPERIENCE

Senior Frontend Developer | TechCorp Inc. | San Francisco, CA | Jan 2020 - Present
• Architected and developed 15+ responsive web applications using React 18 and TypeScript, serving 2M+ monthly active users
• Optimized website performance by implementing code-splitting and lazy loading, reducing initial load time by 42% (from 4.2s to 2.4s) and improving Core Web Vitals scores by 35%
• Led cross-functional team of 6 engineers in delivering major product features, resulting in 28% increase in user engagement
• Implemented comprehensive testing strategy using Jest and React Testing Library, achieving 87% code coverage and reducing production bugs by 45%
• Mentored 3 junior developers through code reviews and pair programming sessions, improving team velocity by 25%
• Collaborated with UX designers to implement pixel-perfect, accessible interfaces following WCAG 2.1 AA standards

Frontend Developer | StartupXYZ | San Francisco, CA | Jun 2018 - Dec 2019
• Developed and maintained 20+ reusable React components used across 5 different product lines, reducing development time by 30%
• Engineered responsive web interfaces using React, Redux, and modern CSS-in-JS solutions (Styled Components)
• Integrated RESTful APIs and implemented state management solutions, improving data flow efficiency by 40%
• Collaborated with product managers and designers in Agile environment to deliver features on schedule 95% of the time
• Implemented A/B testing framework that informed data-driven decisions, leading to 22% increase in conversion rates
• Participated in code reviews and established coding standards that improved codebase maintainability

EDUCATION

Bachelor of Science in Computer Science | University of California | 2014 - 2018
• GPA: 3.7/4.0 | Dean's List (6 semesters)
• Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems

PROJECTS & ACHIEVEMENTS

Personal Portfolio Website | johndoe.dev
• Built modern portfolio using Next.js 13, TypeScript, and Tailwind CSS with 98+ Lighthouse score
• Implemented server-side rendering and static generation for optimal performance and SEO

Open Source Contributions
• Contributed to React ecosystem with 200+ GitHub stars across personal projects
• Active contributor to popular UI libraries with 15+ merged PRs

CERTIFICATIONS
• AWS Certified Developer - Associate | 2022
• Meta Front-End Developer Professional Certificate | 2021`

  return (
    <div className="min-h-screen bg-background">

      <div className="container mx-auto px-4 py-8 pt-24 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">AI Resume Enhancer</h1>
          <p className="text-xl text-muted-foreground">
            Get AI-powered feedback and suggestions to make your resume stand out
          </p>
        </div>

        {!hasAnalyzed ? (
          <div className="max-w-3xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Upload Your Resume</CardTitle>
                <CardDescription>
                  Upload your resume or paste the text below for AI analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* File Upload */}
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                  <input
                    id="resume-file"
                    type="file"
                    accept=".pdf,.doc,.docx,.txt"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="resume-file" className="cursor-pointer">
                    {resumeFile ? (
                      <div className="flex items-center justify-center gap-2 text-primary">
                        <FileText className="w-12 h-12" />
                        <div>
                          <p className="font-medium text-lg">{resumeFile.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <Upload className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                        <p className="font-medium text-lg mb-2">Click to upload your resume</p>
                        <p className="text-sm text-muted-foreground">
                          PDF, DOC, DOCX, or TXT (max 5MB)
                        </p>
                      </div>
                    )}
                  </label>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">Or paste text</span>
                  </div>
                </div>

                {/* Text Input */}
                <Textarea
                  placeholder="Paste your resume content here..."
                  rows={12}
                  value={resumeText}
                  onChange={(e) => setResumeText(e.target.value)}
                  className="font-mono text-sm"
                />

                <Button 
                  size="lg" 
                  className="w-full"
                  onClick={handleAnalyze}
                  disabled={!resumeText || isAnalyzing}
                >
                  {isAnalyzing ? (
                    <>
                      <Sparkles className="w-5 h-5 mr-2 animate-spin" />
                      Analyzing with AI...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 mr-2" />
                      Analyze Resume
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  What You'll Get
                </CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4">
                  <Target className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <h3 className="font-bold mb-2">ATS Optimization</h3>
                  <p className="text-sm text-muted-foreground">
                    Ensure your resume passes Applicant Tracking Systems
                  </p>
                </div>
                <div className="text-center p-4">
                  <TrendingUp className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <h3 className="font-bold mb-2">Impact Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn to quantify achievements with metrics
                  </p>
                </div>
                <div className="text-center p-4">
                  <Award className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <h3 className="font-bold mb-2">Professional Polish</h3>
                  <p className="text-sm text-muted-foreground">
                    Get suggestions for better formatting and wording
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Overall Score */}
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-5 gap-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2">{scores.overall}</div>
                    <p className="text-sm text-muted-foreground">Overall Score</p>
                    <Badge variant="secondary" className="mt-2">Needs Improvement</Badge>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2 text-red-500">{scores.impact}</div>
                    <p className="text-sm text-muted-foreground">Impact</p>
                    <Progress value={scores.impact} className="mt-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2 text-orange-500">{scores.clarity}</div>
                    <p className="text-sm text-muted-foreground">Clarity</p>
                    <Progress value={scores.clarity} className="mt-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2 text-yellow-500">{scores.keywords}</div>
                    <p className="text-sm text-muted-foreground">Keywords</p>
                    <Progress value={scores.keywords} className="mt-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2 text-green-500">{scores.formatting}</div>
                    <p className="text-sm text-muted-foreground">Formatting</p>
                    <Progress value={scores.formatting} className="mt-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="suggestions" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="suggestions">
                  Suggestions ({suggestions.length})
                </TabsTrigger>
                <TabsTrigger value="comparison">
                  Before & After
                </TabsTrigger>
                <TabsTrigger value="enhanced">
                  Enhanced Version
                </TabsTrigger>
              </TabsList>

              <TabsContent value="suggestions" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      AI-Powered Suggestions
                    </CardTitle>
                    <CardDescription>
                      Here are personalized recommendations to improve your resume
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {suggestions.map((suggestion, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-lg border-l-4 ${
                          suggestion.type === 'error' 
                            ? 'border-red-500 bg-red-500/5' 
                            : suggestion.type === 'warning'
                            ? 'border-orange-500 bg-orange-500/5'
                            : 'border-green-500 bg-green-500/5'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          {suggestion.type === 'error' ? (
                            <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                          ) : suggestion.type === 'warning' ? (
                            <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                          ) : (
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          )}
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline" className="text-xs">
                                {suggestion.category}
                              </Badge>
                              <h4 className="font-bold">{suggestion.title}</h4>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                              {suggestion.description}
                            </p>
                            {suggestion.example && (
                              <div className="bg-background/50 rounded p-3 text-sm">
                                <p className="font-medium mb-1">Example:</p>
                                <p className="text-muted-foreground italic">{suggestion.example}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="comparison">
                <Card>
                  <CardHeader>
                    <CardTitle>Before & After Comparison</CardTitle>
                    <CardDescription>
                      See how your resume can be improved
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Badge variant="secondary">Before</Badge>
                          <span className="text-sm text-muted-foreground">Original Version</span>
                        </div>
                        <div className="bg-muted rounded-lg p-4 h-[600px] overflow-y-auto">
                          <pre className="text-xs whitespace-pre-wrap font-mono">{resumeText}</pre>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Badge>After</Badge>
                          <span className="text-sm text-muted-foreground">Enhanced Version</span>
                        </div>
                        <div className="bg-primary/5 rounded-lg p-4 h-[600px] overflow-y-auto border-2 border-primary/20">
                          <pre className="text-xs whitespace-pre-wrap font-mono">{enhancedVersion}</pre>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="enhanced">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Sparkles className="w-5 h-5" />
                          AI-Enhanced Resume
                        </CardTitle>
                        <CardDescription>
                          Your resume with all suggestions applied
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline">
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </Button>
                        <Button>
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-white text-black rounded-lg p-8 shadow-lg">
                      <pre className="text-sm whitespace-pre-wrap font-mono">{enhancedVersion}</pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="flex gap-4">
              <Button 
                size="lg"
                onClick={() => {
                  setHasAnalyzed(false)
                  setResumeText("")
                  setResumeFile(null)
                }}
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Analyze Another Resume
              </Button>
              <Link to="/dashboard">
                <Button size="lg" variant="outline">
                  Back to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
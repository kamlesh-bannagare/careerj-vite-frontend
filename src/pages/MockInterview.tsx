"use client"

import { useState, useEffect } from "react"
// import Link from "next/link"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Briefcase, 
  Play,
  Pause,
  RotateCcw,
  CheckCircle,
  Clock,
  MessageSquare,
  TrendingUp,
  AlertCircle,
  Lightbulb,
  ArrowRight,
  Mic,
  Video
} from "lucide-react"
import Navigation from "@/components/Navigation"

interface Question {
  id: number
  type: string
  question: string
  tips: string[]
  timeLimit: number
}

export default function MockInterview() {
  const [interviewStarted, setInterviewStarted] = useState(false)
  const [interviewCompleted, setInterviewCompleted] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [timeLeft, setTimeLeft] = useState(0)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [answers, setAnswers] = useState<{[key: number]: string}>({})
  const [selectedRole, setSelectedRole] = useState("frontend")
  const [interviewType, setInterviewType] = useState("technical")

  const questions: Question[] = [
    {
      id: 1,
      type: "Technical",
      question: "Can you explain the difference between React's useState and useReducer hooks? When would you choose one over the other?",
      tips: [
        "Start with basic definitions",
        "Provide concrete use cases",
        "Mention performance considerations",
        "Give a real-world example"
      ],
      timeLimit: 180
    },
    {
      id: 2,
      type: "Technical",
      question: "How would you optimize the performance of a React application that's rendering a large list of items?",
      tips: [
        "Mention virtualization techniques",
        "Discuss memoization strategies",
        "Talk about code splitting",
        "Consider data fetching optimization"
      ],
      timeLimit: 180
    },
    {
      id: 3,
      type: "Behavioral",
      question: "Tell me about a time when you had to work with a difficult team member. How did you handle the situation?",
      tips: [
        "Use the STAR method (Situation, Task, Action, Result)",
        "Focus on your actions and learnings",
        "Be honest and professional",
        "Highlight positive outcomes"
      ],
      timeLimit: 180
    },
    {
      id: 4,
      type: "Technical",
      question: "Explain how you would implement authentication in a React application. What security considerations would you keep in mind?",
      tips: [
        "Discuss token-based authentication",
        "Mention security best practices",
        "Talk about token storage",
        "Consider refresh token strategies"
      ],
      timeLimit: 180
    },
    {
      id: 5,
      type: "Behavioral",
      question: "Describe a challenging project you worked on. What obstacles did you face and how did you overcome them?",
      tips: [
        "Choose a relevant project",
        "Highlight problem-solving skills",
        "Show your impact on the project",
        "Discuss what you learned"
      ],
      timeLimit: 180
    }
  ]

  const currentQuestion = questions[currentQuestionIndex]

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
    } else if (timeLeft === 0 && isTimerRunning) {
      setIsTimerRunning(false)
    }
    return () => clearInterval(interval)
  }, [isTimerRunning, timeLeft])

  const startInterview = () => {
    setInterviewStarted(true)
    setTimeLeft(currentQuestion.timeLimit)
    setIsTimerRunning(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setTimeLeft(questions[currentQuestionIndex + 1].timeLimit)
      setIsTimerRunning(true)
    } else {
      setInterviewCompleted(true)
      setIsTimerRunning(false)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setTimeLeft(questions[currentQuestionIndex - 1].timeLimit)
      setIsTimerRunning(false)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const calculateScore = () => {
    const answeredCount = Object.keys(answers).length
    const completionRate = (answeredCount / questions.length) * 100
    
    // Simulate AI scoring
    const scores = {
      overall: 82,
      technical: 85,
      communication: 80,
      problemSolving: 84,
      behavioral: 78
    }
    
    return scores
  }

  const scores = calculateScore()

  if (interviewCompleted) {
    return (
      <div className="min-h-screen bg-background">

        <div className="container mx-auto px-4 py-8 pt-24 max-w-4xl">
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Interview Complete! 🎉</h1>
            <p className="text-muted-foreground">Here's your AI-powered performance analysis</p>
          </div>

          {/* Overall Score */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="text-center mb-6">
                <div className="text-6xl font-bold mb-2">{scores.overall}</div>
                <p className="text-muted-foreground">Overall Score</p>
              </div>
              <Progress value={scores.overall} className="h-3" />
            </CardContent>
          </Card>

          {/* Detailed Scores */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <div className="font-bold">Technical Skills</div>
                    <div className="text-2xl font-bold text-blue-500">{scores.technical}%</div>
                  </div>
                </div>
                <Progress value={scores.technical} className="mb-2" />
                <p className="text-sm text-muted-foreground">Strong technical knowledge demonstrated</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <div className="font-bold">Communication</div>
                    <div className="text-2xl font-bold text-purple-500">{scores.communication}%</div>
                  </div>
                </div>
                <Progress value={scores.communication} className="mb-2" />
                <p className="text-sm text-muted-foreground">Clear and structured responses</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <div className="font-bold">Problem Solving</div>
                    <div className="text-2xl font-bold text-green-500">{scores.problemSolving}%</div>
                  </div>
                </div>
                <Progress value={scores.problemSolving} className="mb-2" />
                <p className="text-sm text-muted-foreground">Excellent analytical approach</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="font-bold">Behavioral</div>
                    <div className="text-2xl font-bold text-orange-500">{scores.behavioral}%</div>
                  </div>
                </div>
                <Progress value={scores.behavioral} className="mb-2" />
                <p className="text-sm text-muted-foreground">Good use of STAR method</p>
              </CardContent>
            </Card>
          </div>

          {/* Strengths & Improvements */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Strengths
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                  <p className="text-sm">Clear and concise explanations of technical concepts</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                  <p className="text-sm">Good use of real-world examples</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                  <p className="text-sm">Structured approach to problem-solving</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                  <p className="text-sm">Professional communication style</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-orange-500" />
                  Areas for Improvement
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                  <p className="text-sm">Add more specific metrics and results to behavioral answers</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                  <p className="text-sm">Consider discussing edge cases in technical responses</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                  <p className="text-sm">Practice time management for complex questions</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                  <p className="text-sm">Include more technical depth in architecture discussions</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recommendations */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                AI Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-bold mb-2">Study Topics</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">System Design</Badge>
                  <Badge variant="secondary">React Performance</Badge>
                  <Badge variant="secondary">STAR Method</Badge>
                  <Badge variant="secondary">Behavioral Examples</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-2">Suggested Resources</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Practice more system design questions on our platform</li>
                  <li>• Review React performance optimization techniques</li>
                  <li>• Prepare 5-6 behavioral stories using STAR format</li>
                  <li>• Schedule another mock interview in 3-5 days</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button 
              size="lg" 
              className="flex-1"
              onClick={() => {
                setInterviewStarted(false)
                setInterviewCompleted(false)
                setCurrentQuestionIndex(0)
                setAnswers({})
              }}
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Practice Again
            </Button>
            <Link to="/dashboard" className="flex-1">
              <Button size="lg" variant="outline" className="w-full">
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (!interviewStarted) {
    return (
      <div className="min-h-screen bg-background">

        <div className="container mx-auto px-4 py-8 pt-24 max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">AI Mock Interview</h1>
            <p className="text-xl text-muted-foreground">
              Practice with AI-powered interview questions and get instant feedback
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Configure Your Interview</CardTitle>
              <CardDescription>Customize the interview based on your target role</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <Label className="font-bold">Select Role</Label>
                <Select value={selectedRole} onValueChange={setSelectedRole}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="frontend">Frontend Developer</SelectItem>
                    <SelectItem value="backend">Backend Developer</SelectItem>
                    <SelectItem value="fullstack">Full Stack Developer</SelectItem>
                    <SelectItem value="mobile">Mobile Developer</SelectItem>
                    <SelectItem value="devops">DevOps Engineer</SelectItem>
                    <SelectItem value="product">Product Manager</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label className="font-bold">Interview Type</Label>
                <Select value={interviewType} onValueChange={setInterviewType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technical">Technical</SelectItem>
                    <SelectItem value="behavioral">Behavioral</SelectItem>
                    <SelectItem value="mixed">Mixed (Technical + Behavioral)</SelectItem>
                    <SelectItem value="system-design">System Design</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 rounded-lg bg-muted">
                  <MessageSquare className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="font-bold mb-1">{questions.length}</div>
                  <div className="text-sm text-muted-foreground">Questions</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="font-bold mb-1">~15 min</div>
                  <div className="text-sm text-muted-foreground">Duration</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted">
                  <TrendingUp className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="font-bold mb-1">AI Powered</div>
                  <div className="text-sm text-muted-foreground">Feedback</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What to Expect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Realistic Interview Questions</h4>
                  <p className="text-sm text-muted-foreground">
                    Questions based on real interviews from top companies
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Timed Practice</h4>
                  <p className="text-sm text-muted-foreground">
                    Each question has a time limit to simulate real interview conditions
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">AI-Powered Feedback</h4>
                  <p className="text-sm text-muted-foreground">
                    Get instant analysis of your responses with personalized recommendations
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Performance Scoring</h4>
                  <p className="text-sm text-muted-foreground">
                    Detailed breakdown of technical, communication, and problem-solving skills
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button size="lg" className="w-full" onClick={startInterview}>
            <Play className="w-5 h-5 mr-2" />
            Start Interview
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/dashboard" className="flex items-center gap-2 font-bold text-xl">
              <Briefcase className="w-6 h-6 text-primary" />
              <span>JobFinder</span>
            </Link>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className={`text-2xl font-mono font-bold ${timeLeft < 30 ? 'text-red-500' : ''}`}>
                  {formatTime(timeLeft)}
                </span>
              </div>
              <Button
                variant="outline"
                onClick={() => setIsTimerRunning(!isTimerRunning)}
              >
                {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}% Complete
            </span>
          </div>
          <Progress value={((currentQuestionIndex + 1) / questions.length) * 100} />
        </div>

        {/* Question Card */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge>{currentQuestion.type}</Badge>
              <Badge variant="outline">
                <Clock className="w-3 h-3 mr-1" />
                {currentQuestion.timeLimit / 60} min
              </Badge>
            </div>
            <CardTitle className="text-2xl">{currentQuestion.question}</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Type your answer here..."
              rows={10}
              value={answers[currentQuestion.id] || ""}
              onChange={(e) => setAnswers({...answers, [currentQuestion.id]: e.target.value})}
              className="mb-4"
            />

            <div className="flex gap-2 mb-6">
              <Button variant="outline" size="sm">
                <Mic className="w-4 h-4 mr-2" />
                Voice Answer
              </Button>
              <Button variant="outline" size="sm">
                <Video className="w-4 h-4 mr-2" />
                Video Answer
              </Button>
            </div>

            <div className="bg-blue-500/10 rounded-lg p-4">
              <div className="flex items-start gap-2 mb-3">
                <Lightbulb className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <h4 className="font-bold">Tips for this question:</h4>
              </div>
              <ul className="space-y-2 text-sm">
                {currentQuestion.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </Button>
          <div className="flex items-center gap-2">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentQuestionIndex
                    ? 'bg-primary w-6'
                    : answers[questions[index].id]
                    ? 'bg-green-500'
                    : 'bg-muted'
                }`}
              />
            ))}
          </div>
          <Button onClick={handleNextQuestion}>
            {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}

function Label({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <label className={`text-sm font-medium ${className}`}>{children}</label>
}
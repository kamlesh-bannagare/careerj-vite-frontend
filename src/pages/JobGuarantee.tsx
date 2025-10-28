import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import Navigation from "@/components/Navigation"
import { 
  UserPlus, 
  Search, 
  Phone, 
  BookOpen, 
  Code, 
  MessageSquare, 
  Briefcase, 
  CheckCircle,
  Upload,
  FileText,
  Info,
  Shield,
  TrendingUp,
  Target
} from "lucide-react"
import { toast } from "sonner"
import { motion } from "framer-motion"

interface ProgramStep {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

interface DummyUser {
  name: string
  stage: string
  progressPercent: number
  nextStep: string
  feedback: string
}

export default function JobGuarantee() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    education: "",
    experience: ""
  })
  const [resumeFile, setResumeFile] = useState<File | null>(null)

  const programSteps: ProgramStep[] = [
    {
      id: 1,
      title: "Register & Upload Details",
      description: "Complete your registration and submit educational and professional information to get started.",
      icon: <UserPlus className="w-8 h-8" />
    },
    {
      id: 2,
      title: "Profile Analysis",
      description: "Our expert team carefully analyzes your background, skills, and career goals.",
      icon: <Search className="w-8 h-8" />
    },
    {
      id: 3,
      title: "Introductory Call",
      description: "One-on-one consultation to understand your strengths, weaknesses, and career aspirations.",
      icon: <Phone className="w-8 h-8" />
    },
    {
      id: 4,
      title: "Preparation Plan",
      description: "Receive a personalized roadmap with guidance on improving your weak areas.",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      id: 5,
      title: "Project Creation",
      description: "Build one impressive project to showcase your skills and stand out to employers.",
      icon: <Code className="w-8 h-8" />
    },
    {
      id: 6,
      title: "Mock Interviews",
      description: "Practice with at least 6 mock interviews covering different technologies and scenarios.",
      icon: <MessageSquare className="w-8 h-8" />
    },
    {
      id: 7,
      title: "Job Referral & Application",
      description: "Get referred to our partner companies and receive support for independent applications.",
      icon: <Briefcase className="w-8 h-8" />
    },
    {
      id: 8,
      title: "Job Outcome",
      description: "Secure your job within 2 months, or receive 80% of your fees refunded—guaranteed.",
      icon: <CheckCircle className="w-8 h-8" />
    }
  ]

  const dummyUser: DummyUser = {
    name: "Rohit Sharma",
    stage: "Mock Interviews",
    progressPercent: 70,
    nextStep: "Company Referral",
    feedback: "Doing well in DSA, needs to improve in React state management."
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.fullName || !formData.email || !formData.phone || !resumeFile) {
      toast.error("Please fill in all required fields")
      return
    }

    toast.success("Registered successfully! Our team will contact you soon.")
    
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      education: "",
      experience: ""
    })
    setResumeFile(null)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="min-h-screen bg-background">

      <div className="container mx-auto px-4 py-8 pt-24">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full mb-4">
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Limited Seats Available
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            2.5-Month Job Guarantee Program
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Pay ₹50,000 upfront — Get 80% refund if you don't get a job within 2 months
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Learn More
            </Button>
          </div>
        </motion.div>

        {/* How the Program Works */}
        <motion.div 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How the Program Works</h2>
            <p className="text-muted-foreground">
              A comprehensive 8-step journey to land your dream job
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programSteps.map((step) => (
              <motion.div key={step.id} variants={itemVariants}>
                <Card className="h-full hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white mb-4">
                        {step.icon}
                      </div>
                      <div className="text-sm font-bold text-muted-foreground mb-2">
                        STEP {step.id}
                      </div>
                      <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Progress Tracker - Dummy User */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Track Your Progress</h2>
            <p className="text-muted-foreground">
              Monitor your journey to career success
            </p>
          </div>

          <Card className="max-w-3xl mx-auto border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-6 h-6 text-primary" />
                My Program Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold">{dummyUser.name}</h3>
                  <p className="text-muted-foreground">Current Stage: {dummyUser.stage}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary">{dummyUser.progressPercent}%</div>
                  <p className="text-sm text-muted-foreground">Complete</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span className="font-medium">{dummyUser.progressPercent}%</span>
                </div>
                <Progress value={dummyUser.progressPercent} className="h-3" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="font-medium">Next Step</span>
                  </div>
                  <p className="text-sm">{dummyUser.nextStep}</p>
                </div>
                <div className="p-4 bg-blue-500/5 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-5 h-5 text-blue-500" />
                    <span className="font-medium">Mentor Feedback</span>
                  </div>
                  <p className="text-sm">{dummyUser.feedback}</p>
                </div>
              </div>

              <div className="pt-4">
                <Button className="w-full">Continue Learning</Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Registration Form */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Apply to the Program</h2>
            <p className="text-muted-foreground">
              Take the first step towards your guaranteed job
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="education">Education / Degree</Label>
                  <Input
                    id="education"
                    placeholder="e.g., B.Tech in Computer Science"
                    value={formData.education}
                    onChange={(e) => setFormData({...formData, education: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Work Experience</Label>
                  <Textarea
                    id="experience"
                    placeholder="Describe your work experience, internships, or projects..."
                    rows={4}
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume">Upload Resume *</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label htmlFor="resume" className="cursor-pointer">
                      {resumeFile ? (
                        <div className="flex items-center justify-center gap-2 text-primary">
                          <FileText className="w-8 h-8" />
                          <div>
                            <p className="font-medium">{resumeFile.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <Upload className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
                          <p className="font-medium mb-1">Click to upload your resume</p>
                          <p className="text-sm text-muted-foreground">
                            PDF, DOC, or DOCX (max 5MB)
                          </p>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Refund Policy Highlight */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-3">Our Commitment</h3>
                  <p className="text-lg text-muted-foreground">
                    If you don't get a job within 2 months, you'll get 80% of your ₹50,000 fees refunded — no hidden terms, no complicated conditions. We're confident in our program, and we stand behind our promise.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Info className="w-12 h-12 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Additional Info Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Why Choose Our Program?</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-blue-500" />
              </div>
              <h4 className="font-bold mb-2">Expert Mentorship</h4>
              <p className="text-sm text-muted-foreground">
                Learn from industry professionals with years of experience
              </p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-purple-500" />
              </div>
              <h4 className="font-bold mb-2">Personalized Approach</h4>
              <p className="text-sm text-muted-foreground">
                Tailored guidance based on your strengths and goals
              </p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-3">
                <Briefcase className="w-6 h-6 text-green-500" />
              </div>
              <h4 className="font-bold mb-2">Job Guarantee</h4>
              <p className="text-sm text-muted-foreground">
                80% refund if you don't land a job within 2 months
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

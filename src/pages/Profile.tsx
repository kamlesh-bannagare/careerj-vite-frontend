"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Briefcase, 
  Edit,
  Save,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Github,
  Globe,
  Award,
  CheckCircle,
  Star,
  Calendar,
  Briefcase as BriefcaseIcon,
  GraduationCap,
  Code,
  Upload,
  Shield,
  MoreHorizontal
} from "lucide-react"
import Navigation from "@/components/Navigation"

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false)
 const [profileData, setProfileData] = useState({
    fullName: "Kamlesh Bannagare",
    title: "Senior Software Developer",
    location: "San Francisco, CA",
    email: "kamlesh.bannagare@email.com",
    phone: "7066884596",
    linkedin: "https://www.linkedin.com/in/kamlesh-bannagare/",
    github: "github.com/kamlesh-bannagare",
    website: "indsc.in",
    bio: "Passionate Software developer with 5+ years of experience building scalable web applications. Specialized in React, TypeScript, and modern web technologies. Love creating beautiful, performant user experiences.",
    skills: ["React", "TypeScript", "JavaScript", "Node.js", "HTML/CSS", "Redux", "Next.js", "Tailwind CSS", "Git", "AWS"]
  })

  const experience = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      period: "Jan 2020 - Present",
      description: "Leading frontend development for core products serving 2M+ users. Built scalable applications using React and TypeScript.",
      current: true
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "San Francisco, CA",
      period: "Jun 2018 - Dec 2019",
      description: "Developed responsive web applications and reusable component libraries. Collaborated with cross-functional teams in an Agile environment.",
      current: false
    }
  ]

  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California",
      period: "2014 - 2018",
      gpa: "3.7/4.0"
    }
  ]

  const certifications = [
    {
      id: 1,
      name: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "2022",
      verified: true
    },
    {
      id: 2,
      name: "Meta Front-End Developer",
      issuer: "Meta",
      date: "2021",
      verified: true
    }
  ]

  const achievements = [
    {
      id: 1,
      title: "Top Performer Q4 2023",
      description: "Recognized for exceptional contributions to the team",
      date: "Dec 2023"
    },
    {
      id: 2,
      title: "Hackathon Winner",
      description: "1st place in company-wide innovation hackathon",
      date: "Sep 2023"
    }
  ]

  const handleSave = () => {
    setIsEditing(false)
    // Save logic here
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 pt-20 sm:pt-24 max-w-5xl">
        {/* Profile Header */}
        <Card className="mb-6 sm:mb-8">
          <CardContent className="pt-4 sm:pt-6">
            <div className="flex flex-col items-center text-center sm:text-left sm:items-start sm:flex-row gap-4 sm:gap-6">
              <div className="relative">
                <Avatar className="w-24 h-24 sm:w-32 sm:h-32">
                  <AvatarImage src="https://media.licdn.com/dms/image/v2/D4D03AQF6hat2z-v-7w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1705744481240?e=2147483647&v=beta&t=S63tj2d7-_TKzo8VGPoc1VRojmHF5ZOQ6ld0lHHMvo0" />
                  <AvatarFallback className="text-xl sm:text-3xl">JD</AvatarFallback>
                </Avatar>
                <button className="absolute bottom-0 right-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors text-xs sm:text-base">
                  <Upload className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>

              <div className="flex-1 w-full">
                {isEditing ? (
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <Label htmlFor="fullName" className="text-sm sm:text-base">Full Name</Label>
                      <Input
                        id="fullName"
                        value={profileData.fullName}
                        onChange={(e) => setProfileData({...profileData, fullName: e.target.value})}
                        className="text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <Label htmlFor="title" className="text-sm sm:text-base">Professional Title</Label>
                      <Input
                        id="title"
                        value={profileData.title}
                        onChange={(e) => setProfileData({...profileData, title: e.target.value})}
                        className="text-sm sm:text-base"
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                          <h1 className="text-2xl sm:text-3xl font-bold">{profileData.fullName}</h1>
                          <Badge className="bg-blue-500 text-xs sm:text-sm w-fit mx-auto sm:mx-0">
                            <Shield className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        </div>
                        <p className="text-lg sm:text-xl text-muted-foreground mb-3">{profileData.title}</p>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                            {profileData.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                            {profileData.email}
                          </span>
                          <span className="flex items-center gap-1">
                            <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                            {profileData.phone}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-3 sm:mb-4">
                      <Button size="sm" variant="outline" asChild className="text-xs">
                        <a href={`https://${profileData.linkedin}`} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          LinkedIn
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild className="text-xs">
                        <a href={`https://${profileData.github}`} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          GitHub
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild className="text-xs">
                        <a href={`https://${profileData.website}`} target="_blank" rel="noopener noreferrer">
                          <Globe className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          Website
                        </a>
                      </Button>
                    </div>
                  </>
                )}

                <div className="flex flex-col sm:flex-row gap-2 justify-center sm:justify-start">
                  {isEditing ? (
                    <>
                      <Button onClick={handleSave} size="sm" className="sm:text-base">
                        <Save className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Save Changes
                      </Button>
                      <Button variant="outline" onClick={() => setIsEditing(false)} size="sm" className="sm:text-base">
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <Button onClick={() => setIsEditing(true)} size="sm" className="sm:text-base">
                      <Edit className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Edit Profile
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      <Tabs defaultValue="about" className="w-full">
  <div className="relative">
    <TabsList className="w-full grid grid-cols-2 sm:grid-cols-5 gap-1 sm:gap-2 mb-4 sm:mb-6 overflow-x-auto">
      <TabsTrigger value="about" className="text-xs sm:text-sm py-2 px-2 sm:px-4 min-w-0 truncate">
        About
      </TabsTrigger>
      <TabsTrigger value="experience" className="text-xs sm:text-sm py-2 px-2 sm:px-4 min-w-0 truncate">
        Experience
      </TabsTrigger>
      <TabsTrigger value="education" className="text-xs sm:text-sm py-2 px-2 sm:px-4 min-w-0 truncate">
        Education
      </TabsTrigger>
      <TabsTrigger value="skills" className="text-xs sm:text-sm py-2 px-2 sm:px-4 min-w-0 truncate">
        Skills
      </TabsTrigger>
      <TabsTrigger value="achievements" className="text-xs sm:text-sm py-2 px-2 sm:px-4 min-w-0 truncate">
        Achievements
      </TabsTrigger>
    </TabsList>
  </div>

  <TabsContent value="about" className="space-y-4 sm:space-y-6">
    <Card>
      <CardHeader className="pb-3 sm:pb-6">
        <CardTitle className="text-lg sm:text-xl">About Me</CardTitle>
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <Textarea
            value={profileData.bio}
            onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
            rows={4}
            className="text-sm sm:text-base"
          />
        ) : (
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{profileData.bio}</p>
        )}
      </CardContent>
    </Card>
  </TabsContent>

  <TabsContent value="experience" className="space-y-4 sm:space-y-6">
    <Card>
      <CardHeader className="pb-3 sm:pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <CardTitle className="text-lg sm:text-xl">Work Experience</CardTitle>
          <Button size="sm" className="w-full sm:w-auto text-xs sm:text-sm">
            <BriefcaseIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Add Experience
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 sm:space-y-6">
        {experience.map((exp) => (
          <div key={exp.id} className="flex gap-3 sm:gap-4">
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <BriefcaseIcon className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-2 gap-1">
                <div className="min-w-0">
                  <h3 className="font-bold text-base sm:text-lg truncate">{exp.title}</h3>
                  <p className="text-muted-foreground text-sm truncate">{exp.company}</p>
                </div>
                {exp.current && (
                  <Badge className="bg-green-500 text-xs w-fit sm:ml-2">Current</Badge>
                )}
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-2">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                  {exp.location}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{exp.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  </TabsContent>

  <TabsContent value="education" className="space-y-4 sm:space-y-6">
    <div className="space-y-4 sm:space-y-6">
      <Card>
        <CardHeader className="pb-3 sm:pb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <CardTitle className="text-lg sm:text-xl">Education</CardTitle>
            <Button size="sm" className="w-full sm:w-auto text-xs sm:text-sm">
              <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Add Education
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6">
          {education.map((edu) => (
            <div key={edu.id} className="flex gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-base sm:text-lg">{edu.degree}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{edu.institution}</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs sm:text-sm text-muted-foreground mt-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    {edu.period}
                  </span>
                  <span>GPA: {edu.gpa}</span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3 sm:pb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <CardTitle className="text-lg sm:text-xl">Certifications</CardTitle>
            <Button size="sm" className="w-full sm:w-auto text-xs sm:text-sm">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Add Certification
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 sm:space-y-4">
          {certifications.map((cert) => (
            <div key={cert.id} className="flex items-center justify-between p-3 sm:p-4 rounded-lg border border-border">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <h4 className="font-bold text-sm sm:text-base truncate">{cert.name}</h4>
                    {cert.verified && (
                      <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500 text-xs w-fit">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">{cert.issuer} • {cert.date}</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  </TabsContent>

  <TabsContent value="skills" className="space-y-4 sm:space-y-6">
    <Card>
      <CardHeader className="pb-3 sm:pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <CardTitle className="text-lg sm:text-xl">Technical Skills</CardTitle>
          <Button size="sm" className="w-full sm:w-auto text-xs sm:text-sm">
            <Code className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Add Skill
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {profileData.skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  </TabsContent>

  <TabsContent value="achievements" className="space-y-4 sm:space-y-6">
    <Card>
      <CardHeader className="pb-3 sm:pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <CardTitle className="text-lg sm:text-xl">Achievements & Awards</CardTitle>
          <Button size="sm" className="w-full sm:w-auto text-xs sm:text-sm">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Add Achievement
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border border-border">
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0">
              <Star className="w-4 h-4 sm:w-6 sm:h-6 text-white fill-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-sm sm:text-base mb-1">{achievement.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-2">{achievement.description}</p>
              <p className="text-xs text-muted-foreground">{achievement.date}</p>
            </div>
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

import { Link } from "react-router-dom"
import Navigation from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Target,
  Users,
  Zap,
  Heart,
  TrendingUp,
  Award,
  Globe,
  CheckCircle
} from "lucide-react"

export default function AboutPage() {
  const stats = [
    { label: "Active Users", value: "100K+", icon: Users },
    { label: "Jobs Posted", value: "50K+", icon: TrendingUp },
    { label: "Success Rate", value: "92%", icon: Award },
    { label: "Countries", value: "50+", icon: Globe }
  ]

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're on a mission to democratize access to quality career opportunities and help everyone reach their potential."
    },
    {
      icon: Heart,
      title: "People First",
      description: "We believe in putting people before profits. Every feature we build is designed to genuinely help job seekers succeed."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We leverage cutting-edge AI and technology to create the best job search and interview preparation experience."
    },
    {
      icon: CheckCircle,
      title: "Transparency",
      description: "We believe in honest communication, transparent processes, and building trust with our community."
    }
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
      bio: "Former Google recruiter with 15+ years in tech hiring"
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      bio: "Ex-Meta engineer passionate about AI and education"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      bio: "Product leader with experience at Stripe and Airbnb"
    },
    {
      name: "David Kim",
      role: "Head of Engineering",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
      bio: "Built scalable systems at Netflix and Amazon"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Empowering Careers with AI
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            JobFinder is revolutionizing the job search experience by combining cutting-edge AI technology 
            with personalized career guidance. We're here to help you find not just a job, but your dream career.
          </p>
          <Link to="/signup">
            <Button size="lg">
              Join Us Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              JobFinder was born out of a simple observation: the job search process is broken. 
              Traditional job boards make it hard to find the right opportunities, and preparing 
              for interviews can be overwhelming without proper guidance.
            </p>
            <p>
              Our founders, Sarah and Michael, experienced these challenges firsthand. Sarah, as a 
              tech recruiter at Google, saw talented candidates struggle to showcase their skills. 
              Michael, as an engineer at Meta, watched colleagues spend months preparing for interviews 
              without structured guidance.
            </p>
            <p>
              In 2022, they decided to build the platform they wished existed. JobFinder combines 
              AI-powered job matching, real-time interview practice, resume optimization, and mentor 
              connections—all in one place. Today, we're helping over 100,000 job seekers land their 
              dream roles.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-4 text-center">Meet Our Team</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We're a diverse team of engineers, designers, and career experts passionate about 
            making job search better for everyone.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join thousands of job seekers who have found their dream roles with JobFinder
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" variant="secondary">
                Get Started Free
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

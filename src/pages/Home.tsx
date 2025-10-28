import { Link } from "react-router-dom";
import { 
  Briefcase, Target, MessageSquare, FileText, Code2, 
  TrendingUp, Users, CheckCircle, Cpu, Search, 
  Users2, FolderGit2, ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const featureCards = [
    {
      title: "Find Jobs",
      description: "AI-powered job search with personalized recommendations",
      icon: Search,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      link: "/jobs"
    },
    {
      title: "Mock Interviews",
      description: "Practice with real-time AI feedback and improve your skills",
      icon: MessageSquare,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
      link: "/mock-interview"
    },
    {
      title: "Live Projects",
      description: "Work on real projects from startups and build your portfolio",
      icon: FolderGit2,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      link: "/projects"
    },
    {
      title: "Find Mentors",
      description: "Connect with industry experts for personalized career guidance",
      icon: Users2,
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
      link: "/mentors"
    }
  ];

  const features = [
    {
      icon: Target,
      title: "AI Job Matching",
      description: "Smart algorithms match you with the perfect opportunities based on your skills and preferences."
    },
    {
      icon: MessageSquare,
      title: "Real-time Interview Practice",
      description: "Get instant feedback on your answers with AI-powered mock interviews."
    },
    {
      icon: FileText,
      title: "Resume Enhancement",
      description: "AI analyzes your resume and suggests improvements to stand out."
    },
    {
      icon: Code2,
      title: "Skill Gap Analysis",
      description: "Identify what skills you need to learn for your dream job."
    },
    {
      icon: TrendingUp,
      title: "Career Analytics",
      description: "Track your progress and get insights on your career trajectory."
    },
    {
      icon: Users,
      title: "Mentor Network",
      description: "Learn from experienced professionals in your field."
    },
    {
      icon: Briefcase,
      title: "Live Projects",
      description: "Work on real projects to build your portfolio and gain experience."
    }
  ];

  const benefits = [
    "AI-powered job recommendations tailored to your skills",
    "Practice interviews with instant, actionable feedback",
    "Access to exclusive job opportunities from top companies",
    "Build your portfolio with real-world projects",
    "Connect with mentors who've been where you want to go",
    "Track your career progress with detailed analytics"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto space-y-8 animate-fade-in">
            {/* Badge */}
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Cpu className="w-4 h-4 mr-2 animate-pulse-glow" />
              AI-Powered Job Search & Preparation Platform
            </Badge>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              From Skills to Career —{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Faster
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Find jobs, practice with real-time AI feedback, work on live projects and connect with mentors
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/signup">
                <Button size="lg" className="text-lg px-8">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/jobs">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Browse Jobs
                </Button>
              </Link>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
              {featureCards.map((card, index) => (
                <Link key={index} to={card.link}>
                  <Card className="hover-lift cursor-pointer h-full overflow-hidden group">
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={card.image} 
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <card.icon className="absolute bottom-3 left-3 h-6 w-6 text-white" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{card.title}</CardTitle>
                      <CardDescription>{card.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Guarantee Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop"
                    alt="Job Guarantee Program"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                </div>
                <CardContent className="p-8 md:p-12 space-y-6">
                  <div className="space-y-2">
                    <Badge className="mb-2">Premium Program</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold">Job Guarantee Program</h2>
                    <p className="text-muted-foreground text-lg">
                      Fast-track your career with our intensive program
                    </p>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">₹50,000</span>
                    <Badge variant="secondary">80% Refund Guarantee</Badge>
                  </div>

                  <ul className="space-y-3">
                    {[
                      "One-on-one mentorship with industry experts",
                      "Work on 3+ real projects for your portfolio",
                      "6+ mock interviews with detailed feedback",
                      "Direct job referrals to partner companies",
                      "Career coaching and resume optimization",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/job-guarantee">
                    <Button size="lg" className="w-full">
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { label: "Program Duration", value: "2.5 Months" },
                { label: "Success Rate", value: "80% Refund" },
                { label: "Mock Interviews", value: "6+ Sessions" }
              ].map((stat, index) => (
                <Card key={index} className="text-center p-6">
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-muted-foreground mt-2">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Everything You Need to Land Your Dream Job
            </h2>
            <p className="text-xl text-muted-foreground">
              AI-powered tools and human expertise to accelerate your career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">
              Three simple steps to your dream career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Create Your Profile",
                description: "Tell us about your skills, experience, and career goals. Our AI will analyze and match you with the best opportunities."
              },
              {
                step: "02",
                title: "Prepare & Practice",
                description: "Use our AI tools to enhance your resume, practice interviews, and identify skill gaps. Work on live projects to build your portfolio."
              },
              {
                step: "03",
                title: "Apply & Succeed",
                description: "Apply to matched jobs with confidence. Track applications, get referrals, and land your dream role faster."
              }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            {[
              { value: "50,000+", label: "Active Jobs" },
              { value: "10,000+", label: "Companies" },
              { value: "100,000+", label: "Job Seekers" },
              { value: "500+", label: "Expert Mentors" }
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-lg opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">
                Why Choose JobFinder?
              </h2>
              <p className="text-xl text-muted-foreground">
                We combine cutting-edge AI technology with human expertise to give you an unfair advantage in your job search.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to Find Your Dream Job?
            </h2>
            <p className="text-xl opacity-90">
              Join thousands of job seekers who are accelerating their careers with JobFinder
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Sign Up Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  Log In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">For Job Seekers</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/jobs" className="hover:text-primary">Browse Jobs</Link></li>
                <li><Link to="/mock-interview" className="hover:text-primary">Mock Interview</Link></li>
                <li><Link to="/resume-enhancer" className="hover:text-primary">Resume Enhancer</Link></li>
                <li><Link to="/mentors" className="hover:text-primary">Find Mentors</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">For Companies</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/company-dashboard" className="hover:text-primary">Post Jobs</Link></li>
                <li><Link to="/pricing" className="hover:text-primary">Pricing</Link></li>
                <li><Link to="/company-insights" className="hover:text-primary">Company Insights</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
                <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/job-guarantee" className="hover:text-primary">Job Guarantee</Link></li>
                <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
                <li><Link to="/analytics" className="hover:text-primary">Analytics</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 JobFinder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

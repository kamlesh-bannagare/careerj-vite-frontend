import { Link } from "react-router-dom";
import { Variants } from "framer-motion";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Testimonials from "@/components/Testimonials"
import { motion } from "framer-motion"
import { 
  Briefcase, 
  TrendingUp, 
  Users, 
  MessageSquare, 
  FileText, 
  Target,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  Code2,
  Cpu
} from "lucide-react"

export default function Home() {
  const heroFeatures = [
    {
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
      title: "Find Jobs",
      description: "Personalized AI job matches",
      link: "/jobs"
    },
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
      title: "Real-time Mock Interview Practice",
      description: "Live AI feedback — technical & behavioral",
      link: "/mock-interview"
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
      title: "Work on Live Projects",
      description: "Build real portfolio pieces with startups",
      link: "/projects"
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop",
      title: "Find Mentors",
      description: "Get one-on-one guidance from experts",
      link: "/mentors"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1] as const,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 50, rotateX: 15 },
  visible: (index: number = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.1,
      ease: [0.42, 0, 0.58, 1] as const,
    },
  }),
};

  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeInOut" as const,
      },
    },
  };

  const ctaVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1.2,
        ease: [0.6, 0.05, 0.01, 0.9] as const,
      },
    },
  };

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            variants={badgeVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-6 md:mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-6 md:mb-8 backdrop-blur-sm border border-primary/20"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Cpu className="w-3 h-3 md:w-4 md:h-4" />
              </motion.div>
              AI-Powered Job Search & Preparation Platform
            </motion.div>
          </motion.div>

          {/* Feature Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 mb-8 md:mb-16"
          >
            {heroFeatures.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to={feature.link}>
                  <Card className="overflow-hidden border hover:border-primary/50 md:border-2 transition-all cursor-pointer h-full group relative">
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-20 md:h-48 object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <CardContent className="pt-2 pb-2 px-2 md:pt-3 md:pb-4 md:px-4 relative">
                      <h3 className="text-xs md:text-lg font-bold mb-0.5 md:mb-2 leading-tight">{feature.title}</h3>
                      <p className="text-[10px] md:text-sm text-muted-foreground mb-1 md:mb-3 line-clamp-2 leading-tight">
                        {feature.description}
                      </p>
                      {/* <motion.div 
                        className="flex items-center text-primary text-[10px] md:text-sm font-medium"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        Learn more
                        <ArrowRight className="ml-0.5 md:ml-1 w-2.5 h-2.5 md:w-4 md:h-4" />
                      </motion.div> */}
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Heading and CTA */}
          <motion.div
            variants={headingVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1 
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              From Skills to Career — Faster
            </motion.h1>
            <motion.p 
              className="text-sm md:text-lg lg:text-xl text-muted-foreground mb-5 md:mb-8 max-w-3xl mx-auto px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Find jobs, practice with real-time AI feedback, work on live projects and connect with mentors — all in one place.
            </motion.p>
            <motion.div
              variants={ctaVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center px-2"
            >
              <Link to="/signup">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="default" className="md:text-lg md:px-8 w-full sm:w-auto group relative overflow-hidden">
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    <span className="relative flex items-center justify-center gap-2">
                      Get Started Free
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </motion.div>
              </Link>
              <Link to="/jobs">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="default" variant="outline" className="md:text-lg md:px-8 w-full sm:w-auto">
                    Browse Jobs
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Job Guarantee Program Highlight Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5 relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 text-primary text-sm font-medium mb-4 border border-primary/20">
              <Shield className="w-4 h-4" />
              Job Guarantee Program
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Get Job-Ready in 2.5 Months
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive program with guaranteed results — or get 80% of your money back
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link to="/job-guarantee">
              <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all cursor-pointer group max-w-5xl mx-auto hover:shadow-2xl">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <motion.img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                      alt="Job Guarantee Program"
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent md:hidden" />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                      ₹50,000
                    </div>
                    <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium border border-border">
                      80% Refund Guarantee
                    </div>
                  </div>

                  {/* Content Side */}
                  <CardContent className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                      2.5-Month Job Guarantee Program
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      A structured program designed to transform you into a job-ready professional. Get personalized mentorship, work on real projects, practice with 6+ mock interviews, and receive guaranteed job referrals.
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">One-on-One Mentorship</p>
                          <p className="text-sm text-muted-foreground">Personalized guidance from industry experts</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">Real Project Experience</p>
                          <p className="text-sm text-muted-foreground">Build portfolio-worthy projects</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">6+ Mock Interviews</p>
                          <p className="text-sm text-muted-foreground">Practice across different technologies</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">Job Referrals</p>
                          <p className="text-sm text-muted-foreground">Direct referrals to partner companies</p>
                        </div>
                      </div>
                    </div>

                    <motion.div
                      className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all"
                      whileHover={{ x: 5 }}
                    >
                      Learn More & Apply
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto mt-8 md:mt-12"
          >
            <div className="text-center p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">2.5</div>
              <div className="text-xs md:text-sm text-muted-foreground">Months Duration</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">80%</div>
              <div className="text-xs md:text-sm text-muted-foreground">Refund Guarantee</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">6+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Mock Interviews</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features for Job Seekers</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to land your dream job
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Smart Job Matching</h3>
                <p className="text-muted-foreground">
                  AI analyzes your skills and experience to recommend the perfect jobs for you
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Mock Interviews</h3>
                <p className="text-muted-foreground">
                  Practice with AI-powered interview simulations and get instant feedback
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Resume Enhancement</h3>
                <p className="text-muted-foreground">
                  Get AI-powered suggestions to make your resume stand out from the crowd
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Live Projects</h3>
                <p className="text-muted-foreground">
                  Work on real-world projects to gain practical experience and build your portfolio
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Skill Analysis</h3>
                <p className="text-muted-foreground">
                  Identify skill gaps and get personalized learning recommendations
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Mentor Connect</h3>
                <p className="text-muted-foreground">
                  Connect with industry experts who can guide your career journey
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Company Insights</h3>
                <p className="text-muted-foreground">
                  Get detailed information about company culture, reviews, and salary data
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">
              Get started in 3 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Create Your Profile</h3>
              <p className="text-muted-foreground">
                Sign up and tell us about your skills, experience, and career goals
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Get Matched</h3>
              <p className="text-muted-foreground">
                Our AI finds the best job opportunities that match your profile
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Land Your Dream Job</h3>
              <p className="text-muted-foreground">
                Practice interviews, enhance your resume, and apply with confidence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
              <div className="text-primary-foreground/80">Active Jobs</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <div className="text-primary-foreground/80">Companies</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100K+</div>
              <div className="text-primary-foreground/80">Job Seekers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Mentors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose JobFinder?</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">AI-Powered Matching</h3>
                    <p className="text-muted-foreground">
                      Advanced algorithms match you with jobs that truly fit your skills and goals
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Interview Preparation</h3>
                    <p className="text-muted-foreground">
                      Practice with realistic mock interviews and get detailed feedback
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Career Growth</h3>
                    <p className="text-muted-foreground">
                      Connect with mentors and get personalized career guidance
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Company Transparency</h3>
                    <p className="text-muted-foreground">
                      Get insights into company culture, salaries, and employee reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                alt="Team working"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Find Your Dream Job?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of job seekers who have found their perfect role with JobFinder
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Sign Up Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Log In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div>
              <h4 className="font-bold mb-4">For Job Seekers</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/jobs">Browse Jobs</Link></li>
                <li><Link to="/dashboard">My Dashboard</Link></li>
                <li><Link to="/mock-interview">Mock Interviews</Link></li>
                <li><Link to="/resume-enhancer">Resume Tools</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">For Companies</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/company-dashboard">Post Jobs</Link></li>
                <li><Link to="/company-dashboard">Find Candidates</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/mentors">Find Mentors</Link></li>
                <li><Link to="/analytics">Career Analytics</Link></li>
                <li><Link to="/blog">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border">
            <p>&copy; 2024 JobFinder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
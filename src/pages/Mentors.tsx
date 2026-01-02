"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Briefcase, 
  Search,
  Star,
  MapPin,
  Calendar,
  Video,
  MessageSquare,
  Award,
  Users,
  TrendingUp,
  CheckCircle,
  Clock,
  DollarSign,
  Linkedin,
  Filter,
  X
} from "lucide-react"
import Navigation from "@/components/Navigation"
import MentorChat from "@/components/MentorChat"

interface Mentor {
  id: number
  name: string
  title: string
  company: string
  location: string
  avatar: string
  rating: number
  reviews: number
  sessions: number
  expertise: string[]
  bio: string
  experience: string
  rate: string
  availability: string[]
  verified: boolean
  responseTime: string
}

export default function Mentors() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null)
  const [showFilters, setShowFilters] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatMentor, setChatMentor] = useState<Mentor | null>(null)

  const mentors: Mentor[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Engineering Manager",
      company: "Google",
      location: "San Francisco, CA",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
      rating: 4.9,
      reviews: 127,
      sessions: 450,
      expertise: ["Career Growth", "Technical Leadership", "System Design", "Interview Prep"],
      bio: "15+ years in tech, led teams at Google and Amazon. Passionate about helping engineers advance their careers and become better leaders.",
      experience: "15+ years",
      rate: "$150/hour",
      availability: ["Mon 6pm-9pm", "Wed 6pm-9pm", "Sat 10am-2pm"],
      verified: true,
      responseTime: "< 2 hours"
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Principal Software Engineer",
      company: "Meta",
      location: "Seattle, WA",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      rating: 4.8,
      reviews: 98,
      sessions: 380,
      expertise: ["Frontend Development", "React", "Performance", "Code Review"],
      bio: "Specializing in frontend architecture and performance optimization. Helped 100+ engineers land jobs at FAANG companies.",
      experience: "12+ years",
      rate: "$120/hour",
      availability: ["Tue 7pm-10pm", "Thu 7pm-10pm", "Sun 2pm-6pm"],
      verified: true,
      responseTime: "< 3 hours"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "VP of Engineering",
      company: "Stripe",
      location: "New York, NY",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      rating: 5.0,
      reviews: 156,
      sessions: 520,
      expertise: ["Executive Coaching", "Career Strategy", "Negotiation", "Leadership"],
      bio: "Former engineer turned executive. I help senior engineers transition into leadership roles and negotiate better compensation packages.",
      experience: "18+ years",
      rate: "$200/hour",
      availability: ["Mon 5pm-8pm", "Fri 5pm-8pm"],
      verified: true,
      responseTime: "< 1 hour"
    },
    {
      id: 4,
      name: "David Kim",
      title: "Staff Software Engineer",
      company: "Netflix",
      location: "Los Angeles, CA",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
      rating: 4.7,
      reviews: 89,
      sessions: 310,
      expertise: ["Full Stack", "Microservices", "Cloud Architecture", "DevOps"],
      bio: "Building scalable systems at Netflix. Love teaching others about distributed systems and cloud infrastructure.",
      experience: "10+ years",
      rate: "$130/hour",
      availability: ["Wed 6pm-9pm", "Sat 11am-3pm"],
      verified: true,
      responseTime: "< 4 hours"
    },
    {
      id: 5,
      name: "Jessica Williams",
      title: "Senior Product Designer",
      company: "Airbnb",
      location: "Austin, TX",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop",
      rating: 4.9,
      reviews: 112,
      sessions: 420,
      expertise: ["UX Design", "Design Systems", "Product Strategy", "Portfolio Review"],
      bio: "Passionate about creating delightful user experiences. I help designers build strong portfolios and transition into product design.",
      experience: "9+ years",
      rate: "$110/hour",
      availability: ["Tue 6pm-9pm", "Thu 6pm-9pm", "Sat 9am-1pm"],
      verified: true,
      responseTime: "< 2 hours"
    },
    {
      id: 6,
      name: "Robert Taylor",
      title: "Director of Engineering",
      company: "Amazon",
      location: "Remote",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      rating: 4.8,
      reviews: 143,
      sessions: 490,
      expertise: ["Engineering Management", "Team Building", "Agile", "Hiring"],
      bio: "Built and scaled engineering teams from 5 to 50+. Expertise in hiring, team culture, and engineering processes.",
      experience: "16+ years",
      rate: "$180/hour",
      availability: ["Mon 7pm-10pm", "Thu 7pm-10pm"],
      verified: true,
      responseTime: "< 2 hours"
    }
  ]

  const filteredMentors = mentors.filter(mentor =>
    mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mentor.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mentor.expertise.some(exp => exp.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-background">

      <div className="container mx-auto px-4 py-8 pt-24 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Connect with Expert Mentors</h1>
          <p className="text-muted-foreground">
            Get personalized career guidance from industry professionals
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search by name, expertise, or company..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </Button>
          </div>

          {showFilters && (
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold">Filter Mentors</h3>
                  <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Expertise</label>
                    <div className="space-y-2">
                      {["Career Growth", "Technical Leadership", "Interview Prep", "System Design"].map((exp) => (
                        <label key={exp} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{exp}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Price Range</label>
                    <div className="space-y-2">
                      {["< $100", "$100 - $150", "$150 - $200", "$200+"].map((range) => (
                        <label key={range} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{range}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Availability</label>
                    <div className="space-y-2">
                      {["Weekdays", "Weekends", "Evenings", "Mornings"].map((time) => (
                        <label key={time} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{time}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6 text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold mb-1">{mentors.length}</div>
              <div className="text-sm text-muted-foreground">Expert Mentors</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Video className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold mb-1">2,500+</div>
              <div className="text-sm text-muted-foreground">Sessions Completed</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Star className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold mb-1">4.8</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold mb-1">92%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </CardContent>
          </Card>
        </div>

        {/* Mentor Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map((mentor) => (
            <Card key={mentor.id} className="hover:border-primary/50 transition-all">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={mentor.avatar} />
                    <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-bold">{mentor.name}</h3>
                      {mentor.verified && (
                        <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{mentor.title}</p>
                    <p className="text-sm font-medium">{mentor.company}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <span className="font-medium">{mentor.rating}</span>
                    <span className="text-muted-foreground">({mentor.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Video className="w-4 h-4" />
                    <span>{mentor.sessions} sessions</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {mentor.bio}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {mentor.expertise.slice(0, 3).map((exp, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {exp}
                    </Badge>
                  ))}
                  {mentor.expertise.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{mentor.expertise.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{mentor.responseTime}</span>
                  </div>
                  <div className="font-bold text-primary">{mentor.rate}</div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    className="flex-1"
                    onClick={() => {
                      setSelectedMentor(mentor)
                      setIsBookingOpen(true)
                    }}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Session
                  </Button>
                  <Button 
                    variant="secondary"
                    size="icon"
                    onClick={() => {
                      setChatMentor(mentor)
                      setIsChatOpen(true)
                    }}
                  >
                    <MessageSquare className="w-4 h-4" />
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline"
                        onClick={() => setSelectedMentor(mentor)}
                      >
                        View Profile
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                      {selectedMentor && selectedMentor.id === mentor.id && (
                        <>
                          <DialogHeader>
                            <div className="flex items-start gap-4 mb-4">
                              <Avatar className="w-20 h-20">
                                <AvatarImage src={selectedMentor.avatar} />
                                <AvatarFallback>{selectedMentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-start justify-between mb-2">
                                  <div>
                                    <DialogTitle className="text-2xl mb-1">{selectedMentor.name}</DialogTitle>
                                    <DialogDescription className="text-base">
                                      {selectedMentor.title} at {selectedMentor.company}
                                    </DialogDescription>
                                  </div>
                                  {selectedMentor.verified && (
                                    <Badge className="bg-blue-500">
                                      <CheckCircle className="w-3 h-3 mr-1" />
                                      Verified
                                    </Badge>
                                  )}
                                </div>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    {selectedMentor.location}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Award className="w-4 h-4" />
                                    {selectedMentor.experience}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </DialogHeader>

                          <Tabs defaultValue="about" className="w-full">
                            <TabsList className="grid w-full grid-cols-3">
                              <TabsTrigger value="about">About</TabsTrigger>
                              <TabsTrigger value="expertise">Expertise</TabsTrigger>
                              <TabsTrigger value="reviews">Reviews</TabsTrigger>
                            </TabsList>

                            <TabsContent value="about" className="space-y-4">
                              <div>
                                <h4 className="font-bold mb-2">About Me</h4>
                                <p className="text-sm text-muted-foreground">{selectedMentor.bio}</p>
                              </div>

                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-lg bg-muted">
                                  <div className="flex items-center gap-2 mb-2">
                                    <Star className="w-5 h-5 text-yellow-500" />
                                    <span className="font-bold">{selectedMentor.rating} Rating</span>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    Based on {selectedMentor.reviews} reviews
                                  </p>
                                </div>
                                <div className="p-4 rounded-lg bg-muted">
                                  <div className="flex items-center gap-2 mb-2">
                                    <Video className="w-5 h-5 text-primary" />
                                    <span className="font-bold">{selectedMentor.sessions} Sessions</span>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    Completed successfully
                                  </p>
                                </div>
                              </div>

                              <div>
                                <h4 className="font-bold mb-2">Availability</h4>
                                <div className="grid grid-cols-2 gap-2">
                                  {selectedMentor.availability.map((slot, idx) => (
                                    <div key={idx} className="flex items-center gap-2 p-2 rounded bg-muted text-sm">
                                      <Clock className="w-4 h-4 text-primary" />
                                      <span>{slot}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                                <div>
                                  <div className="font-bold text-lg">{selectedMentor.rate}</div>
                                  <div className="text-sm text-muted-foreground">per session (1 hour)</div>
                                </div>
                                <Button
                                  onClick={() => {
                                    setIsBookingOpen(true)
                                  }}
                                >
                                  <Calendar className="w-4 h-4 mr-2" />
                                  Book Now
                                </Button>
                              </div>
                            </TabsContent>

                            <TabsContent value="expertise" className="space-y-4">
                              <div>
                                <h4 className="font-bold mb-3">Areas of Expertise</h4>
                                <div className="flex flex-wrap gap-2">
                                  {selectedMentor.expertise.map((exp, idx) => (
                                    <Badge key={idx} variant="secondary" className="px-4 py-2">
                                      {exp}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h4 className="font-bold mb-3">What I Can Help With</h4>
                                <div className="space-y-3">
                                  {[
                                    "Career planning and strategy",
                                    "Technical interview preparation",
                                    "Resume and portfolio review",
                                    "Salary negotiation coaching",
                                    "Leadership development",
                                    "Work-life balance strategies"
                                  ].map((help, idx) => (
                                    <div key={idx} className="flex items-start gap-2">
                                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                      <span className="text-sm">{help}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </TabsContent>

                            <TabsContent value="reviews" className="space-y-4">
                              {[
                                {
                                  name: "Alex M.",
                                  role: "Software Engineer",
                                  rating: 5,
                                  date: "2 weeks ago",
                                  review: "Incredibly insightful session! Helped me prepare for my interview at a FAANG company. Got the offer!"
                                },
                                {
                                  name: "Rachel K.",
                                  role: "Product Manager",
                                  rating: 5,
                                  date: "1 month ago",
                                  review: "Best mentor I've worked with. Practical advice and genuinely cares about your success."
                                },
                                {
                                  name: "James L.",
                                  role: "Senior Developer",
                                  rating: 4,
                                  date: "2 months ago",
                                  review: "Great experience overall. Very knowledgeable and patient. Would recommend!"
                                }
                              ].map((review, idx) => (
                                <div key={idx} className="p-4 rounded-lg border border-border">
                                  <div className="flex items-start justify-between mb-2">
                                    <div>
                                      <div className="font-bold">{review.name}</div>
                                      <div className="text-sm text-muted-foreground">{review.role}</div>
                                    </div>
                                    <div className="text-sm text-muted-foreground">{review.date}</div>
                                  </div>
                                  <div className="flex items-center gap-1 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`w-4 h-4 ${
                                          i < review.rating
                                            ? 'fill-yellow-500 text-yellow-500'
                                            : 'text-gray-300'
                                        }`}
                                      />
                                    ))}
                                  </div>
                                  <p className="text-sm">{review.review}</p>
                                </div>
                              ))}
                            </TabsContent>
                          </Tabs>
                        </>
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Booking Modal */}
        <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Book a Session</DialogTitle>
              <DialogDescription>
                Schedule a 1-on-1 mentoring session with {selectedMentor?.name}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Select Date</label>
                <Input type="date" />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Select Time</label>
                <div className="grid grid-cols-3 gap-2">
                  {["2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"].map((time) => (
                    <Button key={time} variant="outline" size="sm">
                      {time}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Session Topic</label>
                <select className="w-full h-10 rounded-md border border-input bg-background px-3">
                  <option>Career Strategy</option>
                  <option>Interview Preparation</option>
                  <option>Resume Review</option>
                  <option>Technical Guidance</option>
                  <option>Salary Negotiation</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Additional Notes (Optional)</label>
                <textarea
                  className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                  placeholder="Tell your mentor what you'd like to focus on..."
                />
              </div>

              <div className="p-4 rounded-lg bg-muted">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Session (1 hour)</span>
                  <span className="font-bold">{selectedMentor?.rate}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  You'll receive a confirmation email with the video call link
                </div>
              </div>
            </div>

            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setIsBookingOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsBookingOpen(false)}>
                <DollarSign className="w-4 h-4 mr-2" />
                Confirm Booking
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Mentor Chat */}
        <MentorChat 
          mentor={chatMentor}
          isOpen={isChatOpen}
          onClose={() => {
            setIsChatOpen(false)
            setChatMentor(null)
          }}
        />
      </div>
    </div>
  )
}
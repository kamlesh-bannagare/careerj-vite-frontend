"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Search,
  MapPin,
  Users,
  Briefcase,
  Star,
  Building2,
  TrendingUp,
  Award,
  ArrowRight
} from "lucide-react"
import Navigation from "@/components/Navigation"

// Dummy data
const companies = [
  {
    id: 1,
    name: "TechCorp Inc",
    logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=200&h=200&fit=crop",
    industry: "Technology",
    location: "San Francisco, CA",
    size: "1000-5000",
    rating: 4.5,
    reviews: 234,
    openJobs: 45,
    description: "Leading technology company specializing in cloud solutions and AI",
    benefits: ["Health Insurance", "Remote Work", "Stock Options", "Gym Membership"],
    featured: true
  },
  {
    id: 2,
    name: "StartupHub",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop",
    industry: "Startups",
    location: "Remote",
    size: "50-200",
    rating: 4.8,
    reviews: 89,
    openJobs: 12,
    description: "Fast-growing startup ecosystem connecting innovators worldwide",
    benefits: ["Flexible Hours", "Unlimited PTO", "Learning Budget", "Remote First"],
    featured: true
  },
  {
    id: 3,
    name: "CloudSolutions",
    logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=200&h=200&fit=crop",
    industry: "Cloud Computing",
    location: "New York, NY",
    size: "500-1000",
    rating: 4.3,
    reviews: 156,
    openJobs: 28,
    description: "Enterprise cloud infrastructure and DevOps solutions provider",
    benefits: ["401k Match", "Parental Leave", "Education Support", "Transit Pass"],
    featured: false
  },
  {
    id: 4,
    name: "DesignFirst",
    logo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=200&h=200&fit=crop",
    industry: "Design",
    location: "Austin, TX",
    size: "200-500",
    rating: 4.7,
    reviews: 112,
    openJobs: 18,
    description: "Award-winning design agency creating exceptional digital experiences",
    benefits: ["Creative Freedom", "Conference Budget", "Mac Setup", "Wellness Program"],
    featured: true
  },
  {
    id: 5,
    name: "InnovateLabs",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=200&fit=crop",
    industry: "Research",
    location: "Boston, MA",
    size: "100-500",
    rating: 4.6,
    reviews: 78,
    openJobs: 15,
    description: "Cutting-edge research lab pushing boundaries in AI and robotics",
    benefits: ["Research Time", "Publication Support", "Top Equipment", "Relocation"],
    featured: false
  },
  {
    id: 6,
    name: "WebWorks",
    logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=200&fit=crop",
    industry: "Web Development",
    location: "Seattle, WA",
    size: "50-200",
    rating: 4.4,
    reviews: 92,
    openJobs: 22,
    description: "Full-service web development agency serving Fortune 500 clients",
    benefits: ["Training Budget", "Client Variety", "Modern Stack", "Hybrid Work"],
    featured: false
  },
  {
    id: 7,
    name: "DataDrive",
    logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=200&fit=crop",
    industry: "Data Science",
    location: "Chicago, IL",
    size: "200-500",
    rating: 4.5,
    reviews: 145,
    openJobs: 31,
    description: "Data analytics and business intelligence solutions for enterprises",
    benefits: ["Data Tools Access", "Certifications", "Mentorship", "Performance Bonus"],
    featured: false
  },
  {
    id: 8,
    name: "SecureNet",
    logo: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=200&h=200&fit=crop",
    industry: "Cybersecurity",
    location: "Washington, DC",
    size: "500-1000",
    rating: 4.7,
    reviews: 198,
    openJobs: 38,
    description: "Enterprise cybersecurity solutions protecting critical infrastructure",
    benefits: ["Security Clearance", "Competitive Pay", "Stability", "Gov Contracts"],
    featured: true
  }
]

const industries = ["All Industries", "Technology", "Startups", "Cloud Computing", "Design", "Research", "Web Development", "Data Science", "Cybersecurity"]

export default function CompaniesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries")

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         company.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesIndustry = selectedIndustry === "All Industries" || company.industry === selectedIndustry
    return matchesSearch && matchesIndustry
  })

  const featuredCompanies = filteredCompanies.filter(c => c.featured)

  return (
    <div className="min-h-screen bg-background">

      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Companies</h1>
          <p className="text-sm text-muted-foreground">
            Discover great places to work
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search companies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {industries.map(industry => (
              <Button
                key={industry}
                variant={selectedIndustry === industry ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedIndustry(industry)}
              >
                {industry}
              </Button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Building2 className="w-8 h-8 mx-auto text-primary mb-2" />
                <div className="text-2xl font-bold mb-1">{companies.length}</div>
                <div className="text-sm text-muted-foreground">Total Companies</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Briefcase className="w-8 h-8 mx-auto text-primary mb-2" />
                <div className="text-2xl font-bold mb-1">{companies.reduce((sum, c) => sum + c.openJobs, 0)}</div>
                <div className="text-sm text-muted-foreground">Open Positions</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto text-primary mb-2" />
                <div className="text-2xl font-bold mb-1">{featuredCompanies.length}</div>
                <div className="text-sm text-muted-foreground">Featured</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <TrendingUp className="w-8 h-8 mx-auto text-primary mb-2" />
                <div className="text-2xl font-bold mb-1">{industries.length - 1}</div>
                <div className="text-sm text-muted-foreground">Industries</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Companies */}
        {featuredCompanies.length > 0 && selectedIndustry === "All Industries" && !searchQuery && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Featured Companies
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredCompanies.map(company => (
                <Card key={company.id} className="border-2 border-primary/20 hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex gap-4 mb-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                        <img src={company.logo} alt={company.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="text-xl font-bold truncate">{company.name}</h3>
                          <Badge variant="secondary" className="whitespace-nowrap">
                            <Star className="w-3 h-3 mr-1 fill-current" />
                            {company.rating}
                          </Badge>
                        </div>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Building2 className="w-4 h-4" />
                            {company.industry}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {company.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {company.size} employees
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {company.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {company.benefits.slice(0, 3).map(benefit => (
                        <Badge key={benefit} variant="outline" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="font-bold text-primary">{company.openJobs}</span>
                        <span className="text-muted-foreground"> open positions</span>
                      </div>
                      <Button variant="outline" size="sm">
                        View Company
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Companies */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            {selectedIndustry === "All Industries" ? "All Companies" : `${selectedIndustry} Companies`}
            <span className="text-muted-foreground font-normal text-lg ml-2">
              ({filteredCompanies.length})
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map(company => (
              <Card key={company.id} className="hover:border-primary/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                      <img src={company.logo} alt={company.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg mb-1 truncate">{company.name}</h3>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Star className="w-3 h-3 fill-current text-yellow-500" />
                          {company.rating}
                        </div>
                        <span className="text-muted-foreground">({company.reviews})</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      {company.industry}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {company.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {company.size} employees
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {company.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="text-sm">
                      <span className="font-bold text-primary">{company.openJobs}</span>
                      <span className="text-muted-foreground"> jobs</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredCompanies.length === 0 && (
            <Card className="p-12 text-center">
              <Building2 className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-2xl font-bold mb-2">No Companies Found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filters
              </p>
              <Button onClick={() => { setSearchQuery(""); setSelectedIndustry("All Industries"); }}>
                Clear Filters
              </Button>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}
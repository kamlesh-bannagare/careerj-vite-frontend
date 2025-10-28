
import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navigation from "@/components/Navigation"
import {
  Users,
  Search,
  Filter,
  Download,
  Star,
  MapPin,
  Briefcase,
  CheckCircle,
  XCircle,
  Mail,
  Phone,
  ArrowLeft,
  Calendar
} from "lucide-react"

export default function CompanyAllCandidates() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [positionFilter, setPositionFilter] = useState("all")

  const allCandidates = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+1 (555) 123-4567",
      position: "Senior React Developer",
      appliedDate: "2024-01-15",
      match: 95,
      status: "new",
      experience: "5 years",
      location: "San Francisco, CA",
      skills: ["React", "TypeScript", "Node.js", "AWS"],
      education: "BS Computer Science - Stanford"
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "m.chen@email.com",
      phone: "+1 (555) 234-5678",
      position: "Senior React Developer",
      appliedDate: "2024-01-14",
      match: 92,
      status: "reviewing",
      experience: "7 years",
      location: "New York, NY",
      skills: ["React", "GraphQL", "Docker", "Python"],
      education: "MS Software Engineering - MIT"
    },
    {
      id: 3,
      name: "Emily Davis",
      email: "emily.davis@email.com",
      phone: "+1 (555) 345-6789",
      position: "Product Manager",
      appliedDate: "2024-01-13",
      match: 88,
      status: "shortlisted",
      experience: "4 years",
      location: "Austin, TX",
      skills: ["Product Strategy", "Agile", "Analytics", "UX"],
      education: "MBA - Harvard Business School"
    },
    {
      id: 4,
      name: "David Wilson",
      email: "d.wilson@email.com",
      phone: "+1 (555) 456-7890",
      position: "UX Designer",
      appliedDate: "2024-01-12",
      match: 85,
      status: "interview",
      experience: "6 years",
      location: "Seattle, WA",
      skills: ["Figma", "UI Design", "Prototyping", "User Research"],
      education: "BFA Design - RISD"
    },
    {
      id: 5,
      name: "Jessica Martinez",
      email: "j.martinez@email.com",
      phone: "+1 (555) 567-8901",
      position: "Senior React Developer",
      appliedDate: "2024-01-11",
      match: 90,
      status: "shortlisted",
      experience: "6 years",
      location: "Los Angeles, CA",
      skills: ["React", "Redux", "Jest", "CI/CD"],
      education: "BS Computer Science - UCLA"
    },
    {
      id: 6,
      name: "Robert Taylor",
      email: "r.taylor@email.com",
      phone: "+1 (555) 678-9012",
      position: "Product Manager",
      appliedDate: "2024-01-10",
      match: 82,
      status: "reviewing",
      experience: "5 years",
      location: "Boston, MA",
      skills: ["Roadmapping", "Data Analysis", "Stakeholder Management"],
      education: "BS Business Administration - Penn"
    },
    {
      id: 7,
      name: "Amanda White",
      email: "a.white@email.com",
      phone: "+1 (555) 789-0123",
      position: "UX Designer",
      appliedDate: "2024-01-09",
      match: 87,
      status: "new",
      experience: "4 years",
      location: "Portland, OR",
      skills: ["Sketch", "Adobe XD", "Wireframing", "Design Systems"],
      education: "BFA Graphic Design - Parsons"
    },
    {
      id: 8,
      name: "James Brown",
      email: "j.brown@email.com",
      phone: "+1 (555) 890-1234",
      position: "Senior React Developer",
      appliedDate: "2024-01-08",
      match: 94,
      status: "interview",
      experience: "8 years",
      location: "Chicago, IL",
      skills: ["React", "Next.js", "Tailwind", "MongoDB"],
      education: "MS Computer Science - CMU"
    }
  ]

  const getStatusBadge = (status: string) => {
    switch(status) {
      case "new":
        return <Badge className="bg-blue-500">New</Badge>
      case "reviewing":
        return <Badge variant="secondary">Reviewing</Badge>
      case "shortlisted":
        return <Badge className="bg-green-500">Shortlisted</Badge>
      case "interview":
        return <Badge className="bg-purple-500">Interview</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const filteredCandidates = allCandidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         candidate.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         candidate.position.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || candidate.status === statusFilter
    const matchesPosition = positionFilter === "all" || candidate.position === positionFilter
    return matchesSearch && matchesStatus && matchesPosition
  })

  const positions = [...new Set(allCandidates.map(c => c.position))]

  return (
    <div className="min-h-screen bg-background">

      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 pt-20 sm:pt-24">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <Link to="/company-dashboard" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-2">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Dashboard
            </Link>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-2">
              <Users className="w-6 h-6 sm:w-8 sm:h-8" />
              All Candidates
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Showing {filteredCandidates.length} of {allCandidates.length} candidates
            </p>
          </div>
          <Button size="default" className="w-full sm:w-auto">
            <Download className="w-4 h-4 mr-2" />
            Export to CSV
          </Button>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative lg:col-span-2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, email, or position..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="reviewing">Reviewing</SelectItem>
                  <SelectItem value="shortlisted">Shortlisted</SelectItem>
                  <SelectItem value="interview">Interview</SelectItem>
                </SelectContent>
              </Select>
              <Select value={positionFilter} onValueChange={setPositionFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Position" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Positions</SelectItem>
                  {positions.map(pos => (
                    <SelectItem key={pos} value={pos}>{pos}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
          <Card>
            <CardContent className="pt-4 sm:pt-6">
              <div className="text-xl sm:text-2xl font-bold text-blue-500 mb-1">
                {allCandidates.filter(c => c.status === "new").length}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">New</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 sm:pt-6">
              <div className="text-xl sm:text-2xl font-bold text-gray-500 mb-1">
                {allCandidates.filter(c => c.status === "reviewing").length}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Reviewing</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 sm:pt-6">
              <div className="text-xl sm:text-2xl font-bold text-green-500 mb-1">
                {allCandidates.filter(c => c.status === "shortlisted").length}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Shortlisted</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 sm:pt-6">
              <div className="text-xl sm:text-2xl font-bold text-purple-500 mb-1">
                {allCandidates.filter(c => c.status === "interview").length}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Interview</div>
            </CardContent>
          </Card>
        </div>

        {/* Candidates List */}
        <div className="space-y-4">
          {filteredCandidates.map((candidate) => (
            <Card key={candidate.id} className="hover:border-primary/50 transition-all">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  {/* Avatar & Basic Info */}
                  <div className="flex gap-4 flex-1">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-base sm:text-xl flex-shrink-0">
                      {candidate.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                        <div className="flex-1">
                          <h3 className="font-bold text-base sm:text-lg mb-1">{candidate.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{candidate.position}</p>
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium">
                              <Star className="w-3 h-3 fill-green-500" />
                              {candidate.match}% Match
                            </div>
                            {getStatusBadge(candidate.status)}
                          </div>
                        </div>
                      </div>

                      {/* Details Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm mb-3">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span className="truncate">{candidate.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span>{candidate.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span>{candidate.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span>{candidate.experience} experience</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground sm:col-span-2">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span>Applied: {new Date(candidate.appliedDate).toLocaleDateString()}</span>
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="mb-3">
                        <div className="text-xs font-semibold mb-2">Skills:</div>
                        <div className="flex flex-wrap gap-1.5">
                          {candidate.skills.map((skill, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Education */}
                      <div className="text-xs text-muted-foreground mb-3">
                        <span className="font-semibold">Education:</span> {candidate.education}
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm" className="text-xs">
                          View Full Profile
                        </Button>
                        <Button size="sm" variant="outline" className="text-xs">
                          <Mail className="w-3 h-3 mr-1" />
                          Send Email
                        </Button>
                        <Button size="sm" variant="outline" className="text-xs">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Shortlist
                        </Button>
                        <Button size="sm" variant="outline" className="text-xs">
                          <XCircle className="w-3 h-3 mr-1" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredCandidates.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">No candidates found</h3>
              <p className="text-sm text-muted-foreground">
                Try adjusting your filters or search query
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

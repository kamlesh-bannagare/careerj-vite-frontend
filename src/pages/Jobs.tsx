import { useState, useEffect } from "react";
import { Search, MapPin, Briefcase, DollarSign, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { fetchJobs, Job } from "@/api/mockData";

export default function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [locationFilter, setLocationFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    setLoading(true);
    const data = await fetchJobs();
    setJobs(data);
    setLoading(false);
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = locationFilter === "all" || job.location.includes(locationFilter);
    const matchesType = typeFilter === "all" || job.type === typeFilter;
    
    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Next Opportunity</h1>
          <p className="text-xl text-muted-foreground">
            Browse thousands of jobs from top companies
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search jobs or companies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="Remote">Remote</SelectItem>
                  <SelectItem value="San Francisco">San Francisco</SelectItem>
                  <SelectItem value="New York">New York</SelectItem>
                  <SelectItem value="London">London</SelectItem>
                </SelectContent>
              </Select>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Full-time">Full-time</SelectItem>
                  <SelectItem value="Part-time">Part-time</SelectItem>
                  <SelectItem value="Contract">Contract</SelectItem>
                  <SelectItem value="Internship">Internship</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <p className="text-muted-foreground mb-6">
          Showing {filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'}
        </p>

        {/* Jobs Grid */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading jobs...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <Card 
                key={job.id} 
                className="hover-lift cursor-pointer"
                onClick={() => setSelectedJob(job)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <img 
                      src={job.logo} 
                      alt={job.company}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <Button variant="ghost" size="icon">
                      <Bookmark className="h-5 w-5" />
                    </Button>
                  </div>
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <CardDescription className="text-base font-medium text-foreground">
                    {job.company}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Briefcase className="h-4 w-4" />
                    {job.type} · {job.experience}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    <DollarSign className="h-4 w-4" />
                    {job.salary}
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {job.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Job Details Dialog */}
        <Dialog open={!!selectedJob} onOpenChange={() => setSelectedJob(null)}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            {selectedJob && (
              <>
                <DialogHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <img 
                      src={selectedJob.logo} 
                      alt={selectedJob.company}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <DialogTitle className="text-2xl mb-2">{selectedJob.title}</DialogTitle>
                      <DialogDescription className="text-lg font-medium text-foreground">
                        {selectedJob.company}
                      </DialogDescription>
                    </div>
                  </div>
                </DialogHeader>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                      <span>{selectedJob.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-muted-foreground" />
                      <span>{selectedJob.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-muted-foreground" />
                      <span className="font-medium">{selectedJob.salary}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedJob.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Job Description</h3>
                    <p className="text-muted-foreground">{selectedJob.description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Requirements</h3>
                    <ul className="space-y-2">
                      {selectedJob.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button className="flex-1" size="lg">Apply Now</Button>
                    <Button variant="outline" size="lg">
                      <Bookmark className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

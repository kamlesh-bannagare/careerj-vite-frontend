import { Calendar, Building2, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Applications() {
  const applications = [
    {
      id: "1",
      title: "Senior Frontend Developer",
      company: "TechCorp",
      location: "San Francisco, CA",
      appliedDate: "2024-01-15",
      status: "Interview Scheduled",
      statusColor: "bg-green-500",
      logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop"
    },
    {
      id: "2",
      title: "Full Stack Engineer",
      company: "StartupHub",
      location: "Remote",
      appliedDate: "2024-01-12",
      status: "Under Review",
      statusColor: "bg-yellow-500",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop"
    },
    {
      id: "3",
      title: "Frontend Developer",
      company: "WebStudio",
      location: "New York, NY",
      appliedDate: "2024-01-10",
      status: "Applied",
      statusColor: "bg-blue-500",
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop"
    },
    {
      id: "4",
      title: "React Developer",
      company: "DevCo",
      location: "Austin, TX",
      appliedDate: "2024-01-08",
      status: "Rejected",
      statusColor: "bg-red-500",
      logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=100&h=100&fit=crop"
    }
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Interview Scheduled": return "default";
      case "Under Review": return "secondary";
      case "Applied": return "outline";
      case "Rejected": return "destructive";
      default: return "secondary";
    }
  };

  const filterByStatus = (status: string) => {
    if (status === "all") return applications;
    return applications.filter(app => app.status === status);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">My Applications</h1>
          <p className="text-muted-foreground">
            Track the status of your job applications
          </p>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">All ({applications.length})</TabsTrigger>
            <TabsTrigger value="active">
              Active ({applications.filter(a => !["Rejected"].includes(a.status)).length})
            </TabsTrigger>
            <TabsTrigger value="interviews">
              Interviews ({applications.filter(a => a.status === "Interview Scheduled").length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {applications.map((app) => (
              <Card key={app.id} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <img 
                      src={app.logo}
                      alt={app.company}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold">{app.title}</h3>
                          <div className="flex items-center gap-2 text-muted-foreground mt-1">
                            <Building2 className="h-4 w-4" />
                            <span>{app.company}</span>
                          </div>
                        </div>
                        <Badge variant={getStatusVariant(app.status)}>
                          {app.status}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {app.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Applied {new Date(app.appliedDate).toLocaleDateString()}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">View Details</Button>
                        <Button size="sm" variant="outline">Withdraw</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="active" className="space-y-4">
            {applications
              .filter(a => !["Rejected"].includes(a.status))
              .map((app) => (
                <Card key={app.id} className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <img 
                        src={app.logo}
                        alt={app.company}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-bold">{app.title}</h3>
                            <p className="text-muted-foreground">{app.company}</p>
                          </div>
                          <Badge variant={getStatusVariant(app.status)}>
                            {app.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {app.location} • Applied {new Date(app.appliedDate).toLocaleDateString()}
                        </p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">View Details</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>

          <TabsContent value="interviews" className="space-y-4">
            {applications
              .filter(a => a.status === "Interview Scheduled")
              .map((app) => (
                <Card key={app.id} className="hover-lift border-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <img 
                        src={app.logo}
                        alt={app.company}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-bold">{app.title}</h3>
                            <p className="text-muted-foreground">{app.company}</p>
                          </div>
                          <Badge variant="default">{app.status}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {app.location}
                        </p>
                        <div className="flex gap-2">
                          <Button size="sm">Prepare for Interview</Button>
                          <Button size="sm" variant="outline">View Details</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

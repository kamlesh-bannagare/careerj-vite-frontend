import { useState, useEffect } from "react";
import { Code2, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fetchProjects, Project } from "@/api/mockData";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    setLoading(true);
    const data = await fetchProjects();
    setProjects(data);
    setLoading(false);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-500";
      case "Intermediate": return "bg-yellow-500";
      case "Advanced": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Live Projects</h1>
          <p className="text-xl text-muted-foreground">
            Work on real projects from startups and build your portfolio
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="available" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="available">Available Projects</TabsTrigger>
            <TabsTrigger value="active">My Projects (0)</TabsTrigger>
          </TabsList>

          <TabsContent value="available">
            {loading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Loading projects...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                  <Card key={project.id} className="hover-lift">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <img 
                          src={project.logo} 
                          alt={project.company}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <Badge className={getDifficultyColor(project.difficulty)}>
                          {project.difficulty}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-base font-medium text-foreground">
                        {project.company}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{project.description}</p>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {project.duration}
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-2">Tech Stack:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, index) => (
                            <Badge key={index} variant="secondary">
                              <Code2 className="h-3 w-3 mr-1" />
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full">Apply to Project</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="active">
            <Card>
              <CardContent className="py-12 text-center">
                <Code2 className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-bold mb-2">No Active Projects</h3>
                <p className="text-muted-foreground mb-6">
                  Apply to a project to start building your portfolio
                </p>
                <Button>Browse Available Projects</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Work on Live Projects?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Code2,
                title: "Real Experience",
                description: "Work on actual projects from startups and companies"
              },
              {
                icon: TrendingUp,
                title: "Build Portfolio",
                description: "Showcase real projects to potential employers"
              },
              {
                icon: Clock,
                title: "Flexible Timeline",
                description: "Work at your own pace with clear deadlines"
              }
            ].map((benefit, index) => (
              <Card key={index}>
                <CardHeader className="text-center">
                  <benefit.icon className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle>{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

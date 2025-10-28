import { useState, useEffect } from "react";
import { Star, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { fetchMentors, Mentor } from "@/api/mockData";

export default function Mentors() {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

  useEffect(() => {
    loadMentors();
  }, []);

  const loadMentors = async () => {
    setLoading(true);
    const data = await fetchMentors();
    setMentors(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Mentor</h1>
          <p className="text-xl text-muted-foreground">
            Connect with industry experts for personalized career guidance
          </p>
        </div>

        {/* Mentors Grid */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading mentors...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((mentor) => (
              <Card key={mentor.id} className="hover-lift">
                <CardHeader className="text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={mentor.avatar} alt={mentor.name} />
                    <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{mentor.name}</CardTitle>
                  <CardDescription className="text-base">
                    <span className="font-medium text-foreground">{mentor.role}</span>
                    <br />
                    {mentor.company}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <span className="font-medium">{mentor.rating}</span>
                    </div>
                    <div className="text-muted-foreground">
                      {mentor.sessions} sessions
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {mentor.expertise.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <Button 
                    className="w-full" 
                    onClick={() => setSelectedMentor(mentor)}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Session
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Booking Dialog */}
        <Dialog open={!!selectedMentor} onOpenChange={() => setSelectedMentor(null)}>
          <DialogContent className="max-w-2xl">
            {selectedMentor && (
              <>
                <DialogHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src={selectedMentor.avatar} alt={selectedMentor.name} />
                      <AvatarFallback>{selectedMentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <DialogTitle className="text-2xl mb-2">{selectedMentor.name}</DialogTitle>
                      <DialogDescription className="text-lg">
                        <span className="font-medium text-foreground">{selectedMentor.role}</span> at {selectedMentor.company}
                      </DialogDescription>
                      <div className="flex items-center gap-2 mt-2">
                        <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                        <span className="font-bold">{selectedMentor.rating}</span>
                        <span className="text-muted-foreground">({selectedMentor.sessions} sessions)</span>
                      </div>
                    </div>
                  </div>
                </DialogHeader>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold mb-2">About</h3>
                    <p className="text-muted-foreground">{selectedMentor.bio}</p>
                  </div>

                  <div>
                    <h3 className="font-bold mb-2">Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedMentor.expertise.map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-bold">Select Session Type</h3>
                    <div className="grid gap-3">
                      <button className="p-4 border rounded-lg hover:border-primary transition-colors text-left">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium">30-Minute Career Guidance</span>
                          <Badge>$50</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Quick consultation for specific questions
                        </p>
                      </button>
                      <button className="p-4 border rounded-lg hover:border-primary transition-colors text-left">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium">60-Minute Deep Dive</span>
                          <Badge>$90</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Comprehensive career planning and advice
                        </p>
                      </button>
                    </div>
                  </div>

                  <Button size="lg" className="w-full">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Session
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

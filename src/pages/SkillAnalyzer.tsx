import { useState } from "react";
import { Search, Target, BookOpen, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function SkillAnalyzer() {
  const [targetRole, setTargetRole] = useState("");
  const [analyzed, setAnalyzed] = useState(false);

  const handleAnalyze = () => {
    if (targetRole) {
      setAnalyzed(true);
    }
  };

  const yourSkills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "Git", level: 80 },
    { name: "Node.js", level: 70 }
  ];

  const requiredSkills = [
    { name: "TypeScript", required: true, hasSkill: false },
    { name: "React", required: true, hasSkill: true },
    { name: "Next.js", required: true, hasSkill: false },
    { name: "GraphQL", required: false, hasSkill: false },
    { name: "Testing", required: true, hasSkill: false }
  ];

  const matchPercentage = 65;

  const learningResources = [
    {
      title: "TypeScript for Beginners",
      platform: "Udemy",
      duration: "8 hours",
      rating: 4.7
    },
    {
      title: "Next.js Complete Guide",
      platform: "Frontend Masters",
      duration: "6 hours",
      rating: 4.9
    },
    {
      title: "Testing React Applications",
      platform: "Testing Library",
      duration: "4 hours",
      rating: 4.8
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Skill Gap Analyzer</h1>
          <p className="text-xl text-muted-foreground">
            Identify what skills you need to land your dream job
          </p>
        </div>

        {!analyzed ? (
          <Card>
            <CardHeader>
              <CardTitle>Analyze Your Skills</CardTitle>
              <CardDescription>
                Enter your target job title to see how your skills match
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="e.g. Senior Frontend Developer"
                    value={targetRole}
                    onChange={(e) => setTargetRole(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button onClick={handleAnalyze} disabled={!targetRole}>
                  <Target className="mr-2 h-5 w-5" />
                  Analyze
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {/* Match Score */}
            <Card className="border-primary">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">
                      {targetRole || "Frontend Developer"}
                    </h2>
                    <p className="text-muted-foreground">
                      Your skill match for this role
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary">
                      {matchPercentage}%
                    </div>
                    <Badge variant="secondary">Good Match</Badge>
                  </div>
                </div>
                <Progress value={matchPercentage} className="h-3" />
              </CardContent>
            </Card>

            {/* Your Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  Your Current Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {yourSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Required Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Skills Needed for This Role
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {requiredSkills.map((skill, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg border"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${
                          skill.hasSkill ? 'bg-green-500' : 'bg-yellow-500'
                        }`} />
                        <span className="font-medium">{skill.name}</span>
                        {skill.required && (
                          <Badge variant="secondary" className="text-xs">
                            Required
                          </Badge>
                        )}
                      </div>
                      <Badge variant={skill.hasSkill ? "default" : "outline"}>
                        {skill.hasSkill ? "✓ You have this" : "Need to learn"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Learning Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Recommended Learning Resources
                </CardTitle>
                <CardDescription>
                  Start with these courses to close your skill gaps
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {learningResources.map((resource, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg border hover:border-primary transition-colors"
                    >
                      <div>
                        <h3 className="font-bold mb-1">{resource.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {resource.platform} • {resource.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-500">★</span>
                          <span className="font-medium">{resource.rating}</span>
                        </div>
                        <Button size="sm">Enroll</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Matching Jobs */}
            <Card>
              <CardHeader>
                <CardTitle>Jobs Matching Your Current Skills</CardTitle>
                <CardDescription>
                  Apply to these roles while you're learning
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { title: "Junior Frontend Developer", match: 85 },
                    { title: "React Developer", match: 80 },
                    { title: "Frontend Engineer", match: 75 }
                  ].map((job, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg border"
                    >
                      <div>
                        <h3 className="font-bold">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {job.match}% skill match
                        </p>
                      </div>
                      <Button variant="outline">View Jobs</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Button 
              size="lg" 
              variant="outline" 
              className="w-full"
              onClick={() => {
                setAnalyzed(false);
                setTargetRole("");
              }}
            >
              Analyze Another Role
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

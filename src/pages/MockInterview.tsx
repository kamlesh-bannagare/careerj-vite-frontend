import { useState } from "react";
import { Play, Send, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function MockInterview() {
  const [selectedRole, setSelectedRole] = useState("");
  const [isInterviewing, setIsInterviewing] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<any>(null);

  const questions = [
    "Tell me about yourself and your experience.",
    "What are your greatest strengths and weaknesses?",
    "Describe a challenging project you worked on.",
    "Where do you see yourself in 5 years?"
  ];

  const pastInterviews = [
    {
      id: "1",
      role: "Frontend Developer",
      date: "2 days ago",
      score: 85,
      questions: 5
    },
    {
      id: "2",
      role: "Full Stack Engineer",
      date: "1 week ago",
      score: 78,
      questions: 6
    }
  ];

  const startInterview = () => {
    if (selectedRole) {
      setIsInterviewing(true);
      setCurrentQuestion(0);
      setAnswer("");
      setFeedback(null);
    }
  };

  const submitAnswer = () => {
    // Mock AI feedback
    setFeedback({
      score: Math.floor(Math.random() * 30) + 70,
      strengths: ["Clear communication", "Relevant examples"],
      improvements: ["Add more technical details", "Be more concise"],
      suggestion: "Try to structure your answer using the STAR method (Situation, Task, Action, Result)."
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswer("");
      setFeedback(null);
    } else {
      setIsInterviewing(false);
      alert("Interview completed! Check your results in the history section.");
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Mock Interview</h1>
          <p className="text-xl text-muted-foreground">
            Practice with real-time AI feedback to ace your interviews
          </p>
        </div>

        {!isInterviewing ? (
          <div className="space-y-8">
            {/* Start Interview Card */}
            <Card>
              <CardHeader>
                <CardTitle>Start New Interview</CardTitle>
                <CardDescription>
                  Select your target role and begin practicing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Select Role</label>
                  <Select value={selectedRole} onValueChange={setSelectedRole}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="frontend">Frontend Developer</SelectItem>
                      <SelectItem value="backend">Backend Developer</SelectItem>
                      <SelectItem value="fullstack">Full Stack Engineer</SelectItem>
                      <SelectItem value="devops">DevOps Engineer</SelectItem>
                      <SelectItem value="data">Data Scientist</SelectItem>
                      <SelectItem value="product">Product Manager</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  size="lg" 
                  className="w-full"
                  onClick={startInterview}
                  disabled={!selectedRole}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Start Interview
                </Button>
              </CardContent>
            </Card>

            {/* Past Interviews */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Past Interviews</h2>
              <div className="grid gap-4">
                {pastInterviews.map((interview) => (
                  <Card key={interview.id} className="hover-lift cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-1">{interview.role}</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {interview.date} • {interview.questions} questions
                          </p>
                          <div className="flex items-center gap-2">
                            <Progress value={interview.score} className="w-32" />
                            <span className="text-sm font-medium">{interview.score}%</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-yellow-500 mb-2">
                            <Star className="h-5 w-5 fill-current" />
                            <span className="font-bold">{(interview.score / 20).toFixed(1)}</span>
                          </div>
                          <Button variant="outline" size="sm">View Details</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Progress */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <Badge variant="secondary">
                    <Clock className="h-3 w-3 mr-1" />
                    5:00
                  </Badge>
                </div>
                <Progress value={((currentQuestion + 1) / questions.length) * 100} />
              </CardContent>
            </Card>

            {/* Question */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{questions[currentQuestion]}</CardTitle>
                <CardDescription>
                  Take your time and provide a detailed answer
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Type your answer here..."
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  rows={8}
                  className="resize-none"
                />
                {!feedback && (
                  <Button 
                    size="lg" 
                    className="w-full"
                    onClick={submitAnswer}
                    disabled={!answer.trim()}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Submit Answer
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Feedback */}
            {feedback && (
              <Card className="border-primary">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>AI Feedback</CardTitle>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">{feedback.score}%</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-bold mb-2 flex items-center gap-2">
                      <span className="text-green-500">✓</span> Strengths
                    </h3>
                    <ul className="space-y-1 ml-6">
                      {feedback.strengths.map((strength: string, index: number) => (
                        <li key={index} className="text-sm">{strength}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold mb-2 flex items-center gap-2">
                      <span className="text-yellow-500">→</span> Areas for Improvement
                    </h3>
                    <ul className="space-y-1 ml-6">
                      {feedback.improvements.map((improvement: string, index: number) => (
                        <li key={index} className="text-sm">{improvement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm"><strong>Suggestion:</strong> {feedback.suggestion}</p>
                  </div>

                  <Button size="lg" className="w-full" onClick={nextQuestion}>
                    {currentQuestion < questions.length - 1 ? "Next Question" : "Finish Interview"}
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

import { useState } from "react";
import { Upload, FileText, Download, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function ResumeEnhancer() {
  const [file, setFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      analyzeResume();
    }
  };

  const analyzeResume = () => {
    setAnalyzing(true);
    // Mock AI analysis
    setTimeout(() => {
      setResults({
        score: 72,
        strengths: [
          "Clear work experience section",
          "Good use of action verbs",
          "Quantified achievements"
        ],
        improvements: [
          "Add a professional summary",
          "Include relevant keywords for ATS",
          "Optimize formatting for readability",
          "Add more technical skills"
        ],
        keywords: {
          missing: ["React", "TypeScript", "CI/CD", "Agile"],
          present: ["JavaScript", "Git", "Team Leadership"]
        }
      });
      setAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Resume Enhancer</h1>
          <p className="text-xl text-muted-foreground">
            Get instant feedback to make your resume stand out
          </p>
        </div>

        {!results ? (
          <Card>
            <CardHeader>
              <CardTitle>Upload Your Resume</CardTitle>
              <CardDescription>
                Upload your resume in PDF or DOCX format for AI analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer">
                <input
                  type="file"
                  accept=".pdf,.docx"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="resume-upload"
                />
                <label htmlFor="resume-upload" className="cursor-pointer">
                  <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-lg font-medium mb-2">
                    {file ? file.name : "Click to upload or drag and drop"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    PDF or DOCX up to 10MB
                  </p>
                </label>
              </div>

              {analyzing && (
                <div className="mt-6 space-y-3">
                  <p className="text-center text-sm text-muted-foreground">
                    Analyzing your resume...
                  </p>
                  <Progress value={66} className="w-full" />
                </div>
              )}
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {/* Score Card */}
            <Card className="border-primary">
              <CardContent className="p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Resume Score</h2>
                    <p className="text-muted-foreground">
                      Your resume is performing well, but there's room for improvement
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">
                      {results.score}%
                    </div>
                    <Badge variant="secondary">Good</Badge>
                  </div>
                </div>
                <Progress value={results.score} className="mt-6" />
              </CardContent>
            </Card>

            {/* Strengths */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Strengths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {results.strengths.map((strength: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Improvements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-yellow-500" />
                  Suggested Improvements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {results.improvements.map((improvement: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-0.5">→</span>
                      <span>{improvement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Keywords Analysis */}
            <Card>
              <CardHeader>
                <CardTitle>Keyword Analysis</CardTitle>
                <CardDescription>
                  Optimize your resume for Applicant Tracking Systems (ATS)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Missing Keywords</h3>
                  <div className="flex flex-wrap gap-2">
                    {results.keywords.missing.map((keyword: string, index: number) => (
                      <Badge key={index} variant="destructive">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Present Keywords</h3>
                  <div className="flex flex-wrap gap-2">
                    {results.keywords.present.map((keyword: string, index: number) => (
                      <Badge key={index} className="bg-green-500">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex gap-4">
              <Button size="lg" className="flex-1">
                <Download className="mr-2 h-5 w-5" />
                Download Improved Resume
              </Button>
              <Button size="lg" variant="outline" onClick={() => {
                setResults(null);
                setFile(null);
              }}>
                <Upload className="mr-2 h-5 w-5" />
                Analyze Another
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

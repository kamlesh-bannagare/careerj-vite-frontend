import { Target, Users, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About JobFinder</h1>
          <p className="text-xl text-muted-foreground">
            Empowering job seekers with AI-powered career tools
          </p>
        </div>

        <div className="prose prose-lg mx-auto mb-12">
          <p className="text-muted-foreground text-lg leading-relaxed">
            JobFinder is an AI-powered platform that combines intelligent job matching with 
            comprehensive career preparation tools. We believe that finding the right job 
            shouldn't be a matter of luck—it should be data-driven, personalized, and efficient.
          </p>
          
          <p className="text-muted-foreground text-lg leading-relaxed mt-4">
            Our platform helps job seekers practice interviews with AI, enhance their resumes, 
            identify skill gaps, work on real projects, and connect with industry mentors—all 
            in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader className="text-center">
              <Target className="h-12 w-12 mx-auto text-primary mb-4" />
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              To democratize career success by providing everyone with AI-powered tools and expert guidance.
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Zap className="h-12 w-12 mx-auto text-primary mb-4" />
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              A world where everyone has equal access to career opportunities and preparation resources.
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Users className="h-12 w-12 mx-auto text-primary mb-4" />
              <CardTitle>Our Values</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              Transparency, innovation, and empowerment drive everything we do.
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

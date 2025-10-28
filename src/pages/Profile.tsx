import { Camera, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function Profile() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">My Profile</h1>
          <p className="text-muted-foreground">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="space-y-6">
          {/* Profile Picture */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Picture</CardTitle>
              <CardDescription>Update your profile photo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-6">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Button variant="outline">
                  <Camera className="mr-2 h-4 w-4" />
                  Change Photo
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea 
                  id="bio" 
                  rows={4}
                  defaultValue="Passionate frontend developer with 5 years of experience..."
                />
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
              <CardDescription>Add your technical and soft skills</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Node.js", "Python", "AWS", "Docker"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                    {skill}
                    <button className="ml-2 hover:text-destructive">×</button>
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Input placeholder="Add a skill..." />
                <Button>Add</Button>
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card>
            <CardHeader>
              <CardTitle>Work Experience</CardTitle>
              <CardDescription>Add your work history</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="border-l-2 border-primary pl-4 pb-4">
                  <h3 className="font-bold">Senior Frontend Developer</h3>
                  <p className="text-sm text-muted-foreground">TechCorp • 2021 - Present</p>
                  <p className="text-sm mt-2">
                    Led the development of the company's main product...
                  </p>
                </div>
                <div className="border-l-2 border-muted pl-4">
                  <h3 className="font-bold">Frontend Developer</h3>
                  <p className="text-sm text-muted-foreground">StartupHub • 2019 - 2021</p>
                  <p className="text-sm mt-2">
                    Developed and maintained multiple client projects...
                  </p>
                </div>
              </div>
              <Button variant="outline">Add Experience</Button>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button size="lg">
              <Save className="mr-2 h-5 w-5" />
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

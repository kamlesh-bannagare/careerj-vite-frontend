"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Shield, Lock, Eye, Database, Bell, Users, FileText, Mail } from "lucide-react"

export default function PrivacyPage() {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: `We collect information you provide directly to us, such as when you create an account, update your profile, apply for jobs, or contact us for support. This may include:
      
• Personal information (name, email address, phone number)
• Professional information (resume, work history, skills, education)
• Account credentials
• Communication preferences
• Any other information you choose to provide`
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: `We use the information we collect to:
      
• Provide, maintain, and improve our services
• Match you with relevant job opportunities
• Connect you with mentors and employers
• Send you technical notices, updates, and support messages
• Respond to your comments, questions, and requests
• Monitor and analyze trends, usage, and activities
• Detect, investigate, and prevent fraudulent transactions`
    },
    {
      icon: Users,
      title: "Information Sharing",
      content: `We may share your information in the following circumstances:
      
• With employers when you apply for jobs through our platform
• With mentors you choose to connect with
• With service providers who assist in our operations
• In response to legal requests or to protect our rights
• With your consent or at your direction
      
We never sell your personal information to third parties.`
    },
    {
      icon: Lock,
      title: "Data Security",
      content: `We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. This includes:
      
• Encryption of data in transit and at rest
• Regular security assessments
• Access controls and authentication measures
• Employee training on data protection
• Incident response procedures`
    },
    {
      icon: Bell,
      title: "Your Choices",
      content: `You have several choices regarding your personal information:
      
• Account Information: You can update, correct, or delete your account information at any time by logging into your account settings.
• Communications: You can opt out of receiving promotional emails by following the instructions in those emails.
• Cookies: Most web browsers accept cookies by default, but you can modify your browser settings to decline cookies.
• Data Portability: You can request a copy of your data in a portable format.`
    },
    {
      icon: FileText,
      title: "Data Retention",
      content: `We retain your personal information for as long as your account is active or as needed to provide you services. We may also retain and use your information as necessary to:
      
• Comply with legal obligations
• Resolve disputes
• Enforce our agreements
      
When you delete your account, we will delete or anonymize your personal information within 30 days, unless we are required to retain it for legal purposes.`
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 pt-24 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: January 1, 2025
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <p className="text-muted-foreground leading-relaxed">
              JobFinder ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application, and services (collectively, the "Services"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Services.
            </p>
          </CardContent>
        </Card>

        {/* Policy Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold mb-4">{section.title}</h2>
                    <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-12" />

        {/* Contact Section */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="space-y-1 text-sm">
                  <p><strong>Email:</strong> privacy@jobfinder.com</p>
                  <p><strong>Address:</strong> 123 Career Street, San Francisco, CA 94102</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Changes Notice */}
        <p className="text-sm text-muted-foreground text-center mt-8">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
        </p>
      </div>
    </div>
  )
}
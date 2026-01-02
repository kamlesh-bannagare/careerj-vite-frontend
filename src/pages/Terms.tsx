"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Scale, FileCheck, AlertTriangle, Ban, CreditCard, Shield, Gavel, Mail } from "lucide-react"

export default function TermsPage() {
  const sections = [
    {
      icon: FileCheck,
      title: "Acceptance of Terms",
      content: `By accessing or using JobFinder's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
      
These terms apply to all users of the platform, including job seekers, employers, mentors, and visitors.`
    },
    {
      icon: Shield,
      title: "User Accounts",
      content: `When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
      
You are responsible for:
• Safeguarding the password that you use to access the Services
• Any activities or actions under your account
• Restricting access to your computer and account
• Notifying us immediately of any unauthorized use

You must be at least 18 years old to create an account.`
    },
    {
      icon: Ban,
      title: "Prohibited Uses",
      content: `You may not use our Services:
      
• For any unlawful purpose or to solicit others to perform unlawful acts
• To violate any international, federal, or state regulations, rules, or laws
• To infringe upon or violate our intellectual property rights or others
• To harass, abuse, insult, harm, defame, or discriminate
• To submit false or misleading information
• To upload or transmit viruses or malicious code
• To spam, phish, or collect personal information without consent
• To interfere with or circumvent the security features of the Services`
    },
    {
      icon: CreditCard,
      title: "Payments and Subscriptions",
      content: `Some of our Services require payment. By subscribing to a paid plan, you agree to:
      
• Pay the applicable fees for your selected plan
• Provide accurate and complete billing information
• Update your payment method as needed

Subscription renewals are automatic unless cancelled before the renewal date. Refunds are provided in accordance with our refund policy. The Job Guarantee Program has specific refund terms outlined separately.`
    },
    {
      icon: AlertTriangle,
      title: "Limitation of Liability",
      content: `To the maximum extent permitted by law, JobFinder shall not be liable for:
      
• Any indirect, incidental, special, consequential, or punitive damages
• Any loss of profits, data, use, goodwill, or other intangible losses
• Any damages resulting from unauthorized access to or use of our servers
• Any interruption or cessation of transmission to or from our Services
• Any bugs, viruses, or similar that may be transmitted through our Services
• Any errors or omissions in any content or for any loss or damage

Our liability is limited to the amount you paid us, if any, in the past 12 months.`
    },
    {
      icon: Scale,
      title: "Intellectual Property",
      content: `The Services and their original content, features, and functionality are and will remain the exclusive property of JobFinder and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without prior written consent.
      
Content you upload remains yours, but you grant us a license to use, modify, and display it in connection with providing the Services.`
    },
    {
      icon: Gavel,
      title: "Dispute Resolution",
      content: `Any disputes arising out of or relating to these Terms or the Services will be resolved through:
      
1. Informal negotiation (within 30 days of written notice)
2. Binding arbitration in accordance with the rules of the American Arbitration Association
3. If arbitration is not applicable, exclusive jurisdiction in the state and federal courts of California

You waive any right to a jury trial or to participate in a class action lawsuit or class-wide arbitration.`
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 pt-24 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Scale className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: January 1, 2025
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <p className="text-muted-foreground leading-relaxed">
              Welcome to JobFinder! These Terms of Service ("Terms") govern your use of our website, mobile application, and services (collectively, the "Services") operated by JobFinder, Inc. ("Company", "we", "us", or "our"). By accessing or using the Services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Services.
            </p>
          </CardContent>
        </Card>

        {/* Terms Sections */}
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

        {/* Termination */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold mb-4">Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Services will immediately cease. If you wish to terminate your account, you may simply discontinue using the Services or contact us to delete your account.
            </p>
          </CardContent>
        </Card>

        {/* Changes */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Services after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </CardContent>
        </Card>

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
                  If you have any questions about these Terms, please contact us at:
                </p>
                <div className="space-y-1 text-sm">
                  <p><strong>Email:</strong> legal@jobfinder.com</p>
                  <p><strong>Address:</strong> 123 Career Street, San Francisco, CA 94102</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
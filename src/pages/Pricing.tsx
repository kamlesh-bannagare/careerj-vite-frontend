"use client"

import { useState } from "react"
// import Link from "next/link"
import { Link } from "react-router-dom"
import Navigation from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Zap,
  Users,
  Building,
  Star,
  ArrowRight
} from "lucide-react"

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  const jobSeekerPlans = [
    {
      name: "Free",
      price: { monthly: 0, yearly: 0 },
      description: "Perfect for getting started with your job search",
      popular: false,
      features: [
        "Browse unlimited jobs",
        "Apply to 5 jobs per month",
        "Basic profile",
        "Email job alerts",
        "Resume builder (basic)",
        "Community access"
      ]
    },
    {
      name: "Pro",
      price: { monthly: 29, yearly: 290 },
      description: "For serious job seekers who want an edge",
      popular: true,
      features: [
        "Everything in Free",
        "Unlimited job applications",
        "AI-powered job matching",
        "5 mock interviews per month",
        "Resume AI enhancement",
        "Skill gap analysis",
        "Priority application review",
        "Advanced analytics",
        "Application tracking"
      ]
    },
    {
      name: "Premium",
      price: { monthly: 79, yearly: 790 },
      description: "Complete career acceleration package",
      popular: false,
      features: [
        "Everything in Pro",
        "Unlimited mock interviews",
        "1-on-1 mentor sessions (2/month)",
        "Interview guarantee program",
        "Personalized career coaching",
        "LinkedIn profile optimization",
        "Salary negotiation coaching",
        "Direct recruiter connections",
        "Job offer review assistance"
      ]
    }
  ]

  const employerPlans = [
    {
      name: "Startup",
      price: { monthly: 199, yearly: 1990 },
      description: "For small teams and startups",
      features: [
        "Post up to 5 active jobs",
        "Access to candidate database",
        "Basic applicant tracking",
        "Email support",
        "Standard job visibility"
      ]
    },
    {
      name: "Business",
      price: { monthly: 499, yearly: 4990 },
      description: "For growing companies",
      popular: true,
      features: [
        "Post up to 20 active jobs",
        "Advanced candidate search",
        "AI candidate matching",
        "Team collaboration tools",
        "Priority job placement",
        "Analytics dashboard",
        "Phone & email support",
        "Branded company page"
      ]
    },
    {
      name: "Enterprise",
      price: { monthly: "Custom", yearly: "Custom" },
      description: "For large organizations",
      features: [
        "Unlimited job postings",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced ATS features",
        "White-label options",
        "Custom reporting",
        "SLA guarantee",
        "On-site training"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background">

      <div className="container mx-auto px-4 py-8 pt-24 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the plan that's right for you. All plans include a 14-day money-back guarantee.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-2 p-1 rounded-lg bg-muted">
            <Button
              variant={billingCycle === "monthly" ? "default" : "ghost"}
              onClick={() => setBillingCycle("monthly")}
              size="sm"
            >
              Monthly
            </Button>
            <Button
              variant={billingCycle === "yearly" ? "default" : "ghost"}
              onClick={() => setBillingCycle("yearly")}
              size="sm"
            >
              Yearly
              <Badge variant="secondary" className="ml-2">Save 17%</Badge>
            </Button>
          </div>
        </div>

        {/* Job Seeker Plans */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Users className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">For Job Seekers</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {jobSeekerPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.popular ? "border-primary border-2 shadow-lg" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="pt-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">
                        ${billingCycle === "monthly" ? plan.price.monthly : plan.price.yearly}
                      </span>
                      {plan.price.monthly > 0 && (
                        <span className="text-muted-foreground">
                          /{billingCycle === "monthly" ? "mo" : "yr"}
                        </span>
                      )}
                    </div>
                    {billingCycle === "yearly" && plan.price.monthly > 0 && (
                      <p className="text-sm text-muted-foreground mt-1">
                        ${(plan.price.yearly / 12).toFixed(2)}/month, billed annually
                      </p>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <Link to="/signup">
                    <Button
                      className="w-full mb-6"
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.name === "Free" ? "Get Started" : "Start Free Trial"}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Employer Plans */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Building className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">For Employers</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {employerPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.popular ? "border-primary border-2 shadow-lg" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="pt-4">
                    <div className="flex items-baseline gap-2">
                      {typeof plan.price.monthly === "number" ? (
                        <>
                          <span className="text-4xl font-bold">
                            ${billingCycle === "monthly" ? plan.price.monthly : plan.price.yearly}
                          </span>
                          <span className="text-muted-foreground">
                            /{billingCycle === "monthly" ? "mo" : "yr"}
                          </span>
                        </>
                      ) : (
                        <span className="text-4xl font-bold">{plan.price.monthly}</span>
                      )}
                    </div>
                    {billingCycle === "yearly" && typeof plan.price.yearly === "number" && (
                      <p className="text-sm text-muted-foreground mt-1">
                        ${(plan.price.yearly / 12).toFixed(2)}/month, billed annually
                      </p>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <Link to={plan.name === "Enterprise" ? "/contact" : "/company-dashboard"}>
                    <Button
                      className="w-full mb-6"
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-bold mb-2">Can I change plans later?</h3>
              <p className="text-muted-foreground text-sm">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                and we'll prorate any billing differences.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Is there a free trial?</h3>
              <p className="text-muted-foreground text-sm">
                Yes, all paid plans include a 14-day free trial. No credit card required to start.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground text-sm">
                We accept all major credit cards (Visa, MasterCard, American Express) and PayPal.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Can I cancel anytime?</h3>
              <p className="text-muted-foreground text-sm">
                Absolutely. You can cancel your subscription at any time with no cancellation fees. 
                You'll have access until the end of your billing period.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-0">
            <CardContent className="pt-12 pb-12">
              <Zap className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
                Join thousands of job seekers and companies using JobFinder to find the perfect match
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup">
                  <Button size="lg" variant="secondary">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

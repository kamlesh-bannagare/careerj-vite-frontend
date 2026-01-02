"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  avatar: string
  content: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Frontend Developer",
    company: "Google",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    content: "JobFinder completely transformed my job search. The AI mock interviews helped me gain confidence, and I landed my dream job at Google within 2 months!",
    rating: 5
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Backend Engineer",
    company: "Microsoft",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    content: "The Job Guarantee Program was a game-changer. My mentor helped me identify skill gaps and the mock interviews prepared me for real scenarios. Worth every penny!",
    rating: 5
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "Product Manager",
    company: "Amazon",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    content: "I was struggling with system design interviews until I used JobFinder's resources. The platform's personalized approach helped me crack interviews at top companies.",
    rating: 5
  },
  {
    id: 4,
    name: "Arjun Mehta",
    role: "Full Stack Developer",
    company: "Stripe",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    content: "The resume enhancer gave me insights I never thought of. Combined with the skill analyzer, I knew exactly what to focus on. Got 3 offers in my first month!",
    rating: 5
  },
  {
    id: 5,
    name: "Sneha Reddy",
    role: "Data Scientist",
    company: "Meta",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop",
    content: "The mentorship program connected me with an amazing mentor from Meta. Their guidance on real projects helped me build a portfolio that stood out.",
    rating: 5
  },
  {
    id: 6,
    name: "Vikram Singh",
    role: "DevOps Engineer",
    company: "Netflix",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    content: "From a fresher to a DevOps role at Netflix in 3 months! The live projects gave me real-world experience that companies value. Highly recommend!",
    rating: 5
  }
]

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Quote className="w-4 h-4" />
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hear From Our Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thousands of professionals have accelerated their careers with JobFinder
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={cardVariants}>
              <Card className="h-full hover:border-primary/30 transition-all hover:shadow-lg">
                <CardContent className="pt-6">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
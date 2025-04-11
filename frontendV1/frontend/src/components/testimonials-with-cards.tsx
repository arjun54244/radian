"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    content:
      "This product has completely transformed our workflow. The intuitive interface and powerful features have saved us countless hours.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    avatar: "/placeholder.svg?height=80&width=80",
    company: "TechCorp",
  },
  {
    id: 2,
    content:
      "I've tried many similar solutions, but this one stands out for its reliability and exceptional customer support. Highly recommended!",
    author: "Michael Chen",
    role: "CTO",
    avatar: "/placeholder.svg?height=80&width=80",
    company: "Innovate Inc.",
  },
  {
    id: 3,
    content:
      "The ROI we've seen since implementing this solution has been remarkable. It's rare to find a product that delivers on all its promises.",
    author: "Emily Rodriguez",
    role: "Operations Manager",
    avatar: "/placeholder.svg?height=80&width=80",
    company: "Global Systems",
  },
  {
    id: 4,
    content:
      "What impressed me most was how quickly our team adapted to the platform. The learning curve was minimal, and the benefits were immediate.",
    author: "David Kim",
    role: "Product Lead",
    avatar: "/placeholder.svg?height=80&width=80",
    company: "NextGen Solutions",
  },
  {
    id: 5,
    content:
      "The customer service team went above and beyond to ensure our success. Their dedication to our satisfaction was truly impressive.",
    author: "Lisa Thompson",
    role: "Customer Success Manager",
    avatar: "/placeholder.svg?height=80&width=80",
    company: "Elevate Enterprises",
  },
  {
    id: 6,
    content:
      "This solution has become an essential part of our tech stack. I can't imagine running our business without it now.",
    author: "James Wilson",
    role: "Founder & CEO",
    avatar: "/placeholder.svg?height=80&width=80",
    company: "Startup Ventures",
  },
]

export default function TestimonialsCards() {
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Auto slide functionality
  useEffect(() => {
    if (!isPaused && containerRef.current) {
      const scrollAmount = 1 // pixels per frame
      let animationFrameId: number

      const scroll = () => {
        if (containerRef.current) {
          containerRef.current.scrollLeft += scrollAmount

          // Reset scroll position when reaching the end
          if (containerRef.current.scrollLeft >= containerRef.current.scrollWidth - containerRef.current.clientWidth) {
            containerRef.current.scrollLeft = 0
          }

          animationFrameId = requestAnimationFrame(scroll)
        }
      }

      animationFrameId = requestAnimationFrame(scroll)

      return () => {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isPaused])

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">What Our Clients Say</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Don&apos;t just take our word for it. Here&apos;s what our customers have to say about their experience with our
          product.
        </p>

        <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <div ref={containerRef} className="flex overflow-x-hidden gap-6 py-4 px-2 scroll-smooth">
            {/* Duplicate testimonials for infinite scroll effect */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card
                key={`${testimonial.id}-${index}`}
                className={cn("flex-shrink-0 w-full max-w-sm transition-all duration-300 hover:shadow-md")}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col h-full min-h-[220px]">
                    <div className="mb-6">
                      <svg className="h-6 w-6 text-primary mb-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-card-foreground">{testimonial.content}</p>
                    </div>
                    <div className="mt-auto flex items-center">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                        <AvatarFallback>
                          {testimonial.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Gradient overlays to indicate more content */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
}


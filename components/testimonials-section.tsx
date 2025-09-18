import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Frontend Developer at Google",
    content:
      "The courses here transformed my career. The hands-on projects and expert guidance helped me land my dream job.",
    rating: 5,
    avatar: "/professional-woman-smiling.png",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Data Scientist at Microsoft",
    content:
      "Exceptional quality content and supportive community. The learning paths are perfectly structured for career growth.",
    rating: 5,
    avatar: "/professional-man-smiling.png",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UX Designer at Airbnb",
    content:
      "The design courses are world-class. I gained practical skills that I use every day in my professional work.",
    rating: 5,
    avatar: "/professional-woman-designer.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-space-grotesk)] text-balance">
            What Our Students Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-[family-name:var(--font-dm-sans)] text-pretty max-w-2xl mx-auto">
            Join thousands of successful learners who have transformed their careers with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-card-foreground mb-6 font-[family-name:var(--font-dm-sans)] leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-card-foreground font-[family-name:var(--font-space-grotesk)]">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground font-[family-name:var(--font-dm-sans)]">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

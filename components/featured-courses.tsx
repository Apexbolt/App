import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    description: "Master modern web development with React, Node.js, and cloud deployment strategies.",
    image: "/modern-web-development-coding-screen.png",
    duration: "12 weeks",
    students: "2.4k",
    rating: 4.9,
    level: "Intermediate",
    price: "$299",
  },
  {
    id: 2,
    title: "Data Science & Analytics",
    description: "Learn Python, machine learning, and data visualization to become a data expert.",
    image: "/data-science-analytics-charts-graphs.jpg",
    duration: "16 weeks",
    students: "1.8k",
    rating: 4.8,
    level: "Beginner",
    price: "$399",
  },
  {
    id: 3,
    title: "UI/UX Design Mastery",
    description: "Create stunning user experiences with design thinking and modern tools.",
    image: "/ui-ux-design-interface-mockups.jpg",
    duration: "10 weeks",
    students: "3.1k",
    rating: 4.9,
    level: "All Levels",
    price: "$249",
  },
]

export function FeaturedCourses() {
  return (
    <section id="courses" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-space-grotesk)] text-balance">
            Featured Courses
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-[family-name:var(--font-dm-sans)] text-pretty max-w-2xl mx-auto">
            Discover our most popular courses designed by industry experts to accelerate your career growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {course.level}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-foreground">{course.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-card-foreground font-[family-name:var(--font-space-grotesk)] line-clamp-2">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground font-[family-name:var(--font-dm-sans)] line-clamp-2">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students} students</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">
                    {course.price}
                  </span>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Enroll Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg border-border hover:bg-secondary bg-transparent"
          >
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  )
}

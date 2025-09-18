import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

const learningPaths = [
  {
    id: 1,
    title: "Frontend Developer",
    description: "Master modern frontend technologies and become a skilled React developer.",
    courses: ["HTML & CSS Fundamentals", "JavaScript Mastery", "React Development", "Advanced Frontend"],
    duration: "6 months",
    level: "Beginner to Advanced",
    color: "from-blue-500/10 to-blue-600/5",
  },
  {
    id: 2,
    title: "Data Scientist",
    description: "Transform data into insights with Python, ML, and statistical analysis.",
    courses: ["Python Basics", "Data Analysis", "Machine Learning", "Deep Learning"],
    duration: "8 months",
    level: "Beginner to Expert",
    color: "from-green-500/10 to-green-600/5",
  },
  {
    id: 3,
    title: "Product Designer",
    description: "Create exceptional user experiences through design thinking and prototyping.",
    courses: ["Design Principles", "User Research", "Prototyping", "Design Systems"],
    duration: "5 months",
    level: "All Levels",
    color: "from-purple-500/10 to-purple-600/5",
  },
]

export function LearningPaths() {
  return (
    <section id="paths" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-space-grotesk)] text-balance">
            Structured Learning Paths
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-[family-name:var(--font-dm-sans)] text-pretty max-w-2xl mx-auto">
            Follow our carefully designed learning journeys to master in-demand skills step by step.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {learningPaths.map((path) => (
            <Card
              key={path.id}
              className="relative overflow-hidden border-border bg-card group hover:shadow-lg transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${path.color} opacity-50`}></div>
              <CardHeader className="relative z-10 pb-4">
                <CardTitle className="text-xl font-semibold text-card-foreground font-[family-name:var(--font-space-grotesk)]">
                  {path.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground font-[family-name:var(--font-dm-sans)]">
                  {path.description}
                </CardDescription>
                <div className="flex items-center justify-between text-sm text-muted-foreground mt-4">
                  <span>{path.duration}</span>
                  <span>{path.level}</span>
                </div>
              </CardHeader>
              <CardContent className="relative z-10 pt-0">
                <div className="space-y-3 mb-6">
                  {path.courses.map((course, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-card-foreground font-[family-name:var(--font-dm-sans)]">
                        {course}
                      </span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:translate-x-1 transition-transform">
                  Start Learning Path
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

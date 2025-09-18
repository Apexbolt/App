import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight font-[family-name:var(--font-space-grotesk)] text-balance">
              Transform Your <span className="text-primary">Learning</span> Journey
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed font-[family-name:var(--font-dm-sans)] text-pretty">
              Join thousands of learners advancing their careers through our expertly crafted courses, interactive
              learning paths, and world-class educational content.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold"
              >
                Start Learning Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-semibold border-border hover:bg-secondary bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            <div className="mt-12 flex items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">
                  50K+
                </div>
                <div className="text-sm text-muted-foreground">Active Learners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">
                  200+
                </div>
                <div className="text-sm text-muted-foreground">Expert Courses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">
                  95%
                </div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative z-10">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 border border-border">
                <div className="h-full w-full bg-card rounded-2xl p-6 flex flex-col justify-center items-center space-y-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                    <Play className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-card-foreground font-[family-name:var(--font-space-grotesk)]">
                      Interactive Learning
                    </h3>
                    <p className="text-muted-foreground mt-2 font-[family-name:var(--font-dm-sans)]">
                      Engage with hands-on projects and real-world scenarios
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Background geometric shapes */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

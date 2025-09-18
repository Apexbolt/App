import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-[family-name:var(--font-space-grotesk)] text-balance">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground font-[family-name:var(--font-dm-sans)] text-pretty max-w-2xl mx-auto">
            Join our community of learners and unlock your potential with expert-led courses, hands-on projects, and
            career-focused learning paths.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold border-border hover:bg-secondary bg-transparent"
            >
              Explore Courses
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground font-[family-name:var(--font-dm-sans)]">
            No credit card required • 7-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}

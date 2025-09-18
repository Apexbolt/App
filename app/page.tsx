import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedCourses } from "@/components/featured-courses"
import { LearningPaths } from "@/components/learning-paths"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StatsSection />
      <FeaturedCourses />
      <LearningPaths />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}

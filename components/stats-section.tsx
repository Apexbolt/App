export function StatsSection() {
  const stats = [
    { number: "50,000+", label: "Active Students" },
    { number: "200+", label: "Expert Instructors" },
    { number: "500+", label: "Courses Available" },
    { number: "95%", label: "Completion Rate" },
  ]

  return (
    <section className="py-16 bg-primary/5 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-muted-foreground mt-2 font-[family-name:var(--font-dm-sans)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

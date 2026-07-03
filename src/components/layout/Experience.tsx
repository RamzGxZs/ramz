import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"

const experiences = [
  {
    title: "Fullstack Web Developer",
    company: "PT. Mudapedia Digital Indonesia",
    period: "2023 - 2025",
    highlights: [
      "Developed more than 4 websites with a focus on performance and user experience",
      "Web3 based development with blockchain and smart contracts integration",
      "Team collaboration in digital development using Agile methodology",
    ],
  },
  {
    title: "Fullstack Web Developer",
    company: "Freelance",
    period: "2023 - Now",
    highlights: [
      "Developed more than 10 websites with a focus on performance and user experience",
      "Web3 based development with blockchain and smart contracts integration",
      "Team collaboration in digital development using Agile methodology",
    ],
  },
]

function ExperienceCard({ experience, index }: { experience: (typeof experiences)[0]; index: number }) {
  const { ref, inView } = useScrollAnimation({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`timeline-item transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="glass-subtle rounded-3xl p-8 hover-lift group relative overflow-hidden">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--ember)]" />

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-[var(--cream)] mb-1">{experience.title}</h3>
            <p className="text-[var(--ember)] font-medium">{experience.company}</p>
          </div>
          <Badge
            variant="outline"
            className="mt-3 md:mt-0 w-fit border-[var(--ember)]/30 text-[var(--ember)] bg-[var(--ember)]/5"
          >
            {experience.period}
          </Badge>
        </div>

        {/* Highlights */}
        <ul className="space-y-3">
          {experience.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start group/item">
              <div className="mr-3 mt-1 bg-[var(--ember)]/10 rounded-full p-1.5 transition-transform duration-300 group-hover/item:scale-110">
                <ChevronRight className="h-3 w-3 text-[var(--ember)]" />
              </div>
              <span className="text-[var(--cream-muted)]">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function Experience() {
  const { ref: headerRef, inView: headerInView } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="experience" className="section-padding bg-[var(--obsidian)]">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-700 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <span className="text-caption text-[var(--ember)] mb-4 block">Where I&apos;ve worked</span>
          <h2 className="text-heading text-[var(--cream)]">Experience</h2>
        </div>

        {/* Timeline */}
        <div className="timeline max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

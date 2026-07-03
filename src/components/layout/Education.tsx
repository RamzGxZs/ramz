"use client"

import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { Badge } from "@/components/ui/badge"

const education = [
  {
    school: "STIKOM PGRI Banyuwangi",
    degree: "Bachelor of Informatics Engineering",
    period: "2021 - 2024",
    gpa: "3.83",
  },
  {
    school: "SMK Negeri 1 Banyuwangi",
    degree: "Teknik Komputer & Jaringan",
    period: "2019 - 2021",
    gpa: null,
  },
]

function EducationCard({ item, index }: { item: (typeof education)[0]; index: number }) {
  const { ref, inView } = useScrollAnimation({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`timeline-item transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
			<div className="backdrop-blur-xs bg-white/[0.03] rounded-3xl p-8 hover-lift group relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--ember)]" />

        <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-[var(--cream)]">{item.school}</h3>
          <Badge
            variant="outline"
            className="mt-3 md:mt-0 w-fit border-[var(--ember)]/30 text-[var(--ember)] bg-[var(--ember)]/5"
          >
            {item.period}
          </Badge>
        </div>

        <p className="text-[var(--ember)] font-medium mb-3">{item.degree}</p>

        {item.gpa && (
          <p className="text-[var(--cream-muted)] flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[var(--ember)]" />
            GPA: {item.gpa}
          </p>
        )}
      </div>
    </div>
  )
}

export function Education() {
  const { ref: headerRef, inView: headerInView } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="education" className="section-padding section-blur">
      <div className="container mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-700 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <span className="text-caption text-[var(--ember)] mb-4 block">My background</span>
          <h2 className="text-heading text-[var(--cream)]">Education</h2>
        </div>

        <div className="timeline max-w-3xl mx-auto">
          {education.map((item, index) => (
            <EducationCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

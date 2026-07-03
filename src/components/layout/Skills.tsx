"use client"

import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const skills = [
  { name: "Frontend Development", level: 95, icon: "\u{1F310}", description: "React, Next.js, TypeScript", highlight: true },
  { name: "Backend Development", level: 85, icon: "\u2699\uFE0F", description: "Node.js, Express, APIs", highlight: false },
  { name: "Mobile App Development", level: 80, icon: "\u{1F4F1}", description: "React Native, Flutter", highlight: false },
  { name: "Web Design", level: 70, icon: "\u{1F3A8}", description: "UI/UX, Figma, Tailwind", highlight: false },
  { name: "SEO Optimization", level: 85, icon: "\u{1F50D}", description: "Technical SEO, Analytics", highlight: false },
  { name: "English & ID", level: 95, icon: "\u{1F5E3}\uFE0F", description: "Fluent Communication", highlight: false },
]

function SkillCard({ skill, index }: { skill: (typeof skills)[0]; index: number }) {
  const { ref, inView } = useScrollAnimation({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className={`h-full rounded-2xl p-6 md:p-8 group cursor-default relative overflow-hidden transition-all duration-300 ${
        skill.highlight
				? "bg-white/[0.03] backdrop-blur-xs border border-white/[0.08] hover:border-[var(--ember)]/30"
          : "bg-white/[0.03] backdrop-blur-xs border border-white/[0.08] hover:border-[var(--ember)]/30"
      }`}>
        <div className={`text-3xl mb-4 transition-transform duration-300  ${
          skill.highlight ? "opacity-90" : ""
        }`}>{skill.icon}</div>

        <h3 className={`text-lg font-semibold mb-1 ${
          skill.highlight ? "text-white" : "text-[var(--cream)]"
        }`}>{skill.name}</h3>
        <p className={`text-sm mb-5 ${
          skill.highlight ? "text-white/70" : "text-[var(--ash)]"
        }`}>{skill.description}</p>

        <div className={`w-full rounded-full h-1.5 overflow-hidden ${
          skill.highlight ? "bg-white/20" : "bg-white/[0.06]"
        }`}>
          <div
            className="h-full rounded-full transition-all duration-1000 ease-out"
            style={{
              width: inView ? `${skill.level}%` : "0%",
              background: skill.highlight ? "white" : "var(--ember)",
              transitionDelay: `${300 + index * 80}ms`,
            }}
          />
        </div>
        <div className={`mt-2 text-right text-xs font-medium ${
          skill.highlight ? "text-white/60" : "text-[var(--ash)]"
        }`}>{skill.level}%</div>
      </div>
    </div>
  )
}

export function Skills() {
  const { ref: headerRef, inView: headerInView } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="skills" className="section-padding section-blur">
      <div className="container mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <span className="text-caption text-[var(--ember)] mb-4 block">What I do</span>
          <h2 className="text-heading text-[var(--cream)]">Skills</h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <SkillCard skill={skills[0]} index={0} />
          </div>
          <div>
            <SkillCard skill={skills[1]} index={1} />
          </div>
          <div>
            <SkillCard skill={skills[2]} index={2} />
          </div>
          <div>
            <SkillCard skill={skills[3]} index={3} />
          </div>
          <div>
            <SkillCard skill={skills[4]} index={4} />
          </div>
          <div className="md:col-span-3">
            <SkillCard skill={skills[5]} index={5} />
          </div>
        </div>
      </div>
    </section>
  )
}

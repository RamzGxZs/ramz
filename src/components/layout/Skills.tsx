import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const skills = [
  { name: "Frontend Development", level: 95, icon: "🌐", description: "React, Next.js, TypeScript", highlight: true },
  { name: "Backend Development", level: 85, icon: "⚙️", description: "Node.js, Express, APIs", highlight: false },
  { name: "Mobile App Development", level: 80, icon: "📱", description: "React Native, Flutter", highlight: false },
  { name: "Web Design", level: 70, icon: "🎨", description: "UI/UX, Figma, Tailwind", highlight: false },
  { name: "SEO Optimization", level: 85, icon: "🔍", description: "Technical SEO, Analytics", highlight: false },
  { name: "English & ID", level: 95, icon: "🗣️", description: "Fluent Communication", highlight: false },
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
          ? "bg-[var(--ember)] text-white"
          : "bg-[var(--charcoal)] border border-[var(--slate)]/40 hover:border-[var(--ember)]/30"
      }`}>
        {/* Icon */}
        <div className={`text-3xl mb-4 transition-transform duration-300 group-hover:scale-110 ${
          skill.highlight ? "opacity-90" : ""
        }`}>{skill.icon}</div>

        {/* Skill name */}
        <h3 className={`text-lg font-semibold mb-1 ${
          skill.highlight ? "text-white" : "text-[var(--cream)]"
        }`}>{skill.name}</h3>
        <p className={`text-sm mb-5 ${
          skill.highlight ? "text-white/70" : "text-[var(--ash)]"
        }`}>{skill.description}</p>

        {/* Progress bar */}
        <div className={`w-full rounded-full h-1.5 overflow-hidden ${
          skill.highlight ? "bg-white/20" : "bg-[var(--obsidian)]"
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
    <section id="skills" className="section-padding bg-[var(--obsidian-light)]">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <span className="text-caption text-[var(--ember)] mb-4 block">What I do</span>
          <h2 className="text-heading text-[var(--cream)]">Skills</h2>
        </div>

        {/* Custom grid layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Row 1: Frontend (large) + Backend */}
          <div className="md:col-span-2">
            <SkillCard skill={skills[0]} index={0} />
          </div>
          <div>
            <SkillCard skill={skills[1]} index={1} />
          </div>

          {/* Row 2: Mobile + Web Design + SEO */}
          <div>
            <SkillCard skill={skills[2]} index={2} />
          </div>
          <div>
            <SkillCard skill={skills[3]} index={3} />
          </div>
          <div>
            <SkillCard skill={skills[4]} index={4} />
          </div>

          {/* Row 3: Languages (full width) */}
          <div className="md:col-span-3">
            <SkillCard skill={skills[5]} index={5} />
          </div>
        </div>
      </div>
    </section>
  )
}

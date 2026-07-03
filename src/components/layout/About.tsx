"use client"

import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export function About() {
  const { ref: headerRef, inView: headerInView } = useScrollAnimation({ threshold: 0.1 })
  const { ref: contentRef, inView: contentInView } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="about" className="section-padding section-blur">
      <div className="container mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-700 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <span className="text-caption text-[var(--ember)] mb-4 block">Get to know me</span>
          <h2 className="text-heading text-[var(--cream)]">About Me</h2>
        </div>

        <div
          ref={contentRef}
          className={`max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            contentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
					<div className="bg-white/[0.05] rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-xs">
            <div className="absolute top-0 left-0 w-1 h-full bg-[var(--ember)]" />

            <p className="text-body-lg text-[var(--cream-muted)] leading-relaxed pl-6">
              I am a software engineer focusing on website and mobile application development
              using the JavaScript programming language. I have contributed to the creation of
              more than four websites, including Web3-based ones. With my experience, I always
              strive to produce digital products that are not only functional but also provide
              a good user experience.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-10 pl-6 border-t border-white/10 pt-8">
              <div>
                <div className="text-3xl font-bold text-[var(--ember)] mb-1">10+</div>
                <div className="text-sm text-[var(--ash)]">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--ember)] mb-1">3+</div>
                <div className="text-sm text-[var(--ash)]">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--ember)] mb-1">4+</div>
                <div className="text-sm text-[var(--ash)]">Web3 Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

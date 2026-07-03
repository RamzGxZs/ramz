import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { SOCIALS } from "@/lib/constants"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { ref: titleRef, inView: titleInView } = useScrollAnimation({ threshold: 0.1 })
  const { ref: subtitleRef, inView: subtitleInView } = useScrollAnimation({ threshold: 0.1 })
  const { ref: ctaRef, inView: ctaInView } = useScrollAnimation({ threshold: 0.1 })

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, rgba(249,115,22,0.06), transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(194,65,12,0.04), transparent 50%)",
        }}
      />
      <div className="absolute inset-0 bg-[var(--obsidian)]" />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div
            ref={titleRef}
            className={`transition-all duration-700 delay-100 ${
              titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <span className="inline-block px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase text-[var(--ember)] border border-[var(--ember)]/20 rounded-full bg-[var(--ember)]/5 mb-8">
              Software Engineer
            </span>
          </div>

          {/* Main headline */}
          <div
            ref={subtitleRef}
            className={`transition-all duration-700 delay-200 ${
              subtitleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <h1 className="text-display text-[var(--cream)] mb-6">
              Hi, I&apos;m{" "}
              <span className="text-ember-accent">Ramzi</span>
            </h1>
            <p className="text-body-lg text-[var(--cream-muted)] mb-4 max-w-2xl">
              Software Engineer & JavaScript Enthusiast
            </p>
            <p className="text-lg text-[var(--ash)] mb-12 max-w-xl leading-relaxed">
              Specializing in Fullstack Web & Mobile Development
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className={`transition-all duration-700 delay-300 ${
              ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => window.open(SOCIALS.whatsapp)}
                className="bg-[var(--ember)] hover:bg-[var(--copper)] text-white border-0 px-8 py-6 text-base font-semibold transition-all duration-300 magnetic-hover"
              >
                Hire Me
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  const el = document.getElementById("projects")
                  if (el) el.scrollIntoView({ behavior: "smooth" })
                }}
                className="border-[var(--slate)] bg-transparent text-[var(--cream)] hover:bg-[var(--charcoal)] hover:border-[var(--ember)]/30 px-8 py-6 text-base font-semibold transition-all duration-300 magnetic-hover"
              >
                View Projects <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Social links */}
          <div
            className={`mt-16 flex gap-4 transition-all duration-700 delay-500 ${
              ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <Link
              href={SOCIALS.github}
              target="_blank"
              className="glass-subtle p-4 rounded-xl hover-lift hover:text-[var(--ember)] transition-all duration-300 group"
            >
              <Github className="h-5 w-5 text-[var(--cream-muted)] group-hover:text-[var(--ember)] transition-colors duration-300" />
            </Link>
            <Link
              href={SOCIALS.linkedin}
              target="_blank"
              className="glass-subtle p-4 rounded-xl hover-lift hover:text-[var(--ember)] transition-all duration-300 group"
            >
              <Linkedin className="h-5 w-5 text-[var(--cream-muted)] group-hover:text-[var(--ember)] transition-colors duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
        <span className="text-xs text-[var(--ash)] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-[var(--ember)] opacity-40" />
      </div>
    </section>
  )
}

"use client"

import { useEffect, useState, Suspense, lazy } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { SOCIALS } from "@/lib/constants"

const HeroScene = lazy(() => import("@/components/three/HeroScene"))

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
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[var(--obsidian)]">
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div
            ref={titleRef}
            className={`transition-all duration-700 delay-100 ${
              titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <span className="inline-block px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase text-[var(--ember)] border border-[var(--ember)]/20 rounded-full bg-[var(--ember)]/5 mb-8 backdrop-blur-sm">
              Software Engineer
            </span>
          </div>

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

          <div
            ref={ctaRef}
            className={`transition-all duration-700 delay-300 ${
              ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => window.open(SOCIALS.whatsapp, "_blank", "noopener,noreferrer")}
              >
                Hire Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const el = document.getElementById("projects")
                  if (el) el.scrollIntoView({ behavior: "smooth" })
                }}
              >
                View Projects <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          <div
            className={`mt-16 flex gap-4 transition-all duration-700 delay-500 ${
              ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <Link
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-subtle p-4 rounded-xl hover-lift hover:text-[var(--ember)] transition-all duration-300 group backdrop-blur-sm"
            >
              <Github className="h-5 w-5 text-[var(--cream-muted)] group-hover:text-[var(--ember)] transition-colors duration-300" />
            </Link>
            <Link
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-subtle p-4 rounded-xl hover-lift hover:text-[var(--ember)] transition-all duration-300 group backdrop-blur-sm"
            >
              <Linkedin className="h-5 w-5 text-[var(--cream-muted)] group-hover:text-[var(--ember)] transition-colors duration-300" />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in-up z-10" style={{ animationDelay: "1.2s" }}>
        <span className="text-xs text-[var(--ash)] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-[var(--ember)] opacity-40" />
      </div>
    </section>
  )
}

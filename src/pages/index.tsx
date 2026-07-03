"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/layout/Header"
import { Hero } from "@/components/layout/Hero"
import { About } from "@/components/layout/About"
import { Skills } from "@/components/layout/Skills"
import { Experience } from "@/components/layout/Experience"
import { Education } from "@/components/layout/Education"
import { Projects } from "@/components/layout/Projects"
import { Contact } from "@/components/layout/Contact"
import { Footer } from "@/components/layout/Footer"
import Head from "next/head"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isLoaded, setIsLoaded] = useState(false)

  // Trigger initial load animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Handle scroll spy for navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 120
        const sectionHeight = (section as HTMLElement).offsetHeight
        const scrollY = window.scrollY

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute("id") || "")
        }
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Head>
        <title>Ramzi | Full-Stack Software Engineer</title>
        <meta name="description" content="Ramzi - Full-Stack Software Engineer Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        className={`min-h-screen bg-[var(--obsidian)] text-[var(--cream)] font-['Inter',sans-serif] transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Header activeSection={activeSection} />

        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  )
}

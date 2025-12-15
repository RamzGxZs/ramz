"use client"

import { useState, useEffect } from "react"
import type { CSSProperties } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Menu, X, ChevronRight, Download } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import Head from "next/head"

const sweetPalette = {
  background: "#0f111a",
  backgroundAlt: "#1a1d2b",
  surface: "#1c2030",
  surfaceHover: "#242b3d",
  surfaceSoft: "#1c2030e6",
  surfaceOverlay: "#1c2030b3",
  inputBackground: "#0f111ad9",
  accentPrimary: "#00d3a7",
  accentSecondary: "#de3e80",
  accentGlow: "#64baff",
  accentTint: "#00d3a733",
  accentTintLight: "#00d3a726",
  textPrimary: "#C3C7D1",
  textMuted: "#8c8e92",
  border: "rgba(255,255,255,0.12)",
} as const

type SweetCSSVariables = CSSProperties & Record<`--${string}`, string>

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const themeVariables: SweetCSSVariables = {
    "--sweet-bg": sweetPalette.background,
    "--sweet-bg-alt": sweetPalette.backgroundAlt,
    "--sweet-surface": sweetPalette.surface,
    "--sweet-surface-hover": sweetPalette.surfaceHover,
    "--sweet-surface-soft": sweetPalette.surfaceSoft,
    "--sweet-surface-overlay": sweetPalette.surfaceOverlay,
    "--sweet-input-bg": sweetPalette.inputBackground,
    "--sweet-accent": sweetPalette.accentPrimary,
    "--sweet-accent-alt": sweetPalette.accentSecondary,
    "--sweet-accent-glow": sweetPalette.accentGlow,
    "--sweet-accent-tint": sweetPalette.accentTint,
    "--sweet-accent-tint-light": sweetPalette.accentTintLight,
    "--sweet-text": sweetPalette.textPrimary,
    "--sweet-text-muted": sweetPalette.textMuted,
    "--sweet-border": sweetPalette.border,
  }

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  // Handle scroll spy for navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")

      sections.forEach((section) => {
        const sectionTop: number = (section as HTMLElement).offsetTop - 100
        const sectionHeight: number = (section as HTMLElement).offsetHeight
        const scrollY = window.scrollY

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute("id") || "")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Navigation items
  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  // Skills data
  const skills = [
    { name: "Frontend Development", level: 95, icon: "🌐" },
    { name: "Backend Development", level: 85, icon: "⚙️" },
    { name: "Mobile App Development", level: 80, icon: "📱" },
    { name: "Web Design", level: 70, icon: "🎨" },
    { name: "SEO Optimization", level: 85, icon: "🔍" },
    { name: "English & ID", level: 95, icon: "🗣️" },
  ]

  // Projects data (placeholders)
  const projects = [
    {
      title: "Lereng Ijen Coffee",
      description: "A full-featured online shopping platform with payment integration",
      tags: ["React", "Node.js", "MongoDB"],
      image: "https://res.cloudinary.com/dwehtizb5/image/upload/v1718132703/portfolio/d5174c3b-5024-4c8a-b3d2-77d65cf2ec63.png",
    },
    {
      title: "Nusadex",
      description: "Blockchain analytics dashboard with real-time data visualization",
      tags: ["Next.js", "Solana", "TailwindCSS"],
      image: "https://res.cloudinary.com/dwehtizb5/image/upload/v1761596577/CID/esbtjt0oqbkabw5ij1le.png",
    },
    {
      title: "UiStellar",
      description: "A full e-commerce platform for designer entushiast with payment integration",
      tags: ["NextJS", "MongoDB", "ShadcnUI"],
      image: "https://res.cloudinary.com/dwehtizb5/image/upload/v1718131334/portfolio/1a19b42f-b8a6-4c37-917e-d67002915154.png",
    },
  ]

  return (
    <>
    <Head>
      <title>Ramz Portfolio</title>
    </Head>
    <div
      className="min-h-screen bg-gradient-to-b from-[var(--sweet-bg)] via-[var(--sweet-bg)] to-[var(--sweet-bg-alt)] text-[var(--sweet-text)]"
      style={themeVariables}
    >
      {/* Header */}
      <header className="bg-[var(--sweet-surface-soft)] backdrop-blur-xl border-b border-[var(--sweet-border)] shadow-[0_10px_35px_rgba(0,0,0,0.55)] py-4 px-6 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[var(--sweet-accent-alt)] to-[var(--sweet-accent)] bg-clip-text text-transparent">
            Ramzi
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`transition-colors duration-300 hover:text-[var(--sweet-accent)] ${
                  activeSection === item.href.substring(1) ? "text-[var(--sweet-accent)] font-medium" : "text-[var(--sweet-text-muted)]"
                }`}
              >
                {item.label}
              </a>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="ml-4 border-[var(--sweet-accent)] text-[var(--sweet-accent)] hover:bg-[var(--sweet-accent)] hover:text-[#0e141f]"
            >
              <Download className="mr-2 h-4 w-4" /> Resume
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[var(--sweet-text)]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--sweet-surface)] border border-[var(--sweet-border)] py-4 px-6 rounded-xl mt-4"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`transition-colors duration-300 hover:text-[var(--sweet-accent)] ${
                    activeSection === item.href.substring(1) ? "text-[var(--sweet-accent)] font-medium" : "text-[var(--sweet-text-muted)]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="w-full border-[var(--sweet-accent)] text-[var(--sweet-accent)] hover:bg-[var(--sweet-accent)] hover:text-[#0e141f]"
              >
                <Download className="mr-2 h-4 w-4" /> Resume
              </Button>
            </nav>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--sweet-bg)] via-[#141829] to-[var(--sweet-bg-alt)] z-0"></div>
        <div className="absolute inset-0 opacity-40 z-0">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[var(--sweet-accent-alt)] blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[var(--sweet-accent-glow)] blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl mx-auto text-center">
            <Badge
              variant="outline"
              className="mb-6 px-4 py-1 text-sm border-[var(--sweet-border)] bg-[var(--sweet-surface-overlay)] text-[var(--sweet-text-muted)]"
            >
              Software Engineer
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[var(--sweet-accent-alt)] via-[var(--sweet-accent-glow)] to-[var(--sweet-accent)] bg-clip-text text-transparent">
              Hi, I'm Ramzi 👋
            </h2>
            <p className="text-xl md:text-2xl mb-2 text-[var(--sweet-text)]">Software Engineer & JavaScript Enthusiast</p>
            <p className="text-lg text-[var(--sweet-text-muted)] mb-8">Specializing in Fullstack Web & Mobile Development</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-[var(--sweet-accent-alt)] via-[var(--sweet-accent)] to-[var(--sweet-accent-glow)] hover:brightness-110 text-white border-0" onClick={() =>{
                window.open('https://api.whatsapp.com/send?phone=62895621048269')
              }}>
                Hire Me
              </Button>
              <Button variant="outline" className="border-[var(--sweet-accent)] text-[var(--sweet-accent)] hover:bg-[var(--sweet-accent)] hover:text-[#0e141f]" onClick={() => location.href = '#projects'}>
                View Projects <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex justify-center mt-10 space-x-4">
              <Link href="https://github.com/RamzGxZs" target="_blank" className="bg-[var(--sweet-surface)] p-2 rounded-full border border-[var(--sweet-border)] shadow-lg hover:bg-[var(--sweet-surface-hover)] transition-all">
                <Github className="h-5 w-5 text-[var(--sweet-text)]" />
              </Link>
              <Link href="https://www.linkedin.com/in/moch-ramzi-daffa-putra-13738922a/" target="_blank" className="bg-[var(--sweet-surface)] p-2 rounded-full border border-[var(--sweet-border)] shadow-lg hover:bg-[var(--sweet-surface-hover)] transition-all">
                <Linkedin className="h-5 w-5 text-[var(--sweet-text)]" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-20 container mx-auto px-6">
        <SectionHeader title="About Me" />

        <div className="max-w-3xl mx-auto">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-lg leading-relaxed text-[var(--sweet-text-muted)]"
          >
            I am a software engineer focusing on website and mobile application development using the JavaScript programming language. I have contributed to the creation of more than four websites, including Web3-based ones. With my experience, I always strive to produce digital products that are not only functional but also provide a good user experience.
          </motion.p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 bg-[#111526]">
        <div className="container mx-auto px-6">
          <SectionHeader title="Skills" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <SkillCard key={index} name={skill.name} level={skill.level} icon={skill.icon} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 container mx-auto px-6">
        <SectionHeader title="Experience" />

        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <Card className="overflow-hidden border border-[var(--sweet-border)] bg-[var(--sweet-surface)] shadow-[0_20px_45px_rgba(0,0,0,0.45)] hover:-translate-y-1 transition-all">
              <div className="h-2 bg-gradient-to-r from-[var(--sweet-accent-alt)] via-[var(--sweet-accent)] to-[var(--sweet-accent-glow)]"></div>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--sweet-text)]">Fullstack Web Developer</h3>
                    <p className="text-[var(--sweet-accent)] font-medium">PT. Mudapedia Digital Indonesia</p>
                  </div>
                  <Badge variant="outline" className="mt-2 md:mt-0 w-fit border-[var(--sweet-border)] text-[var(--sweet-text-muted)]">
                    2023 - 2025
                  </Badge>
                </div>
                <ul className="space-y-2 text-[var(--sweet-text-muted)]">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-[var(--sweet-accent-tint)] rounded-full p-1">
                      <ChevronRight className="h-3 w-3 text-[var(--sweet-accent)]" />
                    </div>
                    Developed more than 4 websites with a focus on performance and user experience
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-[var(--sweet-accent-tint)] rounded-full p-1">
                      <ChevronRight className="h-3 w-3 text-[var(--sweet-accent)]" />
                    </div>
                    Web3 based development with blockchain and smart contracts integration
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-[var(--sweet-accent-tint)] rounded-full p-1">
                      <ChevronRight className="h-3 w-3 text-[var(--sweet-accent)]" />
                    </div>
                    Team collaboration in digital development using Agile methodology
                  </li>
                </ul>
              </CardContent>
              
            </Card>
            <Card className="overflow-hidden border border-[var(--sweet-border)] bg-[var(--sweet-surface)] shadow-[0_20px_45px_rgba(0,0,0,0.45)] hover:-translate-y-1 transition-all mt-5">
              <div className="h-2 bg-gradient-to-r from-[var(--sweet-accent-alt)] via-[var(--sweet-accent)] to-[var(--sweet-accent-glow)]"></div>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--sweet-text)]">Fullstack Web Developer</h3>
                    <p className="text-[var(--sweet-accent)] font-medium">Freelance</p>
                  </div>
                  <Badge variant="outline" className="mt-2 md:mt-0 w-fit border-[var(--sweet-border)] text-[var(--sweet-text-muted)]">
                    2023 - Now
                  </Badge>
                </div>
                <ul className="space-y-2 text-[var(--sweet-text-muted)]">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-[var(--sweet-accent-tint)] rounded-full p-1">
                      <ChevronRight className="h-3 w-3 text-[var(--sweet-accent)]" />
                    </div>
                    Developed more than 10 websites with a focus on performance and user experience
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-[var(--sweet-accent-tint)] rounded-full p-1">
                      <ChevronRight className="h-3 w-3 text-[var(--sweet-accent)]" />
                    </div>
                    Web3 based development with blockchain and smart contracts integration
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-[var(--sweet-accent-tint)] rounded-full p-1">
                      <ChevronRight className="h-3 w-3 text-[var(--sweet-accent)]" />
                    </div>
                    Team collaboration in digital development using Agile methodology
                  </li>
                </ul>
              </CardContent>
              
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20 bg-[#111526]">
        <div className="container mx-auto px-6">
          <SectionHeader title="Education" />

          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <Card className="overflow-hidden border border-[var(--sweet-border)] bg-[var(--sweet-surface)] shadow-[0_20px_45px_rgba(0,0,0,0.45)] transition-all hover:-translate-y-1">
                <div className="h-2 bg-gradient-to-r from-[var(--sweet-accent-alt)] via-[var(--sweet-accent)] to-[var(--sweet-accent-glow)]"></div>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-[var(--sweet-text)]">STIKOM PGRI Banyuwangi</h3>
                    <Badge variant="outline" className="mt-2 md:mt-0 w-fit border-[var(--sweet-border)] text-[var(--sweet-text-muted)]">
                      2021 - 2024
                    </Badge>
                  </div>
                  <p className="text-[var(--sweet-accent)] font-medium">Bachelor of Informatics Engineering</p>
                  <p className="mt-2 text-[var(--sweet-text-muted)]">GPA: 3.83</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <Card className="overflow-hidden border border-[var(--sweet-border)] bg-[var(--sweet-surface)] shadow-[0_20px_45px_rgba(0,0,0,0.45)] transition-all hover:-translate-y-1">
                <div className="h-2 bg-gradient-to-r from-[var(--sweet-accent-alt)] via-[var(--sweet-accent)] to-[var(--sweet-accent-glow)]"></div>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-[var(--sweet-text)]">SMK Negeri 1 Banyuwangi</h3>
                    <Badge variant="outline" className="mt-2 md:mt-0 w-fit border-[var(--sweet-border)] text-[var(--sweet-text-muted)]">
                      2019 - 2021
                    </Badge>
                  </div>
                  <p className="text-[var(--sweet-accent)] font-medium">Teknik Komputer & Jaringan</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 container mx-auto px-6">
        <SectionHeader title="Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-[var(--sweet-accent)] text-[var(--sweet-accent)] hover:bg-[var(--sweet-accent)] hover:text-[#0e141f]"
            onClick={() => window.open("https://github.com/RamzGxZs")}
          >
            View All Projects
          </Button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--sweet-bg)] via-[#141828] to-[var(--sweet-bg-alt)] z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader title="Contact" />

          <div className="max-w-3xl mx-auto">
            <Card className="border border-[var(--sweet-border)] shadow-[0_25px_60px_rgba(0,0,0,0.6)] bg-[var(--sweet-surface-soft)] backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-[var(--sweet-text)]">Get In Touch</h3>
                    <p className="text-[var(--sweet-text-muted)]">
                      Feel free to reach out if you're looking for a developer, have a question, or just want to
                      connect.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-[var(--sweet-accent-tint-light)] p-3 rounded-full border border-[var(--sweet-border)]">
                          <Mail className="w-5 h-5 text-[var(--sweet-accent)]" />
                        </div>
                        <div>
                          <p className="text-sm text-[var(--sweet-text-muted)]">Email</p>
                          <p className="font-medium text-[var(--sweet-text)]">ranzdaffa32@gmail.com</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="bg-[var(--sweet-accent-tint-light)] p-3 rounded-full border border-[var(--sweet-border)]">
                          <Phone className="w-5 h-5 text-[var(--sweet-accent)]" />
                        </div>
                        <div>
                          <p className="text-sm text-[var(--sweet-text-muted)]">Phone</p>
                          <p className="font-medium text-[var(--sweet-text)]">+62 8956-2104-8269</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="bg-[var(--sweet-accent-tint-light)] p-3 rounded-full border border-[var(--sweet-border)]">
                          <MapPin className="w-5 h-5 text-[var(--sweet-accent)]" />
                        </div>
                        <div>
                          <p className="text-sm text-[var(--sweet-text-muted)]">Location</p>
                          <p className="font-medium text-[var(--sweet-text)]">Jln. Raya Tebu Indah, Krajan 1 Wingrinrejo - Gambiran</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <a
                        href="#"
                        className="bg-[var(--sweet-surface-hover)] p-2 rounded-full border border-[var(--sweet-border)] hover:bg-[var(--sweet-surface)] transition-colors"
                      >
                        <Github className="h-5 w-5 text-[var(--sweet-text)]" />
                      </a>
                      <a
                        href="#"
                        className="bg-[var(--sweet-surface-hover)] p-2 rounded-full border border-[var(--sweet-border)] hover:bg-[var(--sweet-surface)] transition-colors"
                      >
                        <Linkedin className="h-5 w-5 text-[var(--sweet-text)]" />
                      </a>
                      <a
                        href="#"
                        className="bg-[var(--sweet-surface-hover)] p-2 rounded-full border border-[var(--sweet-border)] hover:bg-[var(--sweet-surface)] transition-colors"
                      >
                        <Twitter className="h-5 w-5 text-[var(--sweet-text)]" />
                      </a>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[var(--sweet-text)]">Send a Message</h3>
                    <form className="space-y-4" action={'mailto:ranzdaffa32@gmail.com'}>
                      <div>
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="w-full px-4 py-2 rounded-lg border border-[var(--sweet-border)] bg-[var(--sweet-input-bg)] text-[var(--sweet-text)] placeholder:text-[var(--sweet-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--sweet-accent)] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="w-full px-4 py-2 rounded-lg border border-[var(--sweet-border)] bg-[var(--sweet-input-bg)] text-[var(--sweet-text)] placeholder:text-[var(--sweet-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--sweet-accent)] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <textarea
                          placeholder="Your Message"
                          rows={4}
                          className="w-full px-4 py-2 rounded-lg border border-[var(--sweet-border)] bg-[var(--sweet-input-bg)] text-[var(--sweet-text)] placeholder:text-[var(--sweet-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--sweet-accent)] focus:border-transparent"
                        ></textarea>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-[var(--sweet-accent-alt)] via-[var(--sweet-accent)] to-[var(--sweet-accent-glow)] hover:brightness-110 text-white border-0">
                        Send Message
                      </Button>
                    </form>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#080b15] text-[var(--sweet-text)] py-12 border-t border-[var(--sweet-border)]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[var(--sweet-accent-alt)] to-[var(--sweet-accent)] bg-clip-text text-transparent">
                Moch. Ramzi Daffa Putra
              </h2>
              <p className="text-[var(--sweet-text-muted)] mt-2">Software Engineer & JavaScript Enthusiast</p>
            </div>

            <div className="flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[var(--sweet-text-muted)] hover:text-[var(--sweet-accent)] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-[var(--sweet-border)] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-[var(--sweet-text-muted)] text-sm">
              &copy; {new Date().getFullYear()} Moch. Ramzi Daffa Putra. All rights reserved.
            </p>

            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-[var(--sweet-text-muted)] hover:text-[var(--sweet-accent)] transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-[var(--sweet-text-muted)] hover:text-[var(--sweet-accent)] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-[var(--sweet-text-muted)] hover:text-[var(--sweet-accent)] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}

// Section Header Component
function SectionHeader({ title }: { title: string }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div ref={ref} className="text-center mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold inline-block relative text-[var(--sweet-text)]"
      >
        {title}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[var(--sweet-accent-alt)] to-[var(--sweet-accent)] rounded-full"></div>
      </motion.h2>
    </div>
  )
}

// Skill Card Component
function SkillCard({ name, level, icon, index }: { name: string; level: number; icon: string; index: number }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="border border-[var(--sweet-border)] bg-[var(--sweet-surface)] shadow-[0_15px_40px_rgba(0,0,0,0.45)] hover:-translate-y-1 transition-all">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <div className="text-2xl mr-3">{icon}</div>
            <h3 className="font-semibold text-lg text-[var(--sweet-text)]">{name}</h3>
          </div>
          <div className="w-full bg-white/5 rounded-full h-2.5">
            <div
              className="bg-gradient-to-r from-[var(--sweet-accent-alt)] via-[var(--sweet-accent)] to-[var(--sweet-accent-glow)] h-2.5 rounded-full"
              style={{ width: `${level}%` }}
            ></div>
          </div>
          <div className="mt-2 text-right text-sm text-[var(--sweet-text-muted)]">{level}%</div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Project Card Component
function ProjectCard({
  title,
  description,
  tags,
  image,
  index,
}: {
  title: string
  description: string
  tags: string[]
  image: string
  index: number
}) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden border border-[var(--sweet-border)] bg-[var(--sweet-surface)] shadow-[0_20px_45px_rgba(0,0,0,0.45)] transition-all hover:-translate-y-1">
        <div className="h-48 overflow-hidden bg-[var(--sweet-bg)]">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="font-bold text-xl mb-2 text-[var(--sweet-text)]">{title}</h3>
          <p className="text-[var(--sweet-text-muted)] mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <Badge key={i} variant="secondary" className="bg-[var(--sweet-surface-hover)] text-[var(--sweet-text)] border border-[var(--sweet-border)]">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

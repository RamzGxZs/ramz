"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Menu, X, ChevronRight, Download } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

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
    { name: "Frontend Development", level: 90, icon: "🌐" },
    { name: "Backend Development", level: 85, icon: "⚙️" },
    { name: "Mobile App Development", level: 80, icon: "📱" },
    { name: "Web Design", level: 75, icon: "🎨" },
    { name: "SEO Optimization", level: 70, icon: "🔍" },
    { name: "English & Bahasa Indonesia", level: 95, icon: "🗣️" },
  ]

  // Projects data (placeholders)
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with payment integration",
      tags: ["React", "Node.js", "MongoDB"],
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      title: "Web3 Dashboard",
      description: "Blockchain analytics dashboard with real-time data visualization",
      tags: ["Next.js", "Ethereum", "TailwindCSS"],
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking application with social features",
      tags: ["React Native", "Firebase", "Redux"],
      image: "/placeholder.svg?height=200&width=350",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-800">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm py-4 px-6 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Moch. Ramzi
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`transition-colors duration-300 hover:text-violet-600 ${
                  activeSection === item.href.substring(1) ? "text-violet-600 font-medium" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="ml-4 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white"
            >
              <Download className="mr-2 h-4 w-4" /> Resume
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white py-4 px-6"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`transition-colors duration-300 hover:text-violet-600 ${
                    activeSection === item.href.substring(1) ? "text-violet-600 font-medium" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="w-full border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white"
              >
                <Download className="mr-2 h-4 w-4" /> Resume
              </Button>
            </nav>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-indigo-50 z-0"></div>
        <div className="absolute inset-0 opacity-30 z-0">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-violet-300 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-indigo-300 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 px-4 py-1 text-sm border-violet-200 bg-white/50 backdrop-blur-sm">
              Software Engineer
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-violet-700 to-indigo-700 bg-clip-text text-transparent">
              Hi, I'm Ramzi 👋
            </h2>
            <p className="text-xl md:text-2xl mb-2 text-slate-700">Software Engineer & JavaScript Enthusiast</p>
            <p className="text-lg text-slate-600 mb-8">Specializing in Fullstack Web & Mobile Development</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white">
                Hire Me
              </Button>
              <Button variant="outline" className="border-violet-600 text-violet-600 hover:bg-violet-50">
                View Projects <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex justify-center mt-10 space-x-4">
              <a href="#" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow">
                <Github className="h-5 w-5 text-slate-700" />
              </a>
              <a href="#" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow">
                <Linkedin className="h-5 w-5 text-slate-700" />
              </a>
              <a href="#" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow">
                <Twitter className="h-5 w-5 text-slate-700" />
              </a>
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
            className="text-lg leading-relaxed text-slate-700"
          >
            Saya adalah seorang software engineer yang fokus pada pengembangan website dan aplikasi mobile menggunakan
            bahasa pemrograman JavaScript. Saya telah berkontribusi dalam pembuatan lebih dari 4 website termasuk
            berbasis Web3. Dengan pengalaman yang saya miliki, saya selalu berusaha menghasilkan produk digital yang
            tidak hanya fungsional tetapi juga memiliki pengalaman pengguna yang baik.
          </motion.p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 bg-white">
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
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-2 bg-gradient-to-r from-violet-500 to-indigo-500"></div>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Fullstack Web Developer</h3>
                    <p className="text-violet-600 font-medium">PT. Mudapedia Digital Indonesia</p>
                  </div>
                  <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                    2023 - 2024
                  </Badge>
                </div>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-violet-100 rounded-full p-1">
                      <ChevronRight className="h-3 w-3 text-violet-600" />
                    </div>
                    Mengembangkan lebih dari 4 website dengan fokus pada performa dan pengalaman pengguna
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-violet-100 rounded-full p-1">
                      <ChevronRight className="h-3 w-3 text-violet-600" />
                    </div>
                    Pengembangan berbasis Web3 dengan integrasi blockchain dan smart contracts
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-violet-100 rounded-full p-1">
                      <ChevronRight className="h-3 w-3 text-violet-600" />
                    </div>
                    Kolaborasi tim dalam pengembangan digital menggunakan metodologi Agile
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader title="Education" />

          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-2 bg-gradient-to-r from-violet-500 to-indigo-500"></div>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-800">STIKOM PGRI Banyuwangi</h3>
                    <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                      2021 - 2024
                    </Badge>
                  </div>
                  <p className="text-violet-600 font-medium">Bachelor of Informatics Engineering</p>
                  <p className="mt-2 text-slate-700">GPA: 3.83</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-2 bg-gradient-to-r from-violet-500 to-indigo-500"></div>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-800">SMK Negeri 1 Banyuwangi</h3>
                    <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                      2019 - 2021
                    </Badge>
                  </div>
                  <p className="text-violet-600 font-medium">Teknik Komputer & Jaringan</p>
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
          <Button variant="outline" className="border-violet-600 text-violet-600 hover:bg-violet-50">
            View All Projects
          </Button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-indigo-50 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader title="Contact" />

          <div className="max-w-3xl mx-auto">
            <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-slate-800">Get In Touch</h3>
                    <p className="text-slate-600">
                      Feel free to reach out if you're looking for a developer, have a question, or just want to
                      connect.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-violet-100 p-3 rounded-full">
                          <Mail className="w-5 h-5 text-violet-600" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">Email</p>
                          <p className="font-medium">ranzdaffa32@gmail.com</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="bg-violet-100 p-3 rounded-full">
                          <Phone className="w-5 h-5 text-violet-600" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">Phone</p>
                          <p className="font-medium">+62 8956-2104-8269</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="bg-violet-100 p-3 rounded-full">
                          <MapPin className="w-5 h-5 text-violet-600" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">Location</p>
                          <p className="font-medium">Jln. Raya Tebu Indah, Krajan 1 Wingrinrejo - Gambiran</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <a href="#" className="bg-slate-100 p-2 rounded-full hover:bg-violet-100 transition-colors">
                        <Github className="h-5 w-5 text-slate-700" />
                      </a>
                      <a href="#" className="bg-slate-100 p-2 rounded-full hover:bg-violet-100 transition-colors">
                        <Linkedin className="h-5 w-5 text-slate-700" />
                      </a>
                      <a href="#" className="bg-slate-100 p-2 rounded-full hover:bg-violet-100 transition-colors">
                        <Twitter className="h-5 w-5 text-slate-700" />
                      </a>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-800">Send a Message</h3>
                    <form className="space-y-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <textarea
                          placeholder="Your Message"
                          rows={4}
                          className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                        ></textarea>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white">
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
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Moch. Ramzi
              </h2>
              <p className="text-slate-400 mt-2">Software Engineer & JavaScript Enthusiast</p>
            </div>

            <div className="flex space-x-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-slate-400 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Moch. Ramzi Daffa Putra. All rights reserved.
            </p>

            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
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
        className="text-3xl font-bold inline-block relative"
      >
        {title}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"></div>
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
      <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <div className="text-2xl mr-3">{icon}</div>
            <h3 className="font-semibold text-lg">{name}</h3>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2.5">
            <div
              className="bg-gradient-to-r from-violet-500 to-indigo-500 h-2.5 rounded-full"
              style={{ width: `${level}%` }}
            ></div>
          </div>
          <div className="mt-2 text-right text-sm text-slate-500">{level}%</div>
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
      <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
        <div className="h-48 overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="font-bold text-xl mb-2">{title}</h3>
          <p className="text-slate-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <Badge key={i} variant="secondary" className="bg-slate-100">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

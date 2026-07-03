import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Lereng Ijen Coffee",
    description: "A full-featured online shopping platform with payment integration",
    tags: ["React", "Node.js", "MongoDB"],
    image:
      "https://res.cloudinary.com/dwehtizb5/image/upload/v1718132703/portfolio/d5174c3b-5024-4c8a-b3d2-77d65cf2ec63.png",
    link: "https://github.com/RamzGxZs",
  },
  {
    title: "Nusadex",
    description: "Blockchain analytics dashboard with real-time data visualization",
    tags: ["Next.js", "Solana", "TailwindCSS"],
    image:
      "https://res.cloudinary.com/dwehtizb5/image/upload/v1761596577/CID/esbtjt0oqbkabw5ij1le.png",
    link: "https://github.com/RamzGxZs",
  },
  {
    title: "UiStellar",
    description: "A full e-commerce platform for designer enthusiast with payment integration",
    tags: ["NextJS", "MongoDB", "ShadcnUI"],
    image:
      "https://res.cloudinary.com/dwehtizb5/image/upload/v1718131334/portfolio/1a19b42f-b8a6-4c37-917e-d67002915154.png",
    link: "https://github.com/RamzGxZs",
  },
]

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const { ref, inView } = useScrollAnimation({ threshold: 0.1 })

  // Alternate heights for masonry effect
  const heights = ["h-64", "h-80", "h-72"]
  const height = heights[index % heights.length]

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="glass-subtle rounded-3xl overflow-hidden hover-lift group relative">
        {/* Image container */}
        <div className={`${height} overflow-hidden bg-[var(--charcoal)] relative`}>
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          {/* Image overlay */}
          <div className="absolute inset-0 bg-[var(--obsidian)]/70 opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

          {/* Hover action */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(project.link)}
              className="border-[var(--ember)] text-[var(--ember)] bg-[var(--obsidian)]/80 backdrop-blur-sm hover:bg-[var(--ember)] hover:text-[var(--obsidian)]"
            >
              <ExternalLink className="mr-2 h-4 w-4" /> View Project
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-bold text-xl mb-2 text-[var(--cream)] group-hover:text-[var(--ember)] transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-[var(--cream-muted)] mb-4 leading-relaxed text-sm">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="bg-[var(--charcoal)] text-[var(--cream-muted)] border border-[var(--slate)]/50 hover:border-[var(--ember)]/50 hover:text-[var(--ember)] transition-all duration-300"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  const { ref: headerRef, inView: headerInView } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="projects" className="section-padding bg-[var(--obsidian)]">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-700 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <span className="text-caption text-[var(--ember)] mb-4 block">My work</span>
          <h2 className="text-heading text-[var(--cream)]">Projects</h2>
        </div>

        {/* Masonry grid */}
        <div className="masonry-grid max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-16">
          <Button
            variant="outline"
            onClick={() => window.open("https://github.com/RamzGxZs")}
            className="border-[var(--slate)] bg-transparent text-[var(--cream)] hover:bg-[var(--charcoal)] hover:border-[var(--ember)]/30 px-8 py-6 text-base font-semibold transition-all duration-300 magnetic-hover"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

import { Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { useSmoothScroll } from "@/hooks/useScrollAnimation"
import { NAV_ITEMS, SOCIALS } from "@/lib/constants"

const socialLinks = [
  { icon: Github, href: SOCIALS.github, label: "GitHub" },
  { icon: Linkedin, href: SOCIALS.linkedin, label: "LinkedIn" },
]

export function Footer() {
  const { scrollTo } = useSmoothScroll()

  return (
    <footer className="bg-[var(--obsidian)] text-[var(--cream)] py-16 border-t border-[var(--slate)]/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <button
              onClick={() => scrollTo("hero")}
              className="text-2xl font-bold tracking-tight text-[var(--cream)] hover:text-[var(--ember)] transition-colors duration-300"
            >
              Moch. Ramzi Daffa Putra
            </button>
            <p className="text-[var(--ash)] mt-2">Software Engineer & JavaScript Enthusiast</p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href.replace("#", ""))}
                className="text-[var(--cream-muted)] hover:text-[var(--ember)] transition-colors duration-300 relative group text-sm"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px bg-[var(--ember)] w-0 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--slate)]/20 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--ash)] text-sm">
            &copy; {new Date().getFullYear()} Moch. Ramzi Daffa Putra. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--ash)] hover:text-[var(--ember)] transition-colors duration-300"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

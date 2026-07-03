import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Download } from "lucide-react"
import { useSmoothScroll } from "@/hooks/useScrollAnimation"

interface HeaderProps {
  activeSection: string
}

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export function Header({ activeSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const { scrollTo } = useSmoothScroll()

  // Track scroll progress for the indicator bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = useCallback(
    (href: string) => {
      const targetId = href.replace("#", "")
      scrollTo(targetId)
      setMobileMenuOpen(false)
    },
    [scrollTo]
  )

  return (
    <header className="glass-strong fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      {/* Scroll progress indicator */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-[var(--ember)] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="text-2xl font-bold tracking-tight text-[var(--cream)] hover:text-[var(--ember)] transition-colors duration-300"
        >
          R<span className="text-[var(--ember)]">.</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1)
            return (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`relative py-2 text-sm font-medium transition-colors duration-300 group ${
                  isActive
                    ? "text-[var(--ember)]"
                    : "text-[var(--cream-muted)] hover:text-[var(--cream)]"
                }`}
              >
                {item.label}
                {/* Active indicator dot */}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--ember)]" />
                )}
                {/* Hover underline */}
                <span className="absolute bottom-0 left-0 h-px bg-[var(--ember)] transition-all duration-300 ease-out group-hover:w-full w-0 rounded-full" />
              </button>
            )
          })}
          <Button
            size="sm"
            onClick={() => window.open("https://api.whatsapp.com/send?phone=62895621048269")}
            className="ml-2 bg-[var(--ember)] text-white hover:bg-[var(--copper)] transition-all duration-300 magnetic-hover"
          >
            <Download className="mr-2 h-4 w-4" /> Resume
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--cream)] p-2 rounded-lg hover:bg-[var(--charcoal)] transition-colors duration-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <div className="relative w-6 h-6">
            <span
              className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                mobileMenuOpen ? "top-3 rotate-45" : "top-1"
              }`}
            />
            <span
              className={`absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                mobileMenuOpen ? "top-3 -rotate-45" : "top-5"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glass animate-slide-down mx-4 mb-4 rounded-2xl p-4 shadow-depth-lg">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`py-3 px-4 rounded-xl text-left transition-all duration-300 ${
                    isActive
                      ? "text-[var(--ember)] bg-[var(--charcoal)] font-medium"
                      : "text-[var(--cream-muted)] hover:bg-[var(--charcoal)] hover:text-[var(--cream)]"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </button>
              )
            })}
            <Button
              size="sm"
              onClick={() => window.open("https://api.whatsapp.com/send?phone=62895621048269")}
              className="mt-3 w-full bg-[var(--ember)] text-white hover:bg-[var(--copper)]"
            >
              <Download className="mr-2 h-4 w-4" /> Resume
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

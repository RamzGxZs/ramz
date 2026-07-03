import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ranzdaffa32@gmail.com",
    href: "mailto:ranzdaffa32@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+62 8956-2104-8269",
    href: "tel:+62895621048269",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jln. Raya Tebu Indah, Krajan 1 Wingrinrejo - Gambiran",
    href: null,
  },
]

const socialLinks = [
  { icon: Github, href: "https://github.com/RamzGxZs", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/moch-ramzi-daffa-putra-13738922a/",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "#", label: "Twitter" },
]

export function Contact() {
  const { ref: headerRef, inView: headerInView } = useScrollAnimation({ threshold: 0.1 })
  const { ref: formRef, inView: formInView } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="contact" className="section-padding bg-[var(--obsidian-light)] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-700 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <span className="text-caption text-[var(--ember)] mb-4 block">Let&apos;s talk</span>
          <h2 className="text-heading text-[var(--cream)]">Contact</h2>
        </div>

        {/* Contact card */}
        <div
          ref={formRef}
          className={`max-w-5xl mx-auto transition-all duration-700 delay-200 ${
            formInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--ember)]/[0.04] rounded-bl-full" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left: Contact info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-subheading text-[var(--cream)] mb-3">Get In Touch</h3>
                  <p className="text-[var(--cream-muted)] leading-relaxed">
                    Feel free to reach out if you&apos;re looking for a developer, have a question, or just want to
                    connect.
                  </p>
                </div>

                <div className="space-y-5">
                  {contactInfo.map((item) => {
                    const Icon = item.icon
                    const content = (
                      <div className="flex items-center gap-4 group">
                        <div className="glass-subtle p-3 rounded-xl transition-all duration-300 group-hover:bg-[var(--ember)]/10 group-hover:scale-110">
                          <Icon className="w-5 h-5 text-[var(--ember)]" />
                        </div>
                        <div>
                          <p className="text-sm text-[var(--ash)]">{item.label}</p>
                          <p className="font-medium text-[var(--cream)] transition-colors duration-300 group-hover:text-[var(--ember)]">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    )

                    return item.href ? (
                      <a key={item.label} href={item.href} className="block">
                        {content}
                      </a>
                    ) : (
                      <div key={item.label}>{content}</div>
                    )
                  })}
                </div>

                {/* Social links */}
                <div className="flex gap-4 pt-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <Link
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-subtle p-3 rounded-xl hover-lift hover:text-[var(--ember)] transition-all duration-300 group"
                        aria-label={social.label}
                      >
                        <Icon className="h-5 w-5 text-[var(--cream-muted)] group-hover:text-[var(--ember)] transition-colors duration-300" />
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* Right: Contact form */}
              <div className="space-y-5">
                <h3 className="text-subheading text-[var(--cream)]">Send a Message</h3>
                <form className="space-y-4" action="mailto:ranzdaffa32@gmail.com">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="input-premium"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="input-premium"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="input-premium resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[var(--ember)] hover:bg-[var(--copper)] text-white border-0 py-6 text-base font-semibold transition-all duration-300 magnetic-hover"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

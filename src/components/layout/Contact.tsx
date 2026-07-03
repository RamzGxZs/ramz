"use client"

import { useState } from "react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { CONTACT, SOCIALS } from "@/lib/constants"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT.phone,
    href: `tel:${CONTACT.phoneRaw}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: CONTACT.location,
    href: null,
  },
]

const socialLinks = [
  { icon: Github, href: SOCIALS.github, label: "GitHub" },
  { icon: Linkedin, href: SOCIALS.linkedin, label: "LinkedIn" },
]

export function Contact() {
  const { ref: headerRef, inView: headerInView } = useScrollAnimation({ threshold: 0.1 })
  const { ref: formRef, inView: formInView } = useScrollAnimation({ threshold: 0.1 })
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
    setFormStatus("sent")
    setTimeout(() => setFormStatus("idle"), 3000)
  }

  return (
    <section id="contact" className="section-padding section-blur relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-700 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <span className="text-caption text-[var(--ember)] mb-4 block">Let&apos;s talk</span>
          <h2 className="text-heading text-[var(--cream)]">Contact</h2>
        </div>

        <div
          ref={formRef}
          className={`max-w-5xl mx-auto transition-all duration-700 delay-200 ${
            formInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="backdrop-blur-xl rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--ember)]/[0.04] rounded-bl-full" /> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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

              <div className="space-y-5">
                <h3 className="text-subheading text-[var(--cream)]">Send a Message</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      aria-label="Your Name"
                      required
                      className="input-premium"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      aria-label="Your Email"
                      required
                      className="input-premium"
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows={4}
                      aria-label="Your Message"
                      required
                      className="input-premium resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[var(--ember)] hover:bg-[var(--copper)] text-white border-0 py-6 text-base font-semibold transition-all duration-300 magnetic-hover"
                  >
                    {formStatus === "sent" ? "Message Prepared!" : "Send Message"}
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

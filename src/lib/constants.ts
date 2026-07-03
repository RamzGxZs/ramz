export const SITE = {
  title: "Ramzi | Full-Stack Software Engineer",
  description: "Ramzi - Full-Stack Software Engineer Portfolio",
  url: "https://ramzi.dev",
}

export const CONTACT = {
  email: "ranzdaffa32@gmail.com",
  phone: "+62 8956-2104-8269",
  phoneRaw: "+62895621048269",
  location: "Jln. Raya Tebu Indah, Krajan 1 Wingrinrejo - Gambiran",
}

export const SOCIALS = {
  github: "https://github.com/RamzGxZs",
  linkedin: "https://www.linkedin.com/in/moch-ramzi-daffa-putra-13738922a/",
  whatsapp: `https://api.whatsapp.com/send?phone=${CONTACT.phoneRaw}`,
}

export const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const

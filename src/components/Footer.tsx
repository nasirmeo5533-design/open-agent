import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Sparkles,
  Twitter,
} from "lucide-react";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "/blog" },
];

const serviceLinks = [
  "Digital Marketing",
  "SEO",
  "Content Creation",
  "AI Automation",
  "AI Agent Development",
  "Video Editing",
];

const socials = [
  { label: "Facebook", href: "https://facebook.com", Icon: Facebook },
  { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
  { label: "Twitter", href: "https://twitter.com", Icon: Twitter },
];

export function Footer() {
  return (
    <footer className="band-navy bg-navy-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="#top" className="inline-flex items-center gap-2.5">
              <Sparkles
                aria-hidden="true"
                strokeWidth={2}
                className="h-7 w-7 text-orange-core"
              />
              <span className="text-2xl font-bold text-white">Open Agent</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              We don&apos;t just market your store. We automate it.
            </p>
          </div>

          <nav aria-label="Quick links">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-white">
              Quick Links
            </p>
            <ul className="mt-5 grid gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors duration-300 hover:text-orange-bright"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-white">
              Services
            </p>
            <ul className="mt-5 grid gap-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-sm text-white/70 transition-colors duration-300 hover:text-orange-bright"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-white">
              Contact
            </p>
            <ul className="mt-5 grid gap-3">
              <li>
                <a
                  href="mailto:nasirmeo5533@gmail.com"
                  className="inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors duration-300 hover:text-orange-bright"
                >
                  <Mail aria-hidden="true" className="h-4 w-4" />
                  nasirmeo5533@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-6">
          <p className="text-sm text-white/70">
            &copy; 2026 Open Agent. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-colors duration-300 hover:border-orange-core hover:bg-orange-core hover:text-white"
              >
                <Icon aria-hidden="true" className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

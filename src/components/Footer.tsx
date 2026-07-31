import Link from "next/link";
import type { ReactNode } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles,
  Twitter,
} from "lucide-react";

const quickLinks = [
  { label: "Blogs", href: "/blog" },
  { label: "Careers", href: "#" },
  { label: "Contact Us", href: "#contact" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Condition", href: "#" },
];

const marketingServices = [
  { label: "Digital Marketing", href: "#services" },
  { label: "SEO Services", href: "#services" },
  { label: "Google Ads (PPC) Services", href: "#services" },
  { label: "Social Media Marketing Services", href: "#services" },
  { label: "eCommerce Optimization", href: "#services" },
  { label: "Content Creation", href: "#services" },
];

const moreServices = [
  { label: "AI Automation", href: "#services" },
  { label: "AI Agent Development", href: "#services" },
  { label: "Video Editing", href: "#services" },
  { label: "WhatsApp Automation", href: "#services" },
  { label: "Email Marketing", href: "#services" },
  { label: "Lead Generation", href: "#services" },
];

const locations = [
  { label: "Pakistan", address: "Karachi" },
  { label: "Global", address: "Remote Worldwide" },
];

const socials = [
  { label: "Facebook", href: "https://facebook.com", Icon: Facebook },
  { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
  { label: "X", href: "https://x.com", Icon: Twitter },
  { label: "WhatsApp", href: "https://wa.me/923303159642", Icon: MessageCircle },
];

function FooterHeading({ children }: { children: string }) {
  return (
    <p className="text-sm font-bold text-white">{children}</p>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-white/70 transition-colors duration-300 hover:text-orange-bright"
      >
        {children}
      </Link>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="band-navy bg-navy-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr] lg:gap-8">
          <div>
            <Link href="#top" className="inline-flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-orange-core to-orange-bright text-white shadow-btn"
              >
                <Sparkles className="h-4 w-4" strokeWidth={2.5} />
              </span>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Open Agent
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              We don&apos;t just market your store. We automate it. We transform
              startups and local businesses into market leaders in their niche
              through AI-powered marketing.
            </p>
            <a
              href="mailto:nasirmeo5533@gmail.com"
              className="mt-5 inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors duration-300 hover:text-orange-bright"
            >
              <Mail aria-hidden="true" className="h-4 w-4" />
              nasirmeo5533@gmail.com
            </a>
          </div>

          <nav aria-label="Quick links">
            <FooterHeading>Open Agent</FooterHeading>
            <ul className="mt-5 grid gap-3">
              {quickLinks.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </nav>

          <nav aria-label="Marketing services">
            <FooterHeading>Digital Marketing Services</FooterHeading>
            <ul className="mt-5 grid gap-3">
              {marketingServices.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </nav>

          <nav aria-label="More services">
            <FooterHeading>Services</FooterHeading>
            <ul className="mt-5 grid gap-3">
              {moreServices.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </nav>

          <div>
            <div className="flex items-center gap-2">
              <FooterHeading>Location</FooterHeading>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-core opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-core" />
              </span>
            </div>
            <ul className="mt-5 grid gap-6">
              {locations.map((location) => (
                <li key={location.label} className="grid gap-1">
                  <p className="text-sm font-bold text-white">{location.label}</p>
                  <p className="text-sm text-white/70">
                    Address: {location.address}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-6">
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

          <p className="text-sm text-white/70">
            Copyright &copy; Open Agent 2026. All rights reserved.
          </p>

          <p className="text-sm text-white/70">
            Initiative by{" "}
            <span className="font-semibold text-orange-bright">Open Agent</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

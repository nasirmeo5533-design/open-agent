import Link from "next/link";
import { Linkedin, Mail, Phone } from "lucide-react";
import { PulseNode } from "./ui/PulseNode";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-line bg-elevated">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl text-paper">Abeer Nasir</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-body">
              Generative AI Specialist · AI Agent Developer · Digital Marketing
              Specialist
            </p>
            <div className="mt-6 flex items-center gap-3">
              <PulseNode size="sm" />
              <p className="text-xs text-gray-body">
                Open to freelance & full-time
              </p>
            </div>
          </div>

          <nav aria-label="Quick links" className="lg:justify-self-center">
            <p className="eyebrow">Quick links</p>
            <ul className="mt-5 grid gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="glow-sweep text-sm text-gray-body transition-colors duration-300 hover:text-orange-bright"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow">Connect</p>
            <ul className="mt-5 grid gap-3">
              <li>
                <a
                  href="https://www.linkedin.com/in/abeernasir-3052b628a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-sm text-gray-body transition-colors duration-300 hover:text-orange-bright"
                >
                  <Linkedin
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="h-4 w-4"
                  />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:nasirmeo5533@gmail.com"
                  className="group inline-flex items-center gap-3 text-sm text-gray-body transition-colors duration-300 hover:text-orange-bright"
                >
                  <Mail
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="h-4 w-4"
                  />
                  Email
                </a>
              </li>
              <li>
                <a
                  href="tel:+923703159642"
                  className="group inline-flex items-center gap-3 text-sm text-gray-body transition-colors duration-300 hover:text-orange-bright"
                >
                  <Phone
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="h-4 w-4"
                  />
                  Phone
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-gray-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-body">
            © 2026 Abeer Nasir. All rights reserved.
          </p>
          <p className="text-xs text-gray-body">
            Built with Next.js — dark, fast, semantic.
          </p>
        </div>
      </div>
    </footer>
  );
}

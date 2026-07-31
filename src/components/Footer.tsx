import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { ConnectorLine } from "./ui/ConnectorLine";
import { PulseNode } from "./ui/PulseNode";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Impact", href: "#impact" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Digital Marketing",
  "SEO",
  "Content Creation",
  "AI Automation",
  "AI Agent Development",
  "Video Editing",
];

export function Footer() {
  return (
    <footer className="bg-elevated">
      <ConnectorLine />
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl text-orange-core">Open Agent</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-body">
              We don&apos;t just market your store. We automate it.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <PulseNode size="sm" />
              <p className="text-xs text-gray-body">
                Accepting a few new clients
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

          <nav aria-label="Services" className="lg:justify-self-center">
            <p className="eyebrow">Services</p>
            <ul className="mt-5 grid gap-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="glow-sweep text-sm text-gray-body transition-colors duration-300 hover:text-orange-bright"
                  >
                    {service}
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
                  href="https://www.linkedin.com"
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
                  href="https://github.com/nasirmeo5533-design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-sm text-gray-body transition-colors duration-300 hover:text-orange-bright"
                >
                  <Github
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="h-4 w-4"
                  />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-gray-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-body">
            © 2026 Open Agent. All rights reserved.
          </p>
          <p className="text-xs text-gray-body">
            Built with AI. Proof in the numbers.
          </p>
        </div>
      </div>
    </footer>
  );
}

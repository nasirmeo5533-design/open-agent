"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bot,
  ChevronDown,
  Clapperboard,
  Menu,
  Megaphone,
  PenTool,
  Phone,
  Search,
  Sparkles,
  Workflow,
  X,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Service = { icon: LucideIcon; label: string };

const services: Service[] = [
  { icon: Megaphone, label: "Digital Marketing" },
  { icon: Search, label: "SEO" },
  { icon: PenTool, label: "Content Creation" },
  { icon: Workflow, label: "AI Automation" },
  { icon: Bot, label: "AI Agent Development" },
  { icon: Clapperboard, label: "Video Editing" },
];

const links = [
  { href: "#top", label: "Home" },
  { href: "#why", label: "Why Us" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (!open && !servicesOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, servicesOpen]);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="hidden bg-navy-900 text-white md:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6">
          <p className="text-xs font-medium text-white/70">
            Karachi &bull; Remote Worldwide
          </p>
          <div className="flex items-center gap-5">
            <a
              href="tel:+923303159642"
              className="inline-flex items-center gap-2 text-xs font-semibold text-white/80 transition-colors hover:text-orange-bright"
            >
              <Phone
                aria-hidden="true"
                className="h-3.5 w-3.5 text-orange-core"
              />
              0330 3159642
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-orange-core to-orange-bright px-4 py-1.5 text-xs font-bold text-white transition hover:brightness-110"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-line bg-white/85 backdrop-blur">
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6"
        >
          <Link
            href="#top"
            className="flex shrink-0 items-center gap-2.5"
            aria-label="Open Agent — back to top"
          >
            <span
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-orange-core to-orange-bright text-white shadow-btn"
            >
              <Sparkles className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <span className="text-lg font-extrabold tracking-tight text-navy-900">
              Open Agent
              <span
                aria-hidden="true"
                className="ml-1.5 inline-block h-1.5 w-1.5 rounded-full bg-orange-core align-middle"
              />
            </span>
          </Link>

          <ul className="hidden items-center gap-6 lg:flex xl:gap-7">
            {links.slice(0, 1).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-bold text-navy-900 transition-colors hover:text-orange-core"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Services dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              onFocus={() => setServicesOpen(true)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                  setServicesOpen(false);
                }
              }}
            >
              <Link
                href="#services"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                aria-controls="services-menu"
                className="flex items-center gap-1.5 text-sm font-bold text-navy-900 transition-colors hover:text-orange-core"
              >
                Services
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    "h-4 w-4 transition-transform duration-300",
                    servicesOpen && "rotate-180 text-orange-core"
                  )}
                />
              </Link>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    id="services-menu"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-1/2 top-full z-50 mt-4 w-72 -translate-x-1/2 rounded-2xl border border-line bg-white p-2 shadow-card-lg"
                  >
                    <p className="px-3 pb-1 pt-2 text-[11px] font-bold uppercase tracking-[0.14em] text-orange-core">
                      Our Services
                    </p>
                    <ul>
                      {services.map(({ icon: Icon, label }) => (
                        <li key={label}>
                          <Link
                            href="#services"
                            onClick={() => setServicesOpen(false)}
                            className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-cloud"
                          >
                            <span
                              aria-hidden="true"
                              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-core/10 text-orange-core"
                            >
                              <Icon className="h-4 w-4" />
                            </span>
                            <span className="text-sm font-bold text-navy-900">
                              {label}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {links.slice(1).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-bold text-navy-900 transition-colors hover:text-orange-core"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link href="#contact" className="btn-primary px-5 py-2.5">
              Schedule a Call
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy-900 transition-colors hover:bg-cloud hover:text-orange-core lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X strokeWidth={2} className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu strokeWidth={2} className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-menu"
            className="border-b border-line bg-white lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <nav
              aria-label="Mobile"
              className="mx-auto max-w-7xl px-6 pb-6 pt-2"
            >
              <Link
                href="#top"
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-bold text-navy-900 hover:text-orange-core"
              >
                Home
              </Link>

              <p className="pt-3 text-[11px] font-bold uppercase tracking-[0.14em] text-orange-core">
                Services
              </p>
              <ul className="mt-1">
                {services.map(({ icon: Icon, label }) => (
                  <li key={label}>
                    <Link
                      href="#services"
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 py-2.5 text-sm font-bold text-navy-900 hover:text-orange-core"
                    >
                      <Icon
                        aria-hidden="true"
                        className="h-4 w-4 text-orange-core"
                      />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              {links.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-bold text-navy-900 hover:text-orange-core"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-4 w-full"
              >
                Schedule a Call
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

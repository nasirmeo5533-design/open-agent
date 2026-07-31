"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#resources", label: "Resources" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-line bg-primary/80 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 px-4 sm:px-8 lg:px-16"
      >
        <Link
          href="#top"
          className="group flex items-center gap-3"
          aria-label="Abeer Nasir — back to top"
        >
          <span
            aria-hidden="true"
            className="clip-hex-sm flex h-9 w-9 items-center justify-center bg-orange-core font-display text-sm font-bold text-primary transition-colors duration-300 group-hover:bg-orange-bright"
          >
            AN
          </span>
          <span className="font-display text-lg leading-none text-paper">
            Abeer Nasir
            <span
              aria-hidden="true"
              className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-orange-core align-middle"
            />
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="glow-sweep text-xs font-semibold uppercase tracking-[0.08em] text-gray-body transition-colors duration-300 hover:text-paper"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <ButtonLink href="#contact" variant="primary">
            Let&apos;s talk
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-gray-body transition-colors duration-300 hover:text-orange-bright lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X strokeWidth={1.5} className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu strokeWidth={1.5} className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-menu"
            className="overflow-hidden border-t border-gray-line bg-primary/95 backdrop-blur lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <ul className="px-4 py-4 sm:px-8">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-xs font-semibold uppercase tracking-[0.08em] text-gray-body transition-colors duration-300 hover:text-orange-bright"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <ButtonLink
                  href="#contact"
                  variant="primary"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Let&apos;s talk
                </ButtonLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "./ui/Button";
import { CTABanner } from "./ui/CTABanner";
import { Eyebrow } from "./ui/Eyebrow";
import { HexCard } from "./ui/HexCard";
import { PulseNode } from "./ui/PulseNode";
import { SectionWrapper } from "./ui/SectionWrapper";

const CONTACT_EMAIL = "nasirmeo5533@gmail.com";
const PHONE_DISPLAY = "+92 370 3159642";
const PHONE_TEL = "tel:+923703159642";
const LINKEDIN_URL = "https://www.linkedin.com/in/abeernasir-3052b628a";
const LINKEDIN_DISPLAY = "linkedin.com/in/abeernasir-3052b628a";

const fieldClasses =
  "w-full border border-gray-line bg-panel p-4 text-sm text-paper transition-colors duration-300 placeholder:text-gray-body/60 hover:border-orange-dim focus:border-orange-core";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <SectionWrapper id="contact" className="bg-primary">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <div className="max-w-3xl">
          <Eyebrow>Contact</Eyebrow>
          <h2 className="mt-4 font-display text-4xl leading-tight text-paper md:text-6xl">
            Let&apos;s build something{" "}
            <span className="block text-orange-core">that converts.</span>
          </h2>
          <p className="mt-6 max-w-xl text-sm text-gray-body md:text-base">
            Open to freelance, remote, collaborations, and full-time roles in
            Generative AI, AI Automation, and Digital Marketing.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <HexCard>
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="grid gap-2">
                  <label htmlFor="contact-name" className="eyebrow">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className={fieldClasses}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="contact-email" className="eyebrow">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={fieldClasses}
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <label htmlFor="contact-message" className="eyebrow">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project"
                  className={`${fieldClasses} resize-y`}
                />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Button type="submit" className="w-full sm:w-auto">
                  <Send
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="h-4 w-4"
                  />
                  Send message
                </Button>
                {sent && (
                  <p aria-live="polite" className="text-xs text-orange-bright">
                    Opening your email app — or write directly to {CONTACT_EMAIL}
                  </p>
                )}
              </div>
            </form>
          </HexCard>

          <div className="grid content-start gap-8">
            <div className="flex items-center gap-3">
              <PulseNode />
              <p className="text-sm font-medium text-paper">
                Open to freelance & full-time
              </p>
            </div>
            <HexCard>
              <ul className="grid gap-8">
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="group flex items-start gap-4"
                  >
                    <span className="mt-0.5 shrink-0 text-gray-body transition-colors duration-300 group-hover:text-orange-bright">
                      <Mail
                        aria-hidden="true"
                        strokeWidth={1.5}
                        className="h-5 w-5"
                      />
                    </span>
                    <span className="grid gap-1">
                      <span className="eyebrow">Email</span>
                      <span className="text-sm text-gray-body transition-colors duration-300 group-hover:text-paper">
                        {CONTACT_EMAIL}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={PHONE_TEL} className="group flex items-start gap-4">
                    <span className="mt-0.5 shrink-0 text-gray-body transition-colors duration-300 group-hover:text-orange-bright">
                      <Phone
                        aria-hidden="true"
                        strokeWidth={1.5}
                        className="h-5 w-5"
                      />
                    </span>
                    <span className="grid gap-1">
                      <span className="eyebrow">Phone</span>
                      <span className="text-sm text-gray-body transition-colors duration-300 group-hover:text-paper">
                        {PHONE_DISPLAY}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4"
                  >
                    <span className="mt-0.5 shrink-0 text-gray-body transition-colors duration-300 group-hover:text-orange-bright">
                      <Linkedin
                        aria-hidden="true"
                        strokeWidth={1.5}
                        className="h-5 w-5"
                      />
                    </span>
                    <span className="grid gap-1">
                      <span className="eyebrow">LinkedIn</span>
                      <span className="text-sm text-gray-body transition-colors duration-300 group-hover:text-paper">
                        {LINKEDIN_DISPLAY}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 shrink-0 text-gray-body">
                      <MapPin
                        aria-hidden="true"
                        strokeWidth={1.5}
                        className="h-5 w-5"
                      />
                    </span>
                    <span className="grid gap-1">
                      <span className="eyebrow">Location</span>
                      <span className="text-sm text-gray-body">
                        Karachi, Sindh, Pakistan
                      </span>
                    </span>
                  </div>
                </li>
              </ul>
            </HexCard>
          </div>
        </div>

        <CTABanner
          claim="Have a project in mind?"
          punch="Let's make it convert."
          subtext="Open to freelance, remote, collaborations, and full-time roles."
          ctaLabel="Get in touch"
          className="mt-24 md:mt-32"
        />
      </div>
    </SectionWrapper>
  );
}

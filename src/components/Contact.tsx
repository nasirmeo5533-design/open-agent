"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Clock, Mail, MapPin, Send } from "lucide-react";
import { Button } from "./ui/Button";
import { CTABanner } from "./ui/CTABanner";
import { Eyebrow } from "./ui/Eyebrow";
import { HexCard } from "./ui/HexCard";
import { PulseNode } from "./ui/PulseNode";
import { SectionWrapper } from "./ui/SectionWrapper";

const CONTACT_EMAIL = "nasirmeo5533@gmail.com";
const BOOK_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Booking a call with Open Agent"
)}`;

const fieldClasses =
  "w-full border border-gray-line bg-panel p-4 text-sm text-paper transition-colors duration-300 hover:border-orange-dim focus:border-orange-core";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const storeUrl = String(data.get("storeUrl") ?? "").trim();
    const budget = String(data.get("budget") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = encodeURIComponent(`New client inquiry from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}\n${email}\nStore: ${storeUrl}\nBudget: ${budget}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <SectionWrapper id="contact" className="bg-primary">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <div className="max-w-3xl">
          <Eyebrow>CONTACT</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-tight text-paper md:text-5xl">
            Booking new clients.{" "}
            <span className="block text-orange-core">
              Tell us what you sell. We&apos;ll show you the system.
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-sm text-gray-body md:text-base">
            Small budgets welcome. We prove results before you scale.
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
                    className={fieldClasses}
                  />
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="grid gap-2">
                  <label htmlFor="contact-store" className="eyebrow">
                    Store URL
                  </label>
                  <input
                    id="contact-store"
                    name="storeUrl"
                    type="url"
                    autoComplete="url"
                    className={fieldClasses}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="contact-budget" className="eyebrow">
                    Budget
                  </label>
                  <select
                    id="contact-budget"
                    name="budget"
                    required
                    defaultValue=""
                    className={fieldClasses}
                  >
                    <option value="" disabled>
                      Select a budget range
                    </option>
                    <option value="Under PKR 50k">Under PKR 50k</option>
                    <option value="PKR 50k–150k">PKR 50k–150k</option>
                    <option value="PKR 150k+">PKR 150k+</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
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
                Accepting a few new clients
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
                        Karachi — remote worldwide
                      </span>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 shrink-0 text-gray-body">
                      <Clock
                        aria-hidden="true"
                        strokeWidth={1.5}
                        className="h-5 w-5"
                      />
                    </span>
                    <span className="grid gap-1">
                      <span className="eyebrow">Response</span>
                      <span className="text-sm text-gray-body">
                        Within 24 hours
                      </span>
                    </span>
                  </div>
                </li>
              </ul>
            </HexCard>
          </div>
        </div>

        <CTABanner
          claim="Ready to automate your growth?"
          punch="One system. Six specialists. Your store, scaled."
          ctaLabel="Book a call"
          ctaHref={BOOK_MAILTO}
          className="mt-24 md:mt-32"
        />
      </div>
    </SectionWrapper>
  );
}

"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const CONTACT_EMAIL = "nasirmeo5533@gmail.com";
const CONTACT_PHONE_DISPLAY = "0330 3159642";
const CONTACT_PHONE_TEL = "tel:+923303159642";

const fieldClasses =
  "w-full rounded-xl border border-navy-600/50 bg-navy-900/70 px-4 py-3 text-sm text-white transition-colors duration-300 hover:border-navy-500 focus:border-orange-core focus:outline-none [&>option]:text-slate-900";

const detailRowClasses =
  "flex items-start gap-4";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const storeUrl = String(data.get("storeUrl") ?? "").trim();
    const budget = String(data.get("budget") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent("New client inquiry");
    const body = encodeURIComponent(
      [
        `Full Name: ${name}`,
        `Phone Number: ${phone}`,
        `Email Address: ${email}`,
        `Store URL: ${storeUrl || "-"}`,
        `Budget: ${budget}`,
        "",
        "Message:",
        message,
      ].join("\n")
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="band-navy py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
                Booking new clients.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
                Tell us what you sell. We&apos;ll show you the system.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-core opacity-60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-orange-core" />
              </span>
              <span className="text-sm font-semibold text-white">
                Accepting a few new clients
              </span>
            </div>

            <ul className="grid gap-5">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className={`${detailRowClasses} group`}
                >
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-navy-700 bg-navy-800 text-orange-core">
                    <Mail aria-hidden="true" className="h-4 w-4" />
                  </span>
                  <span className="grid gap-0.5">
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                      Email
                    </span>
                    <span className="text-sm font-medium text-white transition-colors duration-300 group-hover:text-orange-bright">
                      {CONTACT_EMAIL}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href={CONTACT_PHONE_TEL} className={detailRowClasses}>
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-navy-700 bg-navy-800 text-orange-core">
                    <Phone aria-hidden="true" className="h-4 w-4" />
                  </span>
                  <span className="grid gap-0.5">
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                      Phone
                    </span>
                    <span className="text-sm font-medium text-white">
                      {CONTACT_PHONE_DISPLAY}
                    </span>
                  </span>
                </a>
              </li>
              <li className={detailRowClasses}>
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-navy-700 bg-navy-800 text-orange-core">
                  <MapPin aria-hidden="true" className="h-4 w-4" />
                </span>
                <span className="grid gap-0.5">
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    Location
                  </span>
                  <span className="text-sm font-medium text-white">
                    Karachi • Remote Worldwide
                  </span>
                </span>
              </li>
              <li className={detailRowClasses}>
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-navy-700 bg-navy-800 text-orange-core">
                  <Clock aria-hidden="true" className="h-4 w-4" />
                </span>
                <span className="grid gap-0.5">
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    Response
                  </span>
                  <span className="text-sm font-medium text-white">
                    Within 24 hours
                  </span>
                </span>
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="card-dark p-7">
            <div className="grid gap-5">
              <div className="grid gap-1.5">
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-bold uppercase tracking-[0.12em] text-slate-300"
                >
                  Full Name
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

              <div className="grid gap-6 md:grid-cols-2">
                <div className="grid gap-1.5">
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs font-bold uppercase tracking-[0.12em] text-slate-300"
                  >
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className={fieldClasses}
                  />
                </div>
                <div className="grid gap-1.5">
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-bold uppercase tracking-[0.12em] text-slate-300"
                  >
                    Email Address
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
                <div className="grid gap-1.5">
                  <label
                    htmlFor="contact-store"
                    className="block text-xs font-bold uppercase tracking-[0.12em] text-slate-300"
                  >
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
                <div className="grid gap-1.5">
                  <label
                    htmlFor="contact-budget"
                    className="block text-xs font-bold uppercase tracking-[0.12em] text-slate-300"
                  >
                    Budget
                  </label>
                  <select
                    id="contact-budget"
                    name="budget"
                    required
                    className={fieldClasses}
                  >
                    <option value="Under PKR 50k">Under PKR 50k</option>
                    <option value="PKR 50k–150k">PKR 50k–150k</option>
                    <option value="PKR 150k+">PKR 150k+</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-1.5">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-bold uppercase tracking-[0.12em] text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  className={`${fieldClasses} resize-y`}
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Get More Details
              </button>

              {sent && (
                <p aria-live="polite" className="text-center text-xs text-slate-300">
                  Thanks! Your email app should open — press send and we&apos;ll
                  reply within 24 hours.
                </p>
              )}
            </div>
          </form>
        </div>

        <p className="mt-16 text-center text-sm text-slate-300 md:text-base">
          Prefer email?{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold text-white underline decoration-orange-core underline-offset-4 transition-colors duration-300 hover:text-orange-bright"
          >
            Send us a note anytime.
          </a>
        </p>
      </div>
    </section>
  );
}

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ButtonLink } from "./Button";

type Props = {
  claim: ReactNode;
  punch: ReactNode;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

export function CTABanner({
  claim,
  punch,
  subtext,
  ctaLabel,
  ctaHref = "mailto:nasirmeo5533@gmail.com",
  className,
}: Props) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="clip-hex-lg relative flex flex-col items-start justify-between gap-8 border border-gray-line bg-elevated px-8 py-14 md:flex-row md:items-center md:px-16 md:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgba(255,106,0,0.15),transparent_75%)]"
        />
        <div className="relative">
          <p className="font-display text-3xl leading-tight text-paper md:text-5xl">
            {claim}{" "}
            <span className="block text-orange-core">{punch}</span>
          </p>
          {subtext && (
            <p className="mt-4 max-w-xl text-sm text-gray-body md:text-base">
              {subtext}
            </p>
          )}
        </div>
        {ctaLabel && (
          <ButtonLink
            href={ctaHref}
            variant="primary"
            size="lg"
            className="shrink-0"
          >
            {ctaLabel}
          </ButtonLink>
        )}
      </div>
    </div>
  );
}

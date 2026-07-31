import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = HTMLAttributes<HTMLDivElement>;

export function GlowCard({ className, ...props }: Props) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-gray-line bg-elevated p-6 transition-all duration-300 hover:border-orange-dim hover:shadow-glow",
        className
      )}
      {...props}
    />
  );
}

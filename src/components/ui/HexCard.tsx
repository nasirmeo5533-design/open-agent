import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = HTMLAttributes<HTMLDivElement>;

export function HexCard({ className, ...props }: Props) {
  return (
    <div
      className={cn(
        "clip-hex border border-gray-line bg-elevated p-8 transition-all duration-300 hover:border-orange-dim hover:shadow-glow",
        className
      )}
      {...props}
    />
  );
}

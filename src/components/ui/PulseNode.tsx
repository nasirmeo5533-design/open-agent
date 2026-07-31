"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: "h-2 w-2",
  md: "h-3 w-3",
  lg: "h-4 w-4",
};

export function PulseNode({ size = "md", className }: Props) {
  return (
    <motion.span
      aria-hidden="true"
      className={cn(
        "inline-block rounded-full bg-orange-core",
        sizes[size],
        className
      )}
      animate={{
        boxShadow: [
          "0 0 0 0 rgba(255,106,0,0.5)",
          "0 0 0 10px rgba(255,106,0,0)",
          "0 0 0 0 rgba(255,106,0,0)",
        ],
      }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
    />
  );
}

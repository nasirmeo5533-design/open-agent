"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function ConnectorLine({ className }: Props) {
  return (
    <motion.div
      aria-hidden="true"
      className={cn("h-0.5 w-full", className)}
      style={{
        backgroundImage:
          "radial-gradient(circle, #FF6A00 1.5px, transparent 2px)",
        backgroundSize: "12px 2px",
        backgroundRepeat: "repeat-x",
        filter: "drop-shadow(0 0 6px rgba(255,106,0,0.6))",
        transformOrigin: "left",
      }}
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    />
  );
}

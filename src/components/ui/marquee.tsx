"use client";

import { motion } from "motion/react";

interface MarqueeProps {
  text: string;
  repeat?: number;
  speed?: number;
  className?: string;
}

export function Marquee({ text, repeat = 6, speed = 20, className }: MarqueeProps) {
  const items = Array.from({ length: repeat }, (_, i) => i);

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-flex"
        animate={{ x: [0, `-${100 / repeat}%`] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {items.map((i) => (
          <span key={i} className="inline-block px-8">
            {text}
          </span>
        ))}
        {items.map((i) => (
          <span key={`dup-${i}`} className="inline-block px-8">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

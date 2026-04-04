"use client";

import { Marquee } from "@/components/ui/marquee";

export function MarqueeBanner() {
  return (
    <div className="bg-foreground text-background py-3 overflow-hidden">
      <Marquee
        text="BRODE A LA MAIN  *  EXPEDITION MONDIALE  *  PIECES UNIQUES  *  ARTISANAT INDIEN  *"
        repeat={4}
        speed={25}
        className="text-[11px] tracking-[0.3em] uppercase"
      />
    </div>
  );
}

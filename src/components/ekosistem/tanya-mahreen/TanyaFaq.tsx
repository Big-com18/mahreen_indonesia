"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { tanyaMahreen } from "@/data/ekosistem/tanya-mahreen";

export default function TanyaFaq() {
  const { faq } = tanyaMahreen;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative mx-auto max-w-3xl px-6 py-20 border-t border-white/5 text-center">
      <Reveal>
        <p className="text-xs tracking-[0.3em] text-gold/80 uppercase mb-4">{faq.eyebrow}</p>
        <h2 className="font-display text-3xl sm:text-4xl text-cream mb-12">{faq.title}</h2>
      </Reveal>

      <div className="space-y-4 text-left">
        {faq.items.map((item, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={item.q} delay={i * 0.06}>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-medium text-cream">{item.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gold shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-sm text-haze leading-relaxed">{item.a}</p>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

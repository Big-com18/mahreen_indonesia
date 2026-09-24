"use client";

import { useState } from "react";
import { Gem, MonitorSmartphone, Watch, type LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import { tanyaMahreen } from "@/data/ekosistem/tanya-mahreen";

const icons: Record<string, LucideIcon> = { Gem, MonitorSmartphone, Watch };

export default function TanyaWork() {
  const { work } = tanyaMahreen;
  const [tab, setTab] = useState<(typeof work.tabs)[number]>(work.tabs[0]);

  const items =
    tab === "All" ? work.items : work.items.filter((item) => item.category === tab);

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20 border-t border-white/5">
      <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
        <div>
          <p className="text-xs tracking-[0.3em] text-gold/80 uppercase mb-3">{work.eyebrow}</p>
          <h2 className="font-display text-3xl sm:text-4xl text-cream">{work.title}</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {work.tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`text-xs font-medium px-4 py-2 rounded-full border transition-colors ${
                t === tab
                  ? "bg-gold text-ink border-gold"
                  : "border-white/15 text-haze hover:border-gold/40 hover:text-cream"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-3 gap-6">
        {items.map((item, i) => {
          const Icon = icons[item.icon];
          return (
            <Reveal key={item.title} delay={i * 0.08}>
              <TiltCard dark padded={false} className="overflow-hidden">
                <div className="relative aspect-[4/3] bg-brand-mesh flex items-center justify-center">
                  <Icon className="w-9 h-9 text-cream/60" strokeWidth={1.25} />
                </div>
                <div className="p-5">
                  <p className="text-[11px] tracking-widest text-gold/80 uppercase mb-1">
                    {item.category}
                  </p>
                  <h3 className="font-display text-lg text-cream">{item.title}</h3>
                </div>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

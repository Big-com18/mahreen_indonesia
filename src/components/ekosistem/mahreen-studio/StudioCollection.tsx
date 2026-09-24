"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { mahreenStudio } from "@/data/ekosistem/mahreen-studio";

export default function StudioCollection() {
  const { collection } = mahreenStudio;
  const [tab, setTab] = useState<(typeof collection.tabs)[number]>(collection.tabs[0]);

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
        <div>
          <p className="text-xs tracking-[0.3em] text-gold/80 uppercase mb-3">
            {collection.eyebrow}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-cream">{collection.title}</h2>
        </div>
        <div className="flex gap-6 text-sm">
          {collection.tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`pb-1 border-b transition-colors ${
                t === tab
                  ? "text-cream border-gold"
                  : "text-haze border-transparent hover:text-cream"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-1 rounded-2xl overflow-hidden">
        {collection.featured.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.1}>
            <div className="relative h-80 sm:h-96 bg-brand-mesh flex items-end p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
              <div className="relative">
                {item.badge && (
                  <span className="inline-block text-[10px] tracking-widest uppercase px-3 py-1 rounded-full border border-gold/30 text-gold mb-4">
                    {item.badge}
                  </span>
                )}
                <h3 className="font-display text-2xl text-cream mb-1">{item.title}</h3>
                <p className="text-sm text-haze/90">{item.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

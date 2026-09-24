"use client";

import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { mahreenStudio } from "@/data/ekosistem/mahreen-studio";

export default function StudioShop() {
  const { shop } = mahreenStudio;
  const [tab, setTab] = useState<(typeof shop.tabs)[number]>(shop.tabs[0]);

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20 border-t border-white/5">
      <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
        <div>
          <p className="text-xs tracking-[0.3em] text-gold/80 uppercase mb-3">{shop.eyebrow}</p>
          <h2 className="font-display text-3xl sm:text-4xl text-cream">{shop.title}</h2>
        </div>
        <div className="flex items-center gap-6 text-sm">
          {shop.tabs.map((t) => (
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
          <span className="text-xs tracking-wide text-haze/70 uppercase whitespace-nowrap">
            {shop.products.length} Products
          </span>
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {shop.products.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.06}>
            <div className="group">
              <div className="relative aspect-[4/5] rounded-xl bg-cream/[0.06] border border-white/8 flex items-center justify-center overflow-hidden">
                <ShoppingBag className="w-8 h-8 text-cream/40" strokeWidth={1.25} />
              </div>
              <div className="mt-4">
                <p className="flex items-center gap-1.5 text-[11px] text-gold/80 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  {p.stock}
                </p>
                <h3 className="text-cream font-medium">{p.name}</h3>
                <p className="text-sm text-haze mt-1">{p.price}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

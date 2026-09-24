"use client";

import { useState } from "react";
import {
  Shirt,
  Coffee,
  ShoppingCart,
  LineChart,
  BookOpen,
  Gift,
  GraduationCap,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import { portfolio } from "@/data/portofolio";

const icons: Record<string, LucideIcon> = {
  Shirt,
  Coffee,
  ShoppingCart,
  LineChart,
  BookOpen,
  Gift,
  GraduationCap,
};

export default function PortfolioGrid() {
  const [active, setActive] = useState<string>("Semua Karya");

  const items =
    active === "Semua Karya"
      ? portfolio.items
      : portfolio.items.filter((item) => item.category === active);

  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-24">
      <Reveal className="flex flex-wrap justify-center gap-3 mb-14">
        {portfolio.categories.map((cat) => {
          const isActive = cat === active;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`text-xs sm:text-sm font-medium tracking-wide px-5 py-2.5 rounded-full border transition-colors ${
                isActive
                  ? "bg-gold text-ink border-gold"
                  : "border-white/15 text-haze hover:border-gold/40 hover:text-cream"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          );
        })}
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => {
          const Icon = icons[item.icon];
          return (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <TiltCard dark padded={false} className="flex flex-col h-full">
                <div className="relative h-44 bg-brand-mesh flex items-center justify-center overflow-hidden">
                  <Icon className="w-10 h-10 text-cream/70" strokeWidth={1.25} />
                  <span className="absolute top-3 left-3 text-[10px] tracking-wide font-semibold px-2.5 py-1 rounded-full bg-ink/70 text-gold uppercase">
                    {item.category}
                  </span>
                  <span className="absolute bottom-3 right-3 text-xs font-medium text-cream/80">
                    {item.year}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs tracking-widest text-gold/80 uppercase mb-2">
                    {item.subcategory}
                  </p>
                  <h3 className="font-display text-xl text-cream mb-3">{item.title}</h3>
                  <p className="text-sm text-haze leading-relaxed mb-6">{item.desc}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-gold">
                    Lihat Detail
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                  </span>
                </div>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

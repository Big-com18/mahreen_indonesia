import {
  Globe,
  Palette,
  Share2,
  LineChart,
  Target,
  Clapperboard,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import { tanyaMahreen } from "@/data/ekosistem/tanya-mahreen";

const icons: Record<string, LucideIcon> = {
  Globe,
  Palette,
  Share2,
  LineChart,
  Target,
  Clapperboard,
  MessageSquare,
};

export default function TanyaSolutions() {
  const { solutions } = tanyaMahreen;

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20 text-center">
      <Reveal>
        <h2 className="font-display text-3xl sm:text-4xl text-cream mb-4">{solutions.title}</h2>
        <p className="text-haze/90 max-w-xl mx-auto mb-14">{solutions.intro}</p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
        {solutions.packages.map((pkg, i) => {
          const Icon = icons[pkg.icon];
          return (
            <Reveal key={pkg.title} delay={(i % 3) * 0.08}>
              <TiltCard dark className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                  <span className="text-[10px] tracking-wide uppercase px-3 py-1.5 rounded-full border border-gold/30 text-gold whitespace-nowrap">
                    {pkg.price}
                  </span>
                </div>
                <h3 className="font-display text-xl text-cream mb-4">{pkg.title}</h3>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-haze">
                      <span className="text-gold">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="mt-auto w-full py-3 rounded-full border border-white/15 text-sm font-medium text-cream hover:border-gold/50 hover:text-gold transition-colors">
                  Pilih Paket
                </button>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.15} className="mt-6">
        <div className="rounded-2xl border border-gold/20 bg-gold/[0.04] p-8 flex flex-col sm:flex-row items-center gap-6 text-left">
          <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 shrink-0">
            <MessageSquare className="w-6 h-6 text-gold" strokeWidth={1.5} />
          </span>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h3 className="font-display text-xl text-cream">
                {solutions.consultation.title}
              </h3>
              <span className="text-[10px] tracking-wide uppercase px-3 py-1 rounded-full border border-gold/30 text-gold">
                {solutions.consultation.price}
              </span>
            </div>
            <p className="text-sm text-haze mb-3">{solutions.consultation.desc}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] tracking-wide uppercase text-gold/80 font-medium">
              {solutions.consultation.tags.map((t) => (
                <span key={t}>· {t}</span>
              ))}
            </div>
          </div>
          <button className="shrink-0 px-7 py-3 rounded-full bg-gold text-ink font-medium hover:scale-105 transition-transform whitespace-nowrap">
            Pilih Paket
          </button>
        </div>
      </Reveal>
    </section>
  );
}

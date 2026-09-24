import Link from "next/link";
import { Users, Briefcase, Palette, Sparkles, type LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { ecosystemCards } from "@/data/site";

const icons: Record<string, LucideIcon> = { Users, Briefcase, Palette, Sparkles };

export default function EcosystemShowcase() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24">
      <Reveal className="mb-14">
        <p className="font-display text-3xl sm:text-4xl text-gold mb-3">Ekosistem Kami</p>
        <p className="text-haze/90 max-w-2xl leading-relaxed">
          Membangun bisnis, mengembangkan talenta, mendorong kreativitas, serta menciptakan
          dampak sosial melalui ekosistem Mahreen Indonesia.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {ecosystemCards.map((card, i) => {
          const Icon = icons[card.icon];
          return (
            <Reveal key={card.title} delay={i * 0.07}>
              <Link
                href={card.href}
                className="group block h-full rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-gold/40 transition-colors"
              >
                <div className="relative h-44 bg-[radial-gradient(circle_at_50%_30%,_theme(colors.plum)_0%,_theme(colors.ink)_75%)] flex items-center justify-center">
                  <span className="font-display italic text-5xl text-cream/90 group-hover:scale-110 transition-transform">
                    {card.monogram}
                  </span>
                </div>
                <div className="p-6">
                  <p className="flex items-center gap-1.5 text-[11px] tracking-widest text-gold/80 uppercase mb-3">
                    <Icon className="w-3.5 h-3.5" strokeWidth={2} />
                    {card.eyebrow}
                  </p>
                  <h3 className="font-display text-lg text-cream mb-2 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-sm text-haze leading-relaxed">{card.desc}</p>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

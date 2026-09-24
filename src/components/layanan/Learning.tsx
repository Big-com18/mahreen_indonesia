import { GraduationCap, Briefcase, BadgeCheck, Check, type LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import { learning } from "@/data/site";

const icons: Record<string, LucideIcon> = { GraduationCap, Briefcase, BadgeCheck };

export default function Learning() {
  return (
    <section id="learning" className="relative bg-plum/30 border-y border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <p className="text-sm tracking-widest text-gold mb-3 uppercase">Mahreen Learning</p>
            <h2 className="font-display text-3xl sm:text-4xl text-cream max-w-xl">
              Akselerasi kariermu lewat platform pendidikan terstruktur
            </h2>
          </div>
          <a
            href="/internship"
            className="inline-block px-6 py-3 rounded-full bg-gold text-ink font-medium hover:scale-105 transition-transform whitespace-nowrap"
          >
            Lihat Katalog Kelas
          </a>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {learning.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <TiltCard className="flex flex-col h-full">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 mb-6">
                    <Icon className="w-5 h-5 text-gold" strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display text-2xl text-cream mb-3">{item.title}</h3>
                  <p className="text-sm text-haze leading-relaxed mb-6">{item.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {item.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-cream/90">
                        <Check className="w-4 h-4 text-gold shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto text-sm font-medium text-gold hover:text-cream transition-colors cursor-default">
                    {item.cta} →
                  </span>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

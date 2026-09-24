import {
  CircleCheck,
  Users,
  Briefcase,
  Award,
  Network,
  Rocket,
  BrainCircuit,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { internship } from "@/data/ekosistem/internship";

const icons: Record<string, LucideIcon> = {
  CircleCheck,
  Users,
  Briefcase,
  Award,
  Network,
  Rocket,
  BrainCircuit,
};

export default function InternshipWhy() {
  const { why } = internship;

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20 border-t border-white/5">
      <div className="grid lg:grid-cols-2 gap-14 items-start">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl text-cream mb-10">{why.title}</h2>
          <div className="space-y-8">
            {why.reasons.map((r) => {
              const Icon = icons[r.icon];
              return (
                <div key={r.title} className="flex gap-4">
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl border border-gold/25 bg-gold/5 shrink-0">
                    <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="text-lg text-cream font-medium mb-1.5">{r.title}</h3>
                    <p className="text-sm text-haze leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 gap-4">
            {why.perks.map((p) => {
              const Icon = icons[p.icon];
              return (
                <div
                  key={p.label}
                  className="rounded-xl border border-white/10 bg-white/[0.02] px-6 py-10 flex flex-col items-center text-center gap-4 hover:border-gold/30 transition-colors"
                >
                  <Icon className="w-8 h-8 text-gold" strokeWidth={1.25} />
                  <span className="text-cream font-medium text-sm">{p.label}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

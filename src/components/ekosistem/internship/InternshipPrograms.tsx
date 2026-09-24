import {
  GraduationCap,
  MonitorPlay,
  PenTool,
  Users,
  Video,
  HelpCircle,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import { internship } from "@/data/ekosistem/internship";

const icons: Record<string, LucideIcon> = {
  GraduationCap,
  MonitorPlay,
  PenTool,
  Users,
  Video,
  HelpCircle,
};

export default function InternshipPrograms() {
  const { programs } = internship;

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24 overflow-hidden">
      <span
        aria-hidden
        className="pointer-events-none absolute top-6 right-0 font-display text-[5rem] sm:text-[7rem] leading-none text-white/[0.04] select-none whitespace-nowrap"
      >
        {programs.eyebrow.toUpperCase()}
      </span>

      <Reveal className="relative flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl text-cream mb-4">{programs.title}</h2>
          <p className="text-haze/90 max-w-lg leading-relaxed">{programs.intro}</p>
        </div>
      </Reveal>

      <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {programs.items.map((item, i) => {
          const Icon = icons[item.icon];
          return (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <TiltCard dark className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-8">
                  <span className="font-display text-2xl text-gold/70">{item.no}</span>
                  <Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl text-cream mb-3">{item.title}</h3>
                <p className="text-sm text-haze leading-relaxed mb-6">{item.desc}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-gold">
                  Pelajari Lebih Lanjut
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                </span>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

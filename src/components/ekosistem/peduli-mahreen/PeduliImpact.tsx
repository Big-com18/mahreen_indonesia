import { Smile, GraduationCap, Users, type LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import { peduliMahreen } from "@/data/ekosistem/peduli-mahreen";

const icons: Record<string, LucideIcon> = { Smile, GraduationCap, Users };

export default function PeduliImpact() {
  const { impact } = peduliMahreen;

  return (
    <section className="bg-[#050708] py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.3em] text-gold uppercase">{impact.eyebrow}</p>
          <h2 className="mt-3 font-display font-semibold text-4xl sm:text-5xl tracking-tight text-cream">
            {impact.title}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {impact.items.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.unit} delay={i * 0.08}>
                <span className="mx-auto flex h-24 w-24 items-center justify-center border border-white/10 bg-[#141819]">
                  <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                </span>
                <h3 className="mt-8 font-display font-semibold text-3xl text-cream">
                  <Counter to={item.to} suffix={item.suffix} /> {item.unit}
                </h3>
                <p className="mx-auto mt-4 max-w-xs text-sm leading-7 text-cream/70">{item.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import Reveal from "@/components/ui/Reveal";
import { internship } from "@/data/ekosistem/internship";

export default function InternshipSpecializations() {
  const { specializations } = internship;

  return (
    <section className="relative py-20 border-t border-white/5">
      <Reveal className="mx-auto max-w-3xl px-6 text-center mb-14">
        <h2 className="font-display text-3xl sm:text-4xl text-cream mb-4">
          {specializations.title}
        </h2>
        <p className="text-haze/90 leading-relaxed">{specializations.intro}</p>
      </Reveal>

      <div className="grid grid-cols-2 lg:grid-cols-4">
        {specializations.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <div className="relative h-64 sm:h-80 bg-brand-mesh flex items-end p-6 overflow-hidden border-r border-white/5 last:border-r-0">
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent" />
              <div className="relative">
                <p className="text-[10px] tracking-[0.25em] text-gold/80 uppercase mb-1.5">
                  {item.tag}
                </p>
                <h3 className="font-display text-lg sm:text-xl text-cream leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

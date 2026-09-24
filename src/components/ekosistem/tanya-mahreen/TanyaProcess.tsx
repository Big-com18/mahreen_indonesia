import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { tanyaMahreen } from "@/data/ekosistem/tanya-mahreen";

export default function TanyaProcess() {
  const { process } = tanyaMahreen;

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20 border-t border-white/5">
      <div className="grid lg:grid-cols-2 gap-14 items-start">
        <Reveal>
          <p className="text-xs tracking-[0.3em] text-gold/80 uppercase mb-3">{process.eyebrow}</p>
          <h2 className="font-display text-3xl sm:text-4xl text-cream leading-tight mb-5">
            {process.title}
          </h2>
          <p className="text-haze/90 leading-relaxed max-w-md mb-10">{process.intro}</p>

          <div className="space-y-8">
            {process.steps.map((step) => (
              <div key={step.no} className="flex gap-5">
                <span className="flex items-center justify-center w-9 h-9 rounded-full border border-gold/30 text-xs font-display text-gold shrink-0">
                  {step.no}
                </span>
                <div>
                  <h3 className="font-display text-lg text-cream mb-1">{step.title}</h3>
                  <p className="text-sm text-haze leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative">
          <div className="relative aspect-[4/3] rounded-2xl bg-brand-mesh border border-white/10" />
          <div className="absolute -bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-64 rounded-xl border border-gold/20 bg-ink/95 backdrop-blur-md p-5 shadow-xl shadow-black/40">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-gold" strokeWidth={2} />
              <span className="text-sm font-semibold text-cream">{process.stat.title}</span>
            </div>
            <p className="text-xs text-haze leading-relaxed">{process.stat.desc}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

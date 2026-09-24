import Reveal from "@/components/ui/Reveal";
import { peduliMahreen } from "@/data/ekosistem/peduli-mahreen";

export default function PeduliTimeline() {
  const { timeline } = peduliMahreen;

  return (
    <section className="border-t border-gold/10 bg-black py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.7fr]">
        <Reveal>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl leading-[1.05] tracking-tight text-cream lg:sticky lg:top-28">
            {timeline.title}
          </h2>
        </Reveal>

        <ol className="relative">
          <span className="absolute left-[9px] top-3 bottom-3 w-px bg-white/10" aria-hidden />
          {timeline.steps.map((step, i) => (
            <li key={step.stage} className="relative pl-16 pb-20 last:pb-0">
              <span
                className={`absolute left-0 top-1 h-5 w-5 rounded-full ${
                  i === 0 ? "bg-gold shadow-[0_0_0_6px_rgba(217,173,99,0.12)]" : "bg-haze/70"
                }`}
                aria-hidden
              />
              <Reveal>
                <p
                  className={`text-xs font-bold tracking-[0.3em] uppercase ${
                    i === 0 ? "text-gold" : "text-haze"
                  }`}
                >
                  {step.stage}
                </p>
                <h3 className="mt-3 font-display font-semibold text-3xl text-cream">{step.title}</h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-cream/70">{step.desc}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

import Reveal from "@/components/ui/Reveal";
import { tanyaMahreen } from "@/data/ekosistem/tanya-mahreen";

export default function TanyaWorkflow() {
  const { workflow } = tanyaMahreen;

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20 border-t border-white/5 text-center">
      <Reveal>
        <h2 className="font-display text-3xl sm:text-4xl text-cream mb-14">{workflow.title}</h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-8">
          {workflow.steps.map((step, i) => (
            <div key={step} className="flex items-center">
              <div className="flex flex-col items-center w-24">
                <span className="flex items-center justify-center w-14 h-14 rounded-full border border-gold/30 font-display text-lg text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-xs sm:text-sm text-haze">{step}</p>
              </div>
              {i < workflow.steps.length - 1 && (
                <span className="hidden sm:block w-8 h-px bg-white/15 mx-1 mt-[-1.5rem]" />
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

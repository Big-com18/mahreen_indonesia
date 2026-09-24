import Reveal from "@/components/ui/Reveal";
import { internship } from "@/data/ekosistem/internship";

export default function InternshipAdmission() {
  const { admission } = internship;

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20 border-t border-white/5 text-center">
      <Reveal>
        <h2 className="font-display text-3xl sm:text-4xl text-cream mb-14">{admission.title}</h2>
      </Reveal>

      <div className="grid sm:grid-cols-3 gap-5 text-left">
        {admission.windows.map((w, i) => {
          const closed = w.statusTone === "closed";
          return (
            <Reveal key={w.title} delay={i * 0.08}>
              <div
                className={`rounded-xl border overflow-hidden h-full flex flex-col ${
                  closed ? "border-red-900/40" : "border-white/10"
                }`}
              >
                <div
                  className={`px-5 py-3 text-center text-[11px] tracking-widest uppercase font-semibold ${
                    closed ? "bg-red-950/60 text-red-300" : "bg-white/[0.04] text-haze"
                  }`}
                >
                  {w.status}
                </div>
                <div
                  className={`flex-1 p-6 flex flex-col ${closed ? "bg-white/[0.01] opacity-60" : "bg-white/[0.02]"}`}
                >
                  <h3 className="font-display text-xl text-cream mb-2 leading-snug">{w.title}</h3>
                  <p
                    className={`text-sm font-medium mb-4 ${closed ? "text-haze" : "text-gold"}`}
                  >
                    {w.highlight}
                  </p>
                  <p className="text-sm text-haze leading-relaxed mb-6 flex-1">{w.desc}</p>
                  <button
                    disabled
                    className={`w-full py-3 rounded-lg border text-xs tracking-widest uppercase font-semibold ${
                      closed
                        ? "border-white/10 text-haze/60"
                        : "border-white/15 text-cream/80"
                    }`}
                  >
                    {w.cta}
                  </button>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

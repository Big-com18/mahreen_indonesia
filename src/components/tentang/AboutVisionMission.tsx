import Reveal from "@/components/ui/Reveal";
import { about } from "@/data/tentang";

export default function AboutVisionMission() {
  return (
    <section id="visi-misi" className="relative mx-auto max-w-6xl px-6 py-16 scroll-mt-24">
      <Reveal>
        <h2 className="font-display text-3xl sm:text-4xl text-cream text-center mb-12">
          Visi &amp; Misi
        </h2>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-3xl border border-gold/15 bg-brand-gradient/[0.05] p-8 sm:p-10 flex flex-col items-center justify-center text-center">
            <p className="text-sm tracking-[0.3em] text-gold/70 uppercase mb-4">
              {about.vision.title}
            </p>
            <p className="font-display text-xl sm:text-2xl text-cream leading-relaxed max-w-sm">
              {about.vision.body}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full rounded-3xl border border-white/8 bg-white/[0.02] p-8 sm:p-10">
            <p className="text-sm tracking-[0.3em] text-gold/70 uppercase mb-6">Misi</p>
            <ol className="space-y-5">
              {about.missions.map((mission, i) => (
                <li key={mission} className="flex gap-4">
                  <span className="font-display text-gold/60 text-sm pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm sm:text-[15px] text-haze/90 leading-relaxed">
                    {mission}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

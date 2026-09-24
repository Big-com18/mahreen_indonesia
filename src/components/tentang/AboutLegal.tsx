import { ShieldCheck, BadgeCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { about } from "@/data/tentang";

export default function AboutLegal() {
  const { legal } = about;

  return (
    <section id="legalitas" className="relative mx-auto max-w-6xl px-6 py-16 scroll-mt-24">
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        <Reveal>
          <p className="text-sm tracking-[0.3em] text-gold/70 uppercase mb-3">
            {legal.eyebrow}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-cream mb-5">{legal.title}</h2>
          <p className="text-haze/90 leading-relaxed max-w-md mb-6">{legal.desc}</p>
          <div className="flex flex-wrap gap-3">
            {legal.badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/[0.06] px-4 py-1.5 text-xs tracking-wide text-gold/90"
              >
                {badge === "Registered" ? (
                  <BadgeCheck className="w-3.5 h-3.5" strokeWidth={1.75} />
                ) : (
                  <ShieldCheck className="w-3.5 h-3.5" strokeWidth={1.75} />
                )}
                {badge.toUpperCase()}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-white/8 bg-white/[0.02] p-8 sm:p-10 space-y-6">
            <div>
              <p className="text-xs tracking-[0.2em] text-haze/60 uppercase mb-1">
                NIB (Nomor Induk Berusaha)
              </p>
              <p className="font-display text-lg sm:text-xl text-cream">{legal.nib}</p>
            </div>
            <div className="h-px bg-white/8" />
            <div>
              <p className="text-xs tracking-[0.2em] text-haze/60 uppercase mb-3">
                HAKI (Hak Kekayaan Intelektual)
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[11px] text-haze/60 mb-1">Nomor Pencatatan</p>
                  <p className="text-sm sm:text-base text-cream">{legal.haki.pencatatan}</p>
                </div>
                <div>
                  <p className="text-[11px] text-haze/60 mb-1">Nomor Permohonan</p>
                  <p className="text-sm sm:text-base text-cream">{legal.haki.permohonan}</p>
                </div>
              </div>
            </div>
            <div className="h-px bg-white/8" />
            <div>
              <p className="text-xs tracking-[0.2em] text-haze/60 uppercase mb-1">
                Keputusan Menteri Hukum RI
              </p>
              <p className="text-sm sm:text-base text-cream">{legal.kepmenkumham}</p>
            </div>
            <div className="h-px bg-white/8" />
            <div>
              <p className="text-xs tracking-[0.2em] text-haze/60 uppercase mb-1">Founder</p>
              <p className="text-sm sm:text-base text-cream">{legal.founder}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

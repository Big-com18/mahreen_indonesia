import Reveal from "@/components/ui/Reveal";
import { about } from "@/data/tentang";

export default function AboutHistory() {
  const { history } = about;

  return (
    <section id="sejarah" className="relative mx-auto max-w-6xl px-6 py-16 scroll-mt-24">
      <Reveal>
        <div className="rounded-3xl border border-white/8 bg-white/[0.02] p-8 sm:p-12 grid gap-10 sm:grid-cols-2">
          <div>
            <p className="text-sm tracking-[0.3em] text-gold/70 uppercase mb-3">
              {history.eyebrow}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl text-cream leading-snug mb-6">
              {history.title}
            </h2>
            <blockquote className="border-l-2 border-gold/40 pl-4 italic text-haze/90 leading-relaxed">
              &ldquo;{history.quote}&rdquo;
            </blockquote>
          </div>
          <div className="space-y-5 text-sm sm:text-[15px] text-haze/85 leading-relaxed">
            {history.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

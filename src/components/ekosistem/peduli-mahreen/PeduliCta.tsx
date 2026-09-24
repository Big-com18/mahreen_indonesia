import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { contact } from "@/data/site";
import { peduliMahreen } from "@/data/ekosistem/peduli-mahreen";

export default function PeduliCta() {
  const { cta } = peduliMahreen;

  return (
    <section id={cta.id} className="border-t border-white/10 bg-black py-28 scroll-mt-16">
      <Reveal className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display font-semibold text-4xl sm:text-6xl leading-[1.05] tracking-tight text-cream">
          {cta.title}
        </h2>
        <p className="mx-auto mt-8 max-w-xl leading-8 text-cream/75">{cta.desc}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`mailto:${contact.email}?subject=Kontribusi%20Kelas%20Inspirasi`}
            className="bg-gold px-8 py-4 text-xs font-bold tracking-[0.2em] text-ink uppercase transition-colors hover:bg-cream"
          >
            {cta.primary}
          </a>
          <Link
            href="/#kontak"
            className="border border-white/15 px-8 py-4 text-xs font-bold tracking-[0.2em] text-cream uppercase transition-colors hover:border-gold hover:text-gold"
          >
            {cta.secondary}
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

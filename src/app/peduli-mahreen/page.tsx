import type { Metadata } from "next";
import Stars from "@/components/decor/Stars";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PeduliHero from "@/components/ekosistem/peduli-mahreen/PeduliHero";
import PeduliImpact from "@/components/ekosistem/peduli-mahreen/PeduliImpact";
import PeduliTimeline from "@/components/ekosistem/peduli-mahreen/PeduliTimeline";
import PeduliGallery from "@/components/ekosistem/peduli-mahreen/PeduliGallery";
import PeduliStory from "@/components/ekosistem/peduli-mahreen/PeduliStory";
import PeduliCta from "@/components/ekosistem/peduli-mahreen/PeduliCta";
import SiteCta from "@/components/shared/SiteCta";

export const metadata: Metadata = {
  title: "Peduli Mahreen | Mahreen Indonesia",
  description:
    "Kelas Inspirasi: inisiatif pemberdayaan generasi muda melalui akses literasi berkualitas dan bimbingan mentor profesional.",
};

export default function PeduliMahreenPage() {
  return (
    <main className="relative">
      <div className="fixed inset-0 -z-10 bg-ink">
        <Stars />
      </div>

      <ScrollProgress />
      <Navbar />

      <PeduliHero />
      <PeduliImpact />
      <PeduliTimeline />
      <PeduliGallery />
      <PeduliStory />
      <PeduliCta />
      <SiteCta />

      <Footer />
    </main>
  );
}

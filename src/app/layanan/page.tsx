import type { Metadata } from "next";
import Stars from "@/components/decor/Stars";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesHero from "@/components/layanan/ServicesHero";
import ServicesPillars from "@/components/layanan/ServicesPillars";
import Learning from "@/components/layanan/Learning";
import SiteCta from "@/components/shared/SiteCta";

export const metadata: Metadata = {
  title: "Layanan Kami | Mahreen Indonesia",
  description:
    "Ekosistem layanan kreatif, digital, dan pembelajaran dari Mahreen Indonesia — mulai dari branding, pengembangan digital, hingga bootcamp dan sertifikasi.",
};

export default function LayananPage() {
  return (
    <main className="relative">
      <div className="fixed inset-0 -z-10 bg-ink">
        <Stars />
      </div>

      <ScrollProgress />
      <Navbar />

      <ServicesHero />
      <ServicesPillars />
      <Learning />
      <SiteCta />

      <Footer />
    </main>
  );
}

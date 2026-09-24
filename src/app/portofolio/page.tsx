import type { Metadata } from "next";
import Stars from "@/components/decor/Stars";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PortfolioHero from "@/components/portofolio/PortfolioHero";
import PortfolioGrid from "@/components/portofolio/PortfolioGrid";
import SiteCta from "@/components/shared/SiteCta";

export const metadata: Metadata = {
  title: "Portofolio | Mahreen Indonesia",
  description:
    "Galeri karya nyata dan inovasi kolaboratif dari seluruh ekosistem Mahreen Indonesia — Mahreen Studio, Tanya Mahreen, Peduli Mahreen, Mahreen CSR, dan Magang Mahreen.",
};

export default function PortofolioPage() {
  return (
    <main className="relative">
      <div className="fixed inset-0 -z-10 bg-ink">
        <Stars />
      </div>

      <ScrollProgress />
      <Navbar />

      <PortfolioHero />
      <PortfolioGrid />
      <SiteCta />

      <Footer />
    </main>
  );
}

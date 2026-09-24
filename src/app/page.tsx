import Stars from "@/components/decor/Stars";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Stats from "@/components/home/Stats";
import EcosystemShowcase from "@/components/home/EcosystemShowcase";
import Learning from "@/components/layanan/Learning";
import ServicesPillars from "@/components/layanan/ServicesPillars";
import Cta from "@/components/home/Cta";

export default function Home() {
  return (
    <main className="relative">
      {/* fixed night-sky base so translucent sections reveal it while scrolling */}
      <div className="fixed inset-0 -z-10 bg-ink">
        <Stars />
      </div>

      <ScrollProgress />
      <Navbar />

      <Hero />
      <About />
      <EcosystemShowcase />
      <Learning />
      <ServicesPillars />
      <Cta />

      <Footer />
    </main>
  );
}

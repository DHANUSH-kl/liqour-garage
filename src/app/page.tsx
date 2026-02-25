import Hero from "@/components/Hero/Hero";
import Marquee from "@/components/Marquee/Marquee";
import BrandStatement from "@/components/BrandStatement/BrandStatement";
import FeaturedCollection from "@/components/FeaturedCollection/FeaturedCollection";
import SignaturePick from "@/components/SignaturePick/SignaturePick";
import Experience from "@/components/Experience/Experience";
import VisitCTA from "@/components/VisitCTA/VisitCTA";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <BrandStatement />
      <FeaturedCollection />
      <SignaturePick />
      <Experience />
      <VisitCTA />
      <Footer />
    </main>
  );
}

import Hero from "@/components/Hero/Hero";
import Collection from "@/components/Collection/Collection";
import OurDifference from "@/components/OurDifference/OurDifference";
import OurImpact from "@/components/OurImpact/OurImpact";
import CTASection from "@/components/CTASection/CTASection";
import Location from "@/components/Location/Location";
import PremiumGallery from "@/components/PremiumGallery/PremiumGallery";
import Membership from "@/components/Membership/Membership";

export default function Home() {
  return (
    <main>
      <Hero />
      <Collection />
      <OurDifference />
      <OurImpact />
      <Membership />
      <PremiumGallery />
      <Location />
      <CTASection />
    </main>
  );
}

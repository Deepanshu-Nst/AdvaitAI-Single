import dynamic from "next/dynamic";
import ServicesSection from "@/components/sections/ServicesSection";
import InsightsSection from "@/components/sections/InsightsSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import ContactSection from "@/components/sections/ContactSection";

const HeroSection = dynamic(() => import("@/components/sections/HeroSection"), { ssr: false });

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <InsightsSection />
      <ServicesSection />
      <IndustriesSection />
      <PhilosophySection />
      <SocialProofSection />
      <ContactSection />
    </div>
  );
}

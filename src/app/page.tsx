import dynamic from "next/dynamic";
import ServicesSection from "@/components/sections/ServicesSection";
import UseCasesSection from "@/components/sections/UseCasesSection";
import ContactSection from "@/components/sections/ContactSection";
import BlogSection from "@/components/sections/BlogSection";

const HeroSection = dynamic(() => import("@/components/sections/HeroSection"), { ssr: false });

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ServicesSection />
      <UseCasesSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}

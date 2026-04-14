"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ParticleNetwork from "@/components/ui/ParticleNetwork";

const useCases = [
  {
    title: "Automating Reports",
    desc: "Generate weekly performance reports automatically, saving 20+ hours per week.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Customer Support Bots",
    desc: "Intelligent agents that instantly handle 80% of routine inquiries.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Data Analysis Systems",
    desc: "Real-time dashboards driven by AI to instantly highlight anomalies in metrics.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Automatic Generation",
    desc: "NLP + knowledge graphs for template generation across industries.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Flexible Deployment",
    desc: "Deploy across SaaS, dedicated, on-prem (air-gapped), and VPC environments.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop"
  }
];

export default function UseCasesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const duplicatedItems = [...useCases, ...useCases, ...useCases];

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const scroll = (time: number) => {
      if (!isHovered && containerRef.current) {
        const delta = time - lastTime;
        // Adjust speed here (pixel per ms)
        containerRef.current.scrollLeft += delta * 0.05;
        
        // Seamless looping: if scrolled past 1/3rd (one full set), seamlessly jump back
        if (containerRef.current.scrollLeft >= (containerRef.current.scrollWidth / 3)) {
          containerRef.current.scrollLeft -= (containerRef.current.scrollWidth / 3);
        }
      }
      lastTime = time;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <section id="use-cases" className="relative bg-[#0A0A0A] text-white py-32 border-t border-white/10 overflow-hidden">
      {/* Background Image on Section */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10 mix-blend-luminosity" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=3200&auto=format&fit=crop')" }} 
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20 relative">
          
          <ParticleNetwork idClassName="use-cases-particles" opacity={0.3} />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/3 pointer-events-none relative z-10"
          >
            <div className="text-brand-primary text-[12px] font-bold tracking-[0.2em] uppercase mb-8 inline-block border-b border-brand-primary/30 pb-2">
              Use Cases
            </div>
            <h2 className="text-[48px] md:text-[64px] font-bold leading-[1.05] tracking-tight mb-8">
              Real Impact. <br /> Not Theory.
            </h2>
            <p className="text-[18px] md:text-[20px] font-light text-white/50 leading-[1.6]">
              Explore how the algorithm works across domains. We build practical solutions that integrate directly into your workflow to solve actual problems.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="relative z-20 w-full overflow-hidden pb-12">
        <div 
          ref={containerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          className="flex gap-6 px-3 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing w-full"
        >
          {duplicatedItems.map((useCase, index) => (
            <div
              key={`${useCase.title}-${index}`}
              className="relative group overflow-hidden w-[350px] md:w-[450px] h-[500px] shrink-0 border border-white/10 bg-[#111111]"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-60 mix-blend-luminosity" 
                style={{ backgroundImage: `url('${useCase.image}')` }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
              
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end transition-transform duration-500 transform group-hover:translate-y-12 opacity-100 group-hover:opacity-0">
                <h3 className="text-[28px] md:text-[36px] font-bold text-white leading-[1.1]">{useCase.title}</h3>
              </div>

              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-10 bg-gradient-to-t from-brand-primary/95 to-black/60 pointer-events-none">
                <h3 className="text-[28px] md:text-[36px] font-bold text-white mb-4 leading-[1.1]">{useCase.title}</h3>
                <p className="text-[16px] font-medium text-white/90 leading-[1.6] mb-8">{useCase.desc}</p>
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-white text-black mt-auto">
                  <ArrowRight className="w-5 h-5 pointer-events-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

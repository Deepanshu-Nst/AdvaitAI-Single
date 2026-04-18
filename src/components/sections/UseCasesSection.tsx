"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ParticleNetwork from "@/components/ui/ParticleNetwork";

const useCases = [
  {
    title: "Healthcare",
    desc: "Streamlines patient data processing, diagnostic support, and regulatory compliance through secure, automated AI pipelines.",
    image: "https://plus.unsplash.com/premium_photo-1698421947098-d68176a8f5b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWklMjBpbiUyMGhlYWx0aGNhcmV8ZW58MHx8MHx8fDA%3D"
  },
  {
    title: "Education",
    desc: "K-12 & university learning: Converts textbook concepts into intelligent models that trigger active recall instead of passive reading.",
    image: "https://i.pinimg.com/1200x/1d/8d/2c/1d8d2c0d6cac55c27b53ebb8e83bc43c.jpg"
  },
  {
    title: "Corporate Training",
    desc: "Transforms compliance and onboarding materials into interactive scenario-based operational evaluations.",
    image: "https://i.pinimg.com/1200x/9f/ff/57/9fff570c833e6e328ef6eb6719fdc2b9.jpg"
  },
  {
    title: "Business Process Automation",
    desc: "Automates end-to-end business workflows using intelligent AI agents that eliminate manual bottlenecks and accelerate operational throughput.",
    image: "https://i.pinimg.com/736x/19/bd/bd/19bdbd15891a99148c1306c8044e6e83.jpg"
  },
  {
    title: "Marketing",
    desc: "Creates predictive analytics and intelligent campaigns that challenge and engage enterprise consumers.",
    image: "https://plus.unsplash.com/premium_photo-1684179641331-e89c6320b6a9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFya2V0aW5nfGVufDB8fDB8fHww"
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
    <section id="use-cases" className="relative bg-[#E8F4FD] text-[#0C2D57] py-32 border-t border-[#DBEAFE] overflow-hidden">
      {/* Background Image on Section */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=3200&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#E8F4FD] via-[#E8F4FD]/80 to-[#E8F4FD]" />

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
              INDUSTRY SOLUTIONS
            </div>
            <h2 className="text-[48px] md:text-[64px] font-bold leading-[1.05] tracking-tight mb-8">
              Use Cases
            </h2>
            <p className="text-[18px] md:text-[20px] font-light text-[#5B7FA5] leading-[1.6]">
              Transforming workflows with deterministic AI automation solutions tailored for complex, multi-layered industries.
            </p>
          </motion.div>
        </div>
      </div>

      <div
        className="relative z-20 w-full overflow-hidden pb-12"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >

        {/* Floating Navigation Arrows */}
        <div className={`absolute left-6 top-1/2 -translate-y-1/2 z-30 transition-opacity duration-300 pointer-events-none flex w-[calc(100%-3rem)] justify-between ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={() => {
              if (containerRef.current) {
                containerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
              }
            }}
            className="w-16 h-16 rounded-full border-2 border-brand-primary bg-white/80 backdrop-blur-sm flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-colors pointer-events-auto shadow-lg shadow-brand-primary/20"
          >
            <ArrowLeft className="w-8 h-8" />
          </button>

          <button
            onClick={() => {
              if (containerRef.current) {
                containerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
              }
            }}
            className="w-16 h-16 rounded-full border-2 border-brand-primary bg-white/80 backdrop-blur-sm flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-colors pointer-events-auto shadow-lg shadow-brand-primary/20"
          >
            <ArrowRight className="w-8 h-8" />
          </button>
        </div>

        <div
          ref={containerRef}
          className="flex gap-6 px-3 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing w-full"
        >
          {duplicatedItems.map((useCase, index) => (
            <div
              key={`${useCase.title}-${index}`}
              className="relative group overflow-hidden w-[350px] md:w-[450px] h-[500px] shrink-0 border border-[#BFDBFE] bg-white rounded-lg shadow-md shadow-blue-100"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-60"
                style={{ backgroundImage: `url('${useCase.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C2D57] via-[#0C2D57]/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />

              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end transition-transform duration-500 transform group-hover:translate-y-12 opacity-100 group-hover:opacity-0">
                <h3 className="text-[28px] md:text-[36px] font-bold text-white leading-[1.1]">{useCase.title}</h3>
              </div>

              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-10 bg-gradient-to-t from-brand-primary/95 to-[#0C2D57]/60 pointer-events-none">
                <h3 className="text-[28px] md:text-[36px] font-bold text-white mb-4 leading-[1.1]">{useCase.title}</h3>
                <p className="text-[16px] font-medium text-white/90 leading-[1.6] mb-8">{useCase.desc}</p>
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-white text-brand-primary mt-auto">
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

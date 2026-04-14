"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ParticleNetwork from "@/components/ui/ParticleNetwork";

const capabilities = [
  {
    title: "Digital Transformation & AI",
    desc: "We architect enterprise AI systems that automate operations, integrate custom LLMs, and build intelligent data mesh architectures.",
    slug: "digital-transformation",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
  },
  {
    title: "Strategy & Operations",
    desc: "Business model innovation and supply chain optimizations that deliver undeniable strategic leverage and risk mitigation.",
    slug: "strategy-operations",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
  },
  {
    title: "Technology & Security",
    desc: "From cloud modernization to hardcore cybersecurity audits and scalable DevOps pipelines.",
    slug: "technology-security",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
  },
  {
    title: "Design & Experience",
    desc: "Creating frictionless human-centered design systems and customer journey mapping for next-gen interfaces.",
    slug: "design-experience",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
  }
];

export default function ServicesSection() {
  const containerRef = useRef(null);

  return (
    <section id="what-we-do" className="bg-[#0A0A0A] text-white w-full border-t border-white/10 relative" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 py-32">
        
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 relative">
          
          {/* Left Column: Sticky Heading */}
          <div className="w-full lg:w-[40%] relative mt-6 hover:cursor-grab">
            <div className="lg:sticky lg:top-40 relative">
              <ParticleNetwork idClassName="services-particles" opacity={0.3} />
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="relative z-10 pointer-events-none"
              >
                <div className="w-16 h-[1px] bg-brand-primary mb-8" />
                <h2 className="text-[48px] md:text-[64px] font-bold leading-[1.05] tracking-tight mb-8">
                  What We <br /> Do
                </h2>
                <p className="text-[18px] md:text-[20px] font-light text-white/50 leading-[1.6] mb-10 max-w-sm">
                  We don't do superficial advice. We deliver deep operational transformations engineered for scale.
                </p>
                <Link 
                  href="/capabilities" 
                  className="inline-flex items-center gap-3 text-[14px] font-bold uppercase tracking-widest hover:text-brand-primary transition-colors group"
                >
                  View full stack
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Stacking Cinematic Cards */}
          <div className="w-full lg:w-[60%] flex flex-col gap-[10vh] pb-[10vh]">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-10%" }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
                className="sticky top-40 bg-[#111111] overflow-hidden border border-white/10 group cursor-pointer"
                style={{ zIndex: index, height: '500px' }}
              >
                <Link href={`/capabilities/${cap.slug}`} className="block w-full h-full relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-40 group-hover:opacity-80 mix-blend-luminosity"
                    style={{ backgroundImage: `url('${cap.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent transition-opacity duration-700 opacity-90 group-hover:opacity-60" />
                  
                  <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end z-10">
                    <div className="transform translate-y-0 lg:translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <span className="text-brand-primary text-[12px] font-bold uppercase tracking-[0.2em] mb-4 block lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        // 0{index + 1}
                      </span>
                      <h3 className="text-[28px] md:text-[48px] font-bold leading-[1.05] tracking-tight text-white mb-4">
                        {cap.title}
                      </h3>
                      <p className="text-[14px] md:text-[18px] font-light text-white/90 lg:text-white/70 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 max-w-xl leading-[1.6]">
                        {cap.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}

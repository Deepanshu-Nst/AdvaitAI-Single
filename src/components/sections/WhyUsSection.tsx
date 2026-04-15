"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Target, Hammer } from "lucide-react";
import ParticleNetwork from "@/components/ui/ParticleNetwork";

// Glow Card Component
const GlowCard = ({ children, index }: { children: React.ReactNode; index: number }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.19, 1, 0.22, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="relative overflow-hidden bg-white border border-[#BFDBFE] p-10 flex flex-col md:flex-row items-start gap-8 group cursor-default rounded-lg shadow-md shadow-blue-50"
    >
      <div 
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(14,165,233,0.08), transparent 40%)`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/0 to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {children}
    </motion.div>
  );
};

const reasons = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Versatile Environments",
    desc: "Deploy across SaaS, dedicated, on-prem (air-gapped), and VPC environments with zero friction."
  },
  {
    icon: <Hammer className="w-8 h-8" />,
    title: "Hardware Agnostic",
    desc: "Full support for CPU, GPU, MPS, and TPU infrastructure to maximize performance and efficiency."
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Enterprise Grade",
    desc: "Built from the ground up for strict security, compliance, and seamless performance at global scale."
  }
];

export default function WhyUsSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="why-us" ref={containerRef} className="bg-[#E8F4FD] text-[#0C2D57] py-32 border-t border-[#DBEAFE] relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[200px] pointer-events-none transform -translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-24 relative">
          
          <div className="w-full lg:w-[45%] lg:sticky lg:top-40 relative">
            <ParticleNetwork idClassName="why-us-particles" opacity={0.3} />
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-10 pointer-events-none"
            >
              <div className="text-brand-primary text-[12px] font-bold tracking-[0.2em] uppercase mb-8 inline-block border-b border-brand-primary/30 pb-2">
                DEPLOY
              </div>
              <motion.h2 style={{ y: yText }} className="text-[48px] md:text-[64px] font-bold leading-[1.05] tracking-tight mb-8 drop-shadow-sm">
                Flexible <br /> Deployment <br /> Architecture
              </motion.h2>
              <p className="text-[18px] md:text-[22px] font-light text-[#5B7FA5] leading-[1.6] max-w-md">
                Built for security, compliance, and performance at scale. Production-ready in minutes.
              </p>
            </motion.div>
          </div>

          <div className="w-full lg:w-[55%] flex flex-col gap-8">
            {reasons.map((reason, index) => (
              <GlowCard key={reason.title} index={index}>
                <div className="relative z-10 w-20 h-20 shrink-0 bg-[#F0F7FF] border border-[#BFDBFE] rounded-full flex items-center justify-center text-brand-primary group-hover:text-brand-secondary group-hover:scale-110 group-hover:border-brand-primary/50 transition-all duration-500 shadow-sm">
                  {reason.icon}
                </div>
                <div className="relative z-10 mt-2">
                  <h3 className="text-[28px] font-bold text-[#0C2D57] mb-4 leading-none">{reason.title}</h3>
                  <p className="text-[18px] font-light text-[#5B7FA5] leading-[1.6]">{reason.desc}</p>
                </div>
              </GlowCard>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[100svh] bg-[#0A0A0A] overflow-hidden flex flex-col justify-end pb-24 pt-32">
      {/* Background Image with Dark Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity scale-105 transform origin-bottom transition-transform duration-[20s] ease-out hover:scale-110"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/40 z-10" />

      <div className="container mx-auto px-6 md:px-12 relative z-20 flex flex-col justify-end h-full flex-grow mt-12 text-center md:text-left">
        
        {/* Main Content Area */}
        <div className="max-w-[1000px] w-full mx-auto md:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-[64px] md:text-[80px] lg:text-[110px] font-bold tracking-tighter leading-[0.9] text-white">
              <span className="text-[20px] md:text-[24px] uppercase tracking-widest text-brand-primary block mb-6 font-normal">Our mission</span>
              Artificial <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-accent to-white/40">
                Aligned Intelligence.
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
            className="text-[18px] md:text-[24px] font-light text-[#E5E7EB] max-w-[700px] mx-auto md:mx-0 leading-[1.6]"
          >
            High-precision logical intelligence enforces structured reasoning with minimal variance under complex conditions. It enables stable, reproducible inference across layered and interdependent systems.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 1 }}
            className="mt-12"
          >
            <Link
              href="/#contact"
              className="bg-brand-primary text-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-[#0A0A0A] transition-colors duration-500 inline-flex items-center gap-4 group"
            >
              Let&apos;s discuss your use cases 
              <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[100svh] bg-[#F0F7FF] overflow-hidden flex items-center pt-28">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(240,247,255,0.82) 0%,
              rgba(240,247,255,0.72) 22%,
              rgba(240,247,255,0.52) 42%,
              rgba(240,247,255,0.22) 65%,
              rgba(240,247,255,0.00) 100%
            ),
            radial-gradient(
              circle at 22% 48%,
              rgba(255,255,255,0.35) 0%,
              rgba(255,255,255,0.18) 18%,
              rgba(255,255,255,0.00) 52%
            ),
            url('https://i.pinimg.com/736x/c0/d9/cd/c0d9cdeac964146b3857cb0abbe229f7.jpg')
          `,
          backgroundSize: "115% auto",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          filter: "contrast(1.3) saturate(1.25) brightness(1.05)"
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#F0F7FF] via-[#F0F7FF]/90 to-[#E0EFFF]/60 z-10" />

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-20 w-full">
        <div className="max-w-[1000px] w-full text-center md:text-left -mt-12 md:-mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-[40px] md:text-[52px] lg:text-[60px] font-bold tracking-tight leading-[1.1] text-[#0C2D57] drop-shadow-sm mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-[#1D4ED8]">
                Aligned Intelligence.
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
            className="text-[18px] md:text-[24px] font-light text-[#3B5B8A] max-w-[700px] mx-auto md:mx-0 leading-[1.6]"
          >
            High-precision logical intelligence enforces structured reasoning
            with minimal variance under complex conditions. It enables stable,
            reproducible inference across layered and interdependent systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 1 }}
            className="mt-12"
          >
            <Link
              href="/#contact"
              className="bg-brand-primary text-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] hover:bg-brand-secondary transition-colors duration-500 inline-flex items-center gap-4 group shadow-lg shadow-brand-primary/20"
            >
              Get Your AI Automation Blueprint
              <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
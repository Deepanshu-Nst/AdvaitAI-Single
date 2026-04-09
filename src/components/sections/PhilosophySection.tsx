"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, ShieldCheck, TrendingUp } from "lucide-react";

export default function PhilosophySection() {
  return (
    <section className="py-24 bg-[#F8F9FF] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left - Abstract Geometric SVG */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <svg viewBox="0 0 400 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[480px] h-auto drop-shadow-xl">
              <motion.circle 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                cx="200" cy="240" r="160" stroke="url(#paint0_linear)" strokeWidth="2" strokeDasharray="4 8" 
              />
              <motion.circle 
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                cx="200" cy="240" r="120" stroke="url(#paint1_linear)" strokeWidth="1" strokeDasharray="10 10" 
              />
              <circle cx="200" cy="240" r="80" fill="url(#paint2_linear)" fillOpacity="0.1" stroke="#3B5BDB" strokeWidth="2" />
              
              {/* Nodes and interconnected lines */}
              <path d="M200 40 L200 160 M200 320 L200 440 M40 240 L120 240 M280 240 L360 240" stroke="#3B5BDB" strokeWidth="2" strokeOpacity="0.4" />
              <path d="M86 126 L143 183 M257 297 L314 354 M314 126 L257 183 M143 297 L86 354" stroke="#7048E8" strokeWidth="2" strokeOpacity="0.3" />

              <circle cx="200" cy="40" r="6" fill="#3B5BDB" />
              <circle cx="200" cy="440" r="6" fill="#3B5BDB" />
              <circle cx="40" cy="240" r="6" fill="#3B5BDB" />
              <circle cx="360" cy="240" r="6" fill="#7048E8" />
              <circle cx="86" cy="126" r="6" fill="#7048E8" />
              <circle cx="314" cy="354" r="6" fill="#3B5BDB" />
              <circle cx="314" cy="126" r="6" fill="#7048E8" />
              <circle cx="86" cy="354" r="6" fill="#3B5BDB" />

              <defs>
                <linearGradient id="paint0_linear" x1="40" y1="240" x2="360" y2="240" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3B5BDB" />
                  <stop offset="1" stopColor="#7048E8" />
                </linearGradient>
                <linearGradient id="paint1_linear" x1="200" y1="80" x2="200" y2="400" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7048E8" />
                  <stop offset="1" stopColor="#00C9A7" />
                </linearGradient>
                <linearGradient id="paint2_linear" x1="120" y1="160" x2="280" y2="320" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3B5BDB" />
                  <stop offset="1" stopColor="#00C9A7" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Right - Text */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-brand-primary text-[11px] font-semibold tracking-[0.12em] mb-4 uppercase">
                OUR PHILOSOPHY
              </div>
              <h2 className="text-[44px] font-bold text-brand-text leading-tight mb-8">
                All United as One
              </h2>
              
              <div className="space-y-12">
                <div className="border-l border-brand-primary pl-6">
                  <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-brand-primary mb-2">What We Do</h3>
                  <p className="text-[18px] md:text-[22px] font-light text-[#1A1A1A] leading-snug">
                    We architect enterprise AI solutions that move beyond proof-of-concept, delivering quantifiable operational leverage at an institutional scale.
                  </p>
                </div>
                
                <div className="border-l border-gray-300 pl-6">
                  <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">How We Do It</h3>
                  <p className="text-[18px] md:text-[22px] font-light text-[#4B5563] leading-snug">
                    By bridging deep sector expertise with cutting-edge engineering. We supply strategic framing, rigorous execution, and cultural alignment.
                  </p>
                </div>

                <div className="border-l border-gray-300 pl-6">
                  <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Why It Works</h3>
                  <p className="text-[18px] md:text-[22px] font-light text-[#4B5563] leading-snug">
                    Transformation fails when technology ignores people. Our systems are adopted rapidly because they are designed to amplify human capability, not replace it.
                  </p>
                </div>
              </div>

              <Link 
                href="/about" 
                className="inline-block border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-colors duration-300 rounded-[4px] px-6 py-3 text-[14px] font-semibold"
              >
                Learn more about us →
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

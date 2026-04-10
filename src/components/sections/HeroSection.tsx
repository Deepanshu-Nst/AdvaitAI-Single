"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function HeroSection() {
  const trendingInsights = [
    { title: "Generative AI in Financial Services", category: "White Paper" },
    { title: "Supply Chain Resilience for 2027", category: "Report" },
    { title: "The New Economics of Compute", category: "Article" }
  ];

  return (
    <section className="relative w-full min-h-[100svh] bg-[#0A0A0A] overflow-hidden flex flex-col justify-end pb-12 pt-32">
      {/* Background Image with Dark Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity scale-105 transform origin-bottom transition-transform duration-[20s] ease-out hover:scale-110"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/40 z-10" />

      <div className="container mx-auto px-6 md:px-12 relative z-20 flex flex-col justify-between h-full flex-grow mt-12">
        
        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-16 mt-auto">
          
          <div className="max-w-[800px] w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-[64px] md:text-[80px] lg:text-[110px] font-bold tracking-tighter leading-[0.9] text-white">
                Aligned <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
                  Intelligence.
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
              className="text-[18px] md:text-[22px] font-light text-[#E5E7EB] max-w-[600px] leading-[1.6]"
            >
              We build AI systems that actually get used. From prototype to production. No AI theatre. We build intelligent systems that reduce cost, ship faster, and drive real business adoption.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 1 }}
              className="mt-12"
            >
              <Link
                href="/#what-we-do"
                className="bg-brand-primary text-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-[#0A0A0A] transition-colors duration-500 inline-flex items-center gap-4 group"
              >
                Discover Our Capabilities 
                <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </div>

          {/* Floating Insight Cards (BCG Style) */}
          <div className="w-full lg:w-[400px] flex flex-col gap-4">
            <motion.div
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, delay: 1.2 }}
            >
              <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/50 mb-4 border-b border-white/20 pb-2">Trending Insights</h3>
            </motion.div>
            
            <div className="flex flex-col gap-3">
              {trendingInsights.map((insight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 + (idx * 0.15), ease: [0.19, 1, 0.22, 1] }}
                >
                  <Link href="/insights" className="group flex justify-between items-center bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 px-6 py-5 cursor-pointer transition-all duration-300">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-brand-primary block mb-2">{insight.category}</span>
                      <h4 className="text-white text-[15px] max-w-[250px] font-medium leading-snug group-hover:text-brand-primary transition-colors">{insight.title}</h4>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-white transition-colors group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

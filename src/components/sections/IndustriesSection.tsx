"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    name: "Financial Institutions",
    desc: "Redefining risk paradigms and algorithmic trading infrastructures for the AI era.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
  },
  {
    name: "Consumer Products",
    desc: "Predictive supply rings and hyper-personalized customer journey mapping.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80"
  },
  {
    name: "Health Care",
    desc: "Accelerating diagnostics and operational life-sciences through compute.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
  },
  {
    name: "Public Sector",
    desc: "Building resilient civic infrastructure with secure, compliant LLMs.",
    image: "https://images.unsplash.com/photo-1523293836414-f04e712e1f3b?w=800&q=80"
  },
  {
    name: "Industrial Goods",
    desc: "Deep automation and digital twin architectures for massive scale.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
  }
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-24 md:py-32 bg-[#111111] text-white w-full overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
             <h2 className="text-[40px] md:text-[56px] font-bold leading-[1.1] text-white max-w-lg">
              Sectors We Transform
            </h2>
          </motion.div>
          <motion.div
             initial={{ y: 20, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link 
              href="/industries" 
              className="inline-flex items-center gap-2 text-[14px] font-bold uppercase tracking-widest text-[#9CA3AF] hover:text-white transition-colors group"
            >
              Explore all industries
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Native Scroll Area */}
      <div className="w-full relative pb-16">
        <div className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory px-6 md:px-12 pb-8 no-scrollbar scroll-smooth">
          {industries.map((ind, i) => (
             <motion.div
                key={ind.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="w-[85vw] md:w-[450px] h-[450px] md:h-[600px] relative group overflow-hidden bg-[#1A1A1A] flex-shrink-0 snap-center cursor-pointer rounded-sm"
             >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-80"
                  style={{ backgroundImage: `url('${ind.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-700 pointer-events-none" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                  <div className="transform translate-y-8 md:translate-y-12 group-hover:translate-y-0 transition-transform duration-700 ease-[0.19,1,0.22,1]">
                    <h3 className="text-[28px] md:text-[36px] font-bold text-white mb-4 leading-[1.1]">
                      {ind.name}
                    </h3>
                    <div className="h-[2px] w-8 bg-brand-primary mb-4 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:w-16"></div>
                    <p className="text-[16px] md:text-[18px] text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 leading-relaxed max-w-sm">
                      {ind.desc}
                    </p>
                  </div>
                </div>
             </motion.div>
          ))}
          
          {/* View All Card */}
          <div className="w-[85vw] md:w-[450px] h-[450px] md:h-[600px] bg-[#1A1A1A] flex items-center justify-center flex-shrink-0 group cursor-pointer hover:bg-brand-primary transition-colors duration-500 snap-center rounded-sm border border-white/10 group-hover:border-transparent">
             <Link href="/industries" className="w-full h-full flex flex-col items-center justify-center text-white gap-6">
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 group-hover:scale-110">
                  <ArrowRight className="w-6 h-6" />
                </div>
                <span className="text-[18px] font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">Complete Directory</span>
             </Link>
          </div>
        </div>
      </div>

    </section>
  );
}

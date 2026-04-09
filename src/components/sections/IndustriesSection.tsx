"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const industries = [
  "Financial Institutions",
  "Consumer Products",
  "Technology, Media, & Telecom",
  "Health Care",
  "Public Sector",
  "Industrial Goods",
  "Energy & Environment",
  "Education"
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-24 md:py-32 bg-white text-[#1A1A1A] w-full">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24">
          
          {/* Left Column: Heading & Description */}
          <div className="w-full lg:w-[40%]">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            >
               <h2 className="text-[40px] md:text-[56px] font-light leading-[1.1] mb-8 text-[#1A1A1A]">
                Industries
              </h2>
              <p className="text-[18px] md:text-[20px] font-light text-[#4B5563] leading-[1.6] mb-10 max-w-sm">
                We partner with leaders across industries to tackle complex challenges and capture new opportunities.
              </p>
              <Link 
                href="/industries" 
                className="inline-flex items-center gap-2 text-[14px] font-bold uppercase tracking-widest text-[#1A1A1A] hover:text-brand-primary transition-colors group"
              >
                Explore all industries
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Clean List */}
          <div className="w-full lg:w-[60%] border-t border-[#1A1A1A]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05 }
                }
              }}
            >
              {industries.map((ind) => (
                <motion.div
                  key={ind}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] } }
                  }}
                >
                  <Link 
                    href={`/industries/${ind.toLowerCase().replace(/ & /g, '-').replace(/, /g, '-').replace(/ /g, '-')}`} 
                    className="flex justify-between items-center py-6 border-b border-[#E5E7EB] group hover:border-[#1A1A1A] transition-colors duration-300"
                  >
                    <h3 className="text-[22px] md:text-[28px] font-light text-[#1A1A1A] group-hover:text-brand-primary transition-colors">
                      {ind}
                    </h3>
                    <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 group-hover:text-brand-primary" strokeWidth={1} />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

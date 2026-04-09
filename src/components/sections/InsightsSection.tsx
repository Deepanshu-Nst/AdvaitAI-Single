"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const filters = ["All Insights", "White Papers", "Executive Reports", "Case Studies", "Our Perspective"];

const insights = [
  {
    id: 1,
    title: "The Future of AI in Indian Financial Services",
    category: "Featured Insight",
    date: "April 10, 2026",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    link: "/insights/future-of-ai",
    impact: "Why it matters: Banks observing a 35% reduction in operational friction after deploying our framework.",
    featured: true
  },
  {
    id: 2,
    title: "AI Is Already Moving the Logistics Industry",
    category: "Article",
    date: "March 27, 2026",
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?w=800&q=80",
    link: "/insights/ai-logistics",
    featured: false
  },
  {
    id: 3,
    title: "Navigating the New Rules of Global Supply Chains",
    category: "White Paper",
    date: "March 15, 2026",
    image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&q=80",
    link: "/insights",
    featured: false
  },
  {
    id: 4,
    title: "How to Build a Resilient Digital Transformation Strategy",
    category: "Perspective",
    date: "March 02, 2026",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    link: "/insights",
    featured: false
  }
];

export default function InsightsSection() {
  const [activeFilter, setActiveFilter] = useState("All Insights");

  return (
    <section id="insights" className="py-24 md:py-32 bg-[#F2F4F3] w-full">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Area */}
        <div className="flex flex-col mb-16">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="text-[40px] md:text-[56px] font-light leading-[1.1] mb-12 text-[#1A1A1A]"
          >
            Featured Insights
          </motion.h2>

          {/* Sticky Filters */}
          <div className="flex flex-wrap items-center gap-4 border-b border-[#D1D5DB] pb-4 sticky top-[80px] z-30 bg-[#F2F4F3]/90 backdrop-blur-md">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-4 py-2 text-[14px] font-bold uppercase tracking-widest transition-all",
                  activeFilter === filter
                    ? "text-[#1A1A1A] border-b-2 border-brand-primary"
                    : "text-gray-500 hover:text-[#1A1A1A]"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Main Featured Big Card (Left 7 Cols) */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.3 }}
            className="lg:col-span-7 group cursor-pointer"
          >
            <Link href={insights[0].link} className="block relative h-full min-h-[550px] w-full bg-[#0A1A10] overflow-hidden rounded-sm">
               {/* Background Cover */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-[1.05] opacity-50 mix-blend-overlay"
                style={{ backgroundImage: `url('${insights[0].image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A10] via-[#0A1A10]/60 to-transparent transition-opacity duration-700 group-hover:opacity-80" />

              {/* Text overlay */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-white z-10 font-light translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                <span className="text-[12px] font-bold uppercase tracking-[0.2em] mb-6 text-brand-primary">
                  {insights[0].category}
                </span>
                <h3 className="text-[32px] md:text-[48px] leading-[1.1] mb-6 font-light">
                  {insights[0].title}
                </h3>
                <div className="h-[1px] w-12 bg-white/30 mb-6 group-hover:w-24 transition-all duration-700"></div>
                <p className="text-[16px] text-white/80 max-w-md font-light leading-relaxed">
                  <span className="font-semibold text-white">→</span> {insights[0].impact}
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Right Side Stack (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-0 justify-between">
            {insights.slice(1).map((insight, idx) => (
              <motion.div
                key={insight.id}
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 + (idx * 0.1), ease: [0.19, 1, 0.22, 1] }}
                className="h-full"
              >
                <Link href={insight.link} className="flex flex-col group h-full cursor-pointer justify-center py-10 border-b border-[#D1D5DB] last:border-0 relative">
                   <div className="absolute inset-y-0 -inset-x-6 bg-white/0 group-hover:bg-white/50 transition-colors duration-500 -z-10 rounded-lg"></div>
                   <div className="flex justify-between items-start mb-4">
                     <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#1A1A1A] group-hover:text-brand-primary transition-colors">
                        {insight.category}
                     </span>
                   </div>
                   <h4 className="text-[24px] md:text-[28px] leading-[1.3] font-light text-[#1A1A1A] transition-colors">
                     {insight.title}
                   </h4>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const insights = [
  {
    id: 1,
    title: "How a Leading Bank Cut Compliance Friction by 35% with Local LLMs",
    category: "Case Study",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",
    link: "/insights/future-of-ai",
    cols: "col-span-1 md:col-span-2 lg:col-span-2",
    rows: "row-span-2 min-h-[600px]",
  },
  {
    id: 2,
    title: "How a Route Optimizer Saved $40M in Logistics",
    category: "Success Story",
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?w=800&q=80",
    link: "/insights/ai-logistics",
    cols: "col-span-1 md:col-span-1 lg:col-span-1",
    rows: "row-span-1 min-h-[300px]",
  },
  {
    id: 3,
    title: "Building Real-Time Enterprise Data Meshes",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&q=80",
    link: "/insights",
    cols: "col-span-1 md:col-span-1 lg:col-span-1",
    rows: "row-span-1 min-h-[300px]",
  },
  {
    id: 4,
    title: "From Prototype to Production: A 3-Week Playbook",
    category: "Perspective",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    link: "/insights",
    cols: "col-span-1 md:col-span-2 lg:col-span-2",
    rows: "row-span-1 min-h-[350px]",
  }
];

export default function InsightsSection() {
  return (
    <section id="insights" className="py-0 bg-[#0A0A0A] w-full text-white relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header Area Full Bleed */}
      <div className="container mx-auto px-6 md:px-12 pt-32 pb-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/20 pb-12 relative overflow-hidden group">
          {/* Animated line on hover */}
          <div className="absolute bottom-0 left-0 h-[1px] w-full bg-brand-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-in-out" />
          
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-brand-primary block mb-6">Our Thinking</span>
            <h2 className="text-[48px] md:text-[64px] font-bold leading-[1.05] tracking-tight text-white mb-0">
              Insights & Outcomes
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
             <Link 
              href="/insights" 
              className="inline-flex items-center gap-3 text-[14px] font-bold uppercase tracking-widest hover:text-brand-primary transition-colors group"
            >
              See all publications
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-black transition-all">
                <ArrowRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* BCG Style Masonry Grid (Full Bleed Edges) */}
      <div className="w-full px-4 md:px-8 pb-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-min max-w-[1920px] mx-auto">
          {insights.map((insight, idx) => (
            <motion.div
              key={insight.id}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.1, ease: [0.19, 1, 0.22, 1] }}
              className={`${insight.cols} ${insight.rows} group overflow-hidden relative bg-[#111111]`}
            >
              <Link href={insight.link} className="block w-full h-full relative cursor-pointer">
                {/* Background Cover */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] ease-out group-hover:scale-110 opacity-70"
                  style={{ backgroundImage: `url('${insight.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-700 opacity-90 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay" />

                {/* Text overlay */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-10">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-[0.19,1,0.22,1]">
                    <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-widest mb-6 text-white overflow-hidden relative">
                      <span className="relative z-10">{insight.category}</span>
                      <div className="absolute inset-0 bg-brand-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-0"/>
                    </span>
                    <h3 className={`font-bold leading-[1.1] mb-6 ${insight.cols.includes('2') ? 'text-[32px] md:text-[44px]' : 'text-[24px] md:text-[32px]'}`}>
                      {insight.title}
                    </h3>
                    
                    {/* Read More Reveal */}
                    <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                      <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-brand-primary">Process Insight</span>
                      <ArrowRight className="w-4 h-4 text-brand-primary" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

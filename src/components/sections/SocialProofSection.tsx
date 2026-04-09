"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "AdvaitAI transformed our data pipeline and reduced reporting time by 60%. Their team understood our domain deeply and delivered an exceptionally stable solution.",
    author: "Anil Mehta",
    role: "CTO",
    company: "FinTech Startup",
    initials: "AM"
  },
  {
    quote: "The AI training program AdvaitAI delivered upskilled our entire analytics team. Practical, insightful, and strictly industry-relevant.",
    author: "Dr. Sunita Rao",
    role: "Director of Innovation",
    company: "State Health Department",
    initials: "SR"
  }
];

export default function SocialProofSection() {
  return (
    <section className="py-24 bg-brand-surface w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center"
        >
          <h2 className="text-[36px] md:text-[44px] font-bold text-brand-text mb-4 leading-tight">
            Trusted by Forward-Thinking Organizations
          </h2>
          <p className="text-gray-500 text-[16px] max-w-2xl mx-auto">
            From startups to PSUs, we partner with organizations ready to lead with intelligence.
          </p>
        </motion.div>
      </div>

      {/* Infinite Logo Marquee */}
      <div className="relative w-full py-8 mb-16">
        {/* Gradients for fade effect */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-brand-surface to-transparent z-10" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-brand-surface to-transparent z-10" />
        
        <div className="flex w-fit animate-marquee">
          {/* Double array to create seamless loop */}
          {[...Array(16)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0 px-6">
              <div className="w-[160px] h-[64px] bg-white border border-gray-200 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 shadow-sm cursor-pointer hover:shadow-md hover:border-brand-primary/30">
                <span className="font-bold text-gray-400 text-lg">CLIENT LOGO</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm"
            >
              {/* Quote Mark */}
              <div className="text-[60px] leading-none text-brand-primary/20 font-serif mb-4">&quot;</div>
              
              <p className="text-[16px] md:text-[18px] text-gray-700 italic mb-8 leading-relaxed">
                {test.quote}
              </p>
              
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <div className="w-12 h-12 bg-brand-primary text-white flex items-center justify-center rounded-full font-bold text-[18px]">
                  {test.initials}
                </div>
                <div>
                  <h4 className="font-bold text-brand-text text-[15px]">{test.author}</h4>
                  <p className="text-[13px] text-gray-500">
                    {test.role}, <span className="font-semibold text-gray-700">{test.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const domains = [
  {
    sector: "Global Finance",
    metrics: "Over $40B in assets processed daily through our secure, localized ML pipelines. Replacing legacy rule-based risk engines with dynamic predictive models.",
    clients: "Top 10 Asian Banks, Leading EU Wealth Funds"
  },
  {
    sector: "Public Sector Infrastructure",
    metrics: "Architecting compliance-first systems for national transportation and energy grids. Zero-trust security models combined with real-time operational analytics.",
    clients: "State Transport Nodes, National Energy Providers"
  },
  {
    sector: "Industrial Supply Chains",
    metrics: "Digital twin architectures and predictive routing systems that cut capex shrink by 22%. Fully integrated with existing ERP backbones and hardware sensors.",
    clients: "Fortune 500 Logistics, Transnational Manufacturing"
  }
];

export default function SocialProofSection() {
  return (
    <section className="py-32 bg-[#0A0A0A] border-t border-white/10 w-full overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Superior Header */}
        <div className="mb-24 md:flex justify-between items-end gap-12">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-brand-primary" />
              <span className="text-white/50 text-[12px] font-bold uppercase tracking-[0.2em]">Institutional Trust</span>
            </div>
            <h2 className="text-[40px] md:text-[56px] font-bold text-white leading-[1.05] tracking-tight">
              We deploy into the world's most <span className="text-white/40">complex environments.</span>
            </h2>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="hidden md:block text-right"
          >
            <p className="text-[14px] text-white/40 uppercase tracking-widest font-bold">Confidential & Proprietary</p>
            <p className="text-[12px] text-brand-primary uppercase tracking-[0.2em] mt-2">Enterprise Grade Only</p>
          </motion.div>
        </div>

        {/* The Grid of Weight */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-white/10 pt-16 gap-12 lg:gap-0">
          {domains.map((domain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`flex flex-col group ${i !== domains.length - 1 ? 'lg:border-r lg:border-white/10 lg:pr-12' : 'lg:pl-12'}`}
            >
              <div className="text-[28px] md:text-[32px] font-bold text-white mb-6 group-hover:text-brand-primary transition-colors duration-500">
                {domain.sector}
              </div>
              <p className="text-[16px] text-white/50 font-light leading-relaxed mb-auto min-h-[120px] group-hover:text-white/80 transition-colors duration-500">
                {domain.metrics}
              </p>
              <div className="mt-12 pt-8 border-t border-white/5 group-hover:border-brand-primary/30 transition-colors duration-500">
                <span className="block text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold mb-3">
                  Representative Footprint
                </span>
                <span className="block text-[14px] text-white/90 font-medium leading-snug">
                  {domain.clients}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

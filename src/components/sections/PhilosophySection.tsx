"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  {
    number: "60%",
    title: "Faster Reporting",
    desc: "Re-engineered data pipelines cut compliance reporting times from weeks to hours for top-tier FinTechs.",
    color: "brand-primary"
  },
  {
    number: "$40M",
    title: "Capex Saved",
    desc: "Deployed predictive analytics across Fortune 500 logistics chains, aggressively optimizing route delays.",
    color: "white"
  },
  {
    number: "3 Wks",
    title: "To Production",
    desc: "We bypass research theatre. We audit, build, and deploy custom LLMs directly into existing stacks.",
    color: "white"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function PhilosophySection() {
  return (
    <section className="py-0 bg-[#111111] text-white overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full">
        
        {/* Left - Massive Image */}
        <div className="w-full lg:w-1/2 h-[500px] lg:h-auto relative group overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-80 group-hover:scale-105 transition-transform duration-[2s] ease-out"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1600&auto=format&fit=crop')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111111] opacity-60 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111111] opacity-60 lg:hidden" />
          
          {/* subtle floating element for wow factor */}
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-12 left-12 w-24 h-24 border border-brand-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <div className="w-2 h-2 bg-brand-primary rounded-full" />
          </motion.div>
        </div>

        {/* Right - Text */}
        <div className="w-full lg:w-1/2 px-6 md:px-16 py-24 md:py-32 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[#9CA3AF] text-[12px] font-bold tracking-[0.2em] mb-6 uppercase border-b border-white/20 pb-2 inline-block">
              Proof Over Philosophy
            </div>
            <h2 className="text-[40px] md:text-[56px] font-bold text-white leading-[1.05] mb-16 tracking-tight">
              Outcomes You <br className="hidden md:block"/> Can Measure.
            </h2>
          </motion.div>
            
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12 max-w-xl"
          >
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className={`border-l-[2px] ${stat.color === 'brand-primary' ? 'border-brand-primary' : 'border-white/20'} pl-8 group cursor-pointer hover:border-brand-primary transition-colors duration-500`}
              >
                <div className="flex items-baseline gap-4 mb-3 transform origin-left group-hover:scale-105 transition-transform duration-500 ease-out">
                  <span className="text-[48px] md:text-[64px] font-bold text-white leading-none tracking-tighter drop-shadow-lg">
                    {stat.number}
                  </span>
                  <h3 className={`text-[12px] font-bold uppercase tracking-[0.2em] ${stat.color === 'brand-primary' ? 'text-brand-primary' : 'text-white group-hover:text-brand-primary'} transition-colors`}>
                    {stat.title}
                  </h3>
                </div>
                <p className="text-[16px] md:text-[18px] font-light text-white/50 leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <Link 
              href="/insights" 
              className="mt-16 inline-flex items-center gap-3 text-[14px] font-bold uppercase tracking-widest hover:text-brand-primary transition-colors group"
            >
              Examine the case studies
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

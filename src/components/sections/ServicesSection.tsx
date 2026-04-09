"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const capabilities = [
  {
    title: "Digital Transformation & AI",
    items: [
      "Generative AI Strategy",
      "Enterprise Automation",
      "Custom LLM Development",
      "Data Mesh Architecture"
    ]
  },
  {
    title: "Strategy & Operations",
    items: [
      "Business Model Innovation",
      "Supply Chain Optimization",
      "Risk & Compliance Frameworks",
      "Organizational Design"
    ]
  },
  {
    title: "Technology & Security",
    items: [
      "Cloud Modernization",
      "Cybersecurity Audits",
      "Software Architecture",
      "DevOps Integration"
    ]
  },
  {
    title: "Design & Experience",
    items: [
      "Human-Centered UX/UI",
      "Design Systems",
      "Customer Journey Mapping",
      "Brand Expression"
    ]
  }
];

export default function ServicesSection() {
  return (
    <section id="what-we-do" className="py-24 md:py-32 bg-[#F9F9F9] text-[#1A1A1A] w-full border-t border-[#E5E7EB]">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24">
          {/* Left Column: Heading & Description */}
          <div className="w-full lg:w-[40%]">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="sticky top-32"
            >
              <h2 className="text-[40px] md:text-[56px] font-light leading-[1.1] mb-8 text-[#1A1A1A]">
                Our Capabilities
              </h2>
              <p className="text-[18px] md:text-[20px] font-light text-[#4B5563] leading-[1.6] mb-10 max-w-md">
                We bring deep industry expertise and cutting-edge technology to help organizations build intelligent, resilient systems. Our solutions sit at the intersection of strategy, design, and artificial intelligence.
              </p>
              <Link 
                href="/services" 
                className="inline-flex items-center gap-2 text-[14px] font-bold uppercase tracking-widest text-[#1A1A1A] hover:text-brand-primary transition-colors group"
              >
                View all capabilities
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Editorial Structured List */}
          <div className="w-full lg:w-[60%] flex flex-col gap-16">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.19, 1, 0.22, 1] }}
                className="border-t border-[#D1D5DB] pt-8 group"
              >
                <Link href={`/services/${cap.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="block">
                  <div className="flex justify-between items-start mb-8 cursor-pointer group-hover:text-brand-primary transition-colors duration-300">
                    <h3 className="text-[28px] md:text-[36px] font-light leading-tight w-[85%]">{cap.title}</h3>
                    <ArrowRight className="w-6 h-6 md:w-8 md:h-8 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" strokeWidth={1} />
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {cap.items.map((item, i) => (
                      <li key={i} className="text-[16px] text-[#4B5563] font-light flex items-start">
                        <span className="mr-3 text-brand-primary mt-1 opacity-50">+</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}

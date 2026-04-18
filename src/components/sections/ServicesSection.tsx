"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ParticleNetwork from "@/components/ui/ParticleNetwork";

const capabilities = [
  {
    title: "Parse",
    desc: "Accurately parse complex PDFs, spreadsheets, presentations, and documents (including revisions). Extract structured content.",
    slug: "parse",
    image: "https://plus.unsplash.com/premium_vector-1682299257648-a19f5879e226?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Model",
    desc: "Construct structured representations capturing latent patterns and dependencies. Transform unstructured inputs into formal, interpretable models.",
    slug: "model",
    image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Systems",
    desc: "Construct environment models capturing entities, relationships, and state transitions. Encode context across temporal, spatial, and logical dimensions.",
    slug: "systems",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Assurance",
    desc: "Prebuilt guardrails for privacy, safety, security, and alignment by design. Enforce constraints, access control, and policy-aware system behavior.",
    slug: "assurance",
    image: "https://images.unsplash.com/photo-1694903110330-cc64b7e1d21d?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Flexible Deployment Architecture",
    desc: "Deploy across SaaS, dedicated, on-prem (air-gapped), and VPC environments with zero friction. Full support for CPU, GPU, MPS, and TPU infrastructure.",
    slug: "deployment",
    image: "https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export default function ServicesSection() {
  const containerRef = useRef(null);

  return (
    <section id="what-we-do" className="bg-white text-[#0C2D57] w-full border-t border-[#DBEAFE] relative" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 py-32">

        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 relative">

          {/* Left Column: Sticky Heading */}
          <div className="w-full lg:w-[40%] relative mt-6 hover:cursor-grab">
            <div className="lg:sticky lg:top-40 relative">
              <ParticleNetwork idClassName="services-particles" opacity={0.3} />
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="relative z-10 pointer-events-none"
              >
                <div className="text-brand-primary text-[12px] font-bold tracking-[0.2em] uppercase mb-8 inline-block border-b border-brand-primary/30 pb-2">
                  CAPABILITIES
                </div>
                <h2 className="text-[48px] md:text-[64px] font-bold leading-[1.05] tracking-tight mb-8">
                  Why Us
                </h2>
                <p className="text-[18px] md:text-[20px] font-light text-[#5B7FA5] leading-[1.6] mb-10 max-w-sm">
                  We architect deterministic AI systems that transcend proof-of-concepts, securely automating mission-critical workflows across diverse operational environments.
                </p>
                <Link
                  href="/capabilities"
                  className="inline-flex items-center gap-3 text-[14px] font-bold uppercase tracking-widest hover:text-brand-primary transition-colors group text-[#0C2D57]"
                >
                  Explore Our Solutions
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Stacking Cinematic Cards */}
          <div className="w-full lg:w-[60%] flex flex-col gap-[10vh] pb-[10vh]">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-10%" }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
                className="sticky top-40 bg-[#0C2D57] overflow-hidden border border-[#1D4ED8]/20 group cursor-pointer"
                style={{ zIndex: index, height: '500px' }}
              >
                <Link href={`/capabilities/${cap.slug}`} className="block w-full h-full relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-40 group-hover:opacity-80 mix-blend-luminosity"
                    style={{ backgroundImage: `url('${cap.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C2D57] via-[#0C2D57]/40 to-transparent transition-opacity duration-700 opacity-90 group-hover:opacity-60" />

                  <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end z-10">
                    <div className="transform translate-y-0 lg:translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <span className="text-brand-primary text-[12px] font-bold uppercase tracking-[0.2em] mb-4 block lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        // 0{index + 1}
                      </span>
                      <h3 className="text-[28px] md:text-[48px] font-bold leading-[1.05] tracking-tight text-white mb-4">
                        {cap.title}
                      </h3>
                      <p className="text-[14px] md:text-[18px] font-light text-white/90 lg:text-white/70 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 max-w-xl leading-[1.6]">
                        {cap.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

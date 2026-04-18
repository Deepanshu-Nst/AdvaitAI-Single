"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ParticleNetwork from "@/components/ui/ParticleNetwork";

const insights = [
  {
    title: "What is SAFE AI?",
    desc: "Understanding the core principles of building secure, reliable, and aligned artificial intelligence systems.",
    image: "https://media.istockphoto.com/id/2220270119/photo/responsible-ai-concept-with-ethical-principles-transparency-and-social-impact-in-technology.webp?a=1&b=1&s=612x612&w=0&k=20&c=c8I2sFg3aU0wICym7IKJk53pu8s9ujNwVummIeLL7a8=",
    colSpan: "md:col-span-2",
  },
  {
    title: "Data protection and privacy compliance",
    desc: "What GDPR, DPDP, and the broader regulatory shift mean for system builders and large scale models.",
    image: "https://plus.unsplash.com/premium_photo-1676618539992-21c7d3b6df0f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGF0YSUyMHByb3RlY3Rpb258ZW58MHx8MHx8fDA%3D",
    colSpan: "md:col-span-1",
  },
  {
    title: "Toward Trustworthy AI Systems",
    desc: "The engineering challenge of creating stable, reproducible AI inference across interdependent infrastructures.",
    image: "https://media.istockphoto.com/id/1946360023/photo/responsible-artificial-intelligence-responsibility-governance-ethical-environmental-practice.webp?a=1&b=1&s=612x612&w=0&k=20&c=ewbPcdwzQl8_ihrOgZpGCJPv3rfscLI2wxNIhQz-PcI=",
    colSpan: "md:col-span-1",
  },
  {
    title: "The New Economics of Compute",
    desc: "Scaling inference efficiently without expanding architectural bloat or escalating cloud usage parameters.",
    image: "https://plus.unsplash.com/premium_photo-1663931932651-ea743c9a0144?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8VGhlJTIwbmV3JTIwZWNvbm9taWNzJTIwb2YlMjBjb21wdXRlfGVufDB8fDB8fHww",
    colSpan: "md:col-span-2",
  }
];

export default function BlogSection() {
  return (
    <section id="insights" className="relative bg-white text-[#0C2D57] py-32 border-t border-[#DBEAFE] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col mb-16 relative">
          <ParticleNetwork idClassName="insights-particles" opacity={0.3} />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/3 pointer-events-none relative z-10"
          >
            <div className="text-brand-primary text-[12px] font-bold tracking-[0.2em] uppercase mb-8 inline-block border-b border-brand-primary/30 pb-2">
              Insights
            </div>
            <h2 className="text-[48px] md:text-[64px] font-bold leading-[1.05] tracking-tight mb-8">
              Stay ahead of the curve.
            </h2>
          </motion.div>
        </div>

        {/* Wow-factor Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {insights.map((post, index) => (
            <motion.div
              key={`${post.title}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`relative group overflow-hidden border border-[#BFDBFE] bg-white rounded-lg shadow-md shadow-blue-100 ${post.colSpan}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-80"
                style={{ backgroundImage: `url('${post.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C2D57] via-[#0C2D57]/40 to-transparent transition-opacity duration-700 opacity-90 group-hover:opacity-100" />

              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/95 to-[#0C2D57]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-10" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end transition-transform duration-500 transform group-hover:-translate-y-4 z-20 pointer-events-none">
                <h3 className="text-[24px] md:text-[32px] font-bold text-white mb-2 leading-[1.2] drop-shadow-md group-hover:drop-shadow-none transition-all duration-300 group-hover:mb-4">{post.title}</h3>
                <p className="text-[15px] font-medium text-white/90 leading-[1.6] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">{post.desc}</p>
              </div>

              <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0 z-20 group-hover:bg-white group-hover:text-brand-primary">
                <ArrowRight className="w-5 h-5" />
              </div>

              <a href="#" className="absolute inset-0 z-30"><span className="sr-only">Read {post.title}</span></a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

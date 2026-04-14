"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ParticleNetwork from "@/components/ui/ParticleNetwork";

const blogPosts = [
  {
    title: "What is SAFE AI?",
    desc: "Understanding the core principles of building secure, reliable, and aligned artificial intelligence systems.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Data protection and privacy compliance",
    desc: "What GDPR, DPDP, and the broader regulatory shift mean for system builders and large scale models.",
    image: "https://images.unsplash.com/photo-1507925922894-de9acbfba46f?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Toward Trustworthy AI Systems",
    desc: "The engineering challenge of creating stable, reproducible AI inference across interdependent infrastructures.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "The New Economics of Compute",
    desc: "Scaling inference efficiently without expanding architectural bloat or escalating cloud usage parameters.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
  }
];

export default function BlogSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const duplicatedItems = [...blogPosts, ...blogPosts, ...blogPosts];

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const scroll = (time: number) => {
      if (!isHovered && containerRef.current) {
        const delta = time - lastTime;
        // Adjust speed here (pixel per ms)
        containerRef.current.scrollLeft -= delta * 0.05;

        // Seamless looping (Left to Right)
        if (containerRef.current.scrollLeft <= 0) {
          containerRef.current.scrollLeft += (containerRef.current.scrollWidth / 3);
        }
      }
      lastTime = time;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <section id="insights" className="relative bg-[#0A0A0A] text-white py-32 border-t border-white/10 overflow-hidden">

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20 relative">
          <ParticleNetwork idClassName="blog-particles" opacity={0.3} />

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
          </motion.div>
        </div>
      </div>

      {/* Manual + Auto Horizontal Scroll */}
      <div 
        className="relative z-20 w-full overflow-hidden pb-12 pt-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        
        {/* Floating Navigation Arrows */}
        <div className={`absolute left-6 top-1/2 -translate-y-1/2 z-30 transition-opacity duration-300 pointer-events-none flex w-[calc(100%-3rem)] justify-between ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button 
            onClick={() => {
              if (containerRef.current) {
                containerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
              }
            }}
            className="w-16 h-16 rounded-full border-2 border-brand-primary bg-black/40 backdrop-blur-sm flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-colors pointer-events-auto shadow-[0_0_20px_#0EA5E9]"
          >
            <ArrowLeft className="w-8 h-8" />
          </button>
          
          <button 
            onClick={() => {
              if (containerRef.current) {
                containerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
              }
            }}
            className="w-16 h-16 rounded-full border-2 border-brand-primary bg-black/40 backdrop-blur-sm flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-colors pointer-events-auto shadow-[0_0_20px_#0EA5E9]"
          >
            <ArrowRight className="w-8 h-8" />
          </button>
        </div>

        <div
          ref={containerRef}
          className="flex gap-6 px-3 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing w-full"
        >
          {duplicatedItems.map((post, index) => (
            <div
              key={`${post.title}-${index}`}
              className="relative group overflow-hidden w-[350px] md:w-[450px] h-[400px] shrink-0 border border-white/10 bg-[#111111]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-60 mix-blend-luminosity"
                style={{ backgroundImage: `url('${post.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end transition-transform duration-500 transform group-hover:translate-y-12 opacity-100 group-hover:opacity-0">
                <h3 className="text-[24px] md:text-[30px] font-bold text-white leading-[1.2]">{post.title}</h3>
              </div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-10 bg-gradient-to-t from-brand-primary/95 to-black/60 pointer-events-none">
                <h3 className="text-[24px] md:text-[30px] font-bold text-white mb-4 leading-[1.2]">{post.title}</h3>
                <p className="text-[15px] font-medium text-white/90 leading-[1.6] mb-8">{post.desc}</p>
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-white text-black mt-auto">
                  <ArrowRight className="w-5 h-5 pointer-events-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

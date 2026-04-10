"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { name: "What We Do", href: "/#what-we-do" },
  { name: "Industries", href: "/#industries" },
  { name: "Our Insights", href: "/insights" },
  { name: "Case Studies", href: "/insights?filter=case-studies" },
  { name: "Publications", href: "/insights?filter=publications" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDarkText = false; // Always dark theme

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out flex items-center border-b",
          scrolled || activeMenu || sidebarOpen
            ? "bg-[#0A0A0A]/90 backdrop-blur-md text-white border-white/10 h-[80px]"
            : "bg-transparent text-white border-transparent h-[100px]"
        )}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-full">
          
          {/* Left section: Hamburger & Logo */}
          <div className="flex items-center gap-6 h-full">
            <button
              className="p-2 -ml-2 group relative z-50"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? (
                <X className={cn("w-7 h-7 transition-colors", isDarkText ? "text-[#1A1A1A]" : "text-white")} strokeWidth={1.5} />
              ) : (
                <Menu className={cn("w-7 h-7 transition-colors", isDarkText ? "text-[#1A1A1A]" : "text-white")} strokeWidth={1.5} />
              )}
            </button>
            
            <Link href="/" className="flex items-center gap-2 group relative z-50 mr-8">
              <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" className={cn(isDarkText ? "text-brand-primary" : "text-white")} />
                <path d="M40 70 L50 30 L60 70" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" className={cn(isDarkText ? "text-brand-primary" : "text-white")} />
                <path d="M43 60 L57 60" stroke="currentColor" strokeWidth="8" strokeLinecap="round" className={cn(isDarkText ? "text-brand-primary" : "text-white")} />
              </svg>
              <span className="text-[22px] font-bold tracking-tight uppercase">AdvaitAI</span>
            </Link>
          </div>

          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center gap-10 h-full">
            <div
              className="h-full flex items-center cursor-pointer group"
              onMouseEnter={() => setActiveMenu("What We Do")}
            >
              <span className="text-[14px] font-medium transition-colors flex items-center gap-1 uppercase tracking-wide">
                What We Do
                <ChevronDown className={cn("w-4 h-4 ml-1 transition-transform", activeMenu === "What We Do" && "rotate-180")} />
              </span>
            </div>
            <div
              className="h-full flex items-center cursor-pointer group"
              onMouseEnter={() => setActiveMenu("Our Insights")}
            >
              <span className="text-[14px] font-medium transition-colors flex items-center gap-1 uppercase tracking-wide">
                Our Insights
                <ChevronDown className={cn("w-4 h-4 ml-1 transition-transform", activeMenu === "Our Insights" && "rotate-180")} />
              </span>
            </div>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-6 relative z-50">
            <button className={cn("p-2 transition-colors", isDarkText ? "hover:text-brand-primary" : "hover:text-white/80")}>
              <Search className="w-5 h-5" strokeWidth={2} />
            </button>
            <Link
              href="/contact"
              className={cn(
                "transition-all px-6 py-2.5 text-[13px] font-bold uppercase tracking-wider",
                "bg-brand-primary text-white hover:bg-brand-secondary"
              )}
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mega Menus Overlay */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, scaleY: 0.95, transformOrigin: "top" }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0.95 }}
              transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
              className="absolute top-full left-0 w-full h-[calc(100vh-80px)] bg-[#0A0A0A] text-white overflow-y-auto z-40 border-t border-white/10"
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="container mx-auto px-6 md:px-12 py-24">
                {activeMenu === "What We Do" && (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">
                    <div className="col-span-1 md:col-span-8">
                      <h3 className="text-[12px] font-bold text-white/50 uppercase tracking-widest mb-12 border-b border-white/10 pb-4">Capabilities</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                        {[
                          "Business Consulting", "IT Strategy & Roadmaps", "AI & Machine Learning", 
                          "Information Security", "Application Modernization", "Advanced Data Analytics", 
                          "Cloud Architecture", "Enterprise Architecture", "UX/UI Design", "Digital Transformation"
                        ].map(service => (
                          <Link key={service} href="/#what-we-do" onClick={() => setActiveMenu(null)} className="text-[20px] md:text-[24px] font-light text-white/80 hover:text-brand-primary group flex items-center justify-between">
                            {service}
                            <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="col-span-1 md:col-span-4 flex flex-col">
                      <h3 className="text-[12px] font-bold text-white/50 uppercase tracking-widest mb-12 border-b border-white/10 pb-4">Featured Highlight</h3>
                      <Link href="/insights" onClick={() => setActiveMenu(null)} className="group block h-full">
                        <div className="w-full aspect-[4/3] bg-white/5 mb-8 overflow-hidden">
                          <div 
                            className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80')" }} 
                          />
                        </div>
                        <h4 className="font-bold text-2xl md:text-3xl mb-4 leading-tight group-hover:text-brand-primary transition-colors">Transforming the Public Sector with Predictive AI</h4>
                        <span className="text-brand-primary font-bold text-sm tracking-widest uppercase flex items-center gap-2 mt-6">
                          Explore Case Study <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </Link>
                    </div>
                  </div>
                )}
                {activeMenu === "Our Insights" && (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
                    <div className="col-span-1 md:col-span-3">
                      <h3 className="text-[12px] font-bold text-white/50 uppercase tracking-widest mb-12 border-b border-white/10 pb-4">By Topic</h3>
                      <div className="flex flex-col gap-6">
                        {["Artificial Intelligence", "Digital Transformation", "Sustainability", "Operations", "Finance & Strategy"].map(t => (
                          <Link key={t} href="/insights" onClick={() => setActiveMenu(null)} className="text-[20px] font-light text-white/80 hover:text-brand-primary transition-colors">{t}</Link>
                        ))}
                      </div>
                    </div>
                    <div className="col-span-1 md:col-span-3">
                      <h3 className="text-[12px] font-bold text-white/50 uppercase tracking-widest mb-12 border-b border-white/10 pb-4">By Content Type</h3>
                      <div className="flex flex-col gap-6">
                        {["White Papers", "Executive Reports", "Case Studies", "Articles & Insights", "Podcasts"].map(t => (
                          <Link key={t} href="/insights" onClick={() => setActiveMenu(null)} className="text-[20px] font-light text-white/80 hover:text-brand-primary transition-colors">{t}</Link>
                        ))}
                      </div>
                    </div>
                    <div className="col-span-1 md:col-span-6 flex flex-col">
                       <h3 className="text-[12px] font-bold text-white/50 uppercase tracking-widest mb-12 border-b border-white/10 pb-4">Latest Research</h3>
                       <Link href="/insights/future-of-ai" onClick={() => setActiveMenu(null)} className="group bg-[#111111] border border-white/10 p-10 md:p-14 flex flex-col justify-center h-full hover:border-brand-primary/50 transition-colors">
                         <span className="text-[12px] font-bold uppercase tracking-widest text-brand-primary mb-6">White Paper</span>
                         <h4 className="font-bold text-3xl md:text-4xl mb-6 leading-tight group-hover:text-brand-primary transition-colors">The Future of AI in Indian Financial Services</h4>
                         <p className="text-white/50 text-xl font-light mb-12 max-w-lg">A comprehensive white paper on accelerating AI adoption, compliance, and growth within the emerging markets.</p>
                         <span className="text-white font-bold text-sm tracking-widest uppercase flex items-center gap-2 mt-auto group-hover:text-brand-primary">
                           Read Insight <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                         </span>
                       </Link>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Full-Screen Structured Navigation Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            exit={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 bg-[#0A0A0A] text-white z-40 overflow-y-auto pt-[100px]"
          >
            <div className="container mx-auto px-6 md:px-12 py-12 md:py-24">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
                
                {/* Main Links */}
                <div className="col-span-1 md:col-span-4 flex flex-col gap-8 border-b md:border-b-0 md:border-r border-white/10 pb-12 md:pb-0 md:pr-12">
                  <h3 className="text-[12px] font-bold text-white/50 uppercase tracking-widest mb-4">Discover</h3>
                  <nav className="flex flex-col gap-6">
                    {sidebarLinks.map((link, idx) => (
                      <motion.div 
                        key={link.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + idx * 0.05, duration: 0.5 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setSidebarOpen(false)}
                          className="text-[32px] md:text-[48px] font-light hover:text-brand-primary transition-colors leading-[1.1]"
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                {/* Capabilities & Industries */}
                <div className="col-span-1 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-16">
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex flex-col"
                  >
                    <h3 className="text-[12px] font-bold text-white/50 uppercase tracking-widest mb-8 border-b border-white/10 pb-4">Capabilities</h3>
                    <div className="flex flex-col gap-5">
                      {["Digital Transformation", "AI & Machine Learning", "Operating Model Design", "Advanced Analytics", "Cybersecurity", "Zero Trust Architecture"].map(item => (
                        <Link key={item} href="/#what-we-do" onClick={() => setSidebarOpen(false)} className="text-[18px] text-white/80 hover:text-brand-primary transition-colors">
                          {item}
                        </Link>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex flex-col"
                  >
                    <h3 className="text-[12px] font-bold text-white/50 uppercase tracking-widest mb-8 border-b border-white/10 pb-4">Industries</h3>
                    <div className="flex flex-col gap-5">
                      {["Financial Institutions", "Consumer Products", "Health Care", "Public Sector", "Industrial Goods", "Energy"].map(item => (
                        <Link key={item} href="/#industries" onClick={() => setSidebarOpen(false)} className="text-[18px] text-white/80 hover:text-brand-primary transition-colors">
                          {item}
                        </Link>
                      ))}
                    </div>
                  </motion.div>

                </div>
              </div>

              {/* Bottom Footer block inside Nav */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
              >
                <div className="flex gap-6">
                  <a href="#" className="text-[12px] font-bold text-white/50 hover:text-white transition-colors uppercase tracking-widest">LinkedIn</a>
                  <a href="#" className="text-[12px] font-bold text-white/50 hover:text-white transition-colors uppercase tracking-widest">Twitter</a>
                </div>
                <div className="text-[12px] font-bold text-white/50 uppercase tracking-widest">
                  hello@advaitai.in  //  Global Deployments
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

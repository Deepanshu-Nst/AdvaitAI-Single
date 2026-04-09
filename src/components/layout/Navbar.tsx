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

  const isDarkText = scrolled || activeMenu || sidebarOpen;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out flex items-center border-b",
          isDarkText
            ? "bg-white text-[#1A1A1A] border-[#E5E7EB] h-[80px]"
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
                isDarkText 
                  ? "bg-[#1A1A1A] text-white hover:bg-brand-primary" 
                  : "bg-white text-[#1A1A1A] hover:bg-white/90"
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
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-full left-0 w-full bg-white text-[#1A1A1A] shadow-2xl overflow-hidden z-40 border-t border-[#E5E7EB]"
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="container mx-auto px-6 md:px-12 py-16">
                {activeMenu === "What We Do" && (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">
                    <div className="col-span-1 md:col-span-8">
                      <h3 className="text-[14px] font-bold text-gray-400 uppercase tracking-widest mb-8 border-b border-gray-200 pb-4">Capabilities</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                        {[
                          "Business Consulting", "IT Strategy & Roadmaps", "AI & Machine Learning", 
                          "Information Security", "Application Modernization", "Advanced Data Analytics", 
                          "Cloud Architecture", "Enterprise Architecture", "UX/UI Design", "Digital Transformation"
                        ].map(service => (
                          <Link key={service} href="/#what-we-do" onClick={() => setActiveMenu(null)} className="text-[17px] font-light text-[#1A1A1A] hover:text-brand-primary group flex items-center justify-between">
                            {service}
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="col-span-1 md:col-span-4 flex flex-col">
                      <h3 className="text-[14px] font-bold text-gray-400 uppercase tracking-widest mb-8 border-b border-gray-200 pb-4">Featured Highlight</h3>
                      <Link href="/insights" onClick={() => setActiveMenu(null)} className="group block h-full">
                        <div className="w-full aspect-[4/3] bg-gray-100 mb-6 overflow-hidden">
                          <div 
                            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80')" }} 
                          />
                        </div>
                        <h4 className="font-semibold text-xl md:text-2xl mb-3 leading-tight group-hover:text-brand-primary transition-colors">Transforming the Public Sector with Predictive AI</h4>
                        <span className="text-brand-primary font-bold text-sm tracking-widest uppercase flex items-center gap-2 mt-4">
                          Explore Case Study <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </Link>
                    </div>
                  </div>
                )}
                {activeMenu === "Our Insights" && (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
                    <div className="col-span-1 md:col-span-3">
                      <h3 className="text-[14px] font-bold text-gray-400 uppercase tracking-widest mb-8 border-b border-gray-200 pb-4">By Topic</h3>
                      <div className="flex flex-col gap-5">
                        {["Artificial Intelligence", "Digital Transformation", "Sustainability", "Operations", "Finance & Strategy"].map(t => (
                          <Link key={t} href="/insights" onClick={() => setActiveMenu(null)} className="text-[17px] font-light text-[#1A1A1A] hover:text-brand-primary transition-colors">{t}</Link>
                        ))}
                      </div>
                    </div>
                    <div className="col-span-1 md:col-span-3">
                      <h3 className="text-[14px] font-bold text-gray-400 uppercase tracking-widest mb-8 border-b border-gray-200 pb-4">By Content Type</h3>
                      <div className="flex flex-col gap-5">
                        {["White Papers", "Executive Reports", "Case Studies", "Articles & Insights", "Podcasts"].map(t => (
                          <Link key={t} href="/insights" onClick={() => setActiveMenu(null)} className="text-[17px] font-light text-[#1A1A1A] hover:text-brand-primary transition-colors">{t}</Link>
                        ))}
                      </div>
                    </div>
                    <div className="col-span-1 md:col-span-6 flex flex-col">
                       <h3 className="text-[14px] font-bold text-gray-400 uppercase tracking-widest mb-8 border-b border-gray-200 pb-4">Latest Research</h3>
                       <Link href="/insights/future-of-ai" onClick={() => setActiveMenu(null)} className="group bg-[#F4F4F4] p-8 md:p-10 flex flex-col justify-center h-full hover:bg-[#eaeaea] transition-colors">
                         <span className="text-[12px] font-bold uppercase tracking-widest text-brand-primary mb-4">White Paper</span>
                         <h4 className="font-bold text-2xl md:text-3xl mb-4 leading-tight group-hover:text-brand-primary transition-colors">The Future of AI in Indian Financial Services</h4>
                         <p className="text-[#4B5563] text-lg font-light mb-8 max-w-lg">A comprehensive white paper on accelerating AI adoption, compliance, and growth within the emerging markets.</p>
                         <span className="text-[#1A1A1A] font-bold text-sm tracking-widest uppercase flex items-center gap-2 mt-auto group-hover:text-brand-primary">
                           Read Insight <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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

      {/* Full-Height Left Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }} // smooth BCG style ease
              className="fixed inset-y-0 left-0 w-full sm:w-[450px] bg-[#0A0A1A] text-white z-50 pt-[100px] px-8 sm:px-12 pb-12 overflow-y-auto"
            >
              <nav className="flex flex-col mt-4">
                {sidebarLinks.map((link, idx) => (
                  <motion.div 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setSidebarOpen(false)}
                      className="block py-4 text-[28px] md:text-[34px] font-light hover:text-brand-primary hover:translate-x-2 transition-all border-b border-white/10"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-16 text-white/50 text-sm font-light space-y-4"
              >
                <div className="flex gap-6 mb-8">
                  <a href="#" className="hover:text-white transition-colors uppercase tracking-widest text-xs">LinkedIn</a>
                  <a href="#" className="hover:text-white transition-colors uppercase tracking-widest text-xs">Twitter</a>
                  <a href="#" className="hover:text-white transition-colors uppercase tracking-widest text-xs">Instagram</a>
                </div>
                <p>Bengaluru | Delhi NCR | Mumbai</p>
                <p>hello@advaitai.in</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { name: "Services", href: "/#what-we-do" },
  { name: "Use Cases", href: "/#use-cases" },
  { name: "Blog", href: "/#insights" },
  { name: "Strategy", href: "/#why-us" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out flex items-center border-b",
          scrolled || sidebarOpen
            ? "bg-white/90 backdrop-blur-md text-[#0C2D57] border-[#DBEAFE] h-[80px] shadow-sm shadow-blue-100"
            : "bg-transparent text-[#0C2D57] border-transparent h-[100px]"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-full">
          
          {/* Left section: Hamburger & Logo */}
          <div className="flex items-center gap-6 h-full">
            <button
              className="p-2 -ml-2 group relative z-50 transition-transform active:scale-95"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? (
                <X className="w-8 h-8 transition-colors text-white" strokeWidth={1.5} />
              ) : (
                <Menu className="w-8 h-8 transition-colors text-[#0C2D57]" strokeWidth={1.5} />
              )}
            </button>
            
            <Link href="/" className="flex items-center gap-2 group relative z-50">
              <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" className={sidebarOpen ? "text-white" : "text-brand-primary"} />
                <path d="M40 70 L50 30 L60 70" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" className={sidebarOpen ? "text-white" : "text-brand-primary"} />
                <path d="M43 60 L57 60" stroke="currentColor" strokeWidth="8" strokeLinecap="round" className={sidebarOpen ? "text-white" : "text-brand-primary"} />
              </svg>
              <span className={cn("text-[22px] font-bold tracking-tight uppercase", sidebarOpen ? "text-white" : "text-[#0C2D57]")}>AdvaitAI</span>
            </Link>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-6 relative z-50">
            <Link
              href="/#contact"
              className={cn(
                "transition-all px-6 py-2.5 text-[13px] font-bold uppercase tracking-wider hidden md:inline-flex shadow-md shadow-brand-primary/20",
                "bg-brand-primary text-white hover:bg-brand-secondary hover:text-white"
              )}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </header>

      {/* Main Navigation Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            exit={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 bg-gradient-to-br from-[#0C2D57] to-[#1D4ED8] text-white z-40 overflow-y-auto pt-[100px] flex flex-col justify-between"
          >
            <div className="container mx-auto px-6 py-12 flex flex-col h-full">
              <div className="flex-grow flex flex-col justify-center gap-12">
                
                {/* Main Links */}
                <div className="flex flex-col gap-8">
                  <h3 className="text-[12px] font-bold text-white/50 uppercase tracking-widest pl-2 border-l border-brand-primary/30">Menu</h3>
                  <nav className="flex flex-col gap-6">
                    {sidebarLinks.map((link, idx) => (
                      <motion.div 
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + idx * 0.05, duration: 0.5, ease: "easeOut" }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setSidebarOpen(false)}
                          className="text-[48px] md:text-[64px] font-bold hover:text-brand-accent transition-colors leading-[1.1] tracking-tight hover:pl-4 inline-block duration-300 relative group"
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>

              </div>

              {/* Bottom Footer block inside Nav */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="pt-8 border-t border-white/20 flex flex-col justify-between items-start gap-8 mt-12"
              >
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

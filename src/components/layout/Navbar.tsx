"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { name: "Capabilities", href: "/#what-we-do" },
  { name: "Case Studies", href: "/#use-cases" },
  { name: "Insights", href: "/#insights" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          scrolled || mobileMenuOpen
            ? "bg-white/90 backdrop-blur-md text-[#0C2D57] border-[#DBEAFE] h-[80px] shadow-sm shadow-blue-100"
            : "bg-transparent text-[#0C2D57] border-transparent h-[100px]"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-full w-full">

          {/* Logo */}
          <Link href="/" className="flex items-center group relative z-50 shrink-0 transform origin-left hover:scale-105 transition-transform duration-300">
            <img
              src="https://i.ibb.co/LXRNGDVK/Advait-AI-logo-trans-removebg-preview.png"
              alt="AdvaitAI Logo"
              className="h-[72px] md:h-[90px] w-auto object-contain drop-shadow-md"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10 mx-auto justify-center absolute left-1/2 -translate-x-1/2">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#0C2D57] hover:text-brand-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right actions & Mobile Toggle */}
          <div className="flex items-center justify-end gap-6 relative z-50 shrink-0">
            <Link
              href="/#contact"
              className={cn(
                "transition-all px-6 py-2.5 text-[13px] font-bold uppercase tracking-wider hidden md:inline-flex shadow-md shadow-brand-primary/20",
                "bg-brand-primary text-white hover:bg-brand-secondary hover:text-white"
              )}
            >
              Consult With Us
            </Link>

            <button
              className="lg:hidden p-2 -mr-2 text-[#0C2D57] transition-transform active:scale-95 z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-8 h-8" strokeWidth={1.5} /> : <Menu className="w-8 h-8" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[80px] bg-white border-b border-[#DBEAFE] shadow-xl z-40 lg:hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[18px] font-bold text-[#0C2D57] hover:text-brand-primary uppercase tracking-widest"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-[#DBEAFE]">
                <Link
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-block bg-brand-primary text-white px-6 py-3 text-[14px] font-bold uppercase tracking-widest hover:bg-brand-secondary transition-colors"
                >
                  Consult With Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

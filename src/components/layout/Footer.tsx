import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-24 pb-12 font-light">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Top Section - Newsletter & Main Info */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-24 border-b border-white/10 pb-20">
          
          <div className="w-full lg:w-1/2">
            <h3 className="text-[32px] md:text-[44px] font-light leading-[1.1] mb-6">Global Intelligence, <br/>Delivered Weekly.</h3>
            <p className="text-[#9CA3AF] text-[16px] mb-8 max-w-md">
              Subscribe to the AdvaitAI newsletter for executive insights on artificial intelligence, business strategy, and technological transformation.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border-b border-white/30 text-white px-2 py-3 flex-grow outline-none focus:border-brand-primary transition-colors text-[16px]"
                required
              />
              <button type="submit" className="flex items-center justify-between gap-2 px-6 py-3 bg-white text-[#111111] hover:bg-brand-primary hover:text-white transition-colors font-bold text-[13px] uppercase tracking-widest shrink-0">
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="w-full lg:w-[40%] flex flex-col items-start lg:items-end text-left lg:text-right">
             <Link href="/" className="mb-8 block">
               <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="2" />
                <path d="M40 70 L50 30 L60 70" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M43 60 L57 60" stroke="white" strokeWidth="8" strokeLinecap="round" />
              </svg>
            </Link>
            <h4 className="text-[20px] font-light mb-2">AdvaitAI Technologies</h4>
             <p className="text-[#9CA3AF] text-[15px] max-w-xs mb-8">
              Designing intelligent systems that solve real-world problems through data, design, and human-centered innovation.
            </p>
             <Link href="/contact" className="text-[13px] font-bold uppercase tracking-widest border-b border-white pb-1 hover:text-brand-primary hover:border-brand-primary transition-colors">
               Contact Us
             </Link>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-24">
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-widest text-white/50 mb-8">Capabilities</h4>
            <ul className="flex flex-col gap-4 text-[15px] font-light text-[#E5E7EB]">
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Digital Transformation</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Strategy & Operations</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Technology & Security</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Design & Experience</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-widest text-white/50 mb-8">Industries</h4>
            <ul className="flex flex-col gap-4 text-[15px] font-light text-[#E5E7EB]">
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Financial Institutions</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Health Care</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Public Sector</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Consumer Products</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-widest text-white/50 mb-8">Company</h4>
            <ul className="flex flex-col gap-4 text-[15px] font-light text-[#E5E7EB]">
              <li><Link href="/about" className="hover:text-brand-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Locations</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Alumni Network</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-widest text-white/50 mb-8">Follow Us</h4>
            <ul className="flex flex-col gap-4 text-[15px] font-light text-[#E5E7EB]">
              <li><a href="#" className="hover:text-brand-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/10 text-[13px] text-[#9CA3AF]">
          <ul className="flex flex-wrap items-center gap-6">
            <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Terms of Use</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Cookie Preferences</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Accessability</Link></li>
          </ul>
          <p>
            © 2025 AdvaitAI Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

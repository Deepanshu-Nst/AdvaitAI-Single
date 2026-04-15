import Link from "next/link";
import ParticleNetwork from "@/components/ui/ParticleNetwork";

export default function Footer() {
  return (
    <footer className="bg-[#0C2D57] text-white pt-24 pb-12 font-light relative overflow-hidden">
      <ParticleNetwork idClassName="footer-particles" opacity={0.3} />
      <div className="container mx-auto px-6 md:px-12 relative z-10 pointer-events-none">
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-24 border-b border-white/15 pb-20 pointer-events-auto">
          <div className="w-full lg:w-1/2">
            <h3 className="text-[32px] md:text-[44px] font-light leading-[1.1] mb-6">Build the future.<br/>Without the bloat.</h3>
            <p className="text-white/60 text-[16px] max-w-md">
              AdvaitAI builds practical AI solutions for modern startups and forward-thinking enterprises.
            </p>
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
             <p className="text-white/60 text-[15px] max-w-xs mb-8">
              hello@advaitai.in
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white hover:text-brand-accent transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="text-white hover:text-brand-accent transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="text-white hover:text-brand-accent transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-white hover:text-brand-accent transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border-t border-white/15 pt-8 pointer-events-auto">
          <div className="text-[14px] text-white/60 flex flex-col md:flex-row gap-4 md:gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Preferences</Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
          <div className="text-[14px] text-white/60">
            © {new Date().getFullYear()} AdvaitAI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

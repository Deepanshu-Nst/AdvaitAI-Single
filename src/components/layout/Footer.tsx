"use client";

import Link from "next/link";
import ParticleNetwork from "@/components/ui/ParticleNetwork";
import { toast } from "sonner";

export default function Footer() {
  return (
    <footer className="bg-[#0C2D57] text-white pt-24 pb-12 font-light relative overflow-hidden">
      <ParticleNetwork idClassName="footer-particles" opacity={0.3} />
      <div className="container mx-auto px-6 md:px-12 relative z-10 pointer-events-none">
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-24 border-b border-white/15 pb-20 pointer-events-auto">
          <div className="w-full lg:w-1/2">
            <h3 className="text-[28px] md:text-[36px] font-light leading-[1.1] mb-6">Subscribe to our newsletter</h3>
            <p className="text-white/60 text-[16px] max-w-md mb-8">
              Gain a competitive edge with the latest in enterprise AI automation and deployments.
            </p>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const email = formData.get('email');
                if (email) {
                  try {
                    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "dummy";

                    if (accessKey !== "dummy") {
                      const response = await fetch("https://api.web3forms.com/submit", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                          Accept: "application/json",
                        },
                        body: JSON.stringify({
                          access_key: accessKey,
                          subject: "New Newsletter Subscriber - AdvaitAI",
                          email
                        }),
                      });

                      const result = await response.json();
                      if (result.success) {
                        toast.success("Thanks for subscribing!");
                        (e.target as HTMLFormElement).reset();
                      } else {
                        throw new Error(result.message || "Subscription failed");
                      }
                    } else {
                      await new Promise(r => setTimeout(r, 1000));
                      toast.success("Thanks for subscribing! (Simulated)");
                      (e.target as HTMLFormElement).reset();
                    }
                  } catch (err) {
                    toast.error("Subscription failed. Please try again.");
                  }
                }
              }}
              className="flex items-center w-full max-w-md"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="flex-grow bg-white/5 border border-white/20 text-white placeholder-white/40 px-4 py-3 h-[48px] focus:outline-none focus:border-brand-primary transition-colors text-[14px]"
              />
              <button
                type="submit"
                className="bg-brand-primary text-white px-6 py-3 h-[48px] text-[12px] font-bold uppercase tracking-widest hover:bg-brand-secondary transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="w-full lg:w-[40%] flex flex-col items-start lg:items-end text-left lg:text-right">
            <Link href="/" className="mb-8 block transform origin-left lg:origin-right hover:scale-105 transition-transform duration-300">
              <img
                src="https://i.ibb.co/LXRNGDVK/Advait-AI-logo-trans-removebg-preview.png"
                alt="AdvaitAI Logo"
                className="h-[72px] md:h-[90px] w-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]"
              />
            </Link>
            <p className="text-white/60 text-[15px] max-w-xs mb-8">
              contact@advaita1.com
            </p>
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/company/advaitai" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-accent transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border-t border-white/15 pt-8 pointer-events-auto">
          <div className="text-[14px] text-white/60 flex flex-col md:flex-row gap-4 md:gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <button 
              onClick={() => window.dispatchEvent(new Event("openCookieSettings"))}
              className="hover:text-white transition-colors text-left"
            >
              Cookie Preferences
            </button>
            <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
          <div className="text-[14px] text-white/60">
            © {new Date().getFullYear()} ADVAITIANS INNOVATIONS PRIVATE LIMITED. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

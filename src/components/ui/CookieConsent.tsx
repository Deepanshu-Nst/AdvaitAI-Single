"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (status: "accepted" | "declined") => {
    localStorage.setItem("cookieConsent", status);
    setShow(false);
    // Dispatch custom event for AnalyticsWrapper
    window.dispatchEvent(new Event("cookieConsentChanged"));
  };

  useEffect(() => {
    const handleShowSettings = () => setShow(true);
    window.addEventListener("openCookieSettings", handleShowSettings);
    return () => window.removeEventListener("openCookieSettings", handleShowSettings);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-[420px] bg-white border border-[#BFDBFE] p-8 shadow-[0_20px_50px_rgba(14,165,233,0.15)] z-[100] text-[#0C2D57] rounded-lg"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-start justify-between">
                <div className="p-3 bg-brand-primary/5 rounded-xl text-brand-primary">
                  <Cookie size={24} />
                </div>
                <button 
                  onClick={() => setShow(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={18} className="text-[#5B7FA5]" />
                </button>
              </div>
              
              <div>
                <h4 className="text-[18px] font-bold mb-3 tracking-tight">Privacy Preferences</h4>
                <p className="text-[14px] text-[#5B7FA5] font-light leading-relaxed">
                  We use cookies to personalize content, analyze our traffic, and provide essential site features. 
                  By clicking &quot;Accept All&quot;, you agree to our use of tracking tools for a better experience.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full mt-2">
                <button
                  onClick={() => handleConsent("declined")}
                  className="flex-1 border border-[#BFDBFE] text-[#5B7FA5] py-3 text-[12px] font-bold uppercase tracking-widest hover:bg-gray-50 transition-all active:scale-95"
                >
                  Decline All
                </button>
                <button
                  onClick={() => handleConsent("accepted")}
                  className="flex-1 bg-brand-primary text-white py-3 text-[12px] font-bold uppercase tracking-widest hover:bg-brand-secondary shadow-lg shadow-brand-primary/20 transition-all active:scale-95"
                >
                  Accept All
                </button>
              </div>
              
              <p className="text-[11px] text-center text-[#5B7FA5]/60">
                View our <a href="/cookies" className="underline hover:text-brand-primary">Cookie Policy</a> for more details.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

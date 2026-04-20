"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show the consent banner on every refresh after a short delay
    setTimeout(() => setShow(true), 1500);
  }, []);

  const handleConsent = (status: "accepted" | "declined") => {
    localStorage.setItem("cookieConsent", status);
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-[400px] bg-white border border-[#BFDBFE] p-6 shadow-2xl z-[100] text-[#0C2D57] rounded-sm"
        >
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="text-[16px] font-bold mb-2">We value your privacy</h4>
              <p className="text-[13px] text-[#5B7FA5] font-light leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies.
              </p>
            </div>
            <div className="flex gap-4 w-full mt-2">
              <button
                onClick={() => handleConsent("declined")}
                className="flex-1 border border-brand-primary text-brand-primary py-2.5 text-[12px] font-bold uppercase tracking-widest hover:bg-brand-primary/5 transition-colors"
              >
                Decline
              </button>
              <button
                onClick={() => handleConsent("accepted")}
                className="flex-1 bg-brand-primary text-white py-2.5 text-[12px] font-bold uppercase tracking-widest hover:bg-brand-secondary transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

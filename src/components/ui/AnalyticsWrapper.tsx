"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";

export default function AnalyticsWrapper() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Check consent status on mount
    const checkConsent = () => {
      const consent = localStorage.getItem("cookieConsent");
      setShouldLoad(consent === "accepted");
    };

    checkConsent();

    // Listen for custom events when consent status changes
    window.addEventListener("cookieConsentChanged", checkConsent);

    return () => {
      window.removeEventListener("cookieConsentChanged", checkConsent);
    };
  }, []);

  if (!shouldLoad) return null;

  return <Analytics />;
}

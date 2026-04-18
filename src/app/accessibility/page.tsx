export default function AccessibilityPolicy() {
  return (
    <div className="pt-40 pb-24 bg-[#F0F7FF] text-[#0C2D57] min-h-[100svh]">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h1 className="text-[40px] md:text-[56px] font-bold mb-8 tracking-tight">Accessibility Statement</h1>
        <div className="prose prose-lg text-[#5B7FA5] max-w-none prose-headings:text-[#0C2D57] prose-a:text-brand-primary">
          <p className="font-medium">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-[24px] font-bold mt-12 mb-4">1. Our Commitment</h2>
          <p>
            AdvaitAI (ADVAITIANS INNOVATIONS PRIVATE LIMITED) is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to our digital platforms.
          </p>

          <h2 className="text-[24px] font-bold mt-12 mb-4">2. Conformance Status</h2>
          <p>
            The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. We strive to maintain compliance with WCAG 2.1 level AA guidelines.
          </p>

          <h2 className="text-[24px] font-bold mt-12 mb-4">3. Technical Specifications</h2>
          <p>
            Accessibility of this website relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
          </p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>HTML</li>
            <li>WAI-ARIA</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>

          <h2 className="text-[24px] font-bold mt-12 mb-4">4. Feedback</h2>
          <p>
            We welcome your feedback on the accessibility of our site. Please let us know if you encounter accessibility barriers:
          </p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Email: <a href="mailto:contact@advaita1.com">contact@advaita1.com</a></li>
          </ul>
          <p className="mt-4">
            We try to respond to feedback within 5 business days.
          </p>
        </div>
      </div>
    </div>
  );
}

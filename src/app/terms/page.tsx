export default function TermsOfUse() {
  return (
    <div className="pt-40 pb-24 bg-[#F0F7FF] text-[#0C2D57] min-h-[100svh]">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h1 className="text-[40px] md:text-[56px] font-bold mb-8 tracking-tight">Terms of Use</h1>
        <div className="prose prose-lg text-[#5B7FA5] max-w-none prose-headings:text-[#0C2D57] prose-a:text-brand-primary">
          <p className="font-medium">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-[24px] font-bold mt-12 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
          </p>

          <h2 className="text-[24px] font-bold mt-12 mb-4">2. Description of Service</h2>
          <p>
            AdvaitAI (ADVAITIANS INNOVATIONS PRIVATE LIMITED) provides users with insights, software development, and consultancy regarding artificial intelligence systems. We reserve the right to modify or discontinue, temporarily or permanently, the Service with or without notice.
          </p>

          <h2 className="text-[24px] font-bold mt-12 mb-4">3. Intellectual Property Rights</h2>
          <p>
            The website and its original content, features, and functionality are owned by ADVAITIANS INNOVATIONS PRIVATE LIMITED and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>

          <h2 className="text-[24px] font-bold mt-12 mb-4">4. Platform Use Guidelines</h2>
          <p>
            You agree to not use the Service to:
          </p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Interfere with or disrupt the Service or servers or networks connected to the Service.</li>
            <li>Transmit any malicious code, viruses, or destructive materials.</li>
            <li>Violate any applicable local, state, national, or international law.</li>
          </ul>

          <h2 className="text-[24px] font-bold mt-12 mb-4">5. Disclaimer of Warranties</h2>
          <p>
            The materials on our website are provided on an &apos;as is&apos; basis. AdvaitAI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2 className="text-[24px] font-bold mt-12 mb-4">6. Contact Information</h2>
          <p>
            For any inquiries regarding these Terms of Use, contact us at: <a href="mailto:contact@advaita1.com">contact@advaita1.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

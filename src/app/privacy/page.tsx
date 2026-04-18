export default function PrivacyPolicy() {
  return (
    <div className="pt-40 pb-24 bg-[#F0F7FF] text-[#0C2D57] min-h-[100svh]">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h1 className="text-[40px] md:text-[56px] font-bold mb-8 tracking-tight">Privacy Policy</h1>
        <div className="prose prose-lg text-[#5B7FA5] max-w-none prose-headings:text-[#0C2D57] prose-a:text-brand-primary">
          <p className="font-medium">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-[24px] font-bold mt-12 mb-4">1. Introduction</h2>
          <p>
            Welcome to AdvaitAI (ADVAITIANS INNOVATIONS PRIVATE LIMITED). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
          </p>

          <h2 className="text-[24px] font-bold mt-12 mb-4">2. The Data We Collect About You</h2>
          <p>
            Personal data, or personal information, means any information about an individual from which that person can be identified.
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
          </p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
          </ul>

          <h2 className="text-[24px] font-bold mt-12 mb-4">3. How We Use Your Personal Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal or regulatory obligation.</li>
          </ul>

          <h2 className="text-[24px] font-bold mt-12 mb-4">4. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>

          <h2 className="text-[24px] font-bold mt-12 mb-4">5. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:contact@advaita1.com">contact@advaita1.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

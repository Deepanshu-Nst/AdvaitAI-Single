export default function CookiesPolicy() {
  return (
    <div className="pt-40 pb-24 bg-[#F0F7FF] text-[#0C2D57] min-h-[100svh]">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h1 className="text-[40px] md:text-[56px] font-bold mb-8 tracking-tight">Cookie Preferences</h1>
        <div className="prose prose-lg text-[#5B7FA5] max-w-none prose-headings:text-[#0C2D57] prose-a:text-brand-primary">
          <p className="font-medium">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-[24px] font-bold mt-12 mb-4">1. What Are Cookies</h2>
          <p>
            As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies.
          </p>

          <h2 className="text-[24px] font-bold mt-12 mb-4">2. How We Use Cookies</h2>
          <p>
            We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.
          </p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li><strong>Strictly Necessary Cookies:</strong> Required to enable core site functionality such as secure log-in or adjusting your consent preferences.</li>
            <li><strong>Functionality Cookies:</strong> Allow us to remember choices you make (such as your user name, language, or the region you are in) and provide enhanced, more personal features.</li>
            <li><strong>Performance Cookies:</strong> Collect information about how you use a website, like which pages you visited and which links you clicked on. None of this information can be used to identify you.</li>
          </ul>

          <h2 className="text-[24px] font-bold mt-12 mb-4">3. Disabling Cookies</h2>
          <p>
            You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit.
          </p>

          <h2 className="text-[24px] font-bold mt-12 mb-4">4. More Information</h2>
          <p>
            Hopefully, that has clarified things for you. Application of cookies allows us to maintain a secure, seamless experience across our digital surfaces. For further queries, please reach out to: <a href="mailto:contact@advaita1.com">contact@advaita1.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

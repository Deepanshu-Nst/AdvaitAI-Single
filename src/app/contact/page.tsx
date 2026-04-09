import ContactSection from "@/components/sections/ContactSection";

export default function ContactPage() {
  return (
    <div className="pt-24">
      <div className="bg-[#0A0A1A] text-white py-20">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-400">
            Have a project in mind or want to learn more about our AI capabilities? Our experts are ready to assist you.
          </p>
        </div>
      </div>
      <ContactSection />
    </div>
  );
}

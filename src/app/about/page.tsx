import PhilosophySection from "@/components/sections/PhilosophySection";
// For brevity we reuse PhilosophySection in About page, followed by a Team section

export default function AboutPage() {
  const team = [
    { name: "Rahul Advait", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
    { name: "Priya Sharma", role: "Chief Data Scientist", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
    { name: "Amit Verma", role: "Head of Engineering", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
    { name: "Sneha Nair", role: "VP of Product", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" }
  ];

  return (
    <div className="pt-24 pb-20 mt-12 bg-white">
      {/* Hero Banner */}
      <div className="bg-[#0A0A1A] text-white py-24 mb-16">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About AdvaitAI</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            We are a collective of engineers, data scientists, and strategists united by the singular vision of building intelligent systems that elevate human potential.
          </p>
        </div>
      </div>
      
      <PhilosophySection />

      {/* Team */}
      <section className="container mx-auto px-4 md:px-8 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Meet Our Leadership</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map(member => (
            <div key={member.name} className="flex flex-col items-center">
              <div 
                className="w-48 h-48 rounded-full bg-gray-200 mb-4 bg-cover bg-center shadow-lg"
                style={{ backgroundImage: `url('${member.image}')` }}
              />
              <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-brand-primary font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

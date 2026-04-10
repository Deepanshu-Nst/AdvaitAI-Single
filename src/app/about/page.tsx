import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  const team = [
    { name: "Rahul Advait", role: "Managing Partner", desc: "Ex-McKinsey. 15 years architecting enterprise transformations.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
    { name: "Priya Sharma", role: "Head of AI Infrastructure", desc: "Former DeepMind Lead. Securing LLM deployments.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
    { name: "Amit Verma", role: "Partner, Operations", desc: "Specializes in restructuring global supply chains.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
    { name: "Sneha Nair", role: "Dir. of Compliance Systems", desc: "Navigating international AI regulatory frameworks.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" }
  ];

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white pt-[120px]">
      
      {/* Hero Narrative */}
      <div className="container mx-auto px-6 md:px-12 py-20 pb-32">
        <div className="max-w-5xl">
          <span className="text-brand-primary text-[12px] font-bold uppercase tracking-[0.2em] mb-8 block">Our Mandate</span>
          <h1 className="text-[48px] md:text-[80px] font-bold mb-12 leading-[1.05] tracking-tight text-white">
            We don't sell software. <br />
            <span className="text-white/40">We engineer structural leverage.</span>
          </h1>
          <p className="text-[20px] md:text-[28px] font-light text-white/50 leading-relaxed max-w-3xl">
            AdvaitAI was founded on a singular premise: The gap between AI research and enterprise execution is a multi-billion dollar liability. We exist to close it. We bridge advanced intelligence with relentless operational discipline.
          </p>
        </div>
      </div>

      {/* The Thesis Split */}
      <div className="bg-[#111111] border-y border-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="py-24 md:py-32 md:pr-24">
              <span className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 block">01 // The Old Model is Dead</span>
              <h3 className="text-[32px] font-bold mb-6">Consulting theater is over.</h3>
              <p className="text-[16px] text-white/50 leading-relaxed font-light">
                For a decade, enterprises bought slide decks. Today, if your strategy isn't immediately deployable as a deterministic software pipeline, it's irrelevant. We don't write reports; we push production code that fundamentally alters your P&L.
              </p>
            </div>
            <div className="py-24 md:py-32 md:pl-24">
              <span className="text-brand-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6 block">02 // Our Architecture</span>
              <h3 className="text-[32px] font-bold mb-6">Outcome-first intelligence.</h3>
              <p className="text-[16px] text-white/50 leading-relaxed font-light">
                Whether deploying localized LLMs for data privacy or restructuring logistics routing algorithms, we measure success strictly by the friction removed and the capital unlocked. Extreme pragmatism meets advanced mathematics.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership */}
      <div className="container mx-auto px-6 md:px-12 py-32">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
          <div className="max-w-2xl">
            <span className="text-brand-primary text-[12px] font-bold uppercase tracking-[0.2em] mb-8 block">The Operating Committee</span>
            <h2 className="text-[40px] md:text-[56px] font-bold text-white mb-6 leading-[1.05] tracking-tight">
              Calculated expertise.
            </h2>
          </div>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 text-[14px] font-bold uppercase tracking-widest hover:text-brand-primary transition-colors group pb-4"
          >
            Speak with Leadership
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="group relative">
              <div 
                className="w-full aspect-[4/5] bg-[#111111] mb-6 bg-cover bg-center mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-700"
                style={{ backgroundImage: `url('${member.image}')` }}
              />
              <h3 className="text-[24px] font-bold text-white mb-1 group-hover:text-brand-primary transition-colors duration-500">{member.name}</h3>
              <p className="text-[12px] font-bold uppercase tracking-widest text-white/30 mb-4">{member.role}</p>
              <p className="text-[14px] font-light text-white/50">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

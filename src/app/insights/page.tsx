import Link from "next/link";
import { ArrowRight } from "lucide-react";

const dummyInsights = [
  {
    _id: "test-1",
    url: "/insights/future-of-ai",
    title: "How a Leading Bank Cut Compliance Friction by 35% with Local LLMs",
    category: "Case Study",
    excerpt: "We ripped out generic RPA and implemented a compliant, on-prem AI engine to solve fundamental reporting latency.",
    date: "2026-04-10",
    readTime: "5 min",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80"
  },
  {
    _id: "test-2",
    url: "/insights/ai-logistics",
    title: "How a Route Optimizer Saved $40M in Logistics",
    category: "Success Story",
    excerpt: "Exploring the impact of artificial intelligence in reshaping predictive supply chain frameworks across the globe.",
    date: "2026-03-27",
    readTime: "7 min",
    coverImage: "https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?w=800&q=80"
  },
  {
    _id: "test-3",
    url: "/insights/data-mesh",
    title: "Building Real-Time Enterprise Data Meshes",
    category: "Architecture",
    excerpt: "The technical anatomy of moving from monolithic data lakes to federated, real-time data architectures.",
    date: "2026-03-15",
    readTime: "12 min",
    coverImage: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&q=80"
  },
  {
    _id: "test-4",
    url: "/insights/production-playbook",
    title: "From Prototype to Production: A 3-Week Playbook",
    category: "Perspective",
    excerpt: "How to stop building AI toys in sandboxes and start shipping mission-critical intelligence to production.",
    date: "2026-03-02",
    readTime: "8 min",
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
  }
];

export default function InsightsPage() {
  const insights = dummyInsights.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const featured = insights[0];
  const rest = insights.slice(1);

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white pt-[100px]">
      
      {/* Centered Hero Section */}
      <div className="container mx-auto px-6 md:px-12 py-20 md:py-32 flex flex-col items-center text-center border-b border-white/10">
        <span className="text-brand-primary text-[12px] font-bold uppercase tracking-[0.2em] mb-6">Our Thinking</span>
        <h1 className="text-[48px] md:text-[80px] font-bold mb-8 leading-[1.05] tracking-tight max-w-4xl">
          Intelligence, <br className="hidden md:block" /> Documented.
        </h1>
        <p className="text-[18px] md:text-[22px] font-light text-white/50 max-w-2xl px-4">
          Deep-dives, architecture reviews, and outcome-driven case studies from the front lines of enterprise AI.
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-24">
        
        {/* Featured Insight (Strong Split Layout) */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-brand-primary" />
            <span className="text-white/50 text-[12px] font-bold uppercase tracking-[0.2em]">Featured Highlight</span>
          </div>
          
          <Link href={featured.url} className="group flex flex-col lg:flex-row gap-0 border border-white/10 hover:border-brand-primary/30 transition-colors duration-500 bg-[#111111] overflow-hidden">
            {/* Image Side */}
            <div className="w-full lg:w-[60%] relative aspect-video lg:aspect-auto">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] ease-out group-hover:scale-105 opacity-80 mix-blend-luminosity"
                style={{ backgroundImage: `url('${featured.coverImage}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111111] opacity-0 lg:opacity-100 hidden lg:block" />
            </div>
            
            {/* Content Side */}
            <div className="w-full lg:w-[40%] p-10 md:p-16 flex flex-col justify-center relative z-10 bg-[#111111]">
              <span className="inline-block px-4 py-1 bg-white/5 border border-white/10 text-[10px] md:text-[12px] font-bold uppercase tracking-widest mb-8 text-brand-primary w-max">
                {featured.category}
              </span>
              <h2 className="text-[32px] md:text-[48px] font-bold leading-[1.05] mb-8 group-hover:text-brand-primary transition-colors duration-500 max-w-lg">
                {featured.title}
              </h2>
              <p className="text-[16px] md:text-[20px] font-light text-white/50 mb-12 leading-relaxed">
                {featured.excerpt}
              </p>
              
              <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-8 text-[12px] font-bold uppercase tracking-[0.2em] text-white/30">
                 <div className="flex gap-4">
                   <span>{new Date(featured.date).toLocaleDateString()}</span>
                   <span>·</span>
                   <span>{featured.readTime} Read</span>
                 </div>
                 <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-black transition-all duration-500">
                    <ArrowRight className="w-4 h-4" />
                 </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Grid for rest */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((insight) => (
            <Link key={insight._id} href={insight.url} className="group flex flex-col h-full bg-[#111111] border border-white/10 overflow-hidden hover:border-brand-primary/50 transition-colors">
              <div className="relative w-full h-64 overflow-hidden bg-[#0A0A0A]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100 mix-blend-luminosity"
                  style={{ backgroundImage: `url('${insight.coverImage}')` }}
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest mb-4">
                  {insight.category}
                </span>
                <h3 className="text-[24px] font-bold text-white mb-4 leading-tight group-hover:text-brand-primary transition-colors">
                  {insight.title}
                </h3>
                <p className="text-white/50 text-[15px] mb-8 line-clamp-3 font-light leading-relaxed">
                  {insight.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between text-[11px] uppercase tracking-widest text-white/30 font-bold">
                  <span>{new Date(insight.date).toLocaleDateString()}</span>
                  <span>{insight.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

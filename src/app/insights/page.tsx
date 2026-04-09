import Link from "next/link";
import { allInsights } from "contentlayer/generated";

export default function InsightsPage() {
  const insights = allInsights.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-brand-text">All Insights</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight) => (
            <Link key={insight._id} href={insight.url} className="group flex flex-col h-full bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div 
                className="w-full h-48 bg-gray-200 bg-cover bg-center"
                style={{ backgroundImage: `url('${insight.coverImage || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"}')` }}
              />
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-[11px] font-bold text-brand-primary uppercase tracking-wider mb-2">
                  {insight.category}
                </span>
                <h2 className="text-xl font-bold text-brand-text mb-3 leading-snug group-hover:text-brand-primary transition-colors">
                  {insight.title}
                </h2>
                <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                  {insight.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between text-xs text-gray-400 font-medium">
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

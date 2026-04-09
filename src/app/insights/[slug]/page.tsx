import { notFound } from "next/navigation";

const dummyInsights = [
  {
    slug: "test-1",
    title: "The Future of AI in Financial Services",
    category: "Featured Insight",
    author: "Priya Nair",
    date: "2026-04-10",
    readTime: "5 min",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    body: "This is a dummy insight content for the testing purpose. It replaces the content layer MDX processing temporarily."
  },
  {
    slug: "test-2",
    title: "AI Is Already Moving the Logistics Industry",
    category: "Article",
    author: "Rohan Sharma",
    date: "2026-03-27",
    readTime: "7 min",
    coverImage: "https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?w=1200&q=80",
    body: "Logistics and supply chains are shifting globally. AI acts as a fundamental catalyst."
  }
];

export const generateStaticParams = async () => {
  return dummyInsights.map((insight) => ({ slug: insight.slug }));
};

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const insight = dummyInsights.find((insight) => insight.slug === params.slug);
  if (!insight) return { title: "Insight Not Found" };
  return { title: `${insight.title} | AdvaitAI` };
};

export default function InsightLayout({ params }: { params: { slug: string } }) {
  const insight = dummyInsights.find((insight) => insight.slug === params.slug);

  if (!insight) {
    notFound();
  }

  return (
    <div className="pt-24 bg-white min-h-screen">
      <article className="max-w-3xl mx-auto px-4 md:px-8 py-16">
        <div className="mb-12">
          <span className="text-brand-primary text-[11px] font-bold tracking-[0.1em] uppercase mb-4 block">
            {insight.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-brand-text leading-tight">
            {insight.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
            <span>{insight.author}</span>
            <span>•</span>
            <span>{new Date(insight.date).toLocaleDateString()}</span>
            <span>•</span>
            <span>{insight.readTime}</span>
          </div>
        </div>

        {insight.coverImage && (
          <div
            className="w-full h-64 md:h-96 rounded-xl bg-cover bg-center mb-12 shadow-sm"
            style={{ backgroundImage: `url('${insight.coverImage}')` }}
          />
        )}

        <div className="prose prose-lg md:prose-xl prose-indigo max-w-none text-gray-700">
          <p>{insight.body}</p>
        </div>
      </article>
    </div>
  );
}

import { allInsights } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";

export const generateStaticParams = async () => {
  return allInsights.map((insight) => ({ slug: insight.slug }));
};

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const insight = allInsights.find((insight) => insight.slug === params.slug);
  if (!insight) return { title: "Insight Not Found" };
  return { title: `${insight.title} | AdvaitAI` };
};

export default function InsightLayout({ params }: { params: { slug: string } }) {
  const insight = allInsights.find((insight) => insight.slug === params.slug);

  if (!insight) {
    notFound();
  }

  const MDXContent = useMDXComponent(insight.body.code);

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
          <MDXContent />
        </div>
      </article>
    </div>
  );
}

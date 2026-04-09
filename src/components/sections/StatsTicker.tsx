export default function StatsTicker() {
  const stats = [
    { number: "500+", label: "AI Models Deployed" },
    { number: "120+", label: "Enterprise Clients" },
    { number: "15+", label: "Industries Served" },
    { number: "98%", label: "Client Retention" },
    { number: "40+", label: "Expert Consultants" },
    { number: "6", label: "Countries Reached" },
    { number: "₹200Cr+", label: "Business Value Delivered" },
    { number: "10+", label: "Patent-Pending Innovations" },
  ];

  return (
    <div className="w-full bg-brand-primary text-white overflow-hidden py-5 border-y border-brand-primary/20 group">
      <div className="flex w-fit animate-marquee hover:[animation-play-state:paused]">
        {/* Double array to create seamless loop */}
        {[...stats, ...stats].map((stat, i) => (
          <div key={i} className="flex items-center shrink-0">
            <div className="flex flex-col md:flex-row items-center md:items-baseline gap-1 md:gap-3 px-8">
              <span className="text-[18px] font-bold whitespace-nowrap">{stat.number}</span>
              <span className="text-[14px] font-normal opacity-85 whitespace-nowrap">{stat.label}</span>
            </div>
            {/* Divider */}
            {i !== stats.length * 2 - 1 && (
              <div className="w-[1px] h-[24px] bg-white/30 shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

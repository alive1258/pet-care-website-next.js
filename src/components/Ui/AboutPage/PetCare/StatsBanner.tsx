import { STATS } from "@/src/utils/data/petCare";

const StatsBanner = () => {
  return (
    <section className="bg-brand-900 py-14">
      <div className="container grid grid-cols-2 gap-8 sm:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-accent-400">
              {stat.value}
            </div>
            <div className="mt-2 text-xs sm:text-sm uppercase tracking-wide text-brand-100/70">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBanner;

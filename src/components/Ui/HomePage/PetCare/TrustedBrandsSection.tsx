import { BRAND_PARTNERS } from "@/src/utils/data/petCare";

const TrustedBrandsSection = () => {
  const loop = [...BRAND_PARTNERS, ...BRAND_PARTNERS, ...BRAND_PARTNERS];

  return (
    <section className="bg-white pb-16 md:pb-20">
      <div className="container">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-brand-900/40">
          Trusted by Pet Parents &amp; Partners
        </p>
      </div>

      <div className="testimonial-fade overflow-hidden">
        <div className="flex w-max items-center gap-14 animate-marquee">
          {loop.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="shrink-0 text-lg font-bold tracking-tight text-brand-900/30"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrandsSection;

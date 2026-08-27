import { WHY_CHOOSE_US } from "@/src/utils/data/petCare";

const WhyChooseUsSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-600">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-900">
            Care Built Around Your Pet
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_US.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-brand-900/10 bg-cream p-6 text-center"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white">
                <Icon size={20} />
              </span>
              <h3 className="mt-4 text-base font-bold text-brand-900">{title}</h3>
              <p className="mt-2 text-sm text-brand-900/60 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

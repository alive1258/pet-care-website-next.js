import Link from "next/link";
import { PawPrint } from "lucide-react";
import { SERVICES } from "@/src/utils/data/petCare";

const CareServicesSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-600">
            <PawPrint size={13} />
            What We Offer
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-brand-900">
            Comprehensive Care For Your Pets
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                id={service.slug}
                className="group scroll-mt-28 rounded-2xl border border-brand-900/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-500 transition group-hover:bg-accent-500 group-hover:text-white">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 text-lg font-bold text-brand-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-brand-900/60 leading-relaxed">
                  {service.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CareServicesSection;

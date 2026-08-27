import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { VETS } from "@/src/utils/data/petCare";

const VeterinariansSection = () => {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-600">
              Our Experts
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-900">
              Meet Our Veterinarians
            </h2>
          </div>
          <Link
            href="/about#veterinarians"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900 transition"
          >
            View All Doctors
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VETS.map((vet) => (
            <div
              key={vet.slug}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={vet.image}
                  alt={vet.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-brand-900">{vet.name}</h3>
                <p className="text-sm text-accent-600">{vet.role}</p>
                <div className="mt-2 flex items-center gap-1 text-accent-500">
                  {Array.from({ length: vet.rating }).map((_, i) => (
                    <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-1 text-xs text-brand-900/50">{vet.years}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VeterinariansSection;

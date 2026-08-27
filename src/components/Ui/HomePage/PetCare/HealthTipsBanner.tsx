import Image from "next/image";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";

const HealthTipsBanner = () => {
  return (
    <section className="py-6 md:py-10">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-brand-700">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1601979031925-424e53b6caaa?q=80&w=1400&auto=format&fit=crop"
              alt="Happy puppy in the grass"
              fill
              sizes="100vw"
              className="object-cover opacity-30"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-r from-brand-800/95 via-brand-700/85 to-transparent" />

          <div className="relative flex flex-col gap-6 px-6 py-10 sm:px-10 sm:py-12 md:flex-row md:items-center md:justify-between">
            <div className="max-w-md">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Pet Health Tips
              </h2>
              <p className="mt-3 text-white/70 text-sm md:text-base leading-relaxed">
                Regular exercise and a balanced diet are key to a happy,
                healthy pet.
              </p>
            </div>

            <div className="flex items-center gap-5">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-800 transition hover:bg-white/90"
              >
                Learn More
                <ArrowRight size={15} />
              </Link>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-accent-300">
                <Heart size={18} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthTipsBanner;

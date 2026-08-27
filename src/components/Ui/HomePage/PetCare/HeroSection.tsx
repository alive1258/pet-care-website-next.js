import Image from "next/image";
import Link from "next/link";
import { PawPrint, Clock, HeartPulse, Users } from "lucide-react";
import { STATS } from "@/src/utils/data/petCare";

const STAT_ICONS = [Users, Clock, HeartPulse];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-cream pt-8 pb-16 md:pt-14 md:pb-24">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-accent-100/60 blur-2xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-brand-100/50 blur-2xl" />

      <div className="container relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-600">
            <PawPrint size={13} />
            Trusted Pet Care
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-brand-900 leading-[1.1]">
            Because Your Pet Deserves the{" "}
            <span className="text-accent-500">Best Care</span>
          </h1>

          <p className="mt-6 max-w-lg text-brand-900/60 text-base md:text-lg leading-relaxed">
            Compassionate care, expert vets, and complete wellness for your
            furry family members — every visit, every time.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              Book Appointment
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand-900/15 bg-white px-6 py-3 text-sm font-semibold text-brand-900 transition hover:border-brand-900/30"
            >
              Our Services
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-brand-900/10 pt-8">
            {STATS.slice(0, 3).map((stat, i) => {
              const Icon = STAT_ICONS[i];
              return (
                <div key={stat.label} className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    <Icon size={16} />
                  </span>
                  <div>
                    <p className="text-lg font-bold text-brand-900 leading-none">
                      {stat.value}
                    </p>
                    <p className="text-xs text-brand-900/50">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative mx-auto aspect-4/3 w-full max-w-lg">
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-accent-200/70 sm:h-32 sm:w-32" />
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=1200&auto=format&fit=crop"
              alt="Happy golden retriever and cat, best friends"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

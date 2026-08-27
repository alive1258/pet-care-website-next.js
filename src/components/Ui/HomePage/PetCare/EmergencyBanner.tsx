import Image from "next/image";
import { PhoneCall } from "lucide-react";
import { CONTACT_PHONE } from "@/src/components/Shared/Navbar/menuItems";

const EmergencyBanner = () => {
  return (
    <section className="py-6 md:py-10">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-brand-700">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=1400&auto=format&fit=crop"
              alt="Veterinarian examining a golden retriever"
              fill
              sizes="100vw"
              className="object-cover opacity-25"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-r from-brand-800/95 via-brand-700/90 to-brand-700/60" />

          <div className="relative flex flex-col gap-6 px-6 py-10 sm:px-10 sm:py-12 md:flex-row md:items-center md:justify-between">
            <div className="max-w-lg">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent-300">
                Affordable Care
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
                24/7 Emergency Pet Care
              </h2>
              <p className="mt-3 text-white/70 text-sm md:text-base leading-relaxed">
                We&apos;re here when you need us most. Advanced care for
                emergencies, day or night.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`tel:${CONTACT_PHONE.replace(/[^+\d]/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-800 transition hover:bg-white/90"
              >
                Call Emergency
              </a>
              <a
                href={`tel:${CONTACT_PHONE.replace(/[^+\d]/g, "")}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white"
              >
                <PhoneCall size={16} className="text-accent-300" />
                {CONTACT_PHONE}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyBanner;

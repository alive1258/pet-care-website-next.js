import Image from "next/image";
import { CalendarCheck, Bell, Activity } from "lucide-react";

const APP_FEATURES = [
  { icon: CalendarCheck, label: "Book appointments" },
  { icon: Bell, label: "Health reminders" },
  { icon: Activity, label: "Track your pet's health" },
];

const AppDownloadSection = () => {
  return (
    <section className="bg-white pb-16 md:pb-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-brand-100/60">
          <div className="grid items-center gap-10 px-6 py-12 sm:px-10 md:grid-cols-2 md:py-16">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-700">
                Coming Soon
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-brand-900">
                Download Our PetCare App
              </h2>

              <ul className="mt-5 space-y-2.5">
                {APP_FEATURES.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-2.5 text-sm text-brand-900/70">
                    <Icon size={16} className="text-brand-600" />
                    {label}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-lg bg-brand-900 px-4 py-2.5 text-sm font-semibold text-white">
                  App Store
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg bg-brand-900 px-4 py-2.5 text-sm font-semibold text-white">
                  Google Play
                </span>
              </div>
            </div>

            <div className="relative mx-auto h-64 w-full max-w-xs md:h-72">
              <div className="absolute left-1/2 top-1/2 h-56 w-32 -translate-x-[65%] -translate-y-1/2 overflow-hidden rounded-3xl border-4 border-white shadow-xl sm:h-64 sm:w-36">
                <Image
                  src="https://images.unsplash.com/photo-1517849845537-4d257902861a?q=80&w=400&auto=format&fit=crop"
                  alt="PetCare mobile app preview"
                  fill
                  sizes="150px"
                  className="object-cover"
                />
              </div>
              <div className="absolute left-1/2 top-1/2 h-56 w-32 -translate-x-[35%] -translate-y-[45%] overflow-hidden rounded-3xl border-4 border-white shadow-xl sm:h-64 sm:w-36">
                <Image
                  src="https://images.unsplash.com/photo-1601758064135-15b6f4f8dfea?q=80&w=400&auto=format&fit=crop"
                  alt="PetCare mobile app booking screen"
                  fill
                  sizes="150px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;

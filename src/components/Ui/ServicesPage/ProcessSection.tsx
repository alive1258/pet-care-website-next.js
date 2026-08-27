import { CalendarCheck, ClipboardList, Stethoscope, HeartHandshake } from "lucide-react";

const STEPS = [
  {
    icon: CalendarCheck,
    title: "Book Online",
    description: "Pick a service, date, and time that works for you and your pet.",
  },
  {
    icon: ClipboardList,
    title: "Share Details",
    description: "Tell us about your pet's history so our team arrives prepared.",
  },
  {
    icon: Stethoscope,
    title: "Meet Your Vet",
    description: "A licensed veterinarian examines your pet and builds a care plan.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Care",
    description: "We follow up with reminders and check-ins to keep your pet healthy.",
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-600">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-900">
            Getting Care Is Simple
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand-600 shadow-sm">
                  <Icon size={24} />
                </div>
                <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 flex h-6 w-6 items-center justify-center rounded-full bg-accent-500 text-[11px] font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-base font-bold text-brand-900">{step.title}</h3>
                <p className="mt-2 text-sm text-brand-900/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

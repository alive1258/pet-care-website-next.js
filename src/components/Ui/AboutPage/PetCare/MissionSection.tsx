import Image from "next/image";

const MissionSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-600">
            Our Story
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-900">
            Caring for Pets Like Family Since Day One
          </h2>
          <div className="mt-5 space-y-4 text-brand-900/70 leading-relaxed">
            <p>
              PetCare started with a simple belief: every pet deserves
              attentive, compassionate medical care — and every pet parent
              deserves a team they can trust without hesitation.
            </p>
            <p>
              Today our AAHA-accredited hospital brings together experienced
              veterinarians, modern diagnostics, and a genuinely caring staff
              to support your pet through every life stage, from their first
              vaccination to their senior years.
            </p>
          </div>
        </div>
        <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
          <Image
            src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=1200&auto=format&fit=crop"
            alt="Veterinary staff caring for a dog"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

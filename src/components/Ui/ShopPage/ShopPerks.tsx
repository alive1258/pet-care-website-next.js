import { Truck, ShieldCheck, RotateCcw, Headset } from "lucide-react";

const PERKS = [
  { icon: Truck, title: "Free Pickup", description: "Free in-store pickup on every order." },
  { icon: ShieldCheck, title: "Vet Approved", description: "Every product is vet-reviewed for safety." },
  { icon: RotateCcw, title: "Easy Returns", description: "30-day hassle-free return policy." },
  { icon: Headset, title: "Expert Support", description: "Our staff can help you pick the right product." },
];

const ShopPerks = () => {
  return (
    <section className="bg-cream py-14">
      <div className="container grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {PERKS.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex items-start gap-3.5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 shadow-sm">
              <Icon size={18} />
            </span>
            <div>
              <h3 className="text-sm font-bold text-brand-900">{title}</h3>
              <p className="mt-1 text-xs text-brand-900/60 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopPerks;

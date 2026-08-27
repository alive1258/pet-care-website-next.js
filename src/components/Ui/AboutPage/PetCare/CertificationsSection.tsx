import { Award, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";

const CERTIFICATIONS = [
  { icon: Award, label: "AAHA Accredited" },
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Stethoscope, label: "Fear Free Certified" },
  { icon: HeartPulse, label: "24/7 Emergency Ready" },
];

const CertificationsSection = () => {
  return (
    <section className="bg-cream py-14">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {CERTIFICATIONS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 text-brand-900/70">
              <Icon size={18} className="text-brand-600" />
              <span className="text-sm font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/src/components/Shared/PageHero/PageHero";
import ContactForm from "@/src/components/Ui/ContactPage/ContactForm";
import EmergencyBanner from "@/src/components/Ui/HomePage/PetCare/EmergencyBanner";
import FaqSection from "@/src/components/Ui/HomePage/PetCare/FaqSection";
import { CONTACT_PHONE, OPEN_HOURS } from "@/src/components/Shared/Navbar/menuItems";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with PetCare to book an appointment, ask about our services, or reach our 24/7 emergency line.",
};

const CONTACT_EMAIL = "hello@petcare.com";
const OFFICE_ADDRESS = "123 PetCare Blvd, Naperville, PA 12345";

const INFO_ITEMS = [
  { icon: Phone, label: "Phone", value: CONTACT_PHONE, href: `tel:${CONTACT_PHONE.replace(/[^+\d]/g, "")}` },
  { icon: Mail, label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { icon: MapPin, label: "Office", value: OFFICE_ADDRESS },
  { icon: Clock, label: "Hours", value: OPEN_HOURS },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We'd Love to Meet Your Pet"
        subtitle="Questions about a service, a booking, or an emergency? Reach out and our team will get back to you within one business hour."
        image="https://images.unsplash.com/photo-1587764379873-97837921fd44?q=80&w=1600&auto=format&fit=crop"
        alt="Receptionist greeting a dog at a veterinary clinic"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="container grid lg:grid-cols-[1fr_1.2fr] gap-12">
          <div className="space-y-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent-600">
                Get in Touch
              </span>
              <h2 className="mt-3 text-3xl font-bold text-brand-900">
                We&apos;re Here to Help
              </h2>
            </div>

            <ul className="space-y-5">
              {INFO_ITEMS.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-900/50">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="font-medium text-brand-900 hover:text-brand-600 transition"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium text-brand-900">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="overflow-hidden rounded-2xl border border-brand-900/10">
              <iframe
                title="PetCare clinic location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-75.20%2C39.93%2C-75.14%2C39.97&layer=mapnik&marker=39.95%2C-75.17"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <EmergencyBanner />
      <FaqSection />
    </>
  );
}

import type { Metadata } from "next";
import PageHero from "@/src/components/Shared/PageHero/PageHero";
import CtaBanner from "@/src/components/Shared/CtaBanner/CtaBanner";
import CareServicesSection from "@/src/components/Ui/HomePage/PetCare/CareServicesSection";
import EmergencyBanner from "@/src/components/Ui/HomePage/PetCare/EmergencyBanner";
import WellnessPlansSection from "@/src/components/Ui/HomePage/PetCare/WellnessPlansSection";
import WhyChooseUsSection from "@/src/components/Ui/HomePage/PetCare/WhyChooseUsSection";
import FaqSection from "@/src/components/Ui/HomePage/PetCare/FaqSection";
import ProcessSection from "@/src/components/Ui/ServicesPage/ProcessSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore PetCare's full range of veterinary services — wellness exams, vaccinations, dental care, surgery, emergency care, and lab diagnostics.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Complete Care for Every Stage of Your Pet's Life"
        subtitle="From routine wellness checks to advanced surgery and 24/7 emergencies, our veterinary team is here for your pet every step of the way."
        image="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1600&auto=format&fit=crop"
        alt="Veterinarian caring for a dog in a clinic"
      />

      <CareServicesSection />
      <ProcessSection />
      <WellnessPlansSection />
      <WhyChooseUsSection />
      <EmergencyBanner />
      <FaqSection />
      <CtaBanner
        title="Ready to Give Your Pet the Care They Deserve?"
        subtitle="Book an appointment today and meet our team of compassionate, experienced veterinarians."
      />
    </>
  );
}

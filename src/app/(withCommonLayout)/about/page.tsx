import type { Metadata } from "next";
import PageHero from "@/src/components/Shared/PageHero/PageHero";
import CtaBanner from "@/src/components/Shared/CtaBanner/CtaBanner";
import MissionSection from "@/src/components/Ui/AboutPage/PetCare/MissionSection";
import StatsBanner from "@/src/components/Ui/AboutPage/PetCare/StatsBanner";
import CertificationsSection from "@/src/components/Ui/AboutPage/PetCare/CertificationsSection";
import WhyChooseUsSection from "@/src/components/Ui/HomePage/PetCare/WhyChooseUsSection";
import VeterinariansSection from "@/src/components/Ui/HomePage/PetCare/VeterinariansSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about PetCare's mission, our accredited veterinary team, and why thousands of pet parents trust us with their pets' health.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Team That Treats Your Pet Like Family"
        subtitle="PetCare brings together experienced veterinarians, modern facilities, and genuine compassion to give your pet the care they deserve."
        image="https://images.unsplash.com/photo-1601979031925-424e53b6caaa?q=80&w=1600&auto=format&fit=crop"
        alt="Veterinarian smiling with a happy dog"
      />

      <MissionSection />
      <StatsBanner />
      <WhyChooseUsSection />

      <div id="veterinarians" className="scroll-mt-28">
        <VeterinariansSection />
      </div>

      <CertificationsSection />

      <CtaBanner
        title="Want to Talk to Our Team?"
        subtitle="Whether it's a routine checkup or an urgent concern, we're happy to answer your questions."
        buttonText="Get in Touch"
      />
    </>
  );
}

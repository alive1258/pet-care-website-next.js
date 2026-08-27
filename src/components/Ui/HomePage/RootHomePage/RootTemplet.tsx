import AppDownloadSection from "../PetCare/AppDownloadSection";
import BlogSection from "../PetCare/BlogSection";
import BookAppointmentSection from "../PetCare/BookAppointmentSection";
import CareServicesSection from "../PetCare/CareServicesSection";
import EmergencyBanner from "../PetCare/EmergencyBanner";
import FaqSection from "../PetCare/FaqSection";
import HealthTipsBanner from "../PetCare/HealthTipsBanner";
import HeroSection from "../PetCare/HeroSection";
import ShopEssentialsSection from "../PetCare/ShopEssentialsSection";
import TestimonialsMarquee from "../PetCare/TestimonialsMarquee";
import TrustedBrandsSection from "../PetCare/TrustedBrandsSection";
import VeterinariansSection from "../PetCare/VeterinariansSection";
import WellnessPlansSection from "../PetCare/WellnessPlansSection";

const RootHomePage = () => {
  return (
    <>
      <div id="home" className="scroll-mt-[100px]">
        <HeroSection />
      </div>

      <CareServicesSection />
      <EmergencyBanner />
      <VeterinariansSection />
      <BookAppointmentSection />
      <WellnessPlansSection />
      <ShopEssentialsSection />
      <TestimonialsMarquee />
      <HealthTipsBanner />
      <BlogSection />
      <FaqSection />
      <AppDownloadSection />
      <TrustedBrandsSection />
    </>
  );
};

export default RootHomePage;

import type { Metadata } from "next";
import PageHero from "@/src/components/Shared/PageHero/PageHero";
import CtaBanner from "@/src/components/Shared/CtaBanner/CtaBanner";
import ShopGrid from "@/src/components/Ui/ShopPage/ShopGrid";
import ShopPerks from "@/src/components/Ui/ShopPage/ShopPerks";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Shop premium pet food, grooming supplies, toys, and essentials — vet-approved products for dogs and cats, available for in-store pickup.",
};

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Pet Essentials"
        title="Everything Your Pet Needs, In One Place"
        subtitle="Vet-approved food, grooming supplies, toys, and comfort essentials for your dog or cat."
        image="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1600&auto=format&fit=crop"
        alt="Shelves of pet food and supplies"
      />

      <ShopPerks />
      <ShopGrid />
      <CtaBanner
        title="Not Sure What Your Pet Needs?"
        subtitle="Book a wellness exam and our vets will recommend the right food, supplements, and care products."
        buttonText="Book a Consultation"
      />
    </>
  );
}

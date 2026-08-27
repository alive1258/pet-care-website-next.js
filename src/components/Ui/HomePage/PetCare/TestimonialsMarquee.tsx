import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/src/utils/data/petCare";

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
}) => (
  <div className="w-[260px] shrink-0 rounded-2xl border border-brand-900/10 bg-white p-6 shadow-sm sm:w-[320px]">
    <Quote size={22} className="text-brand-200" />

    <p className="mt-4 line-clamp-4 text-sm text-brand-900/70 leading-relaxed">
      &ldquo;{testimonial.quote}&rdquo;
    </p>

    <div className="mt-4 flex gap-1 text-accent-500">
      {Array.from({ length: testimonial.rating }).map((_, i) => (
        <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
      ))}
    </div>

    <div className="mt-4 flex items-center gap-3 border-t border-brand-900/10 pt-4">
      <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-brand-100">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          fill
          sizes="36px"
          className="object-cover"
        />
      </span>
      <div className="text-left">
        <p className="text-sm font-bold text-brand-900">{testimonial.name}</p>
        <p className="text-xs text-brand-900/50">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

const MarqueeRow = ({
  testimonials,
  direction,
}: {
  testimonials: typeof TESTIMONIALS;
  direction: "left" | "right";
}) => (
  <div className="testimonial-fade overflow-hidden">
    <div
      className={`flex w-max gap-6 ${
        direction === "left" ? "animate-testimonial-left" : "animate-testimonial-right"
      }`}
    >
      {[...testimonials, ...testimonials].map((testimonial, i) => (
        <TestimonialCard key={`${testimonial.name}-${i}`} testimonial={testimonial} />
      ))}
    </div>
  </div>
);

const TestimonialsMarquee = () => {
  const mid = Math.ceil(TESTIMONIALS.length / 2);
  const row1 = TESTIMONIALS.slice(0, mid);
  const row2 = TESTIMONIALS.slice(mid);

  return (
    <section className="overflow-hidden bg-cream py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-600">
            Happy Pet Parents
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-900">
            What Pet Parents Say About Us
          </h2>
        </div>
      </div>

      <div className="space-y-6">
        <MarqueeRow testimonials={row1} direction="left" />
        {row2.length > 0 && <MarqueeRow testimonials={row2} direction="right" />}
      </div>
    </section>
  );
};

export default TestimonialsMarquee;

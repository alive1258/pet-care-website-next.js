"use client";

import { useState } from "react";
import { ChevronDown, PawPrint } from "lucide-react";
import { FAQS } from "@/src/utils/data/petCare";

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-28 bg-cream py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-600">
            <PawPrint size={13} />
            Got Questions?
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-brand-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-brand-900/10 rounded-2xl border border-brand-900/10 bg-white">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm sm:text-base font-semibold text-brand-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-brand-600 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-sm text-brand-900/60 leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

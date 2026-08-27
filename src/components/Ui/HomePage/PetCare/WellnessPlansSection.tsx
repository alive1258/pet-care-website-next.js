"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { PLANS } from "@/src/utils/data/petCare";

const WellnessPlansSection = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="wellness-plans" className="scroll-mt-28 bg-cream py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-600">
            Affordable Care
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-900">
            Wellness Plans
          </h2>

          <div className="mt-6 inline-flex items-center gap-1 rounded-full border border-brand-900/10 bg-white p-1">
            <button
              type="button"
              onClick={() => setYearly(false)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                !yearly ? "bg-brand-600 text-white" : "text-brand-900/60"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                yearly ? "bg-brand-600 text-white" : "text-brand-900/60"
              }`}
            >
              Yearly
              <span className="rounded-full bg-accent-500 px-1.5 py-0.5 text-[10px] text-white">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.slug}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.featured
                  ? "border-accent-400 bg-white shadow-xl md:-translate-y-3"
                  : "border-brand-900/10 bg-white"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-accent-500 px-3 py-1 text-[11px] font-semibold text-white">
                  <Sparkles size={11} />
                  Most Popular
                </span>
              )}

              <h3 className="text-lg font-bold text-brand-900">{plan.name}</h3>
              <p className="mt-4">
                <span className="text-4xl font-bold text-brand-900">
                  ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-sm text-brand-900/50">
                  /{yearly ? "year" : "month"}
                </span>
              </p>

              <ul className="mt-6 space-y-3 text-sm text-brand-900/70">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check size={16} className="mt-0.5 shrink-0 text-brand-600" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-8 inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition ${
                  plan.featured
                    ? "bg-accent-500 text-white hover:bg-accent-600"
                    : "bg-brand-600 text-white hover:bg-brand-700"
                }`}
              >
                Choose Plan
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellnessPlansSection;

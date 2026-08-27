"use client";

import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import { CalendarCheck, Clock3, ShieldCheck } from "lucide-react";
import { BOOKING_SERVICES } from "@/src/utils/data/petCare";

const PERKS = [
  { icon: CalendarCheck, label: "Easy Online Booking" },
  { icon: Clock3, label: "Flexible Scheduling" },
  { icon: ShieldCheck, label: "SMS Reminders" },
];

const BookAppointmentSection = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      toast.success("Appointment request sent! We'll confirm shortly.");
      e.currentTarget.reset();
      setSubmitting(false);
    }, 600);
  };

  return (
    <section id="book-appointment" className="scroll-mt-28 bg-white py-16 md:py-24">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-600">
              Schedule a Visit
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-900">
              Book an Appointment Online
            </h2>
            <p className="mt-4 text-brand-900/60 leading-relaxed max-w-md">
              Schedule a visit for your pet quickly and easily with our
              online booking system.
            </p>

            <ul className="mt-6 space-y-3">
              {PERKS.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5 text-sm text-brand-900/70">
                  <Icon size={16} className="text-brand-600" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto hidden aspect-3/4 w-full max-w-[220px] overflow-hidden rounded-2xl sm:block">
            <Image
              src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=600&auto=format&fit=crop"
              alt="Golden retriever ready for an appointment"
              fill
              sizes="220px"
              className="object-cover"
            />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-brand-900/10 bg-cream p-6 shadow-sm sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-900">
              Your Name
              <input
                required
                type="text"
                placeholder="Enter your name"
                className="rounded-lg border border-brand-900/15 bg-white px-4 py-2.5 text-sm text-brand-900 outline-none transition focus:border-brand-500"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-900">
              Phone Number
              <input
                required
                type="tel"
                placeholder="Enter phone number"
                className="rounded-lg border border-brand-900/15 bg-white px-4 py-2.5 text-sm text-brand-900 outline-none transition focus:border-brand-500"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-900">
              Pet Name
              <input
                required
                type="text"
                placeholder="Enter pet name"
                className="rounded-lg border border-brand-900/15 bg-white px-4 py-2.5 text-sm text-brand-900 outline-none transition focus:border-brand-500"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-900">
              Service
              <select
                required
                defaultValue=""
                className="rounded-lg border border-brand-900/15 bg-white px-4 py-2.5 text-sm text-brand-900 outline-none transition focus:border-brand-500"
              >
                <option value="" disabled>
                  Select service
                </option>
                {BOOKING_SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-900">
              Date
              <input
                required
                type="date"
                className="rounded-lg border border-brand-900/15 bg-white px-4 py-2.5 text-sm text-brand-900 outline-none transition focus:border-brand-500"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-900">
              Time
              <input
                required
                type="time"
                className="rounded-lg border border-brand-900/15 bg-white px-4 py-2.5 text-sm text-brand-900 outline-none transition focus:border-brand-500"
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-6 w-full rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? "Booking..." : "Book Appointment"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookAppointmentSection;

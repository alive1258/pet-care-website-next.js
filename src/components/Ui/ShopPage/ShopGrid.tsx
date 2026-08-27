"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/src/utils/data/petCare";

const ShopGrid = () => {
  const [category, setCategory] = useState("All");

  const filtered = useMemo(
    () =>
      category === "All"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === category),
    [category],
  );

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                category === cat
                  ? "bg-brand-600 text-white"
                  : "bg-cream text-brand-900/70 hover:bg-brand-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product) => (
            <div
              key={product.slug}
              id={product.slug}
              className="group scroll-mt-28 overflow-hidden rounded-2xl border border-brand-900/10 bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="relative aspect-square overflow-hidden bg-brand-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-accent-600">
                  {product.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-brand-900 line-clamp-1">
                  {product.name}
                </h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-base font-bold text-brand-900">
                    ${product.price.toFixed(2)}
                  </span>
                  <button
                    type="button"
                    aria-label={`Add ${product.name} to cart`}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-50 text-accent-500 transition hover:bg-accent-500 hover:text-white"
                  >
                    <ShoppingCart size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-brand-900/50">
            No products found in this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default ShopGrid;

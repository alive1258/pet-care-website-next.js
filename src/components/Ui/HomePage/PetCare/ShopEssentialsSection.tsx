import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { PRODUCTS } from "@/src/utils/data/petCare";

const ShopEssentialsSection = () => {
  const featured = PRODUCTS.slice(0, 4);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-600">
              Pet Products
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-900">
              Shop Pet Essentials
            </h2>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 rounded-full border border-brand-900/15 px-5 py-2 text-sm font-semibold text-brand-900 transition hover:border-brand-900/30"
          >
            View All Products
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {featured.map((product) => (
            <Link
              key={product.slug}
              href={`/shop#${product.slug}`}
              className="group overflow-hidden rounded-2xl border border-brand-900/10 bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="relative aspect-square overflow-hidden bg-brand-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-brand-900 line-clamp-1">
                  {product.name}
                </h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-base font-bold text-brand-900">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-50 text-accent-500 transition group-hover:bg-accent-500 group-hover:text-white">
                    <ShoppingCart size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopEssentialsSection;

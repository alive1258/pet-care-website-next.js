import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/src/utils/data/petCare";

const BlogSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-600">
              Pet Care Tips
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-900">
              From Our Blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-brand-900/15 px-5 py-2 text-sm font-semibold text-brand-900 transition hover:border-brand-900/30"
          >
            View All Articles
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-2xl border border-brand-900/10 bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="relative aspect-16/10 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-accent-600">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-base font-bold text-brand-900 leading-snug group-hover:text-brand-600 transition">
                  {post.title}
                </h3>
                <p className="mt-2 text-xs text-brand-900/50">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

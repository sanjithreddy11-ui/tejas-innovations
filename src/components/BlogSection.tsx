import Link from "next/link";
import { blogs } from "@/lib/blogData";

export default function BlogSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-12">
          Latest Insights
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {blogs.slice(0, 3).map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="border border-white/10 rounded-3xl p-6 hover:border-white/30 transition"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {blog.title}
              </h3>

              <p className="text-zinc-400">
                {blog.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/blog"
            className="text-lg font-medium"
          >
            View All Articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
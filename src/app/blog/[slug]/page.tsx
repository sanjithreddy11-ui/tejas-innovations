import { blogs } from "@/lib/blogData";
import { notFound } from "next/navigation";
import { Sora, Inter } from "next/font/google";
import ReadingProgress from "@/components/blog/ReadingProgress";
import ShareBar from "@/components/blog/ShareBar";
import PostSidebar from "@/components/blog/PostSidebar";
import CostHeroIllustration from "@/components/blog/CostHeroIllustration";

const sora = Sora({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-sora" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter" });

const costSnapshot = [
  { item: "Domain name", range: "₹500 – ₹1,500 / year" },
  { item: "Hosting", range: "₹150 – ₹4,000+ / month" },
  { item: "Template-based design", range: "₹10,000 – ₹40,000" },
  { item: "Custom design", range: "₹40,000 – ₹2,00,000+" },
  { item: "Business website (CMS)", range: "₹50,000 – ₹1,50,000" },
  { item: "E-commerce website", range: "₹80,000 – ₹3,00,000+" },
  { item: "SEO (monthly retainer)", range: "₹15,000 – ₹75,000 / month" },
];

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return notFound();
  }

  const initials = blog.author
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className={`${sora.variable} ${inter.variable} min-h-screen bg-white text-neutral-900`} style={{ fontFamily: "var(--font-inter)" }}>
      <ReadingProgress />

      <article className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        {/* Category badge */}
        <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-700">
          {blog.category}
        </span>

        {/* Title */}
        <h1
          className="mt-5 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          {blog.title}
        </h1>

        {/* Meta + author */}
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-xs font-semibold text-white">
              {initials}
            </div>
            <span className="text-sm font-medium text-neutral-900">{blog.author}</span>
          </div>
          <span className="text-neutral-300">•</span>
          <span className="text-sm text-neutral-500">{blog.date}</span>
          <span className="text-neutral-300">•</span>
          <span className="text-sm text-neutral-500">{blog.readTime}</span>
        </div>

        {/* Share row */}
        <div className="mt-6">
          <ShareBar title={blog.title} />
        </div>

        {/* Hero illustration */}
        <div className="mt-10">
          <CostHeroIllustration />
        </div>

        {/* Intro / description */}
        <p className="mt-10 max-w-3xl text-lg leading-8 text-neutral-600 sm:text-xl">
          {blog.description}
        </p>

        {/* Content grid: sidebar + article body */}
        <div className="mt-14 grid grid-cols-1 items-start gap-12 lg:grid-cols-[260px_1fr]">
          {/* Sidebar — sticky directly on the grid item, pinned to its own height */}
          <div className="order-2 self-start lg:sticky lg:top-24 lg:order-1 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto">
            <PostSidebar sections={blog.sections} />
          </div>

          {/* Main content */}
          <div className="order-1 max-w-3xl lg:order-2">
            {/* Quick cost reference table */}
            <div className="mb-16 overflow-hidden rounded-2xl border border-neutral-200">
              <div className="border-b border-neutral-200 bg-neutral-50 px-6 py-4">
                <h2 className="text-base font-bold text-neutral-900" style={{ fontFamily: "var(--font-sora)" }}>
                  Quick cost reference
                </h2>
                <p className="mt-1 text-sm text-neutral-500">
                  Typical 2026 price ranges for Indian businesses. Details below.
                </p>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {costSnapshot.map((row, i) => (
                    <tr key={row.item} className={i % 2 === 0 ? "bg-white" : "bg-neutral-50/60"}>
                      <td className="px-6 py-3 font-medium text-neutral-700">{row.item}</td>
                      <td className="px-6 py-3 text-right font-semibold text-neutral-900">{row.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-16">
              {blog.sections.map((section) => (
                <section id={`section-${section.id}`} key={section.id} className="scroll-mt-24">
                  <h2
                    className="mb-5 text-2xl font-bold leading-tight sm:text-3xl"
                    style={{ fontFamily: "var(--font-sora)" }}
                  >
                    {section.heading}
                  </h2>
                  {section.content.split("\n\n").map((para, i) => (
                    <p key={i} className="mb-5 text-base leading-7 text-neutral-700 sm:text-[17px] sm:leading-8">
                      {para}
                    </p>
                  ))}
                </section>
              ))}
            </div>

            {/* FAQs */}
            {blog.faqs && blog.faqs.length > 0 && (
              <section className="mt-20">
                <h2
                  className="mb-8 text-2xl font-bold sm:text-3xl"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  Frequently Asked Questions
                </h2>
                <div className="divide-y divide-neutral-200 rounded-2xl border border-neutral-200">
                  {blog.faqs.map((faq, index) => (
                    <details key={index} className="group p-6 open:bg-neutral-50/60">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-neutral-900">
                        {faq.question}
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-sm text-neutral-500 transition group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-[15px] leading-7 text-neutral-600">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* CTA */}
            <div className="mt-20 rounded-3xl border border-neutral-200 bg-neutral-900 p-10 sm:p-12">
              <h3
                className="text-2xl font-bold text-white sm:text-3xl"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                Need a website for your business?
              </h3>
              <p className="mt-3 max-w-xl text-neutral-300">
                We build fast, modern and SEO-optimized websites that help
                businesses generate more leads and grow online — with a clear,
                fixed quote before any work starts.
              </p>
              <a
                href="/#contact"
                className="mt-7 inline-flex items-center rounded-full bg-orange-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-orange-500"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
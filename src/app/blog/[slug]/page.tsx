import { blogs } from "@/lib/blogData";
import { notFound } from "next/navigation";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import ReadingProgress from "@/components/blog/ReadingProgress";
import ShareBar from "@/components/blog/ShareBar";
import PostSidebar from "@/components/blog/PostSidebar";
import CostHeroIllustration from "@/components/blog/CostHeroIllustration";
import StickyLayout from "@/components/blog/StickyLayout";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});
const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

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
    <div
      className={`${display.variable} ${body.variable} min-h-screen bg-black text-[#F4F7F3]`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      <ReadingProgress />

      <article className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        {/* Category badge — solid filled pill */}
        <span className="inline-flex items-center rounded-full bg-[#a2fa8e] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-[#0E1310]">
          {blog.category}
        </span>

        {/* Title with marker-style highlight on a key phrase */}
        <h1
          className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          How Much Does a Website{" "}
         
            Cost
         
          in India in 2026?
        </h1>

        {/* Meta + author */}
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#a2fa8e] text-xs font-bold text-[#0E1310]">
              {initials}
            </div>
            <span className="text-sm font-medium text-[#F4F7F3]">{blog.author}</span>
          </div>
          <span className="text-[#3A463D]">•</span>
          <span className="text-sm text-[#8B978E]">{blog.date}</span>
          <span className="text-[#3A463D]">•</span>
          <span className="text-sm text-[#8B978E]">{blog.readTime}</span>
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
        <p className="mt-10 max-w-3xl text-lg leading-8 text-[#8B978E] sm:text-xl">
          {blog.description}
        </p>

        {/* Content: sidebar pinned via JS, article body alongside */}
        <div className="mt-14">
          <StickyLayout sidebar={<PostSidebar sections={blog.sections} />}>
            {/* Quick cost reference table */}
            <div className="mb-16 overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-800">
              <div className="border-b border-zinc-700 bg-zinc-800 px-6 py-4">
                <h2
                  className="text-base font-bold text-[#F4F7F3]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Quick cost reference
                </h2>
                <p className="mt-1 text-sm text-[#8B978E]">
                  Typical 2026 price ranges for Indian businesses. Details below.
                </p>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {costSnapshot.map((row, i) => (
                    <tr
                      key={row.item}
                      className={i % 2 === 0 ? "bg-zinc-800" : "bg-zinc-900/60"}
                    >
                      <td className="px-6 py-3 font-medium text-[#C7D0C9]">{row.item}</td>
                      <td className="px-6 py-3 text-right font-bold text-white">
                        {row.range}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-16">
              {blog.sections.map((section) => (
                <section id={`section-${section.id}`} key={section.id} className="scroll-mt-24">
                  <h2
                    className="mb-5 text-2xl font-extrabold leading-tight sm:text-3xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {section.heading}
                  </h2>
                  {section.content.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      className="mb-5 text-base leading-7 text-[#C7D0C9] sm:text-[17px] sm:leading-8"
                    >
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
                  className="mb-8 text-2xl font-extrabold sm:text-3xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Frequently Asked Questions
                </h2>
                <div className="divide-y divide-[#2A332D] rounded-2xl border border-[#2A332D] bg-zinc-800">
                  {blog.faqs.map((faq, index) => (
                    <details key={index} className="group p-6 open:bg-zinc-800">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-[#F4F7F3]">
                        {faq.question}
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#3A463D] text-sm text-[#8B978E] transition group-open:rotate-45 group-open:border-[#a2fa8e] group-open:text-[#a2fa8e]">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-[15px] leading-7 text-[#8B978E]">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* CTA — zinc-800 block, green kept as the accent */}
            <div className="mt-20 rounded-3xl bg-zinc-800 p-10 sm:p-12">
              <h3
                className="text-2xl font-extrabold text-[#F4F7F3] sm:text-3xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Need a website for your business?
              </h3>
              <p className="mt-3 max-w-xl text-gray-400">
                We build fast, modern and SEO-optimized websites that help
                businesses generate more leads and grow online — with a clear,
                fixed quote before any work starts.
              </p>
              <a
                href="/#contact"
                className="mt-7 inline-flex items-center rounded-full bg-[#a2fa8e] px-7 py-3 text-sm font-semibold text-[#0E1310] transition hover:bg-[#bdfcac]"
              >
                Get Free Consultation
              </a>
            </div>
          </StickyLayout>
        </div>
      </article>
    </div>
  );
}
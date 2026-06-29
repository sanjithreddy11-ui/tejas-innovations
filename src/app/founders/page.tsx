"use client";
import FounderCard from "@/components/FounderCard";

const founders = [
  {
    name: "Yaramada Sanjith Reddy",
    roles: ["Founder", "Tech Enthusiast", "AI Innovator"],
    image:
      "https://www.image2url.com/r2/default/images/1781367349019-dd00ba69-8448-4872-b418-272891d3ae82.jpeg",
    bio: "An 18-year-old entrepreneur passionate about digital transformation, artificial intelligence, and building products that simplify business operations and deliver lasting value.",
    highlights: [
      " Founder of Tejas Innovations and aspiring entrepreneur",
      "Passionate about AI, web technologies, and business automation",
      "Building digital solutions that help businesses grow online",
      "Focused on building high-performance, accessible user interfaces",
      "Fast learner with a growth mindset and problem-solving approach",
    ],
    github: "https://github.com/sanjithreddy11-ui",
    linkedin:
      "https://www.linkedin.com/in/y-sanjith-reddy?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    portfolio:
      "https://sanjith-portfolio-vcym-sanjithreddy08-7244s-projects.vercel.app/",
    resume:
      "https://drive.google.com/file/d/1cQ3QijDkOKSbsNUQ2VH1m4RPl5fTDyXR/view?usp=drivesdk",
  },
];

export default function FoundersPage() {
  return (
    <section id="founders" className="relative py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {founders.map((founder, i) => (
          <FounderCard key={i} founder={founder} index={i} />
        ))}
      </div>
    </section>
  );
}
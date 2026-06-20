import Hero from "@/components/hero/Hero";
import About from "@/components/About";
import AboutCards from "@/components/AboutCards";
import HomeContent from "@/components/HomeContent";
import BlogSection from "@/components/BlogSection";
import dynamic from "next/dynamic";

const PricingSection = dynamic(
  () => import("@/components/PricingSection")
);

const FAQSection = dynamic(
  () => import("@/components/FAQSection")
);

const ContactSection = dynamic(
  () => import("@/components/ContactSection")
);
const Footer = dynamic(
  () => import("@/components/Footer")
);

export default function Home() {
  return (
    <>
      <Hero />
      <About/>
      <AboutCards/>
       <HomeContent />
       <BlogSection/>
       <PricingSection/>
      <FAQSection />
      <ContactSection/>
      <Footer />
    </>
  );
}
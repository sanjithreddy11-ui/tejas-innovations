import Hero from "@/components/hero/Hero";
import HomeContent from "@/components/HomeContent";
import FAQSection from "@/components/FAQSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeContent />
      <FAQSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </>
  );
}
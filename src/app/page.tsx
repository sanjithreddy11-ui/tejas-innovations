import Hero from "@/components/hero/Hero";
import HomeContent from "@/components/HomeContent";
import FAQSection from "@/components/FAQSection";
import  ContactSection  from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeContent />
      <FAQSection />
      <ContactSection/>
      <Footer />
    </>
  );
}
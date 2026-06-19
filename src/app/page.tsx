import Hero from "@/components/hero/Hero";
import About from "@/components/About";
import HomeContent from "@/components/HomeContent";
import FAQSection from "@/components/FAQSection";
import  ContactSection  from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About/>
      <HomeContent />
      <FAQSection />
      <ContactSection/>
      <Footer />
    </>
  );
}
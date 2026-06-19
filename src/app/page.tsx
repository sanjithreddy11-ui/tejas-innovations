import Hero from "@/components/hero/Hero";
import About from "@/components/About";
import AboutCards from "@/components/AboutCards";
import HomeContent from "@/components/HomeContent";
import PricingSection from "@/components/PricingSection"
import ProcessSection from "@/components/ProcessSection"
import FAQSection from "@/components/FAQSection";
import  ContactSection  from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About/>
      <AboutCards/>
       <HomeContent />
       <PricingSection/>
       <ProcessSection/>
      <FAQSection />
      <ContactSection/>
      <Footer />
    </>
  );
}
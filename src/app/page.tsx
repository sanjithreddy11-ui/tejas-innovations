import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/About"
import AboutCards from "@/components/AboutCards"
import HomeContent from "@/components/HomeContent";
import BlogSection from "@/components/BlogSection"
import FAQSection from "@/components/FAQSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <AboutCards/>
      <HomeContent />
      <BlogSection/>
      <FAQSection/>
      <ContactSection/>
      <Footer />
    </>
  );
}
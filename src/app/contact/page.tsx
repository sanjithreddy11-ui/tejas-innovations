import Navbar from "@/components/navbar/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Contact Us",
  description: "Learn about Tejas and our web development services.",
};
export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactSection />
      <Footer />
    </>
  );
}
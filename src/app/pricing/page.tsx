import Navbar from "@/components/navbar/Navbar";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Pricing ",
  description: "Learn about Tejas and our web development services.",
};
export default function PricingPage() {
  return (
    <>
      <Navbar />
      <PricingSection />
      <Footer />
    </>
  );
}
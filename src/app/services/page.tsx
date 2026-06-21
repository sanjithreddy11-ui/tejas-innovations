import Navbar from "@/components/navbar/Navbar";
import HomeContent from "@/components/HomeContent";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Services | Tejas",
  description: "Learn about Tejas and our web development services.",
};
export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <HomeContent />
      <Footer />
    </>
  );
}
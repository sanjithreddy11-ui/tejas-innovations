import Navbar from "@/components/navbar/Navbar";
import About from "@/components/About";
import AboutCards from "@/components/AboutCards";
import Footer from "@/components/Footer";
export const metadata = {
  title: "About Us",
  description: "Learn about Tejas and our web development services.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <About />
      <AboutCards />
      <Footer />
    </>
  );
}
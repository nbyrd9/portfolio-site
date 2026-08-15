import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Content from "@/components/Content";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Interests from "@/components/Interests";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Highlights />
      <Content />
      <Experience />
      <Interests />
      <Footer />
    </main>
  );
}

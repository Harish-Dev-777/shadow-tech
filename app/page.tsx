import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";
import Portfolio from "@/sections/Portfolio";
import Services from "@/sections/Services";
import Footer from "@/components/web/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}

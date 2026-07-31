import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import ServicesHub from "@/components/ServicesHub";
import { Experience } from "@/components/Experience";
import { Resources } from "@/components/Resources";
import { Metrics } from "@/components/Metrics";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <ServicesHub />
      <Experience />
      <Resources />
      <Metrics />
      <Contact />
      <Footer />
    </main>
  );
}

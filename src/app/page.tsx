import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import ServicesHub from "@/components/ServicesHub";
import { Team } from "@/components/Team";
import { Process } from "@/components/Process";
import { Impact } from "@/components/Impact";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <ServicesHub />
      <Team />
      <Process />
      <Impact />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}

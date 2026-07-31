import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import ServicesHub from "@/components/ServicesHub";
import { WhyUs } from "@/components/WhyUs";
import { Impact } from "@/components/Impact";
import { Clients } from "@/components/Clients";
import { Testimonials } from "@/components/Testimonials";
import { Portfolio } from "@/components/Portfolio";
import { Faq } from "@/components/Faq";
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
      <WhyUs />
      <Impact />
      <Clients />
      <Testimonials />
      <Portfolio />
      <Faq />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}

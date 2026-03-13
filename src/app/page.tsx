import Image from "next/image";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Method from "@/components/Method";
import WhoWeHelp from "@/components/WhoWeHelp";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Method />
        <WhoWeHelp />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

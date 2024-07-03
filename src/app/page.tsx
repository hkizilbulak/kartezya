import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Feature from "@/components/Features";
import FunFact from "@/components/FunFact";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <Brands />
      <Feature />
      <FunFact />
      <FAQ />
      <CTA />
      <Contact />
    </div>
  );
}

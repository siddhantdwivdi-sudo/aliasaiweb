import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import WhatYouGet from "@/components/WhatYouGet";
import WhyUs from "@/components/WhyUs";
import { homeFaqs } from "@/lib/home-content";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <Services />
      <WhatYouGet />
      <Reviews />
      <ContactSection />
      <FAQ items={homeFaqs} />
    </>
  );
}

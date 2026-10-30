import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import WhatYouGet from "@/components/WhatYouGet";
import WhyUs from "@/components/WhyUs";
import JsonLd from "@/components/JsonLd";
import { homeFaqs } from "@/lib/home-content";
import { faqJsonLd } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />
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

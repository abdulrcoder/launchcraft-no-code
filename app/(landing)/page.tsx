import React from "react";
import Header from "./_components/Header";
import HeroSection from "./_components/HeroSection";
import FeaturesSection from "./_components/FeaturesSection";
import HowItWorksSection from "./_components/HowItWorksSection";
import TemplateShowcase from "./_components/TemplateShowcaseSection";
import Testimonials from "./_components/TestimonialsSection";
import PricingSection from "./_components/PricingSection";
import FAQSection from "./_components/FAQSection";
import CTASection from "./_components/CalltoActionSection";
import ContactSection from "./_components/ContactSection";
import Footer from "./_components/Footer";

const LandingPage = () => {
  return (
    <div className="bg-gray-50">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TemplateShowcase />
      <Testimonials />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;

import CTASection from "@/components/services/CTASection";
// import FAQSection from "@/components/services/FAQSection";
import HeroSection from "@/components/services/HeroSection";
import IntroSection from "@/components/services/IntroSection";
import ProcessSection from "@/components/services/ProcessSection";
import ServicesGrid from "@/components/services/ServicesGrid";
import WhyChooseUs from "@/components/services/WhyChooseUs";


export default function Services() {
  return (
    <>
      <HeroSection/>
      <IntroSection/>
      <ServicesGrid/>
      <ProcessSection/>
      <WhyChooseUs/>
      {/* <FAQSection/> */}
      <CTASection/>
    </>
  );
}
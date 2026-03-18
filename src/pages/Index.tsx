import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ValueSection from "../components/ValueSection";
import PaymentSection from "../components/PaymentSection";
import CommunitySection from "../components/CommunitySection";
import DiferenciaisSection from "../components/DiferenciaisSection";
import ContentSection from "../components/ContentSection";
import HowItWorksSection from "../components/HowItWorksSection";
import BonusSection from "../components/BonusSection";
import PricingSection from "../components/PricingSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background bg-noise">
      <Navbar />
      <HeroSection />
      <ValueSection />
      <PaymentSection />
      <CommunitySection />
      <DiferenciaisSection />
      <ContentSection />
      <HowItWorksSection />
      <BonusSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;

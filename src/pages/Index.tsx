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
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK =
  "https://api.whatsapp.com/send/?phone=5554984150368&text=Ol%C3%A1%2C+tenho+algumas+d%C3%BAvidas+sobre+a+Prota+Community%2C+poderia+me+ajudar%3F&type=phone_number&app_absent=0";

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
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-xl glass-card bg-black/50 border border-white/10 p-8 sm:p-10">
            <h3 className="text-2xl sm:text-3xl font-black text-foreground text-center mb-3">
              Ficou com alguma dúvida?
            </h3>
            <p className="text-muted-foreground text-base text-center leading-relaxed mb-7">
              Fale diretamente com a nossa equipe pelo WhatsApp. Estamos prontos para te ajudar!
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#25D366] text-white font-bold text-base shadow-[0_0_30px_-10px_rgba(37,211,102,0.9)] hover:brightness-110 transition-all duration-300"
            >
              <span className="inline-flex items-center justify-center w-6 h-6">
                <MessageCircle className="w-6 h-6" strokeWidth={2} />
              </span>
              CHAMAR NO WHATSAPP
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;

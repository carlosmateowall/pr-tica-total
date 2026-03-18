import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import StatsSection from "@/components/StatsSection";
import ProfessorsSection from "@/components/ProfessorsSection";
import ModulesSection from "@/components/ModulesSection";
import TargetSection from "@/components/TargetSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <MarqueeSection />
    <StatsSection />
    <ProfessorsSection />
    <ModulesSection />
    <TargetSection />
    <PricingSection />
    <FAQSection />
    <FinalCTASection />
    <FooterSection />
  </div>
);

export default Index;

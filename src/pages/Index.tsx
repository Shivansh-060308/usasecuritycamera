import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import CameraTypesSection from "@/components/home/CameraTypesSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import InstallationSection from "@/components/home/InstallationSection";
import CTASection from "@/components/home/CTASection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CameraTypesSection />
        <FeaturesSection />
        <InstallationSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

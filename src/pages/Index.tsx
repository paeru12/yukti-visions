import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import SecuritySection from "@/components/SecuritySection";
import BlogSection from "@/components/BlogSection";
import PortfolioSection from "@/components/PortfolioSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUs />
        <SecuritySection />
        <PortfolioSection />
        <BlogSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

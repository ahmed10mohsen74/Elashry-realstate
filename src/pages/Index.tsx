import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import ReviewsSection from "@/components/reviews-section";
import Footer from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default Index;

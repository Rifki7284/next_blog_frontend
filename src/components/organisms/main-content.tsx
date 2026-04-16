import AboutSection from "../molecules/about-section";
import FeaturesSection from "../molecules/features-section";
import HeroSection from "../molecules/hero-section";

const MainContent = () => {
  return (
    <main className="flex-1">
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
    </main>
  );
};
export default MainContent;

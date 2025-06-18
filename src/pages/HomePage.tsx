import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import SkillsSection from '../components/SkillsSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default HomePage;

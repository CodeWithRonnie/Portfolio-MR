import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;

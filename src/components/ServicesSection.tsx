import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, buttonText, delay }) => {
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="border border-white/10 rounded-lg overflow-hidden h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 bg-[#151528] p-6"
    >
      <div className="p-6 flex-1 flex flex-col">
        <div className="text-[#B83280] mb-4 drop-shadow-md">
          {icon}
        </div>
        <h3 className="text-white text-xl font-medium mb-4">{title}</h3>
        <div className="w-10 h-0.5 bg-[#B83280] mb-6 shadow-sm"></div>
        <p className="text-white/70 mb-8 flex-grow">{description}</p>
        <button 
          onClick={handleButtonClick}
          className="mt-auto bg-[#B83280] text-white py-3 px-6 rounded w-full hover:bg-[#97266D] transition-colors shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          {buttonText}
        </button>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Code size={28} />,
      title: "Web Development",
      description: "Building responsive, performant websites and web applications using modern JavaScript frameworks and best practices.",
      buttonText: "START A PROJECT",
      delay: 0.1
    },
    {
      icon: <Smartphone size={28} />,
      title: "Responsive Design",
      description: "Ensuring your website looks and functions perfectly across all devices, from desktop computers to mobile phones.",
      buttonText: "MAKE IT RESPONSIVE",
      delay: 0.2,

    },
    {
      icon: <Palette size={28} />,
      title: "UI/UX Design",
      description: "Creating visually appealing and intuitive user interfaces that enhance user experience and engagement with your product.",
      buttonText: "GET A DESIGN",
      delay: 0.3,

    }
  ];

  return (
    <div className="min-h-screen bg-[#0c0c15] py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">Services I Offer</h2>
          <div className="w-20 h-1 bg-[#B83280] mx-auto shadow-md"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              buttonText={service.buttonText}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;

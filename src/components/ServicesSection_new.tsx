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
  media?: {
    type: 'image' | 'video';
    src: string;
    alt: string;
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, buttonText, delay, media }) => {
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
      className="border border-white/10 rounded-lg overflow-hidden h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 bg-[#151528]"
    >
      {media && (
        <div className="relative h-48 bg-black overflow-hidden">
          {media.type === 'image' ? (
            <img 
              src={media.src} 
              alt={media.alt} 
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          ) : (
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={media.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#151528] via-transparent to-transparent"></div>
        </div>
      )}
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
      delay: 0.1,
      media: {
        type: 'image' as const,
        src: 'https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg',
        alt: 'Cartoon web development illustration'
      }
    },
    {
      icon: <Smartphone size={28} />,
      title: "Responsive Design",
      description: "Ensuring your website looks and functions perfectly across all devices, from desktop computers to mobile phones.",
      buttonText: "MAKE IT RESPONSIVE",
      delay: 0.2,
      media: {
        type: 'video' as const,
        src: 'https://cdn.dribbble.com/users/14268/screenshots/9109669/media/2d4a9e0c9a1a9e7c8b8b9c8d7e6f5a4b/desktop-preview.mp4',
        alt: 'Responsive design demonstration'
      }
    },
    {
      icon: <Palette size={28} />,
      title: "UI/UX Design",
      description: "Creating visually appealing and intuitive user interfaces that enhance user experience and engagement with your product.",
      buttonText: "GET A DESIGN",
      delay: 0.3,
      media: {
        type: 'image' as const,
        src: 'https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149065783.jpg',
        alt: 'Cartoon UI/UX design illustration'
      }
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
              media={service.media}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;

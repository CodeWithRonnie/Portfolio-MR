import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      
      containerRef.current.style.backgroundPosition = `calc(50% + ${moveX}px) calc(50% + ${moveY}px)`;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen w-full bg-gradient-to-b from-[#0c0c15] to-[#1a1a2e] flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80')",
          backgroundBlendMode: 'overlay',
        }}
      />
      
      {/* Star particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              opacity: Math.random() * 0.7,
              animation: `twinkle ${2 + Math.random() * 5}s infinite ${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#B83280] mb-3 text-lg mt-20 drop-shadow-md"
          >
            TURNING IDEAS INTO INTERACTIVE EXPERIENCES
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.4,
                type: "spring",
                stiffness: 100
              }}
              className="inline-block"
            >
              Mamikie Maemu
            </motion.span>
            <motion.span 
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ 
                duration: 1, 
                delay: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="block h-1 bg-gradient-to-r from-[#B83280] to-[#D53F8C] mt-2 shadow-md"
            ></motion.span>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: 1.2,
                type: "spring",
                stiffness: 80
              }}
              className="mt-4"
            >
              <span className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F687B3] via-[#B83280] to-[#805AD5] animate-gradient">
                Front-end Web Developer
              </span>
            </motion.div>
          </motion.h1>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
            <Link 
              to="/projects" 
              className="px-8 py-3 bg-[#B83280] text-white font-medium rounded hover:bg-[#97266D] transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              PROJECTS
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3 border border-white/30 text-white font-medium rounded hover:bg-white/10 transition-colors duration-300"
            >
              CONTACT
            </Link>
          </div>
          
          <div className="mt-20 opacity-80">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#B83280] mx-auto animate-bounce drop-shadow-md">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default HeroSection;

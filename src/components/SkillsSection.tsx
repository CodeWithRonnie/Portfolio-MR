import { motion } from 'framer-motion';
import { Boxes, Brain, ChevronRight, Clock, Code, Cpu, FileCode2, Laptop, Lightbulb, MessageSquare, Monitor, Server, Users } from 'lucide-react';

interface SkillCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  delay: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(213, 63, 140, 0.15)" }}
      className="bg-[#151528] p-6 rounded-lg border border-white/10 h-full flex flex-col group shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <motion.div 
        className="mb-4 text-[#B83280] transition-all duration-300 group-hover:text-white drop-shadow-md"
        whileHover={{ rotate: 10, scale: 1.1 }}
        animate={{ rotate: [0, 5, 0, -5, 0], scale: [1, 1.05, 1, 1.05, 1] }}
        transition={{ 
          rotate: { repeat: Infinity, duration: 5, ease: "easeInOut" },
          scale: { repeat: Infinity, duration: 5, ease: "easeInOut" }
        }}
      >
        {icon}
      </motion.div>
      <h3 className="text-white text-xl font-medium mb-2 group-hover:text-[#B83280] transition-colors drop-shadow-sm">{title}</h3>
      <p className="text-white/70 text-sm group-hover:text-white/90 transition-colors">{description}</p>
    </motion.div>
  );
};

const SkillsSection = () => {
  const technicalSkills = [
    {
      icon: <FileCode2 size={24} />,
      title: 'HTML & CSS',
      description: 'Semantic HTML5, CSS3, Flexbox, Grid, and responsive design principles for creating pixel-perfect layouts.',
      delay: 0.1
    },
    {
      icon: <Code size={24} />,
      title: 'JavaScript',
      description: 'Strong understanding of ES6+, DOM manipulation, asynchronous programming, and modern JS practices.',
      delay: 0.2
    },
    {
      icon: <Boxes size={24} />,
      title: 'React',
      description: 'Building interactive UIs with React, Redux, hooks, context API, and other modern React ecosystem tools.',
      delay: 0.3
    },
    {
      icon: <Cpu size={24} />,
      title: 'Node.js',
      description: 'Server-side JavaScript with Express for building APIs and handling backend functionalities.',
      delay: 0.4
    }
  ];

  const softSkills = [
    {
      icon: <Users size={24} />,
      title: 'Collaboration',
      description: 'Working effectively with designers, back-end developers, and stakeholders to achieve project goals.',
      delay: 0.5
    },
    {
      icon: <Brain size={24} />,
      title: 'Problem Solving',
      description: 'Analytical approach to debugging and solving complex front-end challenges efficiently.',
      delay: 0.6
    },
    {
      icon: <Clock size={24} />,
      title: 'Time Management',
      description: 'Meeting deadlines and managing multiple projects with effective prioritization strategies.',
      delay: 0.7
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Communication',
      description: 'Clear and effective communication of technical concepts to non-technical team members.',
      delay: 0.8
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Adaptability',
      description: 'Quick to learn new technologies and adapt to evolving web development trends and standards.',
      delay: 0.9
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
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">My Skills</h2>
          <div className="w-20 h-1 bg-[#B83280] mx-auto shadow-md"></div>
          <p className="text-white/70 max-w-2xl mx-auto mt-6">
            A combination of technical expertise and professional qualities that enable me to deliver exceptional web experiences.
          </p>
        </motion.div>
        
        <div className="mb-16">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white text-2xl font-semibold mb-8 flex items-center"
          >
            <ChevronRight className="text-[#B83280] mr-2 drop-shadow-md" />
            Technical Skills
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkills.map((skill, index) => (
              <SkillCard 
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
                delay={skill.delay}
              />
            ))}
          </div>
        </div>
        
        <div>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white text-2xl font-semibold mb-8 flex items-center"
          >
            <ChevronRight className="text-[#B83280] mr-2 drop-shadow-md" />
            Soft Skills
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <SkillCard 
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
                delay={skill.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink: string;
  githubLink: string;
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  image, 
  tags, 
  liveLink, 
  githubLink, 
  delay 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -8,
        transition: { 
          type: 'spring',
          stiffness: 300,
          damping: 15
        } 
      }}
      transition={{ 
        duration: 0.4, 
        ease: 'easeOut',
        delay 
      }}
      className="h-full bg-[#151528] rounded-xl overflow-hidden border border-white/10 flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="relative overflow-hidden h-48">
        <motion.div 
          className="w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#151528] via-[#151528]/80 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex-1">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-[#B83280]/20 text-[#B83280] text-xs px-2 py-1 rounded-full shadow-sm 
                         transition-all duration-300 hover:bg-[#B83280] hover:text-white hover:shadow-md hover:-translate-y-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
          <p className="text-white/70 mb-4 text-sm">{description}</p>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <a 
            href={liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-[#B83280] transition-colors text-sm font-medium"
          >
            <ExternalLink size={16} className="mr-1" />
            Live Demo
          </a>
          
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-[#B83280] transition-colors text-sm font-medium"
          >
            <Github size={16} className="mr-1" />
            View Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "YouthConnect Platform",
      description: "Empowering South African youth with job opportunities, mentorship programs, and skills development resources to build better futures.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      liveLink: "https://codewithronnie.github.io/YouthConnect-LandingPage/",
      githubLink: "https://github.com/CodeWithRonnie/YouthConnect-LandingPage.git",
      delay: 0.1
    },
    {
      title: "Minesweeper Game",
      description: "A classic Minesweeper game implementation with customizable difficulty levels and game statistics.",
      image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
      tags: ["JavaScript", "HTML", "CSS", "Game Development"],
      liveLink: "https://codewithronnie.github.io/MineSweeper/",
      githubLink: "https://github.com/CodeWithRonnie/MineSweeper.git",
      delay: 0.2
    },
    {
      title: "SA ID Validator",
      description: "A utility that validates South African ID numbers, verifying checksums and extracting demographic information.",
      image: "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
      tags: ["JavaScript", "HTML", "CSS", "Form Validation"],
      liveLink: "#",
      githubLink: "https://github.com/CodeWithRonnie/ID-VALIDATION.git",
      delay: 0.2
    },
    {
      title: "Todo List App",
      description: "A productivity application for task management with categories, priorities, and deadline reminders.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
      tags: ["React", "JavaScript", "CSS", "LocalStorage"],
      liveLink: "https://my-to-do-list-neon-nine.vercel.app/",
      githubLink: "https://github.com/CodeWithRonnie/My-ToDo-List.git",
      delay: 0.3
    },
    {
      title: "Movie Database",
      description: "An interactive movie catalog with search, filtering, and user reviews powered by a public movie API.",
      image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
      tags: ["React", "JavaScript", "API Integration", "Responsive Design"],
      liveLink: "https://movie-online-roan.vercel.app/",
      githubLink: "https://github.com/Software-Development-Capaciti/Movie-database.git",
      delay: 0.4
    },
    {
      title: "Banking System",
      description: "A secure digital banking platform with transaction management, account services, and user authentication.",
      image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
      tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      liveLink: "https://banking-frontend-j7ik.onrender.com/",
      githubLink: "https://github.com/Software-Development-Capaciti/banking-frontend.git",
      delay: 0.6
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c0c15] to-[#1a1a2e] py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">My Projects</h2>
          <div className="w-20 h-1 bg-[#B83280] mx-auto shadow-md"></div>
          <p className="text-white/70 max-w-2xl mx-auto mt-6">
            Explore my recent work across various domains. Each project represents my commitment to quality code and exceptional user experiences.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
              delay={project.delay}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/projects" 
            className="inline-block bg-[#B83280] text-white py-3 px-8 rounded hover:bg-[#97266D] transition-colors shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;

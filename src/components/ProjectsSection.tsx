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
      transition={{ duration: 0.5, delay }}
      className="bg-[#151528] rounded-lg overflow-hidden border border-white/10 h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151528] to-transparent opacity-60"></div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex-1">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span key={index} className="bg-[#B83280]/20 text-[#B83280] text-xs px-2 py-1 rounded shadow-sm">
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
      title: "Banking System",
      description: "A secure digital banking platform with transaction management, account services, and advanced security features.",
      image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
      tags: ["React", "Node.js", "MongoDB", "Express", "JWT Authentication"],
      liveLink: "#",
      githubLink: "#",
      delay: 0.1
    },
    {
      title: "SA ID Validator",
      description: "A utility that validates South African ID numbers, verifying checksums and extracting demographic information.",
      image: "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
      tags: ["JavaScript", "Regex", "Form Validation", "Data Processing"],
      liveLink: "#",
      githubLink: "#",
      delay: 0.2
    },
    {
      title: "Movie Database",
      description: "An interactive movie catalog with search, filtering, and user reviews powered by a public movie API.",
      image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
      tags: ["React", "TMDb API", "CSS Grid", "LocalStorage"],
      liveLink: "#",
      githubLink: "#",
      delay: 0.3
    },
    {
      title: "Minesweeper",
      description: "A classic Minesweeper game implementation with customizable difficulty levels and game statistics.",
      image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
      tags: ["JavaScript", "HTML Canvas", "CSS", "Game Logic"],
      liveLink: "#",
      githubLink: "#",
      delay: 0.4
    },
    {
      title: "Todo List",
      description: "A productivity application for task management with categories, priorities, and deadline reminders.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
      tags: ["React", "Context API", "LocalStorage", "Drag & Drop"],
      liveLink: "#",
      githubLink: "#",
      delay: 0.5
    },
    {
      title: "CareConnect SA",
      description: "A healthcare platform connecting patients with healthcare providers in South Africa, featuring appointment scheduling and medical records.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
      tags: ["React", "Firebase", "Authentication", "Responsive Design"],
      liveLink: "#",
      githubLink: "#",
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

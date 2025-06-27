import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#0c0c15] py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-white/80 mb-6">
              I'm a passionate front-end developer with a strong foundation in creating responsive, user-friendly web applications. I specialize in translating design concepts into clean, efficient code that delivers exceptional user experiences. I've developed a keen eye for detail and a commitment to writing maintainable, well-documented code. I stay current with the latest web technologies and best practices to ensure my work is always at the cutting edge.
            </p>
            
            <a 
              href="/Mamikie Ronewa Maemu CV .pdf" 
              download="Mamikie_Ronewa_Maemu_CV.pdf"
              className="inline-block bg-[#B83280] text-white py-2 px-6 rounded hover:bg-[#97266D] transition-colors shadow-md hover:shadow-lg hover:scale-105 transform transition-transform duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOWNLOAD CV
            </a>
            
            <div className="mt-12 space-y-4">
              <div className="flex items-center text-white/80">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#B83280] drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Johannesburg, South Africa
              </div>
              <div className="flex items-center text-white/80">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#B83280] drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                maemu.ronewa98@gmail.com
              </div>
              <div className="flex items-center text-white/80">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#B83280] drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Available for Work
              </div>
              <div className="flex items-center text-white/80">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#B83280] drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Available for freelance
              </div>

            </div>
            
            <div className="mt-8 flex space-x-4">
              <a href="https://github.com/CodeWithRonnie" className="text-white/60 hover:text-[#9333EA] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/mamikie-ronewa-maemu-a43150329?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8YLTYzfKQ6iY3R9nGUuA0g%3D%3D" className="text-white/60 hover:text-[#9333EA] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="bg-[#151528] p-8 rounded-lg border border-white/10 shadow-lg">
              <h3 className="text-white text-xl font-medium mb-4">Featured Video</h3>
              
              <div className="relative w-full pb-[56.25%] mb-6 overflow-hidden rounded-lg bg-gray-800">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://drive.google.com/file/d/1ghfDF4fFjivZFP3crzUMSGftnmsII8dk/preview" 
                  title="My Introduction Video"
                  frameBorder="0" 
                  allow="autoplay"
                  allowFullScreen>
                </iframe>
              </div>
              <div className="text-center">
                <a 
                  href="https://drive.google.com/file/d/1ghfDF4fFjivZFP3crzUMSGftnmsII8dk/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-gray-300 hover:text-white transition-colors mt-2"
                >
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Download Video
                </a>
              </div>
              
              <div className="mt-6">
                <div className="text-white/70 text-sm text-center italic">
                  Watch my introduction video to learn more about me and my work
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

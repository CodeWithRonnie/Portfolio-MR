import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  
  const handleFormSubmit = () => {
    setIsFormSubmitted(true);
  };
  
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-[#0c0c15] to-[#1a1a2e] pt-28 pb-20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">Get in touch</h2>
            <div className="w-20 h-1 bg-[#B83280] mx-auto shadow-md"></div>
            <p className="text-white/70 max-w-2xl mx-auto mt-6">
              Have a project in mind or want to collaborate? Feel free to reach out.
            </p>
          </motion.div>
          
          {!isFormSubmitted ? (
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-10">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="md:w-2/5"
                >
                  <div className="bg-[#151528] p-8 rounded-lg border border-white/10 h-full shadow-lg">
                    <h3 className="text-white text-xl font-medium mb-6">Contact Information</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="bg-[#B83280]/20 p-3 rounded-lg mr-4 shadow-md">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#B83280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-medium">Email</p>
                          <p className="text-white/70 mt-1">maemu.ronewa98@gmail.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-[#B83280]/20 p-3 rounded-lg mr-4 shadow-md">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#B83280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-medium">Phone</p>
                          <p className="text-white/70 mt-1">068 112 9554</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-[#B83280]/20 p-3 rounded-lg mr-4 shadow-md">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#B83280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-medium">Location</p>
                          <p className="text-white/70 mt-1">Johannesburg, South Africa</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-10">
                      <h4 className="text-white text-lg font-medium mb-4">Let's connect</h4>
                      <div className="flex space-x-4">
                        <a href="https://www.linkedin.com/in/mamikie-ronewa-maemu-a43150329" target="_blank" rel="noopener noreferrer" className="bg-[#1E1E3F] p-3 rounded-lg text-white/60 hover:text-[#B83280] transition-colors shadow-md hover:shadow-lg transition-shadow duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                        <a href="https://github.com/CodeWithRonnie" target="_blank" rel="noopener noreferrer" className="bg-[#1E1E3F] p-3 rounded-lg text-white/60 hover:text-[#B83280] transition-colors shadow-md hover:shadow-lg transition-shadow duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="md:w-3/5"
                >
                  <ContactForm onSubmitSuccess={handleFormSubmit} />
                </motion.div>
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-[#151528] p-12 rounded-lg border border-white/10 shadow-xl"
              >
                <div className="text-6xl mb-6">✨</div>
                <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                <p className="text-white/80 mb-8">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <button
                  onClick={() => setIsFormSubmitted(false)}
                  className="bg-[#B83280] text-white py-3 px-8 rounded-lg hover:bg-[#97266D] transition-colors font-medium"
                >
                  Send Another Message
                </button>
              </motion.div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;

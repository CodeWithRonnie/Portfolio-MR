import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';

interface ContactFormProps {
  onSubmitSuccess: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmitSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    
    // Show loading state
    setIsSubmitting(true);
    
    // Let the form submit naturally (Netlify will handle it)
    form.submit();
    
    // Show success state (Netlify will redirect to thank you page)
    setShowConfetti(true);
    onSubmitSuccess();
    
    // Reset the form after a short delay
    setTimeout(() => {
      setShowConfetti(false);
      setIsSubmitting(false);
    }, 5000);
  };

  if (showConfetti) {
    return (
      <div className="fixed inset-0 z-50 pointer-events-none">
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
        />
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center md:text-left mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-[#B83280] mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#151528] rounded-lg shadow-xl p-8 border border-white/10"
        >
          {/* Hidden form for Netlify */}
          <form 
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-6"
            data-netlify-recaptcha="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <div hidden>
              <input name="bot-field" />
            </div>
            
            <div>
              <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-[#0c0c15] border border-white/10 rounded px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#B83280] focus:border-transparent"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-[#0c0c15] border border-white/10 rounded px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#B83280] focus:border-transparent"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full bg-[#0c0c15] border border-white/10 rounded px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#B83280] focus:border-transparent"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#B83280] text-white py-3 px-6 rounded hover:bg-[#97266D] transition-colors font-medium ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            

          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#080812] py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="text-white text-2xl font-bold mb-2">Mamikie Maemu</div>
            <p className="text-white/50 text-sm">Designed and developed with passion.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="text-white/80 text-sm md:text-right mb-4 max-w-md italic">
              "Turning complex design challenges into elegant, user-friendly solutions is what drives me. I blend creativity with technical precision to craft memorable digital experiences."
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-white/10">
          <div className="text-white/60 text-sm text-center mb-4">
            Frontend developer specializing in responsive design, interactive UI, and seamless user experiences. Always exploring new technologies to push the boundaries of what's possible on the web.
          </div>
          <p className="text-white/50 text-sm text-center">© {new Date().getFullYear()} Mamikie Maemu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

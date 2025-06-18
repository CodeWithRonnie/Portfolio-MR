import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-3 shadow-md' : 'bg-black/40 backdrop-blur-sm py-5'}`}>
      <div className="container mx-auto px-6 flex justify-end">
        
        <div className="hidden md:flex space-x-8">
          <NavLink to="/" className={({isActive}) => 
            `text-sm uppercase tracking-wide ${isActive ? 'text-[#B83280] font-medium drop-shadow-md' : 'text-white hover:text-[#ED64A6]'}`
          }>
            Home
          </NavLink>
          <NavLink to="/projects" className={({isActive}) => 
            `text-sm uppercase tracking-wide ${isActive ? 'text-[#B83280] font-medium drop-shadow-md' : 'text-white hover:text-[#ED64A6]'}`
          }>
            Projects
          </NavLink>
          <NavLink to="/about" className={({isActive}) => 
            `text-sm uppercase tracking-wide ${isActive ? 'text-[#B83280] font-medium drop-shadow-md' : 'text-white hover:text-[#ED64A6]'}`
          }>
            About
          </NavLink>
          <NavLink to="/contact" className={({isActive}) => 
            `text-sm uppercase tracking-wide ${isActive ? 'text-[#B83280] font-medium drop-shadow-md' : 'text-white hover:text-[#ED64A6]'}`
          }>
            Contact
          </NavLink>
        </div>
        
        <div className="md:hidden flex items-center">
          <button 
            className="text-white hover:text-[#B83280] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className="block w-6 h-0.5 bg-current mb-1.5 transition-transform duration-300 ease-in-out"></span>
            <span className="block w-6 h-0.5 bg-current mb-1.5 transition-opacity duration-300 ease-in-out"></span>
            <span className="block w-6 h-0.5 bg-current transition-transform duration-300 ease-in-out"></span>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md py-4 shadow-lg">
          <div className="container mx-auto px-6 flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className={({isActive}) => `text-sm uppercase tracking-wide py-2 ${isActive ? 'text-[#B83280] font-medium' : 'text-white'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({isActive}) => `text-sm uppercase tracking-wide py-2 ${isActive ? 'text-[#B83280] font-medium' : 'text-white'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink 
              to="/about" 
              className={({isActive}) => `text-sm uppercase tracking-wide py-2 ${isActive ? 'text-[#B83280] font-medium' : 'text-white'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({isActive}) => `text-sm uppercase tracking-wide py-2 ${isActive ? 'text-[#B83280] font-medium' : 'text-white'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, ChevronDown, ShoppingBag } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onBook: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBook }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { openCart, cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    
    if (href.startsWith('/#')) {
      e.preventDefault();
      const elementId = href.replace('/#', '');
      
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white text-sm py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="tel:0118250184" className="flex items-center hover:text-swiss-red transition-colors">
              <Phone size={16} className="mr-2 text-swiss-red" />
              <span className="font-bold">011 825 0184</span>
            </a>
            <span className="hidden lg:inline text-gray-400">|</span>
            <a href="https://wa.me/27602116094" className="flex items-center hover:text-swiss-red transition-colors">
              <span className="font-bold">WhatsApp: 060 211 6094</span>
            </a>
          </div>
          <div className="flex items-center">
            <a href="#location" className="flex items-center hover:text-swiss-red transition-colors font-bold">
              <MapPin size={16} className="mr-2 text-swiss-red" />
              Location
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="block">
                <img
                  src="/public/images/cartenatex.jpg"
                  alt="Cartenatex Logo"
                  style={{ height: '48px', width: 'auto' }}
                  className="shadow-sm"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => {
                const isHashLink = item.href.startsWith('/#');
                const isActive = !isHashLink && (
                  location.pathname === item.href || 
                  (item.href !== '/' && location.pathname.startsWith(item.href))
                );
                
                return (
                  <div key={item.label} className="relative group">
                    <Link 
                      to={item.href}
                      className={`text-gray-800 font-bold hover:text-swiss-red transition-colors py-2 flex items-center ${isActive ? 'text-swiss-red' : ''}`}
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      {item.label}
                      {item.label === 'Brands' || item.label === 'Services' ? <ChevronDown size={14} className="ml-1" /> : null}
                    </Link>
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-swiss-red transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : 'w-0'}`}></span>
                  </div>
                );
              })}
            </nav>

            <div className="flex items-center space-x-4">
              <button 
                onClick={openCart} 
                className="relative p-2 text-gray-800 hover:text-swiss-red transition-colors"
                aria-label="Open Cart"
              >
                <ShoppingBag size={24} />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-swiss-red text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              <div className="hidden md:block">
                <button 
                  onClick={onBook}
                  className="skew-btn bg-swiss-red text-white px-6 py-3 hover:bg-red-700 transition-colors shadow-md"
                >
                  <span className="skew-btn-content block font-bold text-sm uppercase tracking-wide">
                    Book Appointment
                  </span>
                </button>
              </div>

              <button 
                className="lg:hidden text-gray-800 p-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ top: '60px' }}
        >
          <div className="flex flex-col p-6 space-y-4 h-full overflow-y-auto">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.label}
                to={item.href}
                className="text-xl font-bold text-gray-800 border-b border-gray-100 py-4 hover:text-swiss-red"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </Link>
            ))}
            <button 
              onClick={() => { onBook(); setIsOpen(false); }}
              className="mt-4 bg-swiss-red text-white py-4 rounded font-bold uppercase tracking-widest"
            >
              Book Appointment
            </button>
            <a href="tel:0118250184" className="flex items-center justify-center bg-gray-900 text-white py-4 rounded font-bold">
              <Phone className="mr-2" /> Call Now
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

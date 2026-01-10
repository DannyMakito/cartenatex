
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: 'url("https://swissauto.ae/wp-content/themes/swissauto/img/footer-bckgrnd.jpg")' }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Accreditation Section */}
        <div className="flex flex-col items-center justify-center mb-16 border-b border-gray-800 pb-12">
          <div className="bg-dark p-4 rounded-lg shadow-lg max-w-4xl w-full flex items-center justify-center gap-8">
             <div className="text-white font-bold text-xl md:text-2xl text-center md:text-left">
                We are a certified Motor Retail Industry Partner
             </div>
             <div className="flex items-center gap-4">
               <img 
                 src="https://www.rmi.org.za/wp-content/uploads/sites/12/2022/09/cropped-logo-RMI-clear.png" 
                 alt="RMI Certified" 
                 className="h-12 w-auto"
               />
               <div className="h-12 w-px bg-gray-300 mx-2"></div>
               <img 
                 src="https://vtlogo.com/wp-content/uploads/2020/04/motor-industry-workshop-association-miwa-vector-logo.png" 
                 alt="MIWA Accredited" 
                 className="h-12 w-auto" 
               />
             </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <a href="#" className="group bg-gray-800 hover:bg-swiss-red transition-all duration-300 py-6 px-8 flex items-center justify-center rounded">
            <span className="text-xl font-extrabold uppercase">Book An Appointment</span>
          </a>
      
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm text-gray-300 mb-12">
          <div>
            <div className="bg-swiss-red px-4 py-2 inline-block mb-6">
              <span className="text-white font-black text-2xl tracking-widest uppercase">CARTENATEX</span>
            </div>
            <p className="mb-6 leading-relaxed">
              Cartenatex Auto Services with 10 years of combined dealership experience has many branches across the UAE providing luxury auto repair & maintenance services.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="flex items-center hover:text-swiss-red"><MapPin size={14} className="mr-1" /> South africa</a>
              <a href="#" className="flex items-center hover:text-swiss-red"><MapPin size={14} className="mr-1" /> Guateng</a>
              <a href="#" className="flex items-center hover:text-swiss-red"><MapPin size={14} className="mr-1" /> Sharjah</a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold uppercase mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-swiss-red transition-colors">AC Repair</a></li>
              <li><a href="#" className="hover:text-swiss-red transition-colors">Brake Repair</a></li>
              <li><a href="#" className="hover:text-swiss-red transition-colors">Gearbox Repair</a></li>
              <li><a href="#" className="hover:text-swiss-red transition-colors">Suspension Repair</a></li>
              <li><a href="#" className="hover:text-swiss-red transition-colors">Major Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold uppercase mb-6">Useful Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-swiss-red transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-swiss-red transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-swiss-red transition-colors">Offers</a></li>
              <li><a href="#" className="hover:text-swiss-red transition-colors">Terms of Use</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold uppercase mb-6">Connect with us</h4>
            <div className="flex space-x-4 mb-8">
              {[Facebook, Twitter, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="bg-gray-800 p-2 rounded-full hover:bg-swiss-red hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
            
            <h4 className="text-white text-lg font-bold uppercase mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:600579477" className="flex items-center hover:text-swiss-red">
                  <Phone size={16} className="mr-2" /> 6005 SWISS (79477)
                </a>
              </li>
              <li>
                <a href="mailto:hello@swissauto.ae" className="flex items-center hover:text-swiss-red">
                  <Mail size={16} className="mr-2" /> hello@swissauto.ae
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>Copyright © Cartenatex Auto Services All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

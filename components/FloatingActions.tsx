
import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface FloatingActionsProps {
  onBook: () => void;
}

const FloatingActions: React.FC<FloatingActionsProps> = ({ onBook }) => {
  return (
    <>
      {/* Book Button */}
      <motion.div 
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ delay: 1 }}
        className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40 hidden md:block"
      >
        <button 
          onClick={onBook}
          className="bg-swiss-red text-white p-3 rounded-l-lg shadow-lg hover:bg-red-700 transition-colors flex items-center group"
        >
          <Calendar size={24} />
          <span className="w-0 overflow-hidden group-hover:w-40 transition-all duration-300 whitespace-nowrap font-bold text-sm">
            <span className="pl-3">Book Appointment</span>
          </span>
        </button>
      </motion.div>

      {/* WhatsApp */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="fixed bottom-24 left-6 z-40"
      >
        <a 
          href="https://wa.me/27603005169" 
          className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <MessageCircle size={28} />
        </a>
      </motion.div>

      {/* Phone */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="fixed bottom-6 left-6 z-40"
      >
        <a 
          href="tel:0603005169" 
          className="flex items-center justify-center w-14 h-14 bg-swiss-red text-white rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <Phone size={24} />
        </a>
      </motion.div>
    </>
  );
};

export default FloatingActions;

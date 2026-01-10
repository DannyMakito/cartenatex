
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-black">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <video 
          className="w-full h-full object-cover opacity-60"
          autoPlay 
          muted 
          loop 
          playsInline
          poster="https://swissauto.ae/wp-content/themes/swissauto/img/poster.webp"
        >
          <source src="https://swissauto.ae/wp-content/uploads/2025/04/1400x787-Banner-Video-2-1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-8"
          >
            YOUR BEST ALTERNATE<br />
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
            >
              TO DEALERSHIP
            </motion.span><br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              QUALITY SERVICES
            </motion.span>
          </motion.h1>
          
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="skew-btn bg-swiss-red text-white px-10 py-5 text-xl font-bold uppercase tracking-wider shadow-lg hover:shadow-red-600/50 transition-all"
          >
            <span className="skew-btn-content block">
              Book My Appointment
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

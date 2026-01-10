import React from 'react';
import { motion } from 'framer-motion';

const AboutBanner: React.FC = () => {
  return (
    <section 
      className="relative py-24 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'url("https://swissauto.ae/wp-content/themes/swissauto/img/aboutback.jpg")' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl bg-black/40 backdrop-blur-md p-8 md:p-12 text-white rounded-lg border-l-4 border-swiss-red">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
          >
            Cartenatex– The Best Car Service repair Center in south africa
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 text-gray-100 leading-relaxed text-lg"
          >
           
            <p>
              CartContext has over 10years of quality car repair experience. From us, you can expect to receive dealership-quality services at prices that are simply unbeatable!
            </p>
            <p className="font-semibold text-white pt-2">
              Receive Specialized Car Repair Services in the south africa.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <button className="bg-swiss-red hover:bg-red-700 text-white px-8 py-3 font-bold uppercase transition-colors duration-300 rounded shadow-lg">
              Read More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
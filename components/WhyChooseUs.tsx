import React from 'react';
import { motion } from 'framer-motion';
import { BENEFITS } from '../constants';

const WhyChooseUs: React.FC = () => {
  return (
    <section 
      className="py-20 relative bg-fixed bg-cover bg-center"
      style={{ backgroundImage: 'url("https://swissauto.ae/wp-content/uploads/2025/12/swiss-bg.webp")' }}
    >
      <div className="absolute inset-0 bg-black/80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-white text-center mb-16 uppercase"
        >
          Why Choose Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-swiss-red/80 backdrop-blur-sm border border-white/20 p-8 rounded-lg hover:bg-swiss-red transition-colors"
            >
              <h5 className="text-xl font-bold text-white mb-4 uppercase">{benefit.title}</h5>
              <p className="text-white/90 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
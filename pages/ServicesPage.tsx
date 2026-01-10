import React from 'react';
import { motion } from 'framer-motion';
import { ALL_SERVICES } from '../constants';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section 
        className="relative w-full h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: 'url("https://cdn-hjhil.nitrocdn.com/YXfPfAbHnFAexZzTIaeSMOFimKIwdmpe/assets/images/optimized/rev-98b6462/swissauto.ae/wp-content/uploads/2021/04/Services-Header-1.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Content can go here if needed, centered */}
      </section>

      {/* Services Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h1 className="text-4xl font-medium text-gray-900 mb-8 font-sans">Services</h1>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ALL_SERVICES.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="flex flex-col bg-white h-full"
              >
                {/* Image */}
                <div className="h-[160px] overflow-hidden bg-gray-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Details */}
                <div className="p-4 border border-t-0 border-gray-100 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.1)] flex flex-col flex-grow h-[260px]">
                  <h4 className="text-[17px] text-swiss-red uppercase font-medium pt-2 mb-2 h-[50px] leading-tight flex items-center">
                    {service.title}
                  </h4>
                  <div className="text-sm text-black text-justify h-[80px] overflow-hidden leading-relaxed font-normal">
                    {service.description}
                  </div>
                  <div className="mt-auto pt-5">
                    <a 
                      href={service.link}
                      className="text-sm font-bold text-black uppercase underline decoration-1 underline-offset-4 hover:text-swiss-red transition-colors block"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
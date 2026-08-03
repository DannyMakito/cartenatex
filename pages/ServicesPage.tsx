import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CalendarCheck, ClipboardCheck, Award, BadgeCheck, FileText, ArrowLeftRight } from 'lucide-react';
import { ALL_SERVICES } from '../constants';

const iconMap: Record<string, React.ComponentType<any>> = {
  CalendarCheck,
  ClipboardCheck,
  Award,
  BadgeCheck,
  FileText,
  ArrowLeftRight,
};

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
               {ALL_SERVICES.filter(s => !s.category || s.category !== "natis").map((service, index) => (
               <motion.div
                 key={service.id}
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
                 <div className="p-4 border border-t-0 border-gray-100 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.1)]">
                   <h4 className="text-[17px] text-swiss-red uppercase font-medium pt-2 mb-2 leading-tight">
                     {service.title}
                   </h4>
                   <p className="text-sm text-black text-justify leading-relaxed font-normal mb-4">
                     {service.shortDescription}
                   </p>
                   <Link 
                     to={service.link}
                     className="text-sm font-bold text-black uppercase underline decoration-1 underline-offset-4 hover:text-swiss-red transition-colors block"
                   >
                     Read More
                   </Link>
                 </div>
               </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* NATIS Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-3xl font-black text-gray-900 uppercase mb-2 font-sans">Natis Services</h2>
            <div className="w-16 h-1 bg-swiss-red"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               {ALL_SERVICES.filter(s => s.category === "natis").map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="flex flex-col bg-white h-full group"
                >
                  {/* Icon - replaces background image */}
                  <div className="relative h-[180px] bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-5">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
                        <circle cx="50" cy="50" r="40" className="text-swiss-red" strokeWidth="0.5" stroke="currentColor"/>
                      </svg>
                    </div>
                    {service.icon && iconMap[service.icon] && (() => {
                      const IconComp = iconMap[service.icon];
                      return (
                        <motion.div
                          whileHover={{ scale: 1.15 }}
                          transition={{ duration: 0.3 }}
                          className="relative z-10 bg-white/80 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] group-hover:shadow-[0_8px_30px_-2px_rgba(224,20,36,0.25)]"
                        >
                          <IconComp size={56} className="text-swiss-red" strokeWidth={1.5} />
                        </motion.div>
                      );
                    })()}
                  </div>

                 {/* Details */}
                 <div className="p-4 border border-t-0 border-gray-100 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.1)]">
                   <h4 className="text-[17px] text-swiss-red uppercase font-medium pt-2 mb-2 leading-tight">
                     {service.title}
                   </h4>
                   <p className="text-sm text-black text-justify leading-relaxed font-normal mb-4">
                     {service.shortDescription}
                   </p>
                   <Link 
                     to={service.link}
                     className="text-sm font-bold text-black uppercase underline decoration-1 underline-offset-4 hover:text-swiss-red transition-colors block"
                   >
                     Read More
                   </Link>
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
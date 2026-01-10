import React from 'react';
import { motion } from 'framer-motion';
import { FeatureBoxProps } from '../types';

const FeatureBox: React.FC<FeatureBoxProps> = ({ title, subtitle, buttonText, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="bg-swiss-red p-8 md:p-10 text-white h-full flex flex-col justify-between border-r border-red-500 last:border-r-0 hover:bg-red-700 transition-colors cursor-pointer group"
  >
    <div>
      <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">{title}</h3>
      <p className="text-sm md:text-base font-medium opacity-90 mb-6">{subtitle}</p>
    </div>
    <div className="mt-auto">
      <span className="inline-block border-2 border-white px-6 py-2 font-bold text-sm uppercase group-hover:bg-white group-hover:text-swiss-red transition-all duration-300">
        {buttonText}
      </span>
    </div>
  </motion.div>
);

const Features: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full">
      <FeatureBox 
        title="100% Original Parts" 
        subtitle="We use only OEM parts for replacement to ensure longevity."
        buttonText="Learn More"
        delay={0}
      />
      <FeatureBox 
        title="Dealership Quality Repair" 
        subtitle="Latest equipment and our expert technicians are trained on each brand."
        buttonText="Enquire Now"
        delay={0.1}
      />
      <FeatureBox 
        title="Service Contract & Warranty" 
        subtitle="All your car services and warranty needs taken care of."
        buttonText="Book Now"
        delay={0.2}
      />
      <FeatureBox 
        title="Pick Up Across UAE" 
        subtitle="We come to you no matter where you are in the UAE."
        buttonText="Schedule Now"
        delay={0.3}
      />
    </div>
  );
};

export default Features;
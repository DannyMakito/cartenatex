import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BRANDS_DATA } from '../constants';

const BrandsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 uppercase">
            Our Brands
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We specialize in a wide range of luxury and standard car brands. Select your car brand below to learn more about our specific services.
          </p>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {BRANDS_DATA.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <Link to={`/brands/${brand.id}`} className="block h-full bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                  <div className="relative h-48 overflow-hidden bg-gray-50 flex items-center justify-center">
                    <img 
                      src={brand.image} 
                      alt={brand.name} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 text-center border-t border-gray-100">
                    <h3 className="text-xl font-bold text-swiss-red uppercase mb-2">{brand.name}</h3>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Cartenatex Auto Service</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandsPage;
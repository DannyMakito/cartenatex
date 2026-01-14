
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Services from '../components/Services';
import AboutBanner from '../components/AboutBanner';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQ from '../components/FAQ';
import { motion } from 'framer-motion';

interface HomeProps {
  onBook: () => void;
}

const Home: React.FC<HomeProps> = ({ onBook }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div id="home">
        <Hero onBook={onBook} />
      </div>
      <Features />
      
      <div id="offers">
        <Services />
      </div>

      <div id="about">
        <AboutBanner />
      </div>

      <div id="choose-us">
        <WhyChooseUs />
      </div>

      {/* Quick Booking Promo Section */}
      <section className="py-16 bg-swiss-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-black uppercase mb-4"
              >
                Experience Premium Care for your car
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-400"
              >
                Join thousands of satisfied owners who trust Cartenatex for their vehicle maintenance.
              </motion.p>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBook}
              className="bg-swiss-red px-10 py-5 font-bold uppercase tracking-widest hover:bg-red-700 transition-all rounded shadow-lg shadow-red-900/20"
            >
              Book Service Now
            </motion.button>
          </div>
        </div>
      </section>

      <div id="faq">
        <FAQ />
      </div>
      
      <div id="contact" className="py-10"></div>
    </motion.div>
  );
};

export default Home;

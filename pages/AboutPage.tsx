import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, Users, TrendingUp, Wrench, CheckCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AboutPageProps {
  onBook?: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBook }) => {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section 
        className="relative w-full h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: 'url("https://swissauto.ae/wp-content/themes/swissauto/img/aboutback.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            About CARTENATEX
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto"
          >
            Your Trusted Partner for Quality Automotive Services
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-swiss-red rounded-full mb-6">
              <Target size={32} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <div className="w-24 h-1 bg-swiss-red mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12 border-l-4 border-swiss-red"
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              CARTENATEX's mission is to provide reliable, professional, and high-quality vehicle 
              maintenance, servicing, and repair solutions, including engine repairs and rebuilds, to meet 
              the diverse needs of our clients. With over 10 years of quality car repair experience, we strive to establish and maintain a strong and distinct identity within the motor industry 
              as a trusted and dependable service provider, offering a one-stop solution for efficient, 
              time-bound, and cost-effective automotive services.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              CARTENATEX is fully committed to achieving 100% customer satisfaction through adherence 
              to strong core values, quality workmanship, and consistent service excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Supporting Pillars */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Supports Our Mission</h2>
            <div className="w-24 h-1 bg-swiss-red mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp size={40} className="text-swiss-red" />,
                title: "Continuous Growth",
                description: "Continuous investment in sufficient infrastructure to allow for future expansion and long-term sustainability"
              },
              {
                icon: <Award size={40} className="text-swiss-red" />,
                title: "Operational Excellence",
                description: "A commitment to continuous growth, operational improvement, and maintaining the highest standards"
              },
              {
                icon: <Users size={40} className="text-swiss-red" />,
                title: "Customer Focus",
                description: "The pursuit of consistent success through professionalism, accountability, and unwavering customer focus"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-md mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values / Features */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-swiss-red rounded-full mb-6">
              <Wrench size={32} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose CARTENATEX</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience dealership-quality services at prices that are simply unbeatable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Over 10 years of quality car repair experience",
              "Dealership-quality services at unbeatable prices",
              "Comprehensive one-stop automotive solutions",
              "100% commitment to customer satisfaction",
              "Professional and certified technicians",
              "Efficient, time-bound service delivery",
              "Cost-effective automotive solutions",
              "Trusted service provider in Germiston"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start space-x-3 bg-gray-800 rounded-lg p-4"
              >
                <CheckCircle size={20} className="text-swiss-red flex-shrink-0 mt-0.5" />
                <span className="text-gray-200 text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-swiss-red">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience Quality Service?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Book your appointment today and discover why CARTENATEX is Germiston's trusted choice for automotive care.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {onBook ? (
                <button 
                  onClick={onBook}
                  className="bg-white text-swiss-red px-10 py-4 font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors duration-300 rounded shadow-lg flex items-center"
                >
                  <Phone size={20} className="mr-2" />
                  Book Appointment
                </button>
              ) : (
                <Link 
                  to="/"
                  className="bg-white text-swiss-red px-10 py-4 font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors duration-300 rounded shadow-lg flex items-center"
                >
                  <Phone size={20} className="mr-2" />
                  Book Appointment
                </Link>
              )}
              <a 
                href="tel:0118250184"
                className="bg-gray-900 text-white px-10 py-4 font-bold uppercase tracking-wide hover:bg-black transition-colors duration-300 rounded shadow-lg flex items-center"
              >
                <Phone size={20} className="mr-2" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

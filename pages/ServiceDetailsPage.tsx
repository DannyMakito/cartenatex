import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ALL_SERVICES } from '../constants';
import BookAppointmentForm from '../components/BookAppointmentForm';
import { Plus, Minus, CheckCircle, ArrowRight } from 'lucide-react';

const ServiceDetailsPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const service = ALL_SERVICES.find(s => s.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.bannerImage})` }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white uppercase mb-4 shadow-black drop-shadow-lg"
          >
            {service.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <a 
              href="#book-appointment" 
              className="inline-block bg-swiss-red text-white px-8 py-3 font-bold text-lg uppercase rounded shadow-lg hover:bg-red-700 transition-colors mt-6"
            >
              Book My Appointment
            </a>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-swiss-red uppercase mb-6 leading-tight"
              >
                {service.title} Service
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-700 text-lg leading-relaxed text-justify space-y-4"
              >
                <p>{service.detailedDescription}</p>
                <p>We endeavor to follow every recommended step to ensure you get dealer quality service on your vehicle, and of course without the exorbitant dealer prices.</p>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-100 p-8 rounded-xl border-l-8 border-swiss-red shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <CheckCircle className="text-swiss-red mr-2" /> 
                  Why Choose Us for {service.title}?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start"><ArrowRight size={16} className="text-swiss-red mr-2 mt-1 shrink-0" /> Certified Technicians with Specialized Expertise</li>
                  <li className="flex items-start"><ArrowRight size={16} className="text-swiss-red mr-2 mt-1 shrink-0" /> Latest Diagnostic Technology</li>
                  <li className="flex items-start"><ArrowRight size={16} className="text-swiss-red mr-2 mt-1 shrink-0" /> Genuine Parts & Quality Spares</li>
                  <li className="flex items-start"><ArrowRight size={16} className="text-swiss-red mr-2 mt-1 shrink-0" /> Comprehensive Warranty on Repairs</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black text-gray-900 uppercase">
              Our {service.title} Services
            </h3>
            <div className="w-24 h-1 bg-swiss-red mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-5 rounded shadow hover:shadow-md transition-shadow flex items-center border-l-4 border-transparent hover:border-swiss-red"
              >
                <ArrowRight size={18} className="text-swiss-red mr-3" />
                <span className="font-bold text-gray-800">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-2xl font-black text-center text-gray-900 uppercase mb-10">
            Frequently Asked Questions about {service.title}
          </h3>
          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className={`w-full flex items-center justify-between p-5 text-left font-bold transition-colors ${openFAQ === idx ? 'bg-swiss-red text-white' : 'bg-white text-gray-800 hover:bg-gray-50'}`}
                >
                  <span className="pr-4">{faq.question}</span>
                  {openFAQ === idx ? <Minus size={20} /> : <Plus size={20} />}
                </button>
                <AnimatePresence>
                  {openFAQ === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gray-50"
                    >
                      <div className="p-5 text-gray-700 leading-relaxed border-t border-gray-200">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <BookAppointmentForm />
    </div>
  );
};

export default ServiceDetailsPage;

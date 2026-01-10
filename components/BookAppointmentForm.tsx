import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BookAppointmentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    make: '',
    model: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add logic to send data to backend or show success message
    alert('Thank you! Your appointment request has been received.');
  };

  return (
    <section className="py-20 bg-white" id="book-appointment">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h3 className="text-swiss-red font-bold text-xl uppercase tracking-widest mb-2">
            Schedule Your Visit
          </h3>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase">
            Book My Appointment
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-lg shadow-2xl border-t-4 border-swiss-red"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase">Name *</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:border-swiss-red focus:ring-1 focus:ring-swiss-red outline-none transition-colors bg-gray-50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase">Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:border-swiss-red focus:ring-1 focus:ring-swiss-red outline-none transition-colors bg-gray-50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase">Email *</label>
              <input 
                type="email" 
                name="email"
                required
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:border-swiss-red focus:ring-1 focus:ring-swiss-red outline-none transition-colors bg-gray-50"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase">Select Make *</label>
                <select 
                  name="make"
                  required
                  value={formData.make}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:border-swiss-red focus:ring-1 focus:ring-swiss-red outline-none transition-colors bg-gray-50"
                >
                  <option value="">- Select Car Make -</option>
                  <option value="Audi">Audi</option>
                  <option value="BMW">BMW</option>
                  <option value="Ford">Ford</option>
                  <option value="Hyundai">Hyundai</option>
                  <option value="Mercedes">Mercedes</option>
                  <option value="Suzuki">Suzuki</option>
                  <option value="Toyota">Toyota</option>
                  <option value="Volkswagen">Volkswagen</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase">Car Model</label>
                <input 
                  type="text" 
                  name="model"
                  placeholder="Car Model"
                  value={formData.model}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:border-swiss-red focus:ring-1 focus:ring-swiss-red outline-none transition-colors bg-gray-50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase">Your Message</label>
              <textarea 
                name="message"
                rows={4}
                placeholder="Details about the service needed..."
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:border-swiss-red focus:ring-1 focus:ring-swiss-red outline-none transition-colors bg-gray-50"
              />
            </div>

            <div className="text-center pt-4">
              <button 
                type="submit"
                className="bg-swiss-red text-white px-10 py-4 font-bold text-lg uppercase rounded shadow-lg hover:bg-red-700 transition-all transform hover:scale-105"
              >
                Submit
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default BookAppointmentForm;
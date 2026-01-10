
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
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
    alert('Thank you! Your appointment request has been received. Our service advisor will contact you shortly.');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 z-[100] backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] overflow-y-auto pointer-events-none flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-2xl rounded-lg shadow-2xl pointer-events-auto relative overflow-hidden"
            >
              {/* Header */}
              <div className="bg-swiss-red p-6 text-white flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-black uppercase tracking-tight">Book Appointment</h2>
                  <p className="text-sm opacity-90">Expert Service for Your Luxury Vehicle</p>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Form */}
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-500 uppercase">Full Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-200 rounded focus:border-swiss-red focus:ring-1 focus:ring-swiss-red outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-500 uppercase">Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        placeholder="012 345 6789"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-200 rounded focus:border-swiss-red focus:ring-1 focus:ring-swiss-red outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-200 rounded focus:border-swiss-red focus:ring-1 focus:ring-swiss-red outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-500 uppercase">Vehicle Make *</label>
                      <select 
                        name="make"
                        required
                        value={formData.make}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-200 rounded focus:border-swiss-red focus:ring-1 focus:ring-swiss-red outline-none transition-colors bg-white"
                      >
                        <option value="">- Select Make -</option>
                        <option value="Audi">Audi</option>
                        <option value="BMW">BMW</option>
                        <option value="Mercedes">Mercedes-Benz</option>
                        <option value="Porsche">Porsche</option>
                        <option value="Range Rover">Range Rover</option>
                        <option value="Volkswagen">Volkswagen</option>
                        <option value="Other">Other Luxury</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-500 uppercase">Model & Year</label>
                      <input 
                        type="text" 
                        name="model"
                        placeholder="e.g. A4 2022"
                        value={formData.model}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-200 rounded focus:border-swiss-red focus:ring-1 focus:ring-swiss-red outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Service Description</label>
                    <textarea 
                      name="message"
                      rows={3}
                      placeholder="Tell us about the issue or service needed..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-200 rounded focus:border-swiss-red focus:ring-1 focus:ring-swiss-red outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit"
                      className="w-full bg-black text-white py-4 rounded font-bold uppercase tracking-widest hover:bg-swiss-red transition-all shadow-lg active:scale-[0.98]"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;

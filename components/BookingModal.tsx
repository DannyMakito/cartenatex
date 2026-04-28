
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';


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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          make: formData.make,
          model: formData.model,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      
      // Auto close after 2 seconds
      setTimeout(() => {
        onClose();
        // Reset form and status after modal closes
        setTimeout(() => {
          setFormData({
            name: '',
            phone: '',
            email: '',
            make: '',
            model: '',
            message: ''
          });
          setStatus('idle');
        }, 500);
      }, 2000);

    } catch (error) {
      console.error('Email error:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
              <div className="bg-swiss-red p-4 md:p-6 text-white flex justify-between items-center">
                <div>
                  <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight">Book Appointment</h2>
                  <p className="text-xs md:text-sm opacity-90">Expert Service for Your Vehicle</p>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X size={20} className="md:w-6 md:h-6" />
                </button>
              </div>


              {/* Form */}
              <div className="p-5 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">

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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">

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
                        <option value="Other">Other</option>
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
                      disabled={isSubmitting || status === 'success'}
                      className={`w-full py-3 md:py-4 rounded font-bold uppercase tracking-widest transition-all shadow-lg active:scale-[0.98] flex items-center justify-center gap-2 ${
                        status === 'success' 
                          ? 'bg-green-600 text-white cursor-default' 
                          : status === 'error'
                          ? 'bg-swiss-red text-white hover:bg-red-700'
                          : 'bg-black text-white hover:bg-swiss-red'
                      } disabled:opacity-70 disabled:cursor-not-allowed text-sm md:text-base`}
                    >

                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin" size={20} />
                          Sending...
                        </>
                      ) : status === 'success' ? (
                        <>
                          <CheckCircle2 size={20} />
                          Sent Successfully!
                        </>
                      ) : (
                        'Confirm Booking'
                      )}
                    </button>

                    {status === 'success' && (
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-green-600 font-bold mt-4 text-sm"
                      >
                        Thank you! We'll be in touch shortly.
                      </motion.p>
                    )}

                    {status === 'error' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-2 text-swiss-red font-bold mt-4 text-sm"
                      >
                        <AlertCircle size={16} />
                        Something went wrong. Please try again.
                      </motion.div>
                    )}
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

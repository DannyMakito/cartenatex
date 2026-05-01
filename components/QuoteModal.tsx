
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, productName }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (productName) {
      setFormData(prev => ({ 
        ...prev, 
        message: `Hi, I would like to request a formal quotation for the XTool ${productName}.` 
      }));
    } else {
      setFormData(prev => ({ 
        ...prev, 
        message: 'Hi, I would like to request more information about your XTool diagnostic systems.' 
      }));
    }
  }, [productName, isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          product: productName || 'General Inquiry',
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      
      setTimeout(() => {
        onClose();
        setTimeout(() => {
          setFormData({
            name: '',
            phone: '',
            email: '',
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 z-[100] backdrop-blur-sm"
          />

          <div className="fixed inset-0 z-[101] overflow-y-auto pointer-events-none flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-lg rounded-2xl shadow-2xl pointer-events-auto relative overflow-hidden"
            >
              <div className="bg-gray-900 p-6 text-white flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-black uppercase tracking-tight">Request Quotation</h2>
                  <p className="text-xs opacity-70">Professional Diagnostic Solutions</p>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {productName && (
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mb-6">
                      <span className="text-[10px] font-black text-swiss-red uppercase tracking-widest block mb-1">Inquiring About</span>
                      <span className="text-gray-900 font-black text-lg uppercase">{productName}</span>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Full Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-swiss-red focus:ring-1 focus:ring-swiss-red outline-none transition-all font-bold text-gray-700"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Email *</label>
                        <input 
                          type="email" 
                          name="email"
                          required
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-swiss-red focus:ring-1 focus:ring-swiss-red outline-none transition-all font-bold text-gray-700"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Phone *</label>
                        <input 
                          type="tel" 
                          name="phone"
                          required
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-swiss-red focus:ring-1 focus:ring-swiss-red outline-none transition-all font-bold text-gray-700"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Message</label>
                      <textarea 
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-swiss-red focus:ring-1 focus:ring-swiss-red outline-none transition-all font-bold text-gray-700 resize-none"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit"
                      disabled={isSubmitting || status === 'success'}
                      className={`w-full py-4 rounded-xl font-black uppercase tracking-widest transition-all shadow-lg active:scale-[0.98] flex items-center justify-center gap-2 ${
                        status === 'success' 
                          ? 'bg-green-600 text-white cursor-default' 
                          : status === 'error'
                          ? 'bg-swiss-red text-white hover:bg-red-700'
                          : 'bg-gray-900 text-white hover:bg-swiss-red'
                      } disabled:opacity-70 disabled:cursor-not-allowed`}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin" size={20} />
                          Processing...
                        </>
                      ) : status === 'success' ? (
                        <>
                          <CheckCircle2 size={20} />
                          Quotation Requested
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Request
                        </>
                      )}
                    </button>

                    {status === 'success' && (
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-green-600 font-bold mt-4 text-xs uppercase tracking-widest"
                      >
                        Thank you! We'll send your quote shortly.
                      </motion.p>
                    )}

                    {status === 'error' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-2 text-swiss-red font-bold mt-4 text-xs uppercase tracking-widest"
                      >
                        <AlertCircle size={14} />
                        Request failed. Please try again.
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

export default QuoteModal;

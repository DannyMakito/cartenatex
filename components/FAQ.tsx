import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void }> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-4">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 bg-swiss-red text-white font-bold text-left rounded-t-md hover:bg-red-700 transition-colors"
      >
        <span className="pr-4">{question}</span>
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-gray-100 rounded-b-md"
          >
            <div className="p-5 text-gray-700 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-swiss-red font-bold text-xl uppercase tracking-widest mb-2">
            Common Questions
          </h3>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col gap-4">
            {FAQS.slice(0, 2).map((faq, idx) => (
              <FAQItem 
                key={idx} 
                {...faq} 
                isOpen={openIndex === idx} 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)} 
              />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {FAQS.slice(2, 4).map((faq, idx) => (
              <FAQItem 
                key={idx + 2} 
                {...faq} 
                isOpen={openIndex === idx + 2} 
                onClick={() => setOpenIndex(openIndex === idx + 2 ? null : idx + 2)} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
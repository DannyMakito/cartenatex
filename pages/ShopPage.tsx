
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '../constants';
import { Filter, Truck, Search } from 'lucide-react';

import QuoteModal from '../components/QuoteModal';

const ShopPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(PRODUCTS.map((product) => product.category))).sort();
    return [
      { id: 'all', label: 'All XTOOL Products' },
      ...uniqueCategories.map((category) => ({ id: category, label: category })),
    ];
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
      
      const searchMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-[#fcfcfc] min-h-screen pt-10 pb-20 font-sans">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-gray-200 pb-8 gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-black uppercase text-gray-900 tracking-tighter">Diagnostic Shop</h1>
            <p className="text-gray-500 mt-2 text-lg font-medium">Professional XTool Scanners & Tools</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-swiss-red transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-11 pr-6 py-3 bg-white border border-gray-200 rounded-xl font-bold text-gray-700 focus:outline-none focus:border-swiss-red transition-all shadow-sm w-full sm:w-64"
              />
            </div>
            <button className="flex items-center justify-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:border-swiss-red transition-all shadow-sm">
              <Filter size={18} className="text-swiss-red" /> Filter
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters (Desktop) */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="sticky top-24 space-y-10">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="font-black text-xl mb-6 uppercase tracking-wider text-gray-900 border-b-2 border-swiss-red inline-block pb-1">Categories</h3>
                <ul className="space-y-4 text-gray-500 font-bold text-sm">
                  {categories.map((cat) => (
                    <li 
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`${selectedCategory === cat.id ? 'text-swiss-red' : 'hover:text-gray-900'} flex items-center gap-3 cursor-pointer transition-colors`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${selectedCategory === cat.id ? 'bg-swiss-red' : 'bg-gray-200'}`}></span>
                      {cat.label}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="font-black text-xl mb-6 uppercase tracking-wider text-gray-900 border-b-2 border-swiss-red inline-block pb-1">Need Help?</h3>
                <p className="text-gray-500 font-bold text-sm leading-relaxed">
                  Can't find the specific tool you're looking for? Contact our experts for a personalized recommendation.
                </p>
                <div className="flex flex-col gap-3 mt-6">
                  <a 
                    href="https://wa.me/27823376187" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-swiss-red text-white text-center py-3 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-red-700 transition-all shadow-md shadow-swiss-red/10"
                  >
                    WhatsApp Us
                  </a>
                  <button 
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="block w-full bg-gray-900 text-white text-center py-3 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-black transition-all shadow-md shadow-black/10"
                  >
                    Email Inquiry
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <AnimatePresence mode="popLayout">
              <motion.div 
                layout
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"
              >
                {filteredProducts.map((product) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={product.id}
                  >
                    <Link 
                      to={`/shop/${product.id}`} 
                      className="group block h-full bg-white rounded-2xl border border-gray-100 p-4 shadow-sm hover:shadow-xl hover:shadow-swiss-red/5 transition-all duration-300"
                    >
                      {/* Image Container */}
                      <div className="aspect-square bg-white mb-6 overflow-hidden relative rounded-xl border border-gray-50 p-6 flex items-center justify-center">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out mix-blend-multiply"
                        />
                        {/* Badge */}
                        <div className="absolute top-4 left-4 bg-swiss-red text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full">
                          New
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="px-2 pb-2">
                        <div className="text-swiss-red font-bold text-[11px] uppercase tracking-widest mb-2">{product.category}</div>
                        <h3 className="text-gray-900 font-black text-xl leading-tight mb-4 group-hover:text-swiss-red transition-colors min-h-[3rem]">
                          {product.name}
                        </h3>
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-black text-gray-400 uppercase tracking-widest">
                            Price on Request
                          </div>
                          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-swiss-red group-hover:text-white transition-all text-gray-400">
                            <Truck size={18} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <Filter size={48} className="mx-auto text-gray-200 mb-4" />
                <h3 className="text-xl font-black text-gray-900 uppercase">No products found</h3>
                <p className="text-gray-500 font-bold mt-2">Try adjusting your filters or search query</p>
                <button 
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="mt-6 text-swiss-red font-black uppercase text-sm border-b-2 border-swiss-red pb-1 hover:text-gray-900 hover:border-gray-900 transition-all"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
        <QuoteModal 
          isOpen={isQuoteModalOpen} 
          onClose={() => setIsQuoteModalOpen(false)} 
        />
      </div>
    </div>
  );
};

export default ShopPage;


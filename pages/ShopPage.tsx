
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../constants';
import { Filter } from 'lucide-react';

const ShopPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-10 pb-20">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-black uppercase text-gray-900">Diagnostic Shop</h1>
            <p className="text-gray-500 mt-2">Professional Scanners & Tools</p>
          </div>
          <button className="flex items-center gap-2 text-gray-900 font-medium hover:text-swiss-red transition-colors md:hidden">
            <Filter size={20} /> Filter
          </button>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters (Desktop) */}
          <aside className="w-64 hidden md:block flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Categories</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="font-medium text-black cursor-pointer">All Scanners</li>
                  <li className="hover:text-black cursor-pointer transition-colors">Professional</li>
                  <li className="hover:text-black cursor-pointer transition-colors">Handheld</li>
                  <li className="hover:text-black cursor-pointer transition-colors">Heavy Duty</li>
                  <li className="hover:text-black cursor-pointer transition-colors">Accessories</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-4">Price Range</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="hover:text-black cursor-pointer transition-colors">Under R1,000</li>
                  <li className="hover:text-black cursor-pointer transition-colors">R1,000 - R2,500</li>
                  <li className="hover:text-black cursor-pointer transition-colors">R2,500 - R5,000</li>
                  <li className="hover:text-black cursor-pointer transition-colors">Over R5,000</li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">
              {PRODUCTS.map((product) => (
                <Link to={`/shop/${product.id}`} key={product.id} className="group">
                  {/* Image Container */}
                  <div className="aspect-square bg-gray-100 mb-4 overflow-hidden relative rounded-sm">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out mix-blend-multiply"
                    />
                    {/* Badge */}
                    <div className="absolute top-2 left-2 bg-white px-2 py-1 text-xs font-bold uppercase tracking-wider">
                      New
                    </div>
                  </div>

                  {/* Product Info */}
                  <div>
                    <div className="text-swiss-red font-medium text-sm mb-1">{product.category}</div>
                    <h3 className="text-gray-900 font-bold text-lg leading-tight mb-2 group-hover:text-gray-600 transition-colors">
                      {product.name}
                    </h3>
                    <div className="text-gray-900 font-medium">
                      R {product.price.toLocaleString()}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;


import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { Check, Truck, Shield } from 'lucide-react';

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  return (
    <div className="bg-white min-h-screen pt-6 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Image Section */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 overflow-hidden rounded-sm sticky top-24">
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-contain p-8 mix-blend-multiply"
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="pt-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2 leading-tight">
                {product.name}
              </h1>
              <p className="text-gray-500 font-medium mb-6">{product.category}</p>
              
              <div className="text-2xl font-medium text-gray-900 mb-8">
                R {product.price.toLocaleString()}
              </div>

              {/* Add to Cart */}
              <div className="space-y-4 mb-10">
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full bg-black text-white py-4 rounded-full font-bold uppercase hover:bg-gray-800 active:scale-[0.98] transition-all"
                >
                  Add to Cart
                </button>
                <button className="w-full border border-gray-300 text-black py-4 rounded-full font-bold uppercase hover:border-black transition-colors">
                  Favourite
                </button>
              </div>

              {/* Description */}
              <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed mb-8">
                <p>{product.description}</p>
              </div>

              {/* Features List */}
              <div className="mb-10">
                <h3 className="font-bold text-lg mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-black" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Shipping / Warranty */}
              <div className="border-t border-gray-100 pt-6 space-y-4">
                <div className="flex items-center gap-4 text-gray-600">
                  <Truck size={20} />
                  <span>Free standard shipping on orders over R2000</span>
                </div>
                <div className="flex items-center gap-4 text-gray-600">
                  <Shield size={20} />
                  <span>2 Year Warranty included</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

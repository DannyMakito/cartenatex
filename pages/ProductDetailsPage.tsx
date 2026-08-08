
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { Check, Truck, Shield } from 'lucide-react';
import QuoteModal from '../components/QuoteModal';

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = React.useState('description');
  const [activeImage, setActiveImage] = React.useState<string>('');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = React.useState(false);
  
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const gallery = product.gallery?.length ? product.gallery : [product.image];

  React.useEffect(() => {
    setActiveImage(gallery[0]);
  }, [gallery, product.id]);

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'specs', label: 'Tech Specs' },
    { id: 'video', label: 'Review Video' },
    { id: 'features', label: 'Features' },
    { id: 'packing', label: 'Packing List' },
  ];

  return (
    <div className="bg-[#fcfcfc] min-h-screen pt-10 pb-20 font-sans">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
            
            {/* Image Section */}
            <div className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-lg p-4">
              <div className="aspect-square w-full max-w-[400px] overflow-hidden">
                <motion.img 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src={activeImage || product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </div>
              {gallery.length > 1 && (
                <div className="mt-4 grid grid-cols-4 gap-3 w-full max-w-[400px]">
                  {gallery.map((image, index) => (
                    <button
                      key={`${product.id}-gallery-${index}`}
                      type="button"
                      onClick={() => setActiveImage(image)}
                      className={`aspect-square rounded-lg border p-2 transition-all ${
                        activeImage === image ? 'border-swiss-red ring-2 ring-swiss-red/20' : 'border-gray-100 hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-contain mix-blend-multiply"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details Section */}
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-swiss-red font-bold text-sm uppercase tracking-widest mb-2">{product.category}</div>
                <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">
                  {product.name}
                </h1>
                
                <div className="text-sm font-black text-gray-400 uppercase tracking-widest mb-8 flex items-baseline gap-2">
                  Price on Request
                </div>

                {/* Request Quotation */}
                <div className="flex flex-col gap-4 mb-8">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href={`https://wa.me/27823376187?text=Hi, I would like to request a quotation for the XTool ${product.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-swiss-red text-white py-4 px-8 rounded-lg font-bold uppercase text-center hover:bg-red-700 active:scale-[0.98] transition-all shadow-md shadow-swiss-red/20 flex items-center justify-center gap-2"
                    >
                      WhatsApp Quote
                    </a>
                    <button 
                      onClick={() => setIsQuoteModalOpen(true)}
                      className="flex-1 bg-gray-900 text-white py-4 px-8 rounded-lg font-bold uppercase text-center hover:bg-black active:scale-[0.98] transition-all shadow-md shadow-black/10 flex items-center justify-center gap-2"
                    >
                      Email Quote
                    </button>
                  </div>
                  <button className="w-full py-3 border border-gray-200 text-gray-500 rounded-lg font-bold uppercase hover:bg-gray-50 transition-colors text-xs tracking-widest">
                    Add to Favourites
                  </button>
                </div>

                <div className="flex items-center gap-6 text-sm text-gray-500 font-bold">
                  <div className="flex items-center gap-2">
                    <Truck size={18} className="text-swiss-red" />
                    <span>Free Shipping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield size={18} className="text-swiss-red" />
                    <span>2 Year Warranty</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="border-t border-gray-100">
            <div className="flex flex-wrap bg-gray-50/50">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 md:px-8 py-4 font-black text-xs md:text-sm uppercase tracking-wider transition-all relative ${
                    activeTab === tab.id 
                    ? 'text-gray-900 bg-white border-x border-gray-100 border-t-2 border-t-swiss-red shadow-[0_-4px_10px_-5px_rgba(224,20,36,0.5)]' 
                    : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="p-8 md:p-12 min-h-[400px]">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="prose prose-lg max-w-none"
              >
                {activeTab === 'description' && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="text-xl font-black text-gray-900 uppercase tracking-tight">SAVE 10% with promo code: <span className="text-swiss-red">XTOOL10</span></div>
                      <div className="text-lg font-black text-gray-900 underline decoration-swiss-red underline-offset-4 decoration-2">3 year subscription and 2 year warranty!</div>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg font-medium">
                      {product.description}
                    </p>
                    <div className="space-y-4 pt-4">
                      {product.features.slice(0, 5).map((feature, i) => (
                        <div key={i} className="flex gap-4 items-start group">
                          <span className="text-swiss-red font-black text-xl leading-none">»</span>
                          <span className="text-gray-700 font-bold">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'specs' && (
                  <div className="max-w-4xl mx-auto">
                    {product.techSpecs && product.techSpecs.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-xl overflow-hidden">
                        {product.techSpecs.map((spec, i) => {
                          const [label, value] = spec.includes('：') ? spec.split('：') : spec.includes(':') ? spec.split(':') : [spec, ''];
                          return (
                            <div key={i} className="bg-white p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                              <span className="text-gray-400 font-bold uppercase text-xs tracking-widest">{label}</span>
                              <span className="text-gray-900 font-black text-sm text-right">{value}</span>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="text-gray-400 italic font-bold text-center py-10">Technical specifications are not available for this model yet.</div>
                    )}
                  </div>
                )}

                {activeTab === 'video' && (
                  <div className="flex flex-col items-center justify-center py-10 text-center">
                    {product.reviewVideo ? (
                      <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-2xl shadow-black/10 border border-gray-100">
                        {product.reviewVideo.includes('youtube.com') || product.reviewVideo.includes('youtu.be') ? (
                          <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${product.reviewVideo.split('v=')[1] || product.reviewVideo.split('/').pop()}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        ) : (
                          <div className="p-10 bg-gray-50 h-full flex flex-col items-center justify-center">
                            <p className="mb-4 font-bold">Review Video Available At:</p>
                            <a href={product.reviewVideo} target="_blank" rel="noopener noreferrer" className="text-swiss-red font-black underline uppercase tracking-widest">
                              Watch Review on YouTube
                            </a>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-gray-400 italic font-bold">No review video available for this product yet.</div>
                    )}
                  </div>
                )}

                {activeTab === 'features' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex gap-4 items-center p-4 rounded-lg bg-gray-50 border border-gray-100 hover:border-swiss-red/30 transition-colors">
                        <Check size={20} className="text-swiss-red flex-shrink-0" />
                        <span className="text-gray-700 font-bold">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'packing' && (
                  <div className="max-w-2xl mx-auto bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                    <div className="bg-gray-900 px-6 py-4 border-b border-gray-100 font-black uppercase text-sm tracking-widest text-white">
                      Inside the box
                    </div>
                    <div className="p-0">
                      {product.packingList?.map((item, i) => (
                        <div key={i} className="px-6 py-4 border-b border-gray-50 last:border-0 flex items-center justify-between group hover:bg-gray-50/50 transition-colors">
                          <span className="text-gray-600 font-bold">{item}</span>
                          <span className="text-gray-300 group-hover:text-swiss-red transition-colors font-black">1x</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>

        <QuoteModal 
          isOpen={isQuoteModalOpen} 
          onClose={() => setIsQuoteModalOpen(false)} 
          productName={product.name}
        />
      </div>
    </div>
  );
};

export default ProductDetailsPage;

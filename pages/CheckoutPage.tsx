
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Navigate, Link } from 'react-router-dom';
import { ChevronRight, CreditCard, Truck } from 'lucide-react';

const CheckoutPage: React.FC = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (cart.length === 0 && !isSuccess) {
    return <Navigate to="/shop" replace />;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={40} className="text-green-600" />
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-4">Order Confirmed!</h2>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. We have sent a confirmation email with your order details.
          </p>
          <Link 
            to="/shop" 
            className="block w-full bg-black text-white py-4 rounded-full font-bold uppercase hover:bg-gray-800 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="container mx-auto px-4 max-w-6xl pt-8">
        <h1 className="text-3xl font-black uppercase mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-2 space-y-8">
            <form id="checkout-form" onSubmit={handleSubmit}>
              
              {/* Shipping Info */}
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Truck size={20} /> Shipping Address
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input required type="text" placeholder="First Name" className="p-4 bg-gray-50 rounded border border-gray-200 focus:border-black focus:outline-none" />
                  <input required type="text" placeholder="Last Name" className="p-4 bg-gray-50 rounded border border-gray-200 focus:border-black focus:outline-none" />
                  <input required type="email" placeholder="Email Address" className="p-4 bg-gray-50 rounded border border-gray-200 focus:border-black focus:outline-none md:col-span-2" />
                  <input required type="text" placeholder="Street Address" className="p-4 bg-gray-50 rounded border border-gray-200 focus:border-black focus:outline-none md:col-span-2" />
                  <input required type="text" placeholder="City" className="p-4 bg-gray-50 rounded border border-gray-200 focus:border-black focus:outline-none" />
                  <input required type="text" placeholder="Postal Code" className="p-4 bg-gray-50 rounded border border-gray-200 focus:border-black focus:outline-none" />
                  <select className="p-4 bg-gray-50 rounded border border-gray-200 focus:border-black focus:outline-none md:col-span-2">
                    <option value="ZA">South Africa</option>
                  </select>
                </div>
              </div>

              {/* Payment */}
              <div>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CreditCard size={20} /> Payment
                </h2>
                <div className="p-6 bg-gray-50 rounded border border-gray-200 text-center">
                  <p className="text-gray-500 text-sm mb-4">Secure Payment Gateway Simulation</p>
                  <div className="grid grid-cols-1 gap-4">
                    <input required type="text" placeholder="Card Number" className="p-4 bg-white rounded border border-gray-200 focus:border-black focus:outline-none" />
                    <div className="grid grid-cols-2 gap-4">
                      <input required type="text" placeholder="MM / YY" className="p-4 bg-white rounded border border-gray-200 focus:border-black focus:outline-none" />
                      <input required type="text" placeholder="CVC" className="p-4 bg-white rounded border border-gray-200 focus:border-black focus:outline-none" />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 text-sm">
                    <div className="w-16 h-16 bg-white rounded overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-900 line-clamp-1">{item.name}</p>
                      <p className="text-gray-500">Qty: {item.quantity}</p>
                      <p className="font-medium">R {(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-2 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>R {cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-xl font-black pt-2 border-t border-gray-200 mt-2">
                  <span>Total</span>
                  <span>R {cartTotal.toLocaleString()}</span>
                </div>
              </div>

              <button 
                form="checkout-form"
                disabled={isProcessing}
                className={`w-full bg-swiss-red text-white py-4 rounded-full font-bold uppercase transition-all ${isProcessing ? 'opacity-70 cursor-not-allowed' : 'hover:bg-red-700'}`}
              >
                {isProcessing ? 'Processing...' : 'Place Order'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Icon for Success State
const Check: React.FC<{ size: number, className: string }> = ({ size, className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default CheckoutPage;

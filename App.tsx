
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import BookingModal from './components/BookingModal';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import BrandsPage from './pages/BrandsPage';
import BrandDetailsPage from './pages/BrandDetailsPage';
import ShopPage from './pages/ShopPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CheckoutPage from './pages/CheckoutPage';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './context/CartContext';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBooking = () => setIsBookingModalOpen(true);
  const closeBooking = () => setIsBookingModalOpen(false);

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Navbar onBook={openBooking} />
          <CartDrawer />
          <BookingModal isOpen={isBookingModalOpen} onClose={closeBooking} />
          <main>
            <Routes>
              <Route path="/" element={<Home onBook={openBooking} />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/brands" element={<BrandsPage />} />
              <Route path="/brands/:brandId" element={<BrandDetailsPage />} />
              
              {/* Shop Routes */}
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/shop/:id" element={<ProductDetailsPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />

              {/* Fallback for other routes can go to Home */}
              <Route path="*" element={<Home onBook={openBooking} />} />
            </Routes>
          </main>
          <Footer />
          <FloatingActions onBook={openBooking} />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;


import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  onBook?: () => void;
}

const SLIDES = [
  {
    id: 1,
    // Couple smiling / Customer satisfaction
    image: 'https://media.istockphoto.com/id/1831623373/photo/mechanic-giving-a-woman-the-keys-of-her-car-at-a-garage.jpg?s=612x612&w=0&k=20&c=nBfrBgkQHEBnY1DGuOdJU2gUs-kl8c1uupgdVBw-M3Y=',
    title: "Real affordable services that leaves a smile",
    cta: "Book Appointment"
  },
  {
    id: 2,
    // Mechanic working
    image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&q=80&w=2000',
    title: "The right repair done the 1st time",
    cta: "Our Services"
  },
  {
    id: 3,
    // Diagnostic tool
    image: 'https://th.bing.com/th/id/OIP.yJFYmsrWH2RUZ74Q4_-Q2gHaEo?w=315&h=196&c=7&r=0&o=7&pid=1.7&rm=3',
    title: "We diagnose and repair any problem fast!",
    cta: "Contact Us"
  }
];

const Hero: React.FC<HeroProps> = ({ onBook }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideCount = SLIDES.length;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev === slideCount - 1 ? 0 : prev + 1));
  }, [slideCount]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? slideCount - 1 : prev - 1));
  }, [slideCount]);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 9000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const handleCtaClick = () => {
    if (current === 0 && onBook) {
      onBook();
    } else {
      const element = document.getElementById(current === 1 ? 'offers' : 'contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-black group">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${SLIDES[current].image})` }}
          ></div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center p-4">
            <div className="max-w-4xl px-4">
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-3xl md:text-5xl lg:text-7xl font-black text-white uppercase leading-tight mb-8 drop-shadow-lg"
              >
                {SLIDES[current].title}
              </motion.h1>

              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCtaClick}
                className="skew-btn bg-swiss-red text-white px-8 py-4 md:px-10 md:py-5 text-lg font-bold uppercase tracking-widest shadow-lg hover:bg-red-700 transition-all"
              >
                <span className="skew-btn-content block">
                  {SLIDES[current].cta}
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-swiss-red text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-swiss-red text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={32} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1);
              setCurrent(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? 'bg-swiss-red w-10' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

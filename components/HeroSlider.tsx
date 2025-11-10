
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Slide {
  id: number;
  image: string;
  title: string;
}

const slides: Slide[] = [
  { id: 0, image: 'https://picsum.photos/seed/maternity/1920/1080', title: 'Maternity & Pregnancy Care' },
  { id: 1, image: 'https://picsum.photos/seed/newborn/1920/1080', title: 'Newborn & Postnatal Care' },
  { id: 2, image: 'https://picsum.photos/seed/wellness/1920/1080', title: 'Women’s Health & Wellness' },
];

const sliderVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const HeroSlider: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([(page + newDirection + slides.length) % slides.length, newDirection]);
  };

  useEffect(() => {
    const timer = setTimeout(() => paginate(1), 5000);
    return () => clearTimeout(timer);
  }, [page]);

  return (
    <div className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          className="absolute w-full h-full"
          custom={direction}
          variants={sliderVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        >
          <img src={slides[page].image} alt={slides[page].title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
        >
          Compassionate Women’s Healthcare <br/> with Expertise & Care.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6"
        >
          <Link to="/appointment" className="bg-brand-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-500 transition-all duration-300 shadow-lg">
            Book Appointment
          </Link>
          <Link to="/contact" className="bg-white text-brand-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
            Contact Now
          </Link>
        </motion.div>
      </div>
       <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setPage([index, index > page ? 1 : -1])}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${page === index ? 'bg-white scale-125' : 'bg-white/50'}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;

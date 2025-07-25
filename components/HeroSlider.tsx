'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    image: '/hero1.jpg',
    
  },
  {
    id: 2,
    image: '/hero1.jpg',
 
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* 👉 Mobile-only Static Image */}
      <div className="sm:hidden relative h-[300px] mt-4 w-full">
        <Image
          src="/hero1.jpg"
          alt="Hero Mobile"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* 👉 Desktop/Tablet Slider */}
      <div className="hidden sm:block relative h-[70vh] md:h-[80vh] w-full overflow-hidden mt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentSlide].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={slides[currentSlide].image}
              alt="Slide"
              className="w-full h-full object-cover"
            />

            
           
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

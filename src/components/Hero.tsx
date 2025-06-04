import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-6 animate-fade-in">
          Experience Luxury by the Beach
        </h2>
        <p className="text-xl md:text-2xl text-white max-w-3xl mb-12 animate-fade-in font-light">
          Discover the perfect blend of tranquility and luxury at our exclusive beachfront resort
        </p>
        <button 
          onClick={scrollToBooking}
          className="group relative inline-flex items-center px-10 py-4 bg-white text-gray-900 rounded-full transition-all duration-500 text-lg font-medium overflow-hidden hover:shadow-2xl hover:shadow-white/20 animate-fade-in"
        >
          <span className="relative z-10">Book Your Stay</span>
          <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </button>
        
        <button 
          onClick={scrollToBooking}
          className="absolute bottom-10 text-white transition-transform duration-300 hover:translate-y-2"
          aria-label="Scroll down"
        >
          <ChevronDown size={36} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { CheckCircle } from 'lucide-react';

const ExperienceHighlight = () => {
  return (
    <section className="py-24 relative bg-gray-900">
      <div className="absolute inset-0 bg-experience-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-6">
            Experience Luxury Beyond Compare
          </h2>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed">
            Discover a world of carefully curated experiences designed for unforgettable moments
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-white border border-white/10 hover:bg-white/10 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/20"
            >
              <CheckCircle className="mb-6 text-primary-400 w-12 h-12 transform group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-2xl font-medium mb-4">{feature.title}</h3>
              <p className="text-white/80 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="group relative inline-flex items-center px-10 py-4 bg-white text-gray-900 rounded-full transition-all duration-500 font-medium text-lg overflow-hidden">
            <span className="relative z-10">Discover Our Experiences</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    title: 'Exclusive Events',
    description: 'Access to world-class music festivals and cultural events throughout the year',
  },
  {
    title: 'Luxury Amenities',
    description: 'Premium facilities including infinity pools, private beaches, and spa services',
  },
  {
    title: 'Personalized Service',
    description: 'Dedicated concierge team ensuring your stay exceeds every expectation',
  },
];

export default ExperienceHighlight;
import React, { useEffect, useRef, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';
import ExperienceCard from './ExperienceCard';

const experiencesData = [
  {
    id: 1,
    title: 'Beach Music Festival',
    description: 'The world\'s premier electronic music festival on the beach',
    image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
    duration: '3 days',
  },
  {
    id: 2,
    title: 'Tropical Paradise',
    description: 'Immerse yourself in Latin and Caribbean rhythms in our exclusive beachfront resort',
    image: 'https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg',
    duration: '2 days',
  },
];

const FeaturedExperiences = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        requestAnimationFrame(() => {
          entry.target.classList.add('animate-fade-slide-up', 'opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        });
        // Unobserve after animation to save resources
        observerRef.current?.unobserve(entry.target);
      }
    });
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    };

    observerRef.current = new IntersectionObserver(handleIntersect, observerOptions);
    
    const cards = document.querySelectorAll('.experience-card');
    cards.forEach((card) => {
      card.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-1000');
      observerRef.current?.observe(card);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleIntersect]);

  return (
    <section id="experiences" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-display text-4xl font-semibold mb-3 text-gray-900 animate-fade-in">
          Unforgettable Experiences
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg animate-fade-in animation-delay-200">
          Discover extraordinary events and exclusive experiences at our luxury resort
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {experiencesData.map((experience, index) => (
            <div 
              key={experience.id} 
              className="experience-card"
              style={{ willChange: 'transform, opacity' }}
            >
              <ExperienceCard experience={experience} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 opacity-0 translate-y-10 transition-all duration-1000 animate-fade-slide-up animation-delay-400">
          <a 
            href="#all-experiences" 
            className="group relative inline-flex items-center px-10 py-4 bg-gray-900 text-white rounded-full transition-all duration-500 font-medium text-lg overflow-hidden hover:shadow-xl hover:shadow-gray-900/10"
          >
            <span className="relative z-10 flex items-center">
              View All Experiences
              <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-2 transition-transform duration-500" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperiences;
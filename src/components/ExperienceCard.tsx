import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
}

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 group border border-gray-100 hover:border-gray-200">
      <div className="relative h-80 overflow-hidden">
        <img
          src={experience.image}
          alt={experience.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 transition-opacity duration-700 group-hover:opacity-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>
      
      <div className="p-8 relative">
        <div className="absolute inset-x-0 top 0 h-24 bg-gradient-to-b from-white to-transparent" />
        <h3 className="font-display text-2xl font-medium mb-3 text-gray-900 transform transition-transform duration-500 group-hover:-translate-y-1">{experience.title}</h3>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed transform transition-transform duration-500 group-hover:-translate-y-1">{experience.description}</p>
        
        <div className="flex justify-between items-center pt-6 border-t border-gray-100">
          <div className="flex items-center text-gray-500 transform transition-all duration-500 group-hover:-translate-y-1 group-hover:text-gray-700">
            <Clock size={18} className="mr-2 transition-transform duration-500 group-hover:scale-110" />
            <span className="text-lg">{experience.duration}</span>
          </div>
          
          <button className="group/btn relative inline-flex items-center px-8 py-3.5 bg-gray-900 text-white rounded-full transition-all duration-500 font-medium overflow-hidden hover:shadow-xl hover:shadow-gray-900/10 transform hover:-translate-y-0.5">
            <span className="relative z-10 flex items-center">
              Book Now
              <ArrowRight size={18} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-500" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
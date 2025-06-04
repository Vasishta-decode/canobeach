import React from 'react';
import { ArrowRight, Check, Square } from 'lucide-react';

interface Room {
  id: number;
  title: string;
  image: string;
  price: string;
  perNight: boolean;
  features: string[];
  sqm: number;
}

interface RoomCardProps {
  room: Room;
}

const RoomCard = ({ room }: RoomCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100">
      <div className="relative h-72 overflow-hidden">
        <img
          src={room.image}
          alt={room.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full transform transition-all duration-500 group-hover:scale-105">
          <div className="flex items-baseline">
            <span className="text-2xl font-semibold text-primary-500">{room.price}</span>
            {room.perNight && <span className="text-sm text-gray-600 ml-1">/ night</span>}
          </div>
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="font-display text-2xl font-medium mb-4 text-gray-900 line-clamp-1">{room.title}</h3>
        
        <div className="mb-6">
          <ul className="grid grid-cols-2 gap-3">
            {room.features.map((feature, index) => (
              <li 
                key={index} 
                className="flex items-center text-gray-600 transform transition-transform duration-300 hover:translate-x-1"
              >
                <Check size={18} className="text-primary-500 mr-2" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-100">
          <div className="flex items-center text-gray-500 group/size transition-all duration-300 hover:text-primary-500">
            <span className="flex items-center">
              <Square size={16} className="mr-2 transition-transform duration-300 group-hover/size:scale-110" />
              {room.sqm} m²
            </span>
          </div>
          
          <button className="flex items-center px-8 py-3.5 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-500 font-medium group/btn hover:shadow-xl hover:shadow-gray-900/10 hover:scale-105 active:scale-95 relative overflow-hidden">
            <span className="relative z-10">View Details</span>
            <ArrowRight size={16} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-500 relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
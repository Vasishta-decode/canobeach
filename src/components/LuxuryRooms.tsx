import React from 'react';
import RoomCard from './RoomCard';

const roomsData = [
  {
    id: 1,
    title: 'Oceanfront Suite with Private Terrace',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
    price: '$399',
    perNight: true,
    features: ['Ocean View', 'King Bed', 'Private Terrace', 'Mini Bar'],
    sqm: 65,
  },
  {
    id: 2,
    title: 'Deluxe Suite with Bay View',
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg',
    price: '$299',
    perNight: true,
    features: ['Bay View', 'Queen Bed', 'Balcony', 'Jacuzzi'],
    sqm: 55,
  },
  {
    id: 3,
    title: 'Presidential Suite with Ocean View',
    image: 'https://images.pexels.com/photos/276671/pexels-photo-276671.jpeg',
    price: '$599',
    perNight: true,
    features: ['Panoramic View', 'King Bed', 'Private Pool', 'Full Bar'],
    sqm: 120,
  },
];

const LuxuryRooms = () => {
  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-display text-4xl font-semibold mb-3 text-gray-900">Luxury Suites</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
          Experience unparalleled comfort in our elegantly designed luxury accommodations
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomsData.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button 
            className="group inline-flex items-center px-10 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-500 text-lg font-medium relative overflow-hidden hover:shadow-xl hover:shadow-gray-900/10"
          >
            <span className="relative z-10">Explore All Suites</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LuxuryRooms;
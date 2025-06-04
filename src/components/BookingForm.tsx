import React, { useState } from 'react';
import { Calendar, Users, Search } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BookingForm = () => {
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [guests, setGuests] = useState(2);

  const handleGuestChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGuests(parseInt(e.target.value));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search with:', { checkInDate, checkOutDate, guests });
    // Implement search functionality
  };

  return (
    <section id="booking-section" className="py-6 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto -mt-20 backdrop-blur-md bg-white/90 rounded-2xl shadow-2xl p-8 transition-all duration-500 hover:shadow-3xl hover:bg-white/95">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row md:items-end gap-6">
            <div className="flex-1">
              <label className="block text-gray-700 mb-3 font-medium">Check In</label>
              <div className="relative group">
                <DatePicker
                  selected={checkInDate}
                  onChange={(date) => setCheckInDate(date)}
                  selectsStart
                  startDate={checkInDate}
                  endDate={checkOutDate}
                  minDate={new Date()}
                  placeholderText="Select date"
                  className="w-full border border-gray-200 rounded-xl py-3 px-5 pl-12 bg-white/50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300 text-gray-900"
                />
                <Calendar size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
              </div>
            </div>
            
            <div className="flex-1">
              <label className="block text-gray-700 mb-3 font-medium">Check Out</label>
              <div className="relative group">
                <DatePicker
                  selected={checkOutDate}
                  onChange={(date) => setCheckOutDate(date)}
                  selectsEnd
                  startDate={checkInDate}
                  endDate={checkOutDate}
                  minDate={checkInDate || new Date()}
                  placeholderText="Select date"
                  className="w-full border border-gray-200 rounded-xl py-3 px-5 pl-12 bg-white/50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300 text-gray-900"
                />
                <Calendar size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
              </div>
            </div>
            
            <div className="flex-1">
              <label className="block text-gray-700 mb-3 font-medium">Guests</label>
              <div className="relative group">
                <select
                  value={guests}
                  onChange={handleGuestChange}
                  className="w-full border border-gray-200 rounded-xl py-3 px-5 pl-12 bg-white/50 appearance-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300 text-gray-900 cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
                <Users size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
              </div>
            </div>
            
            <button
              type="submit"
              className="group relative inline-flex items-center justify-center px-8 py-3 bg-gray-900 text-white rounded-xl transition-all duration-500 hover:shadow-xl hover:shadow-gray-900/10 md:self-stretch overflow-hidden"
            >
              <span className="relative z-10 flex items-center text-lg font-medium">
                Search
                <Search size={20} className="ml-2 transform group-hover:scale-110 transition-transform duration-500" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
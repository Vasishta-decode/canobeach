import React from 'react';
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-display text-2xl font-semibold mb-4">Canobeach</h3>
            <p className="text-gray-400 mb-6">
              Experience luxury and tranquility at our exclusive beachfront resort.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#rooms" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Rooms & Suites
                </a>
              </li>
              <li>
                <a href="#experiences" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Experiences
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Dining
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Spa & Wellness
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Events
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-primary-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Beachfront Boulevard, Tropical Paradise, 98765</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">+1 (234) 567-8900</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-primary-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">info@canobeach.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>Reception:</span>
                <span>24/7</span>
              </li>
              <li className="flex justify-between">
                <span>Restaurant:</span>
                <span>7:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Spa:</span>
                <span>9:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Pool:</span>
                <span>8:00 - 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>Fitness Center:</span>
                <span>6:00 - 22:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-700 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Canobeach Resort. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
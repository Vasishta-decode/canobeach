import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribing email:', email);
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl font-semibold mb-4 text-gray-900">
            Stay Updated with Special Offers
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Subscribe to our newsletter and be the first to receive exclusive deals and promotions
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-grow px-8 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-lg transition-all duration-300"
              required
            />
            <button
              type="submit"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-full transition-all duration-500 text-lg font-medium overflow-hidden hover:shadow-xl hover:shadow-gray-900/10"
            >
              <span className="relative z-10 flex items-center">
                Subscribe
                <Send size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-500" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </form>
          
          {isSubmitted && (
            <div className="mt-6 text-success-500 animate-fade-in text-lg">
              Thank you for subscribing! We'll be in touch soon.
            </div>
          )}
          
          <p className="text-gray-500 text-sm mt-8">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
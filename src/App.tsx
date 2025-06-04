import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BookingForm from './components/BookingForm';
import FeaturedExperiences from './components/FeaturedExperiences';
import ExperienceHighlight from './components/ExperienceHighlight';
import LuxuryRooms from './components/LuxuryRooms';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showFlash, setShowFlash] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Loading sequence
    const progressSteps = [
      { progress: 35, delay: 800 },
      { progress: 65, delay: 1400 },
      { progress: 85, delay: 1800 },
      { progress: 100, delay: 2200 }
    ];

    const timers: number[] = [];

    progressSteps.forEach(({ progress, delay }) => {
      const timer = setTimeout(() => {
        setLoadingProgress(progress);
      }, delay);
      timers.push(timer);
    });

    // Handle flash and loading screen removal
    const flashTimer = setTimeout(() => {
      setShowFlash(true);
      const removeLoadingTimer = setTimeout(() => {
        setIsLoading(false);
      }, 300);
      timers.push(removeLoadingTimer);
    }, 2400);
    timers.push(flashTimer);

    return () => {
      document.documentElement.style.scrollBehavior = '';
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
        {/* Flash overlay - making it more intense with a brighter white */}
        <div className={`fixed inset-0 bg-white transition-all duration-500 ${showFlash ? 'opacity-100' : 'opacity-0'} z-50`}></div>
        
        <div className={`relative text-center transition-opacity duration-300 ${showFlash ? 'opacity-0' : 'opacity-100'}`}>
          {/* Galaxy Loader */}
          <div className="flex justify-center items-center">
            <div className="relative w-24 h-24">
              <div className="w-full h-full rounded-full border-t-4 border-b-4 border-white animate-spin"></div>
              <div className="w-full h-full rounded-full border-r-4 border-l-4 border-white/30 animate-spin absolute top-0 left-0" 
                style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
              <div className="w-full h-full rounded-full border-t-4 border-b-4 border-white/10 animate-spin absolute top-0 left-0" 
                style={{ animationDuration: '2s' }}></div>
            </div>
          </div>

          {/* Text Animation */}
          <div className="mt-12 space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-white animate-fade-in">
              Welcome to Vasishta Projects
            </h2>
            <p className="text-lg text-gray-500 animate-fade-in animation-delay-200">
              Wait for the galaxy to unfold...
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mt-8 w-48 h-1 mx-auto bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white/30 transition-all duration-500 ease-out rounded-full"
              style={{ width: `${loadingProgress}%` }}
            ></div>
            <div className="absolute -bottom-6 left-0 right-0 text-gray-500 text-sm">
              {loadingProgress}%
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white antialiased animate-fade-in duration-1000">
      <Header />
      <main className="animate-fade-slide-up">
        <Hero />
        <BookingForm />
        <FeaturedExperiences />
        <ExperienceHighlight />
        <LuxuryRooms />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
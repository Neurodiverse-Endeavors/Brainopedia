import React, { useState, useEffect } from 'react';
import { X, Heart } from 'lucide-react';

interface DonationBannerProps {
  onNavigateTo: () => void; // FIXED: Now perfectly matches App.tsx!
}

export function DonationBanner({ onNavigateTo }: DonationBannerProps) {
  // Start false so it doesn't "flash" on the screen for frequent flyers
  const [isVisible, setIsVisible] = useState(false); 

  useEffect(() => {
    // Check browser memory for the exact time they clicked 'X'
    const dismissedAt = localStorage.getItem('donation-banner-dismissed-date');
    
    if (dismissedAt) {
      const dismissDate = parseInt(dismissedAt, 10);
      // Calculate how many days it has been since they closed it
      const daysSinceDismissed = (Date.now() - dismissDate) / (1000 * 60 * 60 * 24);
      
      // If it has been less than 7 days, keep it hidden
      if (daysSinceDismissed < 7) {
        setIsVisible(false);
        return;
      }
    }
    
    // If they've never closed it, or it's been 7+ days, show the banner!
    setIsVisible(true);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    // Stamp the exact current time into the browser memory
    localStorage.setItem('donation-banner-dismissed-date', Date.now().toString());
  };

  const handleDonate = () => {
    onNavigateTo(); // FIXED: Now successfully triggers the navigation!
    handleDismiss(); // Still hides the banner after they click donate
  };

  if (!isVisible) return null;

  return (
    <div className="bg-[#faf0e3] border-t-2 border-[#0c264d]/20 shadow-sm clear-both md:hidden">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-start gap-2">
            <Heart className="w-4 h-4 text-[#2abcd4] flex-shrink-0 mt-0.5" fill="#2abcd4" />
            <p className="text-xs text-[#0c264d]">
              <strong>Help keep Brainopedia free and accessible.</strong> If everyone reading this gave just <strong>$5</strong>, we could continue providing valuable resources for the neurodivergent community.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDonate}
              className="bg-[#0c264d] text-white px-3 py-1 rounded-md hover:bg-[#0c264d]/90 transition-colors flex items-center gap-1.5 whitespace-nowrap text-xs font-semibold"
            >
              <Heart className="w-3 h-3" />
              <span>Donate Now</span>
            </button>
            <button
              onClick={handleDismiss}
              className="p-1 hover:bg-[#0c264d]/10 rounded-md transition-colors"
              aria-label="Dismiss donation banner"
            >
              <X className="w-4 h-4 text-[#0c264d]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
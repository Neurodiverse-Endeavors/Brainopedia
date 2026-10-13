import React from 'react';

interface FooterProps {
  setCurrentArticle?: (article: string) => void;
}

export function Footer({ setCurrentArticle }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0c264d] text-white py-8 mt-12 border-t-4 border-[#ffd166]">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright Notice */}
          <div className="text-center md:text-left">
            <p className="text-sm">
              © {currentYear} <span className="font-semibold">Neurodiverse Endeavors</span> DBA <span className="font-semibold">Brainopedia.org</span>
            </p>
            <p className="text-xs text-gray-300 mt-1">
              All rights reserved.
            </p>
          </div>
          
          {/* Footer Navigation Links */}
          <div className="flex gap-6 text-sm">
            <button
              type="button"
              onClick={() => setCurrentArticle?.('privacy')}
              className="text-gray-300 hover:text-[#ffd166] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setCurrentArticle?.('terms')}
              className="text-gray-300 hover:text-[#ffd166] transition-colors cursor-pointer"
            >
              Terms of Use
            </button>
            <button
              type="button"
              onClick={() => setCurrentArticle?.('contact')}
              className="text-gray-300 hover:text-[#ffd166] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-gray-700 text-center text-xs text-gray-400">
          <ul className="space-y-1">
            <li>Brainopedia.org is an official project of Neurodiverse Endeavors, a registered 501(c)(3) non-profit organization.</li>
            <li>Brainopedia serves as a free, comprehensive encyclopedia dedicated to neurodivergent conditions and brain differences.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
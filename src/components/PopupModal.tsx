import React, { useState } from 'react';
import { X } from 'lucide-react';

const PopupModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClaimOffer = () => {
    // Scroll to the products section
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
    // Close the popup
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-2xl rounded-lg bg-nasteaBeige-light shadow-xl overflow-hidden">
        {/* Image Section */}
        <div className="relative h-56 sm:h-72 w-full">
          <img
            src="/images/popup/nastea-popup.jpg"
            alt="Nastea Promotional"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-nasteaBeige-light"></div>
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 text-nasteaGreen-dark hover:text-nasteaGreen bg-white rounded-full p-1 shadow-md z-10"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content Section */}
        <div className="p-6 relative">
          <h2 className="text-2xl font-bold text-nasteaGreen-dark mb-2 flex items-center gap-2">
            <span role="img" aria-label="shopping bag">🛍️</span> 50% Off Your First Order!
          </h2>
          <p className="text-nasteaGray mb-6">
            Welcome to Nastea! As a warm welcome, we're giving you an exclusive 50% discount on your first shopping spree. Hurry — this deal is for new shoppers only and for a limited time!
          </p>
          <button
            onClick={handleClaimOffer}
            className="w-full bg-nasteaGreen hover:bg-nasteaGreen-dark text-nasteaWhite font-bold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all"
          >
            Order now via WhatsApp!
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupModal; 
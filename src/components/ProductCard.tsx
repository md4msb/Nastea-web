import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react'; // Example icon

interface ProductCardProps {
  imageSrc: string;
  name: string;
  price: string;
  originalPrice?: string;
  whatsappNumber: string;
  whatsappMessage: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  name,
  price,
  originalPrice,
  whatsappNumber,
  whatsappMessage,
}) => {
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-nasteaWhite rounded-lg shadow-xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
      <div className="w-full h-56 sm:h-64 overflow-hidden">
        <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-serif font-semibold text-nasteaGreen-dark mb-2">{name}</h3>
        <div className="flex items-end gap-3 mb-6">
          <span className="text-2xl font-serif font-bold text-nasteaGreen">{price}</span>
          {originalPrice && (
            <span className="text-lg font-serif text-gray-400 line-through" style={{ textDecorationColor: 'red', textDecorationThickness: '2px' }}>{originalPrice}</span>
          )}
        </div>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto"
        >
          <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md transition-colors">
            <ShoppingCart size={18} className="mr-2" /> Buy on WhatsApp
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;


import React from 'react';
import { Star } from 'lucide-react'; // Assuming Star icon is available

interface TestimonialCardProps {
  quote: string;
  author: string;
  location?: string;
  rating: number; // Rating out of 5
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, location, rating }) => {
  return (
    <div className="bg-nasteaWhite p-8 rounded-lg shadow-lg h-full flex flex-col">
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>
      <p className="text-nasteaGray italic text-lg mb-6 flex-grow">"{quote}"</p>
      <div>
        <p className="font-semibold font-serif text-nasteaGreen-dark">{author}</p>
        {location && <p className="text-nasteaGray-light text-sm">{location}</p>}
      </div>
    </div>
  );
};

export default TestimonialCard;

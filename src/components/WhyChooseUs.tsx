
import React from 'react';
import { CheckCircle2, Leaf, Zap, Sun } from 'lucide-react'; // Example icons

interface USPItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const USPItem: React.FC<USPItemProps> = ({ icon: Icon, title, description }) => (
  <div className="flex items-start space-x-4 p-4 bg-nasteaWhite rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="flex-shrink-0">
      <Icon className="h-8 w-8 text-nasteaGreen" />
    </div>
    <div>
      <h4 className="text-xl font-serif font-semibold text-nasteaGreen-dark mb-1">{title}</h4>
      <p className="text-nasteaGray">{description}</p>
    </div>
  </div>
);

const WhyChooseUs: React.FC = () => {
  const usps = [
    {
      icon: Leaf,
      title: 'Handpicked Leaves',
      description: 'Carefully selected from the finest tea gardens for unparalleled quality.',
    },
    {
      icon: Zap,
      title: '100% Natural Flavors',
      description: 'Experience the pure taste of nature with no artificial additives.',
    },
    {
      icon: Sun,
      title: 'Grown in Kerala',
      description: 'Sourced from the lush, pristine hills of Kerala, ensuring authentic taste.',
    },
    {
      icon: CheckCircle2,
      title: 'Sustainably Sourced',
      description: 'Committed to ethical and environmentally friendly farming practices.',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-nasteaBeige">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-nasteaGreen-dark mb-4">
            Why Choose Nastea?
          </h2>
          <p className="text-lg text-nasteaGray max-w-2xl mx-auto">
            We believe in offering an authentic tea experience that delights your senses and nourishes your soul.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {usps.map((usp) => (
            <USPItem key={usp.title} icon={usp.icon} title={usp.title} description={usp.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

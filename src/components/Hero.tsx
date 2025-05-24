import React from 'react';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';

const Hero: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    dragFree: false
  });

  const heroImages = [
    "/images/hero/nastea-hero.png",
    "/images/hero/nastea-hero-2.jpg",
    // Add more images as needed
  ];

  useEffect(() => {
    if (emblaApi) {
      // Auto-play functionality
      const autoplay = () => {
        emblaApi.scrollNext();
      };
      
      const interval = setInterval(autoplay, 5000); // Change slide every 5 seconds
      
      return () => {
        clearInterval(interval);
      };
    }
  }, [emblaApi]);

  return (
    <section className="relative bg-nasteaBeige-light text-nasteaGray-dark min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden select-none" ref={emblaRef}>
        <div className="flex h-full">
          {heroImages.map((imageUrl, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 relative h-full"
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ 
                  backgroundImage: `url('${imageUrl}')`,
                  backgroundPosition: 'center center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-nasteaWhite mb-6">
          Nastea
        </h1>
        <p className="text-xl sm:text-2xl font-sans text-nasteaWhite/90 mb-10 max-w-2xl mx-auto">
          Sip the Serenity of Nature. Premium Organic Indian Teas, Crafted with Passion.
        </p>
        <div>
          <a href="#products">
            <Button size="lg" className="bg-nasteaGreen hover:bg-nasteaGreen-dark text-nasteaWhite font-semibold py-3 px-8 rounded-md shadow-lg transition-transform duration-300 hover:scale-105">
              Explore Our Teas
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

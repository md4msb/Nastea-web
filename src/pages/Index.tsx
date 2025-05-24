import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import TestimonialCard from '@/components/TestimonialCard';
import WhyChooseUs from '@/components/WhyChooseUs';
import Footer from '@/components/Footer';
import PopupModal from '@/components/PopupModal';

const Index: React.FC = () => {
  // Placeholder product data
  const products = [
    {
      id: '1',
      imageSrc: '/images/products/nastea-tea-200gm.jpg',
      name: 'Nastea pure natural tea powder (200gm)',
      price: '₹240', 
      originalPrice: '₹280',
      whatsappNumber: '+917034271777',
      whatsappMessage: "Hello Nastea, I'm interested in Nastea pure natural tea powder (200gm)!",
    },
    {
      id: '2',
      imageSrc: '/images/products/nastea-tea-500gm.jpg',
      name: 'Nastea pure natural tea powder (500gm)',
      price: '₹350',
      originalPrice: '₹400',
      whatsappNumber: '+917034271777',
      whatsappMessage: "Hello Nastea, I'm interested in Nastea pure natural tea powder (500gm)!",
    },
  ];

  // Placeholder testimonial data
  const testimonials = [
    {
      id: '1',
      quote: "I ordered through WhatsApp and the experience was super smooth. Fast delivery, great packaging, and the taste? Perfectly balanced with every sip!",
      author: 'Arun',
      location: 'Bangalore, Karnataka',
      rating: 5,
    },
    {
      id: '2',
      quote: 'Nastea exceeded my expectations! From the first sip, I could tell it was crafted with care. The discount offer made it even better. I’m definitely coming back for more!',
      author: 'Neha',
      location: 'Kochi, Kerala',
      rating: 5,
    },
    {
      id: '3',
      quote: 'I’ve been recommending Nastea to all my friends! It tastes amazing, and I really appreciate the attention to quality and customer service. Highly recommended!',
      author: 'Vivek',
      location: 'Palakkad, Kerala',
      rating: 4,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-nasteaBeige-light">
      <Navbar />
      <PopupModal />
      <main className="flex-grow">
        <Hero />

        {/* Products Section */}
        <section id="products" className="py-16 sm:py-24 bg-nasteaBeige-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-nasteaGreen-dark mb-4">
                Our Signature Teas
              </h2>
              <p className="text-lg text-nasteaGray max-w-xl mx-auto">
                Experience the finest selection of organic teas, curated for your delight.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  imageSrc={product.imageSrc}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  whatsappNumber={product.whatsappNumber}
                  whatsappMessage={product.whatsappMessage}
                />
              ))}
            </div>
          </div>
        </section>

        <WhyChooseUs />

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 sm:py-24 bg-nasteaGreen-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-nasteaGreen-dark mb-4">
                What Our Customers Say
              </h2>
              <p className="text-lg text-nasteaGray-dark max-w-xl mx-auto">
                Hear from tea lovers who have experienced the Nastea difference.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  location={testimonial.location}
                  rating={testimonial.rating}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import React, { useEffect, useState, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Exceptional work! The design exceeded our expectations and the attention to detail was remarkable. Highly recommend for any creative project.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager, InnovateCorp',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Professional, creative, and delivered on time. The mobile app design was exactly what we needed to launch our product successfully.'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director, BrandCo',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Amazing collaboration experience. The branding work helped us establish a strong market presence. Creative solutions that truly work.'
    },
    {
      id: 4,
      name: 'David Wilson',
      role: 'Founder, StartupHub',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Outstanding web development skills. The website performance improved significantly and user engagement increased by 300%.'
    },
    {
      id: 5,
      name: 'Lisa Kim',
      role: 'COO, Finwise',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'They were responsive, proactive, and delivered beyond our expectations. Couldn’t be happier with the results!'
    }
  ];

  const visibleCards = 4;
  const totalSlides = Math.ceil(testimonials.length / visibleCards);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000); // 4 detik

    return () => clearInterval(interval);
  }, [totalSlides]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.scrollTo({
        left: slider.offsetWidth * currentSlide,
        behavior: 'smooth',
      });
    }
  }, [currentSlide]);

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="text-lime-400">Client's Says</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </p>
        </div>

        <div
          ref={sliderRef}
          className="overflow-hidden"
        >
          <div
            className="flex transition-transform duration-500"
            style={{ width: `${(testimonials.length / visibleCards) * 100}%` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full md:w-1/2 lg:w-1/4 p-4"
              >
                <div className="bg-black p-6 rounded-2xl hover:bg-gray-800 transition-all duration-300 group border border-gray-800 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-lime-400 mb-4">
                      <Quote size={32} />
                    </div>

                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, index) => (
                        <Star key={index} className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </div>

                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {totalSlides > 1 && (
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-lime-400' : 'bg-gray-600'}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;

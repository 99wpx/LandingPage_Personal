import React, { useState, useRef } from 'react';
import { Check, Star, ChevronLeft, ChevronRight } from 'lucide-react';



const Pricing = () => {
  const plans = [
    {
      name: 'Basic Plan',
      price: 49,
      period: 'month',
      description: 'Perfect for small projects and startups',
      features: ['Single Project', 'Basic Support', '5 Revisions', 'Source Files', '30 Days Support'],
      popular: false
    },
    {
      name: 'Pro Plan',
      price: 99,
      period: 'month',
      description: 'Ideal for growing businesses',
      features: ['Up to 5 Projects', 'Priority Support', 'Unlimited Revisions', 'Source Files', 'Advanced Features', '90 Days Support'],
      popular: true
    },
    {
      name: 'Premium Plan',
      price: 199,
      period: 'month',
      description: 'For established companies',
      features: ['Unlimited Projects', '24/7 Priority Support', 'Unlimited Revisions', 'Source Files', 'Advanced Features', 'Custom Integrations', '1 Year Support'],
      popular: false
    },
    {
      name: 'Enterprise Plan',
      price: 399,
      period: 'month',
      description: 'Custom solutions for enterprises',
      features: ['Unlimited Everything', 'Dedicated Account Manager', 'Custom Integrations', 'Training & Onboarding', '24/7 Premium Support'],
      popular: false
    }
  ];

  const visibleCards = 3;
  const totalSlides = Math.ceil(plans.length / visibleCards);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const handleSlide = (direction: 'left' | 'right') => {
  const newIndex = direction === 'left'
    ? Math.max(currentSlide - 1, 0)
    : Math.min(currentSlide + 1, totalSlides - 1);

  setCurrentSlide(newIndex);

  if (sliderRef.current) {
    const slider = sliderRef.current;
    slider.scrollTo({
      left: slider.offsetWidth * newIndex,
      behavior: 'smooth'
    });
  }
};


  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Pricing <span className="text-lime-400">Plan</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include our core features with different levels of support and customization.
          </p>
        </div>

        <div className="relative">
          {/* Panah Kiri */}
          {currentSlide > 0 && (
            <button
              onClick={() => handleSlide('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Panah Kanan */}
          {currentSlide < totalSlides - 1 && (
            <button
              onClick={() => handleSlide('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full"
            >
              <ChevronRight size={24} />
            </button>
          )}

          {/* Slider */}
          <div ref={sliderRef} className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ width: `${(plans.length / visibleCards) * 75}%` }}
            >
              {plans.map((plan, index) => (
                <div key={index} className="w-full md:w-1/3 p-4 flex-shrink-0">
                  <div
                    className={`relative h-full flex flex-col justify-between bg-gray-900 p-8 rounded-2xl border ${
                      plan.popular ? 'border-lime-400 shadow-2xl border-2' : 'border-gray-800'
                    } hover:scale-[1.02] transition-transform duration-300`}
                    style={{ minHeight: '100%' }}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-lime-400 text-black px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                          <Star className="mr-1" size={16} />
                          Most Popular
                        </div>
                      </div>
                    )}

                    <div>
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <p className="text-gray-400 mb-4">{plan.description}</p>
                        <div className="flex items-baseline justify-center">
                          <span className="text-5xl font-bold text-lime-400">${plan.price}</span>
                          <span className="text-gray-400 ml-2">/{plan.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <Check className="text-lime-400 mr-3 flex-shrink-0" size={20} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto">
                      <button
                        className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                          plan.popular
                            ? 'bg-lime-400 text-black hover:bg-lime-500'
                            : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700 hover:border-lime-400'
                        }`}
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Need a custom solution?</p>
          <button className="text-lime-400 font-semibold hover:text-lime-300 transition-colors duration-300">
            Contact us for enterprise pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

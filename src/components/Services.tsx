import React, { useState } from 'react';
import { Palette, Code, Smartphone, Globe, ArrowRight } from 'lucide-react';

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      icon: <Palette size={40} />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and engaging user experiences with modern design principles.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
    },
    {
      icon: <Code size={40} />,
      title: 'Web Development',
      description: 'Building responsive and performant websites using cutting-edge technologies.',
      features: ['React/Next.js', 'Node.js', 'Database Design', 'API Integration']
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Mobile Apps',
      description: 'Developing native and cross-platform mobile applications.',
      features: ['React Native', 'Flutter', 'iOS/Android', 'App Store Optimization']
    },
    {
      icon: <Globe size={40} />,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your online presence.',
      features: ['SEO Optimization', 'Social Media', 'Content Strategy', 'Analytics']
    },
    {
      icon: <Code size={40} />,
      title: 'Backend Engineering',
      description: 'Building scalable APIs and managing server infrastructure.',
      features: ['Node.js', 'Express', 'MongoDB', 'Serverless Functions']
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Maintenance & Support',
      description: 'Providing ongoing support and maintenance for digital products.',
      features: ['Bug Fixing', 'Security Updates', 'Performance Monitoring', 'Support Plans']
    }
  ];

  const visibleServices = showAll ? services : services.slice(0, 4);

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Explore <span className="text-lime-400">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I offer a comprehensive range of services to help bring your digital vision to life, 
            from initial concept to final implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleServices.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-2xl hover:bg-gray-800 transition-all duration-300 group cursor-pointer border border-gray-800 hover:border-lime-400/30"
            >
              <div className="text-lime-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                    <div className="w-1.5 h-1.5 bg-lime-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="text-lime-400 font-semibold flex items-center group-hover:translate-x-2 transition-transform duration-300">
                Learn More
                <ArrowRight className="ml-2" size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        {services.length > 4 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-lime-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-lime-500 transition-all duration-300"
            >
              {showAll ? 'Show Less' : 'View All Services'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;

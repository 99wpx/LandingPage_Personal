import React from 'react';
import { ArrowRight, Star, Users, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="inline-flex items-center bg-gray-800 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-lime-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm text-gray-300">Available for work</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Welcome to My
              <span className="text-lime-400 block">Creative Space</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              I'm a passionate designer and developer creating exceptional digital experiences 
              that blend creativity with functionality. Let's bring your vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-lime-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-lime-500 transition-all duration-300 flex items-center justify-center group">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-full font-semibold hover:border-lime-400 hover:text-lime-400 transition-all duration-300">
                View Portfolio
              </button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <Users className="mr-2 text-lime-400" size={16} />
                <span>100+ Happy Clients</span>
              </div>
              <div className="flex items-center">
                <Star className="mr-2 text-lime-400" size={16} />
                <span>5.0 Rating</span>
              </div>
              <div className="flex items-center">
                <Award className="mr-2 text-lime-400" size={16} />
                <span>Award Winner</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-lime-400 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3778966/pexels-photo-3778966.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-lime-400 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-black font-bold text-sm">Hi!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
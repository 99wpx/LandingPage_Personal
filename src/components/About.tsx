import React from 'react';
import { Download, Play } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'UI/UX Design', level: 95 },
    { name: 'Web Development', level: 90 },
    { name: 'Brand Design', level: 85 },
    { name: 'Mobile Apps', level: 60 }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative">
              <div className="w-80 h-96 bg-gradient-to-br from-lime-400 to-green-600 rounded-2xl overflow-hidden transform rotate-3 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Professional working at desk"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-lime-400 font-semibold">5+ Years Experience</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-lime-400">Me</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              With over 5 years of experience in design and development, I specialize in creating 
              digital experiences that not only look amazing but also drive results. My passion 
              lies in solving complex problems through elegant design solutions.
            </p>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
              I believe in the power of collaboration and always strive to understand my clients' 
              unique needs to deliver exceptional results that exceed expectations.
            </p>

            <div className="space-y-4 mb-8">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-semibold">{skill.name}</span>
                    <span className="text-lime-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-lime-400 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
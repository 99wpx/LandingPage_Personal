import React from 'react';
import { Calendar, ArrowRight, User } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Mastering Modern Web Design Trends for 2024',
      excerpt: 'Explore the latest design trends that are shaping the digital landscape and learn how to implement them effectively.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'March 15, 2024',
      author: 'Creative Flow',
      readTime: '5 min read',
      category: 'Design'
    },
    {
      id: 2,
      title: '5 Tips to Create Your Next Design Project Look Awesome',
      excerpt: 'Discover practical tips and techniques that will elevate your design projects and make them stand out from the competition.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'March 10, 2024',
      author: 'Creative Flow',
      readTime: '7 min read',
      category: 'Tips'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Latest <span className="text-lime-400">Blogs</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stay updated with the latest insights, tips, and trends in design and development through our curated blog posts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-black rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group border border-gray-800 hover:border-lime-400/30"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-lime-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-sm">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-lime-400 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <div className="flex items-center text-sm text-gray-400">
                    <User className="mr-2" size={16} />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="mr-2" size={16} />
                    <span>{post.date}</span>
                  </div>
                  
                  <button className="text-lime-400 font-semibold flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    Read More
                    <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-lime-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-lime-500 transition-all duration-300">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
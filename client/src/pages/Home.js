import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const toolCategories = [
  {
    name: 'Text Tools',
    description: 'Text manipulation, formatting, and analysis tools',
    path: '/text-tools',
    icon: '📝',
    color: 'bg-blue-500',
  },
  {
    name: 'Image Tools',
    description: 'Image editing, conversion, and optimization tools',
    path: '/image-tools',
    icon: '🖼️',
    color: 'bg-purple-500',
  },
  {
    name: 'File Tools',
    description: 'File management, compression, and conversion tools',
    path: '/file-tools',
    icon: '📁',
    color: 'bg-green-500',
  },
  {
    name: 'Converter Tools',
    description: 'Various format conversion tools',
    path: '/converter-tools',
    icon: '🔄',
    color: 'bg-yellow-500',
  },
  {
    name: 'Developer Tools',
    description: 'Tools for developers and programmers',
    path: '/developer-tools',
    icon: '💻',
    color: 'bg-red-500',
  },
  {
    name: 'Math Tools',
    description: 'Mathematical calculation and conversion tools',
    path: '/math-tools',
    icon: '🔢',
    color: 'bg-indigo-500',
  },
  {
    name: 'Network Tools',
    description: 'Network analysis and testing tools',
    path: '/network-tools',
    icon: '🌐',
    color: 'bg-pink-500',
  },
  {
    name: 'Privacy Tools',
    description: 'Privacy and security related tools',
    path: '/privacy-tools',
    icon: '🔒',
    color: 'bg-gray-500',
  },
  {
    name: 'Social Tools',
    description: 'Social media and content tools',
    path: '/social-tools',
    icon: '👥',
    color: 'bg-teal-500',
  },
  {
    name: 'Time Tools',
    description: 'Time and date related tools',
    path: '/time-tools',
    icon: '⏰',
    color: 'bg-orange-500',
  },
];

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl"
        >
          All-in-One Tools
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
        >
          Your comprehensive collection of online tools for various tasks. Simple, fast, and efficient.
        </motion.p>
      </div>

      {/* AdSense Banner */}
      <div className="my-8 p-4 bg-white rounded-lg shadow">
        <div className="text-center text-gray-500">
          {/* AdSense code will go here */}
          <div className="h-24 bg-gray-100 rounded flex items-center justify-center">
            AdSense Banner
          </div>
        </div>
      </div>

      {/* Tool Categories Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {toolCategories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              to={category.path}
              className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center text-2xl mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
              <p className="text-gray-600">{category.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Features Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Why Choose Our Tools?</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Fast & Efficient</h3>
            <p className="text-gray-600">Get results instantly with our optimized tools</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
            <p className="text-gray-600">Simple interface designed for the best user experience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-2">Secure</h3>
            <p className="text-gray-600">Your data is processed locally and never stored</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 
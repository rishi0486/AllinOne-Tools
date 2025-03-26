import React from 'react';
import { motion } from 'framer-motion';

const ToolLayout = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* AdSense Banner - Top */}
      <div className="my-4 p-4 bg-white rounded-lg shadow">
        <div className="text-center text-gray-500">
          {/* AdSense code will go here */}
          <div className="h-24 bg-gray-100 rounded flex items-center justify-center">
            AdSense Banner
          </div>
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-8"
      >
        {children}
      </motion.div>

      {/* AdSense Banner - Bottom */}
      <div className="my-4 p-4 bg-white rounded-lg shadow">
        <div className="text-center text-gray-500">
          {/* AdSense code will go here */}
          <div className="h-24 bg-gray-100 rounded flex items-center justify-center">
            AdSense Banner
          </div>
        </div>
      </div>

      {/* Related Tools Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Tools</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Related tools will be dynamically populated */}
          <div className="bg-white rounded-lg shadow p-4">
            <h4 className="font-medium text-gray-900">Related Tool 1</h4>
            <p className="text-sm text-gray-500">Description of related tool 1</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h4 className="font-medium text-gray-900">Related Tool 2</h4>
            <p className="text-sm text-gray-500">Description of related tool 2</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h4 className="font-medium text-gray-900">Related Tool 3</h4>
            <p className="text-sm text-gray-500">Description of related tool 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolLayout; 
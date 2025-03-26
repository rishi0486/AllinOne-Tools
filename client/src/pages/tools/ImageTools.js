import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const ImageTools = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [imageInfo, setImageInfo] = useState(null);
  const fileInputRef = useRef(null);

  const tools = [
    {
      name: 'Image Resizer',
      description: 'Resize your images to specific dimensions',
      icon: '📏',
      action: (file) => {
        // Implementation for image resizing
        return {
          name: file.name,
          size: file.size,
          type: file.type,
          dimensions: 'Implementation needed'
        };
      }
    },
    {
      name: 'Image Compressor',
      description: 'Compress images to reduce file size',
      icon: '🗜️',
      action: (file) => {
        // Implementation for image compression
        return {
          originalSize: file.size,
          compressedSize: 'Implementation needed',
          compressionRatio: 'Implementation needed'
        };
      }
    },
    {
      name: 'Image Converter',
      description: 'Convert images between different formats',
      icon: '🔄',
      action: (file) => {
        // Implementation for image format conversion
        return {
          originalFormat: file.type,
          availableFormats: ['PNG', 'JPEG', 'WebP', 'GIF']
        };
      }
    }
  ];

  const [activeTool, setActiveTool] = useState(tools[0]);

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
      setImageInfo({
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: new Date(file.lastModified).toLocaleDateString()
      });
    }
  };

  const handleToolAction = () => {
    if (selectedImage) {
      const result = activeTool.action(selectedImage);
      setImageInfo(prev => ({ ...prev, ...result }));
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Image Tools</h1>
      
      {/* Tool Selection */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {tools.map((tool) => (
          <motion.button
            key={tool.name}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setActiveTool(tool);
              setImageInfo(null);
            }}
            className={`p-4 rounded-lg shadow-md text-left ${
              activeTool.name === tool.name
                ? 'bg-indigo-50 border-2 border-indigo-500'
                : 'bg-white hover:bg-gray-50'
            }`}
          >
            <div className="text-2xl mb-2">{tool.icon}</div>
            <h3 className="font-semibold text-gray-900">{tool.name}</h3>
            <p className="text-sm text-gray-500">{tool.description}</p>
          </motion.button>
        ))}
      </div>

      {/* Image Upload */}
      <div className="space-y-6">
        <div className="flex flex-col items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageSelect}
            />
          </label>
        </div>

        {/* Image Preview */}
        {previewUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-4">Preview</h3>
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        )}

        {/* Image Information */}
        {imageInfo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 bg-gray-50 rounded-lg p-4"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-4">Image Information</h3>
            <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-medium text-gray-500">Name</dt>
                <dd className="mt-1 text-sm text-gray-900">{imageInfo.name}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Size</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {(imageInfo.size / 1024).toFixed(2)} KB
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Type</dt>
                <dd className="mt-1 text-sm text-gray-900">{imageInfo.type}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Last Modified</dt>
                <dd className="mt-1 text-sm text-gray-900">{imageInfo.lastModified}</dd>
              </div>
            </dl>
          </motion.div>
        )}

        {/* Process Button */}
        {selectedImage && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleToolAction}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Process Image
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default ImageTools; 
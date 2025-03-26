import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TextTools = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const tools = [
    {
      name: 'Text Case Converter',
      description: 'Convert text between different cases (UPPERCASE, lowercase, Title Case)',
      icon: '🔄',
      action: (text) => {
        const cases = {
          uppercase: text.toUpperCase(),
          lowercase: text.toLowerCase(),
          titleCase: text
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
        };
        return cases;
      }
    },
    {
      name: 'Text Counter',
      description: 'Count characters, words, and lines in your text',
      icon: '📊',
      action: (text) => {
        return {
          characters: text.length,
          words: text.trim().split(/\s+/).filter(word => word.length > 0).length,
          lines: text.split('\n').length
        };
      }
    },
    {
      name: 'Text Reverser',
      description: 'Reverse your text or words',
      icon: '↔️',
      action: (text) => {
        return {
          fullText: text.split('').reverse().join(''),
          words: text.split(' ').map(word => word.split('').reverse().join('')).join(' ')
        };
      }
    }
  ];

  const [activeTool, setActiveTool] = useState(tools[0]);
  const [result, setResult] = useState(null);

  const handleToolAction = () => {
    const result = activeTool.action(inputText);
    setResult(result);
    setOutputText(typeof result === 'object' ? JSON.stringify(result, null, 2) : result);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Text Tools</h1>
      
      {/* Tool Selection */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {tools.map((tool) => (
          <motion.button
            key={tool.name}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setActiveTool(tool);
              setResult(null);
              setOutputText('');
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

      {/* Tool Interface */}
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Input Text
          </label>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full h-32 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your text here..."
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleToolAction}
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Process Text
        </motion.button>

        {outputText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6"
          >
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Result
            </label>
            <div className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md">
              <pre className="whitespace-pre-wrap">{outputText}</pre>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TextTools; 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ToolLayout from './components/ToolLayout';

// Import tool pages
import TextTools from './pages/tools/TextTools';
import ImageTools from './pages/tools/ImageTools';
import FileTools from './pages/tools/FileTools';
import ConverterTools from './pages/tools/ConverterTools';
import DeveloperTools from './pages/tools/DeveloperTools';
import MathTools from './pages/tools/MathTools';
import NetworkTools from './pages/tools/NetworkTools';
import PrivacyTools from './pages/tools/PrivacyTools';
import SocialTools from './pages/tools/SocialTools';
import TimeTools from './pages/tools/TimeTools';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <Navbar />
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-8"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/text-tools/*" element={<ToolLayout><TextTools /></ToolLayout>} />
            <Route path="/image-tools/*" element={<ToolLayout><ImageTools /></ToolLayout>} />
            <Route path="/file-tools/*" element={<ToolLayout><FileTools /></ToolLayout>} />
            <Route path="/converter-tools/*" element={<ToolLayout><ConverterTools /></ToolLayout>} />
            <Route path="/developer-tools/*" element={<ToolLayout><DeveloperTools /></ToolLayout>} />
            <Route path="/math-tools/*" element={<ToolLayout><MathTools /></ToolLayout>} />
            <Route path="/network-tools/*" element={<ToolLayout><NetworkTools /></ToolLayout>} />
            <Route path="/privacy-tools/*" element={<ToolLayout><PrivacyTools /></ToolLayout>} />
            <Route path="/social-tools/*" element={<ToolLayout><SocialTools /></ToolLayout>} />
            <Route path="/time-tools/*" element={<ToolLayout><TimeTools /></ToolLayout>} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 
import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaGraduationCap } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8">Project Acknowledgments</h2>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            This project was made with <FaHeart className="inline text-red-400" /> by our team under the excellent supervision of:
          </motion.p>
          <motion.div
            className="bg-white text-blue-600 rounded-full py-3 px-6 inline-block mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaGraduationCap className="inline-block mr-2 text-2xl" />
            <span className="font-semibold text-xl">Dr. Elham Golpush Nezhad</span>
          </motion.div>
          <p className="text-xl mb-8">New Media Technology Course (COM 1304)</p>
          <motion.div
            className="bg-blue-700 text-white p-8 rounded-lg shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="text-2xl font-medium mb-4">A heartfelt thank you...</p>
            <p className="text-lg">
              To our amazing supervisor, our dedicated team, and the wonderful world of Gumball 
              that inspired us. This project allowed us to explore the fascinating intersection 
              of fandom and new media technology. We're grateful for this opportunity to learn, 
              create, and grow together. May our love for animation and technology continue to 
              inspire future projects!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;


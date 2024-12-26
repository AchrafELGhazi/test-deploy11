import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFilm, FaTimes, FaLaughSquint, FaRocket, FaExclamationTriangle } from 'react-icons/fa';


const BehindTheScenes: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleVideoPlay = () => setIsVideoPlaying(true);
  const handleVideoPause = () => setIsVideoPlaying(false);
  const handleVideoError = () => setVideoError(true);

  const retryVideo = () => {
    setVideoError(false);
    if (videoRef.current) {
      videoRef.current.load();
    }
  };

  return (
    <div className="relative">
      <motion.button
        onClick={toggleModal}
        className="bg-gradient-to-r from-sky-500 to-sky-800 text-white px-6 py-3 rounded-full font-bold flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.05, rotate: [0, -5, 5, -5, 0] }}
        whileTap={{ scale: 0.95 }}
      >
        <FaFilm className="animate-spin-slow" />
        <span>Unleash the Gumball Chaos!</span>
      </motion.button>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={toggleModal}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotate: 10 }}
              className="bg-gradient-to-br from-sky-100 to-sky-200 rounded-lg p-6 max-w-3xl w-full relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                onClick={toggleModal}
                className="absolute top-2 right-2 text-sky-600 hover:text-sky-800 bg-sky-200 rounded-full p-2"
                whileHover={{ rotate: 90 }}
              >
                <FaTimes size={24} />
              </motion.button>
              <motion.h2 
                className="text-3xl font-extrabold mb-4 text-sky-600 text-center"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
              >
                Behind the Scenes: The Gumball Galore!
              </motion.h2>
              <div className="aspect-w-16 aspect-h-9 mb-4 relative">
                {!videoError ? (
                  <video
                    ref={videoRef}
                    src="/assets/Behindthe-scenes.mp4"
                    controls
                    className="w-full h-full rounded-lg object-cover"
                    onPlay={handleVideoPlay}
                    onPause={handleVideoPause}
                    onError={handleVideoError}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="w-full h-full rounded-lg bg-sky-200 flex items-center justify-center">
                    <div className="text-center">
                      <FaExclamationTriangle size={48} className="text-sky-600 mx-auto mb-2" />
                      <p className="text-sky-800 font-bold">Oops! The video is taking a Gumball-style vacation.</p>
                      <button
                        onClick={retryVideo}
                        className="mt-2 bg-sky-500 text-white px-4 py-2 rounded-full font-bold"
                      >
                        Try Again
                      </button>
                    </div>
                  </div>
                )}
                {/* {!isVideoPlaying && !videoError && (
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center bg-sky-900 bg-opacity-50 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <FaLaughSquint size={64} className="text-white animate-bounce" />
                  </motion.div>
                )} */}
              </div>
              <motion.p 
                className="text-sky-700 text-center text-lg font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Welcome to the wacky wonderland behind our Gumball Fan Project! 
                Witness our team's descent into cartoon-induced madness. Side effects may include:
              </motion.p>
              <motion.ul 
                className="list-disc list-inside text-sky-600 mt-2 space-y-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <li>Uncontrollable urges to dye your pet blue</li>
                <li>Spontaneous outbursts of Gumball quotes</li>
                <li>An irrational fear of bananas named Joe</li>
                <li>The ability to see the fourth wall (consult your doctor)</li>
              </motion.ul>
              <motion.div 
                className="mt-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <span className="text-sky-500 font-bold">Warning:</span> Prolonged exposure may result in an irresistible urge to binge-watch all seasons of Gumball. We are not responsible for any loss of productivity or sudden increase in awesome.
              </motion.div>
              <motion.button
                className="mt-4 bg-sky-500 text-white px-4 py-2 rounded-full font-bold flex items-center space-x-2 mx-auto"
                whileHover={{ scale: 1.05, rotate: [0, -5, 5, -5, 0] }}
                whileTap={{ scale: 0.95 }}
              >
                <FaRocket />
                <span>Launch into Gumball-mania!</span>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BehindTheScenes;


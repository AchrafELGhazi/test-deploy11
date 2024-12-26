import { motion } from 'framer-motion';
import React from 'react';

const HeroSection: React.FC = () => {

  return (
    <section className='relative text-center py-20 px-4 md:px-20 rounded-3xl overflow-hidden bg-gradient-to-br from-sky-600 to-sky-900'>
      <motion.h1
        className='text-4xl md:text-6xl mb-4 text-white font-bold z-10 relative'
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.2 }}
      >
        Exploring the Amazing World of Gumball: A Fandom's Influence on Society
      </motion.h1>
      <motion.p
        className='text-lg md:text-xl mb-8 text-blue-100 z-10 relative'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Join us on a wild ride through the wacky world of Gumball and its
        super-passionate fanbase. Discover how fandoms like ours turn regular
        folks into creative superheroes and make the internet a funnier place!
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className='relative w-full h-[400px] rounded-xl overflow-hidden shadow-2xl z-10'
      >
        <img
          src={'../../assets/1.jpg'}
          alt='Gumball and friends'
          className='w-full h-full object-cover'
        />
        <motion.div
          className='absolute inset-0 bg-gradient-to-t from-sky-800 to-transparent opacity-60'
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.5 }}
        />
        <motion.h2
          className='absolute bottom-4 left-4 text-white text-3xl font-bold'
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2, type: 'spring' }}
        >
          Welcome to Elmore!
        </motion.h2>
      </motion.div>

      <motion.div
        className='absolute inset-0 bg-blue-500 opacity-20'
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 0.5 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute bg-white rounded-full'
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{
              delay: Math.random() * 2,
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;

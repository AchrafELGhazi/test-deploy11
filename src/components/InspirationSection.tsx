import { motion } from 'framer-motion';
import React from 'react';

import {
  FaLightbulb,
  FaPalette,
  FaMobileAlt,
  FaBookReader,
} from 'react-icons/fa';

const InspirationSection: React.FC = () => {
  const inspirations = [
    {
      title: 'The Amazing World of Gumball',
      description:
        "Where logic goes to vacation and animation styles party like it's 1999, 2099, and everything in between!",
      icon: <FaPalette className='text-4xl text-yellow-400' />,
    },
    {
      title: 'Fan Art Communities',
      description:
        "Where stick figures evolve into masterpieces, and everyone's a Picasso (even if they draw like a potato).",
      icon: <FaLightbulb className='text-4xl text-green-400' />,
    },
    {
      title: 'New Media Platforms',
      description:
        'TikTok and Instagram: Where 15 seconds of fame lasts forever, and memes are the new Shakespeare.',
      icon: <FaMobileAlt className='text-4xl text-pink-400' />,
    },
    {
      title: 'Transmedia Storytelling',
      description:
        'Because why stick to one medium when you can confuse your audience across multiple platforms?',
      icon: <FaBookReader className='text-4xl text-purple-400' />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id='inspiration'
      className='py-20 bg-blue-100 rounded-3xl my-8 p-8 shadow-2xl'
    >
      <motion.h2
        className='text-5xl font-extrabold mb-8 text-center text-blue-600'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our "Totally Normal" Inspirations
      </motion.h2>
      <motion.p
        className='text-xl text-blue-500 text-center mb-12 italic'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Warning: Exposure to these inspirations may result in uncontrollable
        creativity and spontaneous laughter!
      </motion.p>
      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 gap-8'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        {inspirations.map((item, index) => (
          <motion.div
            key={index}
            className='bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'
            variants={itemVariants}
          >
            <div className='flex items-center mb-4'>
              {item.icon}
              <h3 className='font-bold text-blue-600 text-2xl ml-4'>
                {item.title}
              </h3>
            </div>
            <p className='text-blue-800'>{item.description}</p>
            <motion.div
              className='w-full h-2 bg-blue-200 mt-4 rounded-full overflow-hidden'
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
            >
              <motion.div
                className='h-full bg-blue-500'
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1 + index * 0.1, duration: 1.5 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      <motion.p
        className='text-center text-blue-600 mt-12 text-lg italic'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        "If you're not inspired yet, you might want to check if you're a robot.
        Beep boop?" - Gumball, probably
      </motion.p>
    </section>
  );
};

export default InspirationSection;

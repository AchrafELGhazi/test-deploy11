import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const ShowcaseSection: React.FC = () => {
  const navigate = useNavigate(); // Hook for navigation

  const showcaseItems = [
    {
      type: 'Animation',
      title: "Gumball's Interdimensional Escapade",
      src: '../../assets/b.jpg',
      description:
        "Watch Gumball navigate through parallel universes. It's like 'Rick and Morty', but with more blue cats!",
      link: '/AnimationSection',
    },
    {
      type: 'Drawing',
      title: 'Gumball and Darwin: Meme Lords',
      src: '../../assets/c.jpg',
      description:
        "Our dynamic duo reimagined as internet meme gods. Darwin's 'surprised Pikachu face' is spot on!",
      link: '/DrawingSection', // Placeholder link for the drawing section
    },
    {
      type: 'Edit',
      title: 'Elmore: Cyberpunk Edition',
      src: '../../assets/a.jpg',
      description:
        'Elmore in 2077 Where the vending machines have more personality than some characters (looking at you, Banana Joe).',
      link: '/EditSection', // Placeholder link for the edit section
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const handleNavigation = (link: string) => {
    navigate(link);
  };

  return (
    <section className='py-20 bg-white rounded-xl'>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-center mb-12'
      >
        <h2 className='text-5xl font-extrabold mb-4 text-blue-600'>
          The "Oh Wow, You Actually Scrolled This Far?" Showcase
        </h2>
        <p className='text-xl mx-10 font-medium text-sky-700'>
          Congrats! You've reached the part of the page where we show off our
          stuff. It's like reaching the bonus level in a video game, but instead
          of extra lives, you get to see our questionable art skills!
        </p>
      </motion.div>

      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        {showcaseItems.map((item, index) => (
          <motion.div
            key={index}
            className='bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300'
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              rotate: [-1, 1, -1, 0],
              transition: { rotate: { duration: 0.2, repeat: 3 } },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className='relative w-full h-48 mb-4 rounded-lg overflow-hidden group'>
              <img
                src={item.src}
                alt={item.title}
                className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300'></div>
              <p className='absolute bottom-2 left-2 right-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                {item.description}
              </p>
            </div>
            <h3 className='font-bold text-gray-900 text-xl mb-2'>
              {item.title}
            </h3>
            <p className='text-gray-600'>{item.type}</p>
            <div className='mt-4'>
              <motion.button
                className='bg-blue-600 text-white px-4 py-2 rounded-full font-bold hover:bg-blue-700 transition-all duration-300'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation(item.link)}
              >
                View More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className='text-center mt-12'
      >
        <p className='text-lg text-gray-600 italic'>
          "If you've made it this far, you're either really interested or really
          bored. Either way, we appreciate your dedication!" - Gumball, probably
        </p>
      </motion.div>
    </section>
  );
};

export default ShowcaseSection;

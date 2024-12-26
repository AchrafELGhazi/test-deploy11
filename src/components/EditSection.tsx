import { motion } from 'framer-motion';
import React from 'react';


const EditSection: React.FC = () => {
  const videoEdits = [
    {
      title: 'Epic Gumball Adventure',
      videoSrc: 'src/assets/aa.MOV', // Replace with your actual video URL
      description:
        'Join Gumball and Darwin in this exciting, over-the-top adventure through their world. It’s all about fun and surprises!',
      tags: ['Adventure', 'Gumball', 'Fandom'],
    },
    {
      title: 'Darwin’s Meme Challenge',
      videoSrc: 'src/assets/bb.MOV', // Replace with your actual video URL
      description:
        'Watch Darwin take on the latest meme trends and dance challenges in his own hilarious style. Gumball fans won’t want to miss this!',
      tags: ['Dance', 'Meme', 'Funny', 'Darwin', 'Gumball'],
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

  return (
    <section className='py-20 bg-white rounded-xl'>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-center mb-12'
      >
        <h2 className='text-5xl font-extrabold mb-4 text-blue-600'>
          The Gumball Edit Section
        </h2>
        <p className='text-xl mx-10 font-medium text-sky-700'>
          Enjoy these fun video edits we made as a tribute to our favorite blue
          cat and his colorful adventures!
        </p>
      </motion.div>

      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 gap-8 px-4'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        {videoEdits.map((video, index) => (
          <motion.div
            key={index}
            className='bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300'
            variants={itemVariants}
          >
            <div className='relative w-full h-72 mb-4 rounded-lg overflow-hidden'>
              <video
                src={video.videoSrc}
                className='w-full h-full object-cover'
                controls
              ></video>
            </div>
            <h3 className='font-bold text-gray-900 text-xl mb-2'>
              {video.title}
            </h3>
            <p className='text-gray-600 mb-4'>{video.description}</p>
            <div className='flex flex-wrap gap-2'>
              {video.tags.map((tag, index) => (
                <span
                  key={index}
                  className='bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full'
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};


export default EditSection;

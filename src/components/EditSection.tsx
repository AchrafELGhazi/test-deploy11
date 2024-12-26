import { motion } from 'framer-motion';
import React from 'react';

const EditSection: React.FC = () => {
  const videoEdits = [
    {
      title: 'Animated Adventure Remix',
      videoSrc: '../../assets/aa.MOV', // Replace with your actual video URL
      description:
        'An exciting, over-the-top adventure that showcases the best moments from our favorite animated series.',
      tags: ['Adventure', 'Remix', 'Fandom'],
    },
    {
      title: 'Cartoon Meme Mashup',
      videoSrc: '../../assets/bb.MOV', // Replace with your actual video URL
      description:
        'A hilarious compilation of cartoon characters taking on the latest meme trends and dance challenges. Fans of all ages will love this creative edit!',
      tags: ['Meme', 'Funny'],
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
    <section className='py-20 bg-gradient-to-br from-blue-50 to-purple-100 rounded-xl'>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-center mb-12'
      >
        <h2 className='text-5xl font-extrabold mb-4 text-blue-600'>
          Fan Edit Showcase
        </h2>
        <p className='text-xl mx-auto max-w-3xl font-medium text-sky-700 mb-8'>
          Dive into the world of fan-made edits, where creativity knows no bounds!
        </p>
        <motion.p 
          className='text-lg mx-auto max-w-4xl text-gray-700'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          In the realm of new media technology, fan edits represent a powerful and important means of expressing fandom and love for various media properties. These creative works, born from the passion of fans, showcase the intersection of technology, artistry, and community engagement. By remixing, recontextualizing, and reimagining their favorite content, fans not only demonstrate their deep connection to the source material but also contribute to the evolving narrative surrounding it. This participatory culture, as described by Henry Jenkins, transforms consumers into active producers, blurring the lines between creator and audience. Fan edits serve as a testament to the democratization of media production, allowing individuals to share their unique perspectives and interpretations with a global community of like-minded enthusiasts.
        </motion.p>
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


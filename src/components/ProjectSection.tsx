import { motion } from 'framer-motion';
import { FaLaughSquint, FaMagic, FaChartPie } from 'react-icons/fa';
import React from 'react';

const ProjectSection: React.FC = () => {
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
      id='project'
      className='py-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl my-8 p-8 shadow-2xl'
    >
      <motion.h2
        className='text-5xl font-extrabold mb-8 text-center text-blue-600'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Unraveling the Gumball-verse: A Serious Study of Fandom's Impact
      </motion.h2>
      <motion.p
        className='text-xl text-blue-500 text-center mb-12 italic'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Exploring how fandoms shape culture, influence society, and transform 
        everyday lives through their passion and creativity.
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='space-y-8'
      >
        {[{
            icon: <FaLaughSquint className='text-4xl text-yellow-400 mr-4' />,
            title: 'The Gumball Effect',
            description: `Fandoms like "The Amazing World of Gumball" are not just about watching a show, but about how they foster a unique culture of engagement, creativity, and social bonding. By studying this fandom, we aim to understand how a simple animated series can catalyze such a passionate following, creating a subculture that transcends the show itself.`,
          },
          {
            icon: <FaMagic className='text-4xl text-purple-400 mr-4' />,
            title: 'Fandom Dynamics',
            description: `In this section, we analyze how Gumball fans interact with fans of other major shows like "Steven Universe" and "Adventure Time." These communities share a collective identity formed through fan art, memes, and online discussions, helping fans form new connections that often reshape how they see themselves and their place in the world.`,
          },
          {
            icon: <FaChartPie className='text-4xl text-green-400 mr-4' />,
            title: 'The Social Impact of Fandoms',
            description: `Fandoms are more than just fanclubs; they are social movements in their own right. Using data-driven analysis, we explore how these fandoms are influencing societal norms, from the rise of memes as a communication tool to the integration of cosplay in mainstream culture. This section investigates the broader impact of these subcultures on trends in fashion, technology, and social activism.`,
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className='bg-white p-6 rounded-2xl shadow-lg'
          >
            <div className='flex items-center mb-4'>
              {item.icon}
              <h3 className='text-2xl font-bold text-blue-600'>{item.title}</h3>
            </div>
            <p className='text-lg text-blue-800'>{item.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className='mt-12 text-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <p className='text-lg text-blue-600 italic'>
          "Fandoms are not just about fans; they are communities that help shape the culture of the digital age." - 
          The Research Team
        </p>
      </motion.div>
    </section>
  );
};

export default ProjectSection;

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
        Unraveling the Gumball-verse: A Totally Serious* Investigation
      </motion.h2>
      <motion.p
        className='text-xl text-blue-500 text-center mb-12 italic'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        *Warning: May contain traces of humor, sarcasm, and animated blue cats
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='space-y-8'
      >
        {[
          {
            icon: <FaLaughSquint className='text-4xl text-yellow-400 mr-4' />,
            title: 'The Gumball Effect',
            description: `We're diving headfirst into the wacky world of 
              The Amazing World of Gumball fandom. It's like studying a parallel universe where 
              blue cats rule and logic takes a permanent vacation. Our mission? To figure out how this 
              show turned normal, sane people into Gumball-quoting, fanart-creating superhumans!`,
          },
          {
            icon: <FaMagic className='text-4xl text-purple-400 mr-4' />,
            title: 'The Fandom Face-Off',
            description: `We're putting Gumball fans in a metaphorical wrestling ring with 
              Steven Universe and Adventure Time enthusiasts. Don't worry, no actual 
              wrestling involved (we can't afford the insurance). We're just seeing how these fandoms celebrate 
              their favorite shows and accidentally make them culturally significant. Oops!`,
          },
          {
            icon: <FaChartPie className='text-4xl text-green-400 mr-4' />,
            title: 'The Grand Fandom Experiment',
            description: `Armed with research, data visualization, and a healthy dose of caffeine, 
              we're uncovering how Gumball fans are secretly reshaping society. Are memes the new currency? 
              Is cosplay the future of fashion? We're asking the hard-hitting questions here, folks!`,
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
          "If you're not a little confused, we're not doing our job right." -
          The Research Team, probably
        </p>
      </motion.div>
    </section>
  );
};

export default ProjectSection;

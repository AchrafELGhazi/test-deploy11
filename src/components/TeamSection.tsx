import { motion } from 'framer-motion';
import React from 'react';

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: 'Achraf EL GHAZI',
      image: 'src/assets/Screenshot 2024-12-22 202851.png',
      description:
        "Our resident 'bug whisperer'. He doesn't just fix bugs, he negotiates with them until they leave voluntarily.",
      role: 'Code Ninja',
    },
    {
      name: 'Alyâa Zahzouhi',
      image: 'src/assets/Screenshot 2024-12-22 202821.png',
      description:
        "She can turn coffee into code faster than Gumball can cause chaos. It's her superpower!",
      role: 'Caffeine-Powered Developer',
    },
    {
      name: 'Noura Kassas',
      image: 'src/assets/Screenshot 2024-12-22 202835.png',
      description:
        "Our UX wizard. She can make even Darwin understand complex user interfaces. Now that's talent!",
      role: 'Pixel Perfectionist',
    },
    {
      name: 'Rania Amazoz',
      image: 'src/assets/Screenshot 2024-12-22 202905.png',
      description:
        "She doesn't just think outside the box, she questions the existence of the box in the first place.",
      role: 'Idea Alchemist',
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
      id='team'
      className='py-20 bg-sky-100 my-8 p-8 rounded-3xl shadow-2xl'
    >
      <motion.h2
        className='text-5xl font-extrabold mb-8 text-center text-sky-600'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Meet the Gumball-istic Dream Team!
      </motion.h2>
      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className='bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group'
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              rotate: [-1, 1, -1, 0],
              transition: { rotate: { duration: 0.2, repeat: 3 } },
            }}
          >
            <div className='w-40 h-40 mx-auto mb-4 relative'>
              <img
                src={member.image}
                alt={member.name}
                className='w-full h-full object-cover rounded-full border-4 border-sky-400 transition-transform duration-300 group-hover:scale-110'
              />
              <motion.div
                className='absolute -top-2 -right-2 bg-sky-400 text-white p-2 rounded-full text-xs font-bold'
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {member.role}
              </motion.div>
            </div>
            <h3 className='font-bold text-sky-600 text-2xl mb-2'>
              {member.name}
            </h3>
            <p className='text-sky-800 italic mb-4'>{member.description}</p>
            <motion.div
              className='w-full h-1 bg-sky-200 rounded-full overflow-hidden'
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
            >
              <motion.div
                className='h-full bg-sky-500'
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      <motion.p
        className='text-center text-sky-600 mt-12 text-lg italic'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
      >
        "Together, we're like the Wattersons of AUI - chaotic, creative, and
        surprisingly effective!"
      </motion.p>
    </section>
  );
};

export default TeamSection;

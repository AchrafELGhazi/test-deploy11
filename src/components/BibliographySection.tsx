import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBook, FaLightbulb, FaQuoteRight } from 'react-icons/fa';
import React from 'react';

interface BibliographySource {
  teamMember: string;
  documentLink: string;
  resources: string;
  summary: string;
  application: string;
}

const annotatedBibliography: BibliographySource[] = [
  {
    teamMember: 'Achraf EL GHAZI',
    documentLink:
      'https://alakhawayn365-my.sharepoint.com/:w:/g/personal/a_elghazi_aui_ma/EUpJZymArzxLscx3e4gG0KIBrU0HIkb4Sl7cltw55r5Tow?e=U8qdin',
    resources:
      'Book: Jenkins, Henry. Convergence Culture: Where Old and New Media Collide.',
    summary:
      "This foundational text deals with how media consumers engage with each other within participatory culture to create and share interpretations as active fans of content. Jenkins helps me contextualize how The Amazing World of Gumball would enable activities among its fans to create memes, fan fiction, and analysis. I'll be using Jenkins' idea of convergence culture in order to explain how Gumball combines pop culture and humor with the expressed purpose of fostering an interactive fan community.",
    application:
      "I will use Jenkins' idea of convergence culture to explain how The Amazing World of Gumball fosters an interactive fan community by combining pop culture and humor.",
  },
  {
    teamMember: 'Rania AMAZOZ',
    documentLink:
      'https://alakhawayn365-my.sharepoint.com/:w:/g/personal/a_elghazi_aui_ma/EZos0Fya7cpEkDRmpkhWZW8B2zKdwKt3-PRZQfbN_NOsoQ?e=kxLuXc',
    resources:
      'The Amazing World of Gumball Wiki. Fandom. (n.d.).',
    summary:
      'This wiki contains comprehensive details about The Amazing World of Gumball, including character guides, locations, fan art, and video games related to the show. It will be used to deepen our understanding of the show, helping to inform the creation of a VR/AR experience. The guide to characters and locations will help us accurately represent the lifestyle of the characters and key places in the virtual gallery.',
    application:
      'This resource will support the creation of a virtual gallery by providing insights into the show’s characters and locations. The fan art and theories gathered here will inform how we present the show’s world and themes in our VR/AR project. We can also explore fan theories like the one on Reddit about the show being a dream of the main character after waking from a coma, which adds a unique layer to the narrative we can explore.',
  },
  {
    teamMember: 'Alyâa ZAHZOUHI',
    documentLink:
      'https://alakhawayn365-my.sharepoint.com/:w:/g/personal/a_elghazi_aui_ma/EQt9ydsgz5xDr7oyJW1OaZ4BJULr4h2ZalUpl6H3ryxXRA?e=kkN2gb',
    resources: 'Social Media Content: TikTok, YouTube, and Patreon',
    summary:
      "Fan art and the creation of original characters are key components of modern fandoms, especially on platforms like TikTok and YouTube. These platforms encourage fans to engage with their favorite shows by creating and sharing content such as fan art, parodies, and cosplay videos. The Amazing World of Gumball has inspired numerous fan creations, including memes, character reimaginings, and crossover fan works with other fandoms such as Five Nights at Freddy's. TikTok, in particular, fosters interaction through trends and challenges where fans mimic scenes, do voice overs, or participate in cosplay videos, demonstrating their emotional investment in the show.",
    application:
      'This source will be used to explore how Gumball fans use platforms like TikTok and YouTube to create fan art and engage in fandom crossovers, contributing to the broader fan culture around the show. I will also touch on Patreon as a platform where fans can monetize their content, further enhancing the sense of community and interaction among Gumball fans.',
  },
  {
    teamMember: 'Noura KASSAS',
    documentLink:
      'https://alakhawayn365-my.sharepoint.com/:f:/g/personal/a_elghazi_aui_ma/EkEbXlKcC4NMgs18JKZLancB6dGbB3Ls-K7UY23I8gAAtw?e=yHno6T',
    resources: 'Academic Article: The Oxford Bibliographies on Fan Studies.',
    summary:
      'This article offers a comprehensive overview of fandom theories, participatory culture, and the relationship between fans and creators. It includes key works by Jenkins and Hills, providing foundational theories that will help us understand how Gumball fans interact with the content and each other. The resource will also be useful in exploring how fans engage with the show through animations, fan art, and digital content creation.',
    application:
      'The theoretical insights from this article will support our exploration of how Gumball fans create and share their own animated content, fan art, and fan-made videos. This will help us understand how fan creativity fuels community-building within the Gumball fandom and inspire our own approach to animating and representing the show’s world in the VR/AR project.',
  },
];

const BibliographySection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentSource, setCurrentSource] = useState<BibliographySource | null>(
    null
  );
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const openModal = (source: BibliographySource): void => {
    setCurrentSource(source);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    setCurrentSource(null);
  };

  const toggleSummary = (index: number): void => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id='bibliography'
      className='py-20 bg-blue-50 rounded-3xl my-8 p-8 shadow-2xl'
    >
      <motion.h2
        className='text-5xl font-extrabold mb-8 text-center text-blue-600 flex items-center justify-center space-x-4'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FaBook className='text-yellow-400' />
        <span>The "Totally Not Boring" Bibliography</span>
      </motion.h2>
      <p className='text-center text-blue-500 mb-8 italic'>
        Where we pretend reading academic papers is as fun as watching Gumball
        reruns!
      </p>
      <motion.ul
        className='space-y-8'
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        initial='hidden'
        animate='show'
      >
        {annotatedBibliography.map((source, index) => (
          <motion.li
            key={index}
            className='bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300'
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <h3 className='font-bold text-blue-600 text-xl mb-2 flex items-center space-x-2'>
              <FaLightbulb className='text-yellow-400' />
              <span>{source.resources}</span>
            </h3>
            <p className='text-blue-800 mb-2'>
              <strong>{source.teamMember}</strong> - The one who actually read
              this stuff
            </p>
            <AnimatePresence mode='wait'>
              {expandedIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className='text-blue-700 mb-4'
                >
                  {source.summary}
                </motion.p>
              )}
            </AnimatePresence>
            <button
              onClick={() => toggleSummary(index)}
              className='text-blue-600 hover:text-blue-800 mt-2 font-semibold'
            >
              {expandedIndex === index ? 'Show Less' : 'Read More →'}
            </button>
            <p className='mt-4 text-blue-700'>
              <a
                href={source.documentLink}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-500 hover:underline font-semibold'
              >
                Link to document (Warning: May contain actual knowledge)
              </a>
            </p>
            <motion.button
              onClick={() => openModal(source)}
              className='mt-4 inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 font-bold'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Dive Deeper (If You Dare) →
            </motion.button>
          </motion.li>
        ))}
      </motion.ul>

      <AnimatePresence>
        {isModalOpen && currentSource && (
          <motion.div
            className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className='bg-white rounded-2xl p-8 max-w-4xl w-full shadow-2xl relative'
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                className='absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl'
                onClick={closeModal}
              >
                ✕
              </button>
              <h3 className='text-2xl font-bold text-blue-600 mb-4 flex items-center space-x-2'>
                <FaQuoteRight className='text-yellow-400' />
                <span>{currentSource.resources}</span>
              </h3>
              <p className='text-blue-800 mb-4'>
                <strong>{currentSource.teamMember}</strong> - Master of Gumball
                Wisdom
              </p>
              <p className='mt-4 text-gray-700'>{currentSource.summary}</p>
              <p className='mt-4 text-gray-700'>
                <strong>How we're using this:</strong>{' '}
                {currentSource.application}
              </p>
              <p className='mt-4 text-blue-500'>
                <a
                  href={currentSource.documentLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='underline font-semibold'
                >
                  Read the full document (if you're really, really curious)
                </a>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BibliographySection;

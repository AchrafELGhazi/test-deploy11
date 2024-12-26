import React from "react";
import { motion } from "framer-motion";

const DrawingSection: React.FC = () => {
  const drawings = [
    { src: "../../assets/drawing1.jpg", alt: "Drawing 1", rotate: false },
    { src: "../../assets/drawing2.jpg", alt: "Drawing 2", rotate: true },
    { src: "../../assets/drawing3.jpg", alt: "Drawing 3", rotate: true },
    { src: "../../assets/drawing4.jpg", alt: "Drawing 4", rotate: false },
    { src: "../../assets/drawing5.jpg", alt: "Drawing 5", rotate: true },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sky-100 to-sky-200 rounded-xl relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-5xl font-extrabold text-blue-600 text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Artistic Creations
        </motion.h2>

        <motion.p 
          className="text-xl text-center text-sky-700 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Dive into our gallery of Gumball-inspired masterpieces! Each sketch is a 
          window into the wild and wacky world we've created. Prepare for a visual 
          rollercoaster that'll make your eyeballs dance!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {drawings.slice(0, 3).map((drawing, index) => (
            <DrawingCard key={index} {...drawing} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {drawings.slice(3).map((drawing, index) => (
            <DrawingCard key={index} {...drawing} />
          ))}
        </div>

        <motion.p 
          className="text-xl text-center text-sky-700 mt-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          These drawings represent our way of seeing fan art and fandom in general. Fandoms are not just about shared passion for media—they are vibrant communities that influence culture, drive social change, and shape society in profound ways. Through creativity and collaboration, fandoms give individuals a voice, often challenging societal norms and expectations. The artworks we create are a testament to the power of these communities, and how they use their collective energy to bring new perspectives and ideas to life, ultimately reshaping the world around them.
        </motion.p>
      </div>
    </section>
  );
};

const DrawingCard: React.FC<{ src: string; alt: string; rotate: boolean }> = ({ src, alt, rotate }) => {
  return (
    <motion.div 
      className="bg-white p-4 rounded-xl shadow-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative pb-[100%] overflow-hidden rounded-lg">
        <img
          src={src}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover ${rotate ? 'transform rotate-90' : ''}`}
        />
      </div>
      <p className="mt-2 text-center text-sky-600 font-medium">{alt}</p>
    </motion.div>
  );
};

export default DrawingSection;

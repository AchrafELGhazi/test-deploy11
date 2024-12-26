import React from 'react';

const DrawingSection: React.FC = () => {
  return (
    <div className='py-20 bg-white rounded-xl'>
      {/* Title */}
      <h2 className='text-4xl font-extrabold text-blue-600 text-center mb-8'>
        Our Artistic Creations
      </h2>

      {/* Description */}
      <p className='text-xl text-center text-sky-700 mb-12'>
        Take a look at some of the incredible drawings we've created, where
        imagination meets paper! Each sketch tells its own story.
      </p>

      {/* Drawing Images */}
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-center'>
        <div className='flex justify-center'>
          <img
            src='src/assets/drawing1.jpg'
            alt='Drawing 1'
            className='w-full h-auto rounded-lg shadow-lg'
          />
        </div>
        <div className='flex justify-center'>
          <img
            src='src/assets/drawing2.jpg'
            alt='Drawing 2'
            className='w-full h-auto rounded-lg shadow-lg'
          />
        </div>
        <div className='flex justify-center'>
          <img
            src='src/assets/drawing3.jpg'
            alt='Drawing 3'
            className='w-full h-auto rounded-lg shadow-lg'
          />
        </div>
        <div className='flex justify-center'>
          <img
            src='src/assets/drawing4.jpg'
            alt='Drawing 4'
            className='w-full h-auto rounded-lg shadow-lg'
          />
        </div>
        <div className='flex justify-center'>
          <img
            src='src/assets/drawing5.jpg'
            alt='Drawing 5'
            className='w-full h-auto rounded-lg shadow-lg'
          />
        </div>
      </div>
    </div>
  );
};


export default DrawingSection;

import React from 'react';

const AnimationSection: React.FC = () => {
  return (
    <div className='py-20 bg-white rounded-xl'>
      <h2 className='text-4xl font-extrabold text-blue-600 text-center mb-8'>
        Gumball's Interdimensional Escapade
      </h2>
      <p className='text-xl text-center text-sky-700 mb-12'>
        Watch Gumball navigate through parallel universes. It's like 'Rick and
        Morty', but with more blue cats!
      </p>

      {/* Add video tag */}
      <div className='flex justify-center mb-8'>
        <video
          className='w-full max-w-4xl rounded-lg shadow-lg'
          controls
          autoPlay
          loop
        >
          <source
            src='src/assets/new-media.mp4' // Replace with your video URL
            type='video/mp4'
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Funny title and description */}
      <div className='text-center'>
        <h3 className='text-2xl font-semibold text-blue-500'>
          "Gumball in Real Life: When Your Animated BFF Crashes Your Zoom
          Calls!"
        </h3>
        <p className='text-lg text-gray-600 mt-4'>
          Ever wondered what would happen if Gumball stumbled into your everyday
          life? Picture this: You’re trying to make coffee, and suddenly Gumball
          is in your kitchen, debating whether he should add spaghetti to your
          cereal. It’s chaos, it’s comedy, and it’s the kind of interdimensional
          madness you never knew you needed! Watch as Gumball gets up close and
          personal with your most mundane, real-world moments. Spoiler: he’s not
          impressed by your internet speed.
        </p>
      </div>
    </div>
  );
};

export default AnimationSection;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimationSection from './components/AnimationSection';
import HeroSection from './components/HeroSection';
import ProjectSection from './components/ProjectSection';
import BibliographySection from './components/BibliographySection';
import TeamSection from './components/TeamSection';
import InspirationSection from './components/InspirationSection';
import ShowcaseSection from './components/ShowcaseSection';
import EditSection from './components/EditSection';
import './App.css';
import { FaGlobe, FaRocket } from 'react-icons/fa';
import DrawingSection from './components/DrawingSection';
import React from 'react';


const App: React.FC = () => {
  return (
    <div>
      <Router>
        <div className='min-h-screen bg-blue-50'>
          <header className='bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 p-4 sticky top-0 z-50 shadow-lg'>
            <div className='container mx-auto flex justify-between items-center'>
              <h1 className='text-3xl font-bold text-white flex items-center space-x-2'>
                <div className='animate-spin-slow'>
                  <FaGlobe className='text-yellow-300' />
                </div>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500'>
                  Goofball's Guide to Gumball Greatness
                </span>
              </h1>

              <a
                href='https://alakhawayn365-my.sharepoint.com/:f:/g/personal/a_elghazi_aui_ma/EhjRRUcH0apAiYA4gnLvx58BYwgrSkmFCKTYSt-9KX2ybA?e=qKbCwY'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-gradient-to-r from-yellow-300 to-yellow-500 text-blue-600 px-6 py-3 rounded-full font-bold flex items-center space-x-2 shadow-md hover:scale-105 transition-transform'
              >
                <FaRocket />
                <span>Explore Now</span>
              </a>
            </div>
          </header>

          <main className='container mx-auto px-4 py-8'>
            <Routes>
              <Route
                path='/'
                element={
                  <>
                    <HeroSection />
                    <ProjectSection />
                    <TeamSection />
                    <BibliographySection />
                    <InspirationSection />
                    <ShowcaseSection />
                  </>
                }
              />
              <Route path='/AnimationSection' element={<AnimationSection />} />{' '}
              <Route path='/DrawingSection' element={<DrawingSection />} />
              <Route path='/EditSection' element={<EditSection />} />
            </Routes>
          </main>

          <footer className='bg-blue-600 text-white py-6 text-center'>
            <p className='font-semibold'>
              Made with a whole lot of love, sarcasm, and possibly some
              questionable decisions. <br />
              &copy; {new Date().getFullYear()} Gumball Fan Project. All rights
              reserved. Or not, who’s checking? 🤷‍♂️
            </p>
          </footer>
        </div>
      </Router>
    </div>
  );
};

export default App;

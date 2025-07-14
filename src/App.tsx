import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import EventSlideshow from './components/EventSlideshow';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <About />
        <EventSlideshow />
        <Education />
        <Experience />
        <Projects />
        
        <Skills />
      </main>
      {/* <SocialLinks /> */}
      <Footer />
    </div>
  );
}

export default App;
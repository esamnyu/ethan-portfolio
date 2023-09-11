import React, { useEffect } from 'react';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';

function App() {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS.load('particles-js', '/particles-config.json', () => {
        console.log('particles.js loaded - callback');
      });
    }
  }, []);

  return (
    <div className="App">
      <div id="particles-js" style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1 }}></div>
      <About />
      <Experience />
    </div>
  );
}

export default App;

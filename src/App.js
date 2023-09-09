import logo from './logo.svg';
import './App.css';
import React from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {
  return (
    <div className="App">
      <About />
      <Experience />
      <Projects />
      <Skills />
      {/* ... other components as you create them */}
    </div>
  );
}

export default App;

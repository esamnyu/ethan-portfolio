import React, { useEffect } from 'react';
import './output.css';  // Importing the Tailwind CSS file based on previous context
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  useEffect(() => {
    // ... your existing useEffect code ...
  }, []);

  return (
    <div className="App bg-gray-900 text-white min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={
            <>
              <header className="text-center py-10">
                <h1 className="text-4xl font-bold">Ethan Sam</h1>
                <p className="text-xl mt-2">Ex-Cybersecurity Auditor | Aspiring Engineer & Innovator</p>
              </header>
            </>
          } />
        </Routes>
      </Router>
      <footer className="text-center py-6 mt-16">
        <p>&copy; 2023 Ethan Sam. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
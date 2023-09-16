import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ activeSection }) {
  return (
      <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
          <div className="container mx-auto px-6 py-4">
              <ul className="flex justify-between items-center space-x-4 md:space-x-8">
                  <li className={activeSection === '/' ? 'active-class' : ''}>
                      <Link to="/">Home</Link>
                  </li>
                  <li className={activeSection === '/about' ? 'active-class' : ''}>
                      <Link to="/about">About</Link>
                  </li>
                  <li className={activeSection === '/experience' ? 'active-class' : ''}>
                      <Link to="/experience">Experience</Link>
                  </li>
                  <li className={activeSection === '/projects' ? 'active-class' : ''}>
                      <Link to="/projects">Projects</Link>
                  </li>
                  {/* ... other nav items ... */}
              </ul>
          </div>
      </nav>
  );
}

export default Navbar;

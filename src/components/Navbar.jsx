import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
            <div className="container mx-auto px-6 py-4">
                <ul className="flex justify-between items-center space-x-4 md:space-x-8">
                    <li><Link to="/" className="hover:text-gray-300 py-1 px-2 rounded transition-colors duration-300">Home</Link></li>
                    <li><Link to="/about" className="hover:text-gray-300 py-1 px-2 rounded transition-colors duration-300">About</Link></li>
                    <li><Link to="/experience" className="hover:text-gray-300 py-1 px-2 rounded transition-colors duration-300">Experience</Link></li>
                    <li><Link to="/projects" className="hover:text-gray-300 py-1 px-2 rounded transition-colors duration-300">Projects</Link></li>
                    <li><Link to="/skills" className="hover:text-gray-300 py-1 px-2 rounded transition-colors duration-300">Skills & Certifications</Link></li>
                    {/* You can add more links as needed */}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

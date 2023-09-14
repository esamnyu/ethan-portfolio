import React from 'react';
import closeHeadshot from '../images/close_headshot.png';

function About() {
  return (
    <section id="about" className="bg-gray-800 p-8 rounded-md shadow-lg my-6">
      <div className="flex items-center">
        <img 
            src={closeHeadshot} 
            alt="Ethan Sam" 
            style={{ width: '10vw', height: '10vw', maxWidth: '150px', maxHeight: '150px' }}
            className="mr-6 rounded-full shadow-lg" 
        />
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-300">About Me</h2>
          <p className="text-gray-400 leading-relaxed">
            Hi, I'm Ethan. I've built a career around cybersecurity, ensuring data stays where it belongs. I value the intricacies of the digital landscape and the importance of mental well-being in our connected world.
          </p>
          <p className="text-gray-400 leading-relaxed mt-4">
            Beyond my professional realm, I have a keen interest in finance and the endless possibilities of innovation. I believe in consistent growth, both personally and in the ever-evolving world of technology.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

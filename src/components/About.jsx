import React from 'react';
import closeHeadshot from '../images/close_headshot.png';

function About() {
  return (
    <section id="about" className="my-6">
      <div className="bg-gray-800 p-4 md:p-8 rounded-md shadow-lg grid md:grid-cols-2 gap-2 items-center">
        
        <img 
            src={closeHeadshot} 
            alt="Ethan Sam" 
            className="w-72 md:w-102 lg:w-129 xl:w-173 rounded-full shadow-md m-auto" 
        />
        
        <div className="bg-gray-700 p-2 md:p-4 rounded-md space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-300">About Me</h2>
          <p className="text-gray-400 leading-relaxed">
            Hi, I'm Ethan. I've built a career around cybersecurity, ensuring data stays where it belongs. I value the intricacies of the digital landscape and the importance of mental well-being in our connected world. Beyond my professional realm, I have a keen interest in finance and the endless possibilities of innovation. I believe in consistent growth, both personally and in the ever-evolving world of technology.
          </p>
        </div>
        
      </div>
    </section>
  );
}

export default About;

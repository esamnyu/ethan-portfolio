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
          Hello everyone, I'm Ethan! I've spent a significant part of my career as a Cybersecurity Auditor, dedicating 2 years to ensuring digital safety across city agencies. My foundation in this domain is reinforced by a Computer Science degree, providing me with both theoretical and practical insights. As I look ahead, my ambition is to pivot into an engineering-centric role within cybersecurity, eager to tackle new challenges and further my expertise.          </p>
        </div>
        
      </div>
    </section>
  );
}

export default About;

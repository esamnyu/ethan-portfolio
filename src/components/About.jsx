import React from 'react';
import closeHeadshot from '../images/close_headshot.png';

function About() {
  return (
    <section id="about" className="bg-gray-800 p-4 md:p-8 rounded-md shadow-lg my-6 max-w-5xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-300">About Me</h2>

      <div className="flex flex-col md:flex-row gap-2 items-center md:items-start">
        
        <img 
            src={closeHeadshot} 
            alt="Ethan Sam" 
            className="w-72 md:w-96 lg:w-112 xl:w-128 rounded-full shadow-md m-auto" 
        />
        
        <div className="bg-gray-700 p-2 md:p-4 rounded-lg space-y-4 flex-1">
          <p className="text-gray-400 leading-relaxed">
            Hello everyone, I'm <span className="font-bold text-gray-300">Ethan</span>! I've spent a significant part of my career as a <span className="text-blue-400 font-bold">Cybersecurity Auditor</span>, dedicating 2 years to ensuring digital safety across city agencies. My foundation in this domain is reinforced by a <span className="text-blue-400 font-bold">Computer Science degree</span>, providing me with both theoretical and practical insights. As I look ahead, my ambition is to pivot into an <span className="italic">engineering-centric role</span> within cybersecurity, eager to tackle new challenges and further my expertise.
          </p>
        </div>
        
      </div>
    </section>
  );
}

export default About;

import React from 'react';

function About() {
  return (
    <section id="about" className="bg-gray-800 p-8 rounded-md shadow-lg my-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-300">About Me</h2>
      <p className="text-gray-400 leading-relaxed">
        Hi, I'm Ethan. I've built a career around cybersecurity, ensuring data stays where it belongs. I value the intricacies of the digital landscape and the importance of mental well-being in our connected world.
      </p>
      <p className="text-gray-400 leading-relaxed mt-4">
        Beyond my professional realm, I have a keen interest in finance and the endless possibilities of innovation. I believe in consistent growth, both personally and in the ever-evolving world of technology.
      </p>
      {/* Consider adding a profile picture or any other relevant content */}
    </section>
  );
}

export default About;

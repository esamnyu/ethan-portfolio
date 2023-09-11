function Experience() {
    return (
      <section id="experience" className="bg-white p-8 rounded-md">
        
        {/* Header */}
        <h1 className="text-2xl font-bold mb-4">ETHAN SAM</h1>
        <div className="mb-6">
          <a href="mailto:es5888@nyu.edu">es5888@nyu.edu</a> | 
          <a href="https://linkedin.com/in/ethansam" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
          <a href="https://github.com/esamnyu" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
  
        {/* Experience 1 - Cybersecurity Auditor */}
        <div className="mb-6">
          <h3 className="text-lg font-medium">Cybersecurity Auditor</h3>
          <p>Office of Technology & Innovation(OTI): Cyber Command, December 2021 – August 2023</p>
          <ul className="list-disc pl-5">
            <li>Administered an ICS questionnaire for mission-critical OT/ICS systems...</li>
            <li>Collaborated with agency executives...</li>
            <li>Aligned comptroller's office reports with in-house audit processes...</li>
            {/* ... other responsibilities */}
          </ul>
        </div>
  
        {/* Experience 2 - Cybersecurity Analyst Intern */}
        <div className="mb-6">
          <h3 className="text-lg font-medium">Cybersecurity Analyst Intern</h3>
          <p>June 2021 – August 2021</p>
          <ul className="list-disc pl-5">
            <li>Conducted comprehensive evaluations of NYC agencies...</li>
            <li>Developed an internal Audit Guide...</li>
            <li>Contributed valuable insights to discussions...</li>
            {/* ... other responsibilities */}
          </ul>
        </div>
  
        {/* ... Continue in the same fashion for the rest of the experiences */}
        
        {/* Skills and Certifications */}
        <div className="mb-6">
          <h3 className="text-lg font-medium">Skills/Certifications</h3>
          <p><strong>Tools:</strong> Burp Suite, Wireshark, Git, ...</p>
          <p><strong>Skills:</strong> Networking(Pcap Analysis, OSI Stack, ...)</p>
          <p><strong>Certifications:</strong> Google Project Management, NIST RMF, ...</p>
        </div>
  
        {/* Education */}
        <div className="mb-6">
          <h3 className="text-lg font-medium">Education</h3>
          <p>New York University, Tandon School of Engineering, Expected May 2025</p>
          <p>Master of Science, Cybersecurity (GPA. 3.84/4.00)</p>
        </div>
        
      </section>
    );
  }
  
  export default Experience;
  
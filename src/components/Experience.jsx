import React from 'react';

function Experience() {
    return (
        <section id="experience" className="bg-gray-700 p-8 rounded-md shadow-lg my-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-300">Experience</h2>
            
            <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-300">Office of Technology & Innovation (OTI): Cyber Command</h3>
                
                <p className="text-gray-400">
                    <strong>Cybersecurity Auditor</strong> | December 2021 – August 2023 <br />
                    - Administered ICS questionnaire for mission-critical OT/ICS systems, ensuring compliance with NIST frameworks. <br />
                    - Collaborated with agency executives to identify cybersecurity vulnerabilities. <br />
                    - Analyzed comptroller's office reports, refining audit processes.
                </p>

                <p className="text-gray-400 mt-2">
                    <strong>Cybersecurity Analyst Intern</strong> | June 2021 – August 2021 <br />
                    - Conducted evaluations of NYC agencies' cybersecurity programs. <br />
                    - Developed an internal Audit Guide to streamline processes. <br />
                    - Engaged in mock trials preparing for agency audit feedback.
                </p>
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-300">Electronic Gaming Federation</h3>
                
                <p className="text-gray-400">
                    <strong>Software Engineer Intern</strong> | January 2020 – June 2020 <br />
                    - Oversaw the creation of a collegiate Elo ranking system. <br />
                    - Collaborated in agile/scrum methodologies to implement a web app MVP.
                </p>
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-300">Codepath</h3>
                
                <p className="text-gray-400">
                    <strong>Cybersecurity Fellow</strong> | Sept. 2018 – Sept 2019 <br />
                    - Completed a selective Cybersecurity program. <br />
                    - Led recruitment efforts for an educational program, empowering underrepresented individuals.
                </p>
            </div>

            {/* ... Add other experiences similarly ... */}
        </section>
    );
}

export default Experience;

import React from 'react';

function Experience() {
    return (
        <section id="experience" className="bg-gray-800 p-8 rounded-md shadow-lg my-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-300">Experience</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* ... Each experience card ... */}

                <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-medium text-blue-400 mb-2">Cybersecurity Auditor</h3>
                    <p className="text-gray-400">Office of Technology & Innovation (OTI): Cyber Command | December 2021 – August 2023</p>
                    <div className="mt-4 space-y-2">
                        <p className="text-gray-400">- Administered ICS questionnaire for mission-critical OT/ICS systems.</p>
                        <p className="text-gray-400">- Collaborated with agency executives.</p>
                        <p className="text-gray-400">- Analyzed comptroller's office reports.</p>
                    </div>
                    <button className="mt-4 bg-blue-500 text-gray-100 py-2 px-4 rounded hover:bg-blue-600">Read More</button>
                </div>

                {/* ... Repeat for other experiences ... */}
                
            </div>
        </section>
    );
}

export default Experience;

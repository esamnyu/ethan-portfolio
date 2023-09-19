import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';

function Content() {
    const [activeSection, setActiveSection] = useState('/');

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const projectsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 } // This means 60% of the item is visible
        );

        observer.observe(homeRef.current);
        observer.observe(aboutRef.current);
        observer.observe(experienceRef.current);
        observer.observe(projectsRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <Navbar activeSection={activeSection} />
            <div id="/" ref={homeRef}>
                <header className="text-center py-10">
                    <h1 className="text-4xl font-bold">Ethan Sam</h1>
                </header>
            </div>
            <div id="/about" ref={aboutRef}>
                <About />
            </div>
            <div id="/experience" ref={experienceRef}>
                <Experience />
            </div>
            <div id="/projects" ref={projectsRef}>
                <Projects />
            </div>
        </>
    );
}

export default Content;

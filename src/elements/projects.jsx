import React, { useState } from 'react';

const projects = [
    {
        title: "Project #1",
        publishedDate: "September 8, 2023",
        projectImage: "https://images01.nicepagecdn.com/page/15/15/website-template-preview-1515573.webp",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque beatae quis suscipit aliquam, eligendi vel nam placeat a voluptate esse porro eos sapiente corporis nulla? Consequuntur, voluptatibus saepe? Adipisci, labore!",
        languageUsed: ["html", "css", "js"]
    },
    {
        title: "Project #2",
        publishedDate: "November 2, 2023",
        projectImage: "https://images01.nicepagecdn.com/page/16/04/website-template-preview-1604687.webp",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque beatae quis suscipit aliquam, eligendi vel nam placeat a voluptate esse porro eos sapiente corporis nulla? Consequuntur, voluptatibus saepe? Adipisci, labore!",
        languageUsed: ["html", "css", "js", "php", "sql"]
    }
];


const languageImages = import.meta.glob('../assets/img/*.png', { eager: true });

function Projects() {
    const [visibleCount, setVisibleCount] = useState(2);

    const showMoreProjects = () => {
        setVisibleCount(visibleCount + 1);
    };

    const getImageSrc = (lang) => {
        const imagePath = `../assets/img/${lang}.png`;
        return languageImages[imagePath]?.default || '';
    };

    return (
        <section id="projects" className="backg-light-dark-1 px-lg-5 py-5">
            <div>
                <div className="container m-0 m-lg-3">
                    <h5 className="theme-color fw-bold">PROJECTS</h5>
                    <h4 className="fw-semibold text-color-1">Every web app is a special creation, designed to make online experiences better. 🌟</h4>
                </div>
                <div className="projects-container d-grid m-5 px-lg-5 gap-3">
                    {projects.slice(0, visibleCount).map((project, index) => (
                        <div className="card shadow-sm p-3" key={index}>
                            <div className={`row g-0 ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}>
                                <div className="project-img overflow-hidden shadow-sm border border-2 rounded-2 col-md-6" style={{ height: "500px" }}>
                                    <img src={project.projectImage} className="img-fluid" alt="..." />
                                </div>
                                <div className="col-md-6 px-lg-5 px-2 d-flex align-items-center">
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{`${project.title} ${project.publishedDate}`}</h5>
                                        <p className="card-text .text-color-2">{project.description}</p>
                                        <div>
                                            {project.languageUsed.map((lang, idx) => {
                                                const imgSrc = getImageSrc(lang);
                                                return (
                                                    <img 
                                                        className="project-language" 
                                                        key={idx} 
                                                        src={imgSrc} 
                                                        alt={lang}
                                                        onError={(e) => {
                                                            e.target.style.display = 'none';
                                                        }}
                                                    />
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='d-flex justify-content-center'>
                    {visibleCount < projects.length && (
                        <button className="btn btn-primary mt-3" onClick={showMoreProjects}>
                            See more
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Projects;
import React, { useState } from "react";

const projects = [
  {
    title: "SHOPPIN",
    projectImage: "myECommerceProject.webp",
    description:
      "Shoppin is a frontend eCommerce web application built with ReactJS and Bootstrap. It features a clean and responsive interface where users can browse products, view details, and explore a smooth shopping experience. This project highlights my skills in building dynamic, reusable components and designing user-friendly interfaces.",
    languageUsed: ["reactjs", "bootstrap"],
    link: "https://kentadrianegoc-ongshoppinapp.netlify.app",
    isScrolling: true,
  },
  {
    title: "Chattrix",
    projectImage: "chattrix.webp",
    description:
      "Chattrix is a full-stack real-time communication app featuring text messaging, image sharing with preview and download options, and video calling. Built with ReactJS, Tailwind, NodeJS, and Supabase, it showcases my skills in building responsive UIs, managing media, and integrating real-time backend services for seamless collaboration.",
    languageUsed: ["reactjs", "tailwind", "nodejs", "supabase"],
    link: "https://chattrixx.netlify.app/",
    isScrolling: false,
  },
  {
  title: "TickSys",
  projectImage: "ticksys.webp",
  description:
    "TickSys is a full-stack help desk ticketing system with a real-time dashboard powered by Recharts for data visualization. It enables users to create, track, and manage tickets with features like comments, user ratings, and status updates. The system also includes live notifications to instantly alert users when a ticket is assigned or updated. In addition, a Knowledge Base page provides articles that can be viewed, rated, and tracked with view counts. Built with ReactJS, Bootstrap, NodeJS, MongoDB, Socket.IO, and Recharts, TickSys highlights my skills in building responsive UIs, real-time communication, and analytics-driven workflows for efficient issue management.",
  languageUsed: ["reactjs", "bootstrap", "nodejs", "mongodb"],
  link: "https://ticksys.netlify.app/login",
  isScrolling: false,
}


];

// Import all images from the assets folder
const languageImages = import.meta.glob("../assets/img/*.png", { eager: true });
const projectImages = import.meta.glob("../assets/img/*.webp", { eager: true });

function Projects() {
  const [visibleCount, setVisibleCount] = useState(3);

  const showMoreProjects = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const getImageSrc = (lang) => {
    const imagePath = `../assets/img/${lang}.png`;
    return languageImages[imagePath]?.default || "";
  };

  const getProjectImgSrc = (filename) => {
    const imagePath = `../assets/img/${filename}`;
    return projectImages[imagePath]?.default || "";
  };

  return (
    <section id="projects" className="backg-light-dark-1 px-lg-5 py-5">
      <div>
        <div className="container m-0 m-lg-3">
          <h5 className="theme-color fw-bold">PROJECTS</h5>
          <h4 className="fw-semibold text-color-1">
            Every web app is a special creation, designed to make online
            experiences better. 🌟
          </h4>
        </div>
        <div className="projects-container d-grid m-5 px-lg-5 gap-3">
          {projects.slice(0, visibleCount).map((project, index) => {
            const myProjImg = getProjectImgSrc(project.projectImage);

            return (
              <div className="card shadow-sm p-3" key={index}>
                <div
                  className={`row g-0 ${
                    index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`${
                      project.isScrolling
                        ? "project-img shadow-sm border border-2 rounded-2"
                        : "d-flex flex-column justify-content-center"
                    } overflow-hidden col-md-6`}
                    style={{ height: "500px" }}
                  >
                    {project.isScrolling ? (
                      <img
                        src={myProjImg}
                        className="img-fluid"
                        alt={project.title}
                      />
                    ) : (
                      <img
                        src={myProjImg}
                        className="img-fluid rounded-2 "
                        alt=""
                      />
                    )}
                  </div>
                  <div className="col-md-6 px-lg-5 px-2 d-flex align-items-center">
                    <div className="card-body text-center">
                      <h5 className="card-title fw-bold">{project.title}</h5>
                      <p className="card-text text-color-2">
                        {project.description}
                      </p>
                      {
                        <div>
                          {project.languageUsed.map((lang, idx) => {
                            const imgSrc = getImageSrc(lang);
                            return (
                              <img
                                className="project-language"
                                title={lang}
                                key={idx}
                                src={imgSrc}
                                alt={lang}
                                onError={(e) => {
                                  e.target.style.display = "none";
                                }}
                              />
                            );
                          })}
                        </div>
                      }
                      <div className="d-flex justify-content-center mt-5">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-center">
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

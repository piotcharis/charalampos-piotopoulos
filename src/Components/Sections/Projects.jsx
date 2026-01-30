import React from "react";
import PropTypes from "prop-types";
import websiteImg from "./resources/website-dark.png";
import thesisImg from "./resources/thesis_title.png";
import ioctImg from "./resources/prediction.png";
import questImg from "./resources/questionnaire.png";
import mandelbrotImg from "./resources/mandelbrot.png";
import peanoImg from "./resources/peano.png";
import searchImg from "./resources/search-engine.png";
import hatsImg from "./resources/top-of-the-hats.png";
import "../../App.css";

function ProjectCard({ project, ...props }) {
  return (
    <div
      className="project-card"
      style={{
        backgroundColor: props.isDark ? "#2C3E50" : "#F5F5F5",
      }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="project-card__image"
      />
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__description">{project.description}</p>
      <div className="project-card__links">
        <a href={project.githubRepo} className="project-card__link">
          <button
            style={{
              border: "transparent",
              background: "transparent",
              width: "4rem",
              cursor: "pointer",
            }}
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
            />
          </button>
        </a>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.any,
    githubRepo: PropTypes.string,
  }),
};

const projects = [
  {
    title: "This website",
    description: "This website was created using React.js, HTML and CSS.",
    image: websiteImg,
    githubRepo: "https://github.com/piotcharis/personal_site",
  },
  {
    title: "Bachelor Thesis",
    description: "This program was created using Python.",
    image: thesisImg,
    githubRepo: "https://github.com/piotcharis/Bachelor_Thesis",
  },
  {
    title: "Neural Network for iOCT Image Segmentation",
    description: "This program was created using Python.",
    image: ioctImg,
    githubRepo:
      "https://github.com/piotcharis/Neural_Network_iOCT_Image_Segmentation",
  },
  {
    title: "Custom Questionnaire",
    description: "This program was created using PHP and Javascript.",
    image: questImg,
    githubRepo: "https://github.com/piotcharis/Questionnaire",
  },
  {
    title: "Mandelbrot set",
    description: "This program was created using C.",
    image: mandelbrotImg,
    githubRepo: "https://github.com/piotcharis/Mandelbrot",
  },
  {
    title: "Peano Curve",
    description: "This program was created using C.",
    image: peanoImg,
    githubRepo: "https://github.com/piotcharis/PeanoCurve",
  },
  {
    title: "Pingu Search Engine",
    description: "This app was created using Java.",
    image: searchImg,
    githubRepo: "https://github.com/piotcharis/SearchEnginePGdP",
  },
  {
    title: "Top of the hats",
    description: "This program was created using Java and Java Swing.",
    image: hatsImg,
    githubRepo: "https://github.com/piotcharis/TopOfTheHats",
  },
];

function Projects(props) {
  return (
    <div className="divProjects">
      <h1 className="title">Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} isDark={props.isDark} />
        ))}
      </div>
    </div>
  );
}

export default Projects;

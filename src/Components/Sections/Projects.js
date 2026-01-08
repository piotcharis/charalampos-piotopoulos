import React from "react";
import PropTypes from "prop-types";
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
    image: require("./resources/website-dark.png"),
    githubRepo: "https://github.com/piotcharis/personal_site",
  },
  {
    title: "Bachelor Thesis",
    description: "This program was created using Python.",
    image: require("./resources/thesis_title.png"),
    githubRepo: "https://github.com/piotcharis/Bachelor_Thesis",
  },
  {
    title: "Neural Network for iOCT Image Segmentation",
    description: "This program was created using Python.",
    image: require("./resources/prediction.png"),
    githubRepo:
      "https://github.com/piotcharis/Neural_Network_iOCT_Image_Segmentation",
  },
  {
    title: "Custom Questionnaire",
    description: "This program was created using PHP and Javascript.",
    image: require("./resources/questionnaire.png"),
    githubRepo: "https://github.com/piotcharis/Questionnaire",
  },
  {
    title: "Mandelbrot set",
    description: "This program was created using C.",
    image: require("./resources/mandelbrot.png"),
    githubRepo: "https://github.com/piotcharis/Mandelbrot",
  },
  {
    title: "Peano Curve",
    description: "This program was created using C.",
    image: require("./resources/peano.png"),
    githubRepo: "https://github.com/piotcharis/PeanoCurve",
  },
  {
    title: "Pingu Search Engine",
    description: "This app was created using Java.",
    image: require("./resources/search-engine.png"),
    githubRepo: "https://github.com/piotcharis/SearchEnginePGdP",
  },
  {
    title: "Top of the hats",
    description: "This program was created using Java and Java Swing.",
    image: require("./resources/top-of-the-hats.png"),
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

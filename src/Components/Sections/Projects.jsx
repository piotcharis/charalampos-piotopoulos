import { useRef } from "react";
import PropTypes from "prop-types";
import { Fade } from "react-awesome-reveal";
import Card from "../Card";
import { useEqualCardHeight } from "../../hooks/useEqualCardHeight";
import websiteImg from "./resources/website-dark.png";
import thesisImg from "./resources/thesis_title.png";
import ioctImg from "./resources/prediction.png";
import vaultImg from "./resources/vault.png";
import questImg from "./resources/questionnaire.png";
import mandelbrotImg from "./resources/mandelbrot.png";
import peanoImg from "./resources/peano.png";
import searchImg from "./resources/search-engine.png";
import hatsImg from "./resources/top-of-the-hats.png";
import "../../App.css";

const projects = [
  {
    title: "This website",
    description: "This website was created using React.js, HTML and CSS.",
    image: websiteImg,
    githubRepo: "https://github.com/piotcharis/personal_site",
    techStack: ["React", "HTML", "CSS"],
  },
  {
    title: "Bachelor Thesis - phase optimized iOCT visualization",
    description: "This project was created using Python.",
    image: thesisImg,
    githubRepo: "https://github.com/piotcharis/Bachelor_Thesis",
    techStack: ["Python"],
  },
  {
    title: "Neural Network for iOCT Image Segmentation",
    description: "This project was created using Python.",
    image: ioctImg,
    githubRepo:
      "https://github.com/piotcharis/Neural_Network_iOCT_Image_Segmentation",
    techStack: ["Python"],
  },
  {
    title: "Zero-Trust Document Vault",
    description: "This project was created using Java (Spring Boot).",
    image: vaultImg,
    githubRepo: "https://github.com/piotcharis/secure-file-vault",
    techStack: ["Java", "Spring Boot"],
  },
  {
    title: "Custom Questionnaire",
    description: "This project was created using PHP and Javascript.",
    image: questImg,
    githubRepo: "https://github.com/piotcharis/Questionnaire",
    techStack: ["PHP", "JavaScript"],
  },
  {
    title: "Mandelbrot set",
    description: "This project was created using C.",
    image: mandelbrotImg,
    githubRepo: "https://github.com/piotcharis/Mandelbrot",
    techStack: ["C"],
  },
  {
    title: "Peano Curve",
    description: "This project was created using C.",
    image: peanoImg,
    githubRepo: "https://github.com/piotcharis/PeanoCurve",
    techStack: ["C"],
  },
  {
    title: "Pingu Search Engine",
    description: "This project was created using Java.",
    image: searchImg,
    githubRepo: "https://github.com/piotcharis/SearchEnginePGdP",
    techStack: ["Java"],
  },
  {
    title: "Top of the hats",
    description: "This project was created using Java and Java Swing.",
    image: hatsImg,
    githubRepo: "https://github.com/piotcharis/TopOfTheHats",
    techStack: ["Java", "Java Swing"],
  },
];

const githubIcon = (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    alt="GitHub"
  />
);

function Projects({ isDark }) {
  const gridRef = useRef(null);
  useEqualCardHeight(gridRef, [isDark]);

  return (
    <div className="divProjects">
      <h1 className="title">Projects</h1>
      <Fade direction="up" triggerOnce style={{ width: "100%" }}>
        <div className="projects-grid" ref={gridRef}>
          {projects.map((project) => (
            <Card
              key={project.githubRepo}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.githubRepo}
              linkLabel={`View ${project.title} on GitHub`}
              isDark={isDark}
              icon={githubIcon}
              techStack={project.techStack}
            />
          ))}
        </div>
      </Fade>
    </div>
  );
}

Projects.propTypes = {
  isDark: PropTypes.bool,
};

export default Projects;

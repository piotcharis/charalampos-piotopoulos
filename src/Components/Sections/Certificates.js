import React from "react";
import PropTypes from "prop-types";
import "../../App.css";

function ProjectCard({ certificate, ...props }) {
  return (
    <div
      className="project-card"
      style={{
        backgroundColor: props.isDark ? "#2C3E50" : "#F5F5F5",
      }}
    >
      <img
        src={certificate.image}
        alt={certificate.title}
        className="project-card__image"
      />
      <h3 className="project-card__title">{certificate.title}</h3>
      <p className="project-card__description">{certificate.description}</p>
      <div className="project-card__links">
        <a href={certificate.link} className="project-card__link">
          <button
            style={{
              border: "transparent",
              background: "transparent",
              width: "4rem",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-patch-check"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"
              />
              <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z" />
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  certificate: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.any,
    link: PropTypes.string,
  }),
};

const certificates = [
  {
    title: "Google Project Manager Professional Certificate",
    description:
      "Those who earn the Google Project Management Certificate have completed seven courses, developed by Google, that include handson, practice-based assessments and are designed to prepare them for introductory-level roles in Project Management. They are competent in initiating, planning and running both traditional and agile projects.",
    image: require("./resources/pm-cert-pdf.jpg"),
    link: "https://www.coursera.org/account/accomplishments/specialization/VVQ12UZCE1KX",
  },
  {
    title: "Harvard CS50 Certificate",
    description:
      "CS50x teaches students how to think algorithmically and solve problems efficiently. Topics include abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development. Languages include C, Python, SQL, and JavaScript plus CSS and HTML. Problem sets inspired by real-world domains of biology, cryptography, finance, forensics, and gaming",
    image: require("./resources/CS50.jpg"),
    link: "https://cs50.harvard.edu/certificates/d2d30217-c980-494d-a151-02141b317b04",
  },
  {
    title: "Codecademy Learn C Certificate",
    description: "Learned about the C programming language",
    image: require("./resources/learn_c.png"),
    link: "https://www.codecademy.com/profiles/charispiot/certificates/8c3029c4a6e5894e74da756e3a7c0ae3",
  },
  {
    title: "Codecademy Learn Python 3 Certificate",
    description: "Learned about the Python programming language",
    image: require("./resources/learn_python.png"),
    link: "https://www.codecademy.com/profiles/charispiot/certificates/6c152bd262967f8c941c9707ed636bda",
  },
];

function Projects(props) {
  return (
    <div className="divProjects">
      <h1 className="title">Certificates</h1>
      <div className="projects-grid">
        {certificates.map((certificate, index) => (
          <ProjectCard
            key={index}
            certificate={certificate}
            isDark={props.isDark}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;

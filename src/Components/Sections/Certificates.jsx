import { useRef } from "react";
import PropTypes from "prop-types";
import { Fade } from "react-awesome-reveal";
import Card from "../Card";
import { useEqualCardHeight } from "../../hooks/useEqualCardHeight";
import pmCertImg from "./resources/pm-cert-pdf.jpg";
import csCertImg from "./resources/cs-cert-pdf.jpg";
import msCertImg from "./resources/ms-cert-pdf.jpg";
import cs50Img from "./resources/CS50.jpg";
import learnCImg from "./resources/learn_c.png";
import learnPythonImg from "./resources/learn_python.png";
import "../../App.css";

const certificates = [
  {
    title: "Google Project Manager Professional Certificate",
    description:
      "A comprehensive certification focusing on the core methodologies of project planning, execution, and Agile development. This program provided practical experience in structuring project workflows, managing stakeholders, and applying Scrum frameworks. Earning this credential strengthens one's ability to guide complex software engineering projects from concept to deployment, ensuring effective team alignment and the timely delivery of technical solutions.",
    image: pmCertImg,
    link: "https://www.coursera.org/account/accomplishments/specialization/VVQ12UZCE1KX",
  },
  {
    title: "Google Cybersecurity Professional Certificate",
    description:
      "A comprehensive certification focusing on the foundational principles of threat intelligence, risk management, and network defense. This program provided hands-on experience with Python, Linux, and SIEM tools to actively monitor and secure systems. Earning this credential strengthens one's ability to architect robust, secure applications and ensure strict compliance with sensitive data protection and industry regulations.",
    image: csCertImg,
    link: "https://www.coursera.org/account/accomplishments/specialization/FODGT88N64QU",
  },
  {
    title: "Yale Introduction to Medical Software Certificate",
    description:
      "Acquired knowledge in medical device regulations, software development lifecycles, and risk management, and was prepared to design, develop, and validate compliant software solutions for the healthcare industry.",
    image: msCertImg,
    link: "https://www.coursera.org/account/accomplishments/verify/11CN793PMI5A",
  },
  {
    title: "Harvard CS50 Certificate",
    description:
      "CS50x teaches students how to think algorithmically and solve problems efficiently. Topics include abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development. Languages include C, Python, SQL, and JavaScript plus CSS and HTML. Problem sets inspired by real-world domains of biology, cryptography, finance, forensics, and gaming",
    image: cs50Img,
    link: "https://cs50.harvard.edu/certificates/d2d30217-c980-494d-a151-02141b317b04",
  },
  {
    title: "Codecademy Learn C Certificate",
    description: "Learned about the C programming language",
    image: learnCImg,
    link: "https://www.codecademy.com/profiles/charispiot/certificates/8c3029c4a6e5894e74da756e3a7c0ae3",
  },
  {
    title: "Codecademy Learn Python 3 Certificate",
    description: "Learned about the Python programming language",
    image: learnPythonImg,
    link: "https://www.codecademy.com/profiles/charispiot/certificates/6c152bd262967f8c941c9707ed636bda",
  },
];

const checkIcon = (
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
);

function Certificates({ isDark }) {
  const gridRef = useRef(null);
  useEqualCardHeight(gridRef, [isDark]);

  return (
    <div className="divProjects">
      <h1 className="title">Certificates</h1>
      <Fade direction="up" triggerOnce style={{ width: "100%" }}>
        <div className="projects-grid" ref={gridRef}>
          {certificates.map((certificate) => (
            <Card
              key={certificate.link}
              title={certificate.title}
              description={certificate.description}
              image={certificate.image}
              link={certificate.link}
              linkLabel={`View ${certificate.title}`}
              isDark={isDark}
              icon={checkIcon}
            />
          ))}
        </div>
      </Fade>
    </div>
  );
}

Certificates.propTypes = {
  isDark: PropTypes.bool,
};

export default Certificates;

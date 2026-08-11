import PropTypes from "prop-types";
import CV from "./resources/Charalampos_Piotopoulos.pdf";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import arrowWhite from "./resources/arrow-down-white.png";
import arrowBlack from "./resources/arrow-down.png";
import HeroBackground from "./HeroBackground";
import "../../App.css";

const linkStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: "transparent",
  background: "transparent",
  width: 60,
  margin: "0 5px",
  cursor: "pointer",
};

const iconStyle = {
  width: 40,
  height: 40,
  objectFit: "contain",
};

const Home = (props) => {
  return (
    <div className="divHome">
      <HeroBackground />
      <h1 className="title" style={{ color: "white", zIndex: "1" }}>
        Charalampos Piotopoulos
      </h1>
      <p style={{ fontSize: "80%", zIndex: "1" }}>
        Computer Science Student - Software Engineer - Programmer
      </p>

      <p style={{ padding: 10, zIndex: "1" }}>
        Welcome! This is my personal website. Here you can find information
        about me and my projects.
      </p>
      <div
        style={{
          flexDirection: "row",
          width: "100%",
          height: 60,
          zIndex: "1",
        }}
      >
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="linkedin">LinkedIn</Tooltip>}
        >
          <a
            href="https://www.linkedin.com/in/charis-piotopoulos/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            style={linkStyle}
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              style={iconStyle}
            />
          </a>
        </OverlayTrigger>
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="github">GitHub</Tooltip>}
        >
          <a
            href="https://github.com/piotcharis/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            style={linkStyle}
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              style={iconStyle}
            />
          </a>
        </OverlayTrigger>
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="cv">CV</Tooltip>}
        >
          <a
            href={CV}
            download="Charalampos_Piotopoulos"
            target="_blank"
            rel="noreferrer"
            aria-label="Download CV"
            style={linkStyle}
          >
            <img
              src="https://img.icons8.com/dotty/80/null/resume.png"
              alt="CV"
              style={iconStyle}
            />
          </a>
        </OverlayTrigger>
      </div>

      <a href="#aboutMe" style={{ zIndex: "1" }} aria-label="Scroll to About me">
        <img
          src={props.isDark ? arrowWhite : arrowBlack}
          style={{ width: 40, paddingTop: 100 }}
          alt="arrow down"
        />
      </a>
    </div>
  );
};

Home.propTypes = {
  isDark: PropTypes.bool,
};

export default Home;

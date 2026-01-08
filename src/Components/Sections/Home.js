import React from "react";
import "../../App.css";
import CV from "./resources/Charalampos_Piotopoulos.pdf";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const buttonStyle = {
  border: "transparent",
  background: "transparent",
  width: 70,
  padding: 10,
};

const Home = (props) => {
  return (
    <div className="divHome">
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
          <a href="https://www.linkedin.com/in/charis-piotopoulos/">
            <button style={buttonStyle}>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
              />
            </button>
          </a>
        </OverlayTrigger>
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="github">GitHub</Tooltip>}
        >
          <a href="https://github.com/piotcharis/">
            <button style={buttonStyle}>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
              />
            </button>
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
          >
            <button style={buttonStyle}>
              <img
                src="https://img.icons8.com/dotty/80/null/resume.png"
                alt="CV"
                style={{ width: 60, height: 60 }}
              />
            </button>
          </a>
        </OverlayTrigger>
      </div>

      <a href="#aboutMe" style={{ zIndex: "1" }}>
        <img
          src={require(props.isDark
            ? "./resources/arrow-down-white.png"
            : "./resources/arrow-down.png")}
          style={{ width: 40, height: 140, paddingTop: 100 }}
          alt="arrow down"
        />
      </a>
    </div>
  );
};

export default Home;

import React from "react";
import { Fade } from "react-awesome-reveal";
import NavBar from "./Components/Navbar";
import ModeButton from "./Components/ModeButton";
import Home from "./Components/Sections/Home";
import AboutMe from "./Components/Sections/AboutMe";
import Education from "./Components/Sections/Education";
import Certificates from "./Components/Sections/Certificates";
import Projects from "./Components/Sections/Projects";
import LanguagesAndTools from "./Components/Sections/LanguagesAndTools";
import Contact from "./Components/Sections/Contact";
import TopButton from "./Components/Sections/ToTopButton";
import Experience from "./Components/Sections/Experience";
import "./App.css";

function App() {
  const [isDark, setIsDark] = React.useState(false);

  const style = {
    backgroundColor: isDark ? "#232C33" : "#FFFFFF",
    color: isDark ? "#F5F5F5" : "#232C33",
  };

  return (
    <div id="home" style={style}>
      <TopButton />

      <div className="darkSwitch">
        <div onClick={() => setIsDark((current) => !current)}>
          <ModeButton />
        </div>
      </div>

      <div>
        <NavBar id="top" />
      </div>

      <div
        style={{
          height: "100vh",
          background: isDark ? "#232C33" : "#1e3c73",
        }}
      >
        <Home isDark={isDark} />
      </div>

      <div id="aboutMe">
        <AboutMe />
      </div>

      <div id="languages">
        <LanguagesAndTools />
      </div>

      <Fade direction="up" duration={800} triggerOnce>
        <div id="exp">
          <Experience isDark={isDark} />
        </div>
      </Fade>

      <Fade direction="up" duration={800} triggerOnce>
        <div id="edu">
          <Education isDark={isDark} />
        </div>
      </Fade>

      <div id="certificates">
        <Certificates isDark={isDark} />
      </div>

      <div id="projects">
        <Projects isDark={isDark} />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;

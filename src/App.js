import React from "react";
import Fade from "react-reveal/Fade";
import NavBar from "./Components/Navbar";
import ModeButton from "./Components/ModeButton";
import Home from "./Components/Sections/Home";
import AboutMe from "./Components/Sections/AboutMe";
import Education from "./Components/Sections/Education";
import Projects from "./Components/Sections/Projects";
import LanguagesAndTools from "./Components/Sections/LanguagesAndTools";
import Contact from "./Components/Sections/Contact";
import TopButton from "./Components/Sections/ToTopButton";
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
        style={{ height: "100vh", background: isDark ? "#232C33" : "#606060" }}
      >
        <Home isDark={isDark} />
      </div>

      <div id="aboutMe">
        <AboutMe />
      </div>

      <div id="languages">
        <LanguagesAndTools />
      </div>

      <Fade duration={800} bottom={true}>
        <div id="edu">
          <Education />
        </div>
      </Fade>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;

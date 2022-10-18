import React from 'react';
import Fade from 'react-reveal/Fade';
import NavBar from './Components/Navbar';
import ModeButton from './Components/ModeButton';
import Home from './Components/Sections/Home';
import AboutMe from './Components/Sections/AboutMe';
import Education from './Components/Sections/Education';
import Projects from './Components/Sections/Projects';
import LanguagesAndTools from './Components/Sections/LanguagesAndTools';
import Contact from './Components/Sections/Contact';
import TopButton from './Components/Sections/ToTopButton';
import './App.css';

function App() {

  const [isDark, setIsDark] = React.useState(false);

  const style = {
    backgroundColor: isDark ? '#232C33' : '#FFFFFF',
    color: isDark ? '#F5F5F5' : '#232C33',
  };

  return (
    <div id='home' style={style}>
      <TopButton />

      <div className='darkSwitch'>
        <div onClick={()=>setIsDark(current => !current)}>
          <ModeButton />
        </div>
      </div>

      <div>
          <NavBar id='top' />
      </div>

      <div style={{height:'100vh', background:isDark ? '#232C33' : '#85807f'}}>
          <Home isDark={isDark} />
      </div>

      <Fade duration={1500} bottom={true}>
        <div id='aboutMe'>
          <AboutMe />
        </div>

        <div id='edu'>
          <Education />
        </div>

        <div id='projects'>
          <Projects />
        </div>

        <div id='languages'>
          <LanguagesAndTools />
        </div>

        <div id='contact'>
          <Contact />
        </div>
      </Fade>
    </div>

  );
}

export default App;
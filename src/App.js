import './App.css';
import React from 'react';
import AboutMe from './Sections/AboutMe';
import Home from './Sections/Home';
import Education from './Sections/Education';
import LanguagesAndTools from './Sections/LanguagesAndTools';
import Contact from './Sections/Contact';
import TopButton from './Sections/ToTopButton';
import Projects from './Sections/Projects';
import Fade from 'react-reveal/Fade';
import NavBar from './Components/Navbar';

function App() {

  const [isDark, setIsDark] = React.useState(false);

  const style = {
    backgroundColor: isDark ? '#232C33' : '#FFFFFF',
    color: isDark ? '#F5F5F5' : '#232C33',
  };

  return (
    <div id='home' style={style}>
      <TopButton />

      <div >
          <NavBar isDark={isDark} onChange={()=>setIsDark(current => !current)} id='top' />
      </div>

      <div style={{height:'100vh', background:isDark ? '#232C33' : '#B9BDC4'}}>
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
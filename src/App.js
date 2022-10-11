import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import AboutMe from './Sections/AboutMe';
import Home from './Sections/Home';
import Education from './Sections/Education';
import LanguagesAndTools from './Sections/LanguagesAndTools';
import Contact from './Sections/Contact';
import TopButton from './Sections/ToTopButton';
import Projects from './Sections/Projects';

function App() {

  const [isDark, setIsDark] = React.useState(false);

  const style = {
    backgroundColor: isDark ? '#232C33' : '#FFFFFF',
    color: isDark ? '#F5F5F5' : '#232C33',
  };

  return (
    <div id='home' style={style}>
      <div id='top'>
        <Navbar isDark={isDark} onChange={()=>setIsDark(current => !current)} />
      </div>
      
      <div style={{height:'100vh'}}>
        <Home isDark={isDark} />
      </div>

      <div>
        <TopButton />
      </div>

      <div id='aboutMe'>
        <AboutMe />
      </div>

      <div id='edu'>
        <Education isDark={isDark}/>
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
    </div>

  );
}

export default App;
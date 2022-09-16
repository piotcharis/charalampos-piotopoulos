import './App.css';
import Navbar from './Components/Navbar';
import AboutMe from './Sections/AboutMe';
import Home from './Sections/Home';
import Education from './Sections/Education';

const style = {
  backgorundColor: '#F2E7C6'
}

function App() {
  return (
    <div id='home' style={style}>
      <div style={{color:"#7C898B"}}>
        <Navbar />
      </div>
      
      <div>
        <Home />
      </div>

      <div id='aboutMe'>
        <AboutMe />
      </div>

      <div id='edu'>
        <Education />
      </div>
    </div>

  );
}

export default App;
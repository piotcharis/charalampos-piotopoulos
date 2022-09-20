import React from "react";
import "../App.css"

const styleText = {
    fontFamily: 'Roboto Mono',
    fontSize: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingDown: 20,
    margin: 20,
    textAlign: 'center',
    paddingTop: 30,
    height:'100vh'
};

const Home = (props) => {
    return (
        <div style={styleText}>
            <h1 className="title">Welcome!</h1>
            
            <p style={{padding:10}}>
                This is my personal website. Here you can find information about me and my projects.
            </p>
            <div style={{flexDirection:'row', width:'100%', height:60}}>
                <a href="https://www.linkedin.com/in/charis-piotopoulos/">
                    <button style={{border:'transparent', background:'transparent', width:70, padding:10}}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn"/>
                    </button>
                </a>
                <a href="https://github.com/piotcharis/">
                    <button style={{border:'transparent', background:'transparent', width:70, padding:10}}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub"/>
                    </button>
                </a>
            </div>

            <a href="#aboutMe">
                <img src={require(props.isDark ? "./resources/arrow-down-white.png" : "./resources/arrow-down.png")} style={{width:40, height:140, paddingTop:100}} alt="arrow down" />
            </a>
        </div>
    );
}

export default Home;
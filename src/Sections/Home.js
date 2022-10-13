import React from "react";
import "../App.css"

const styleText = {
    fontFamily: 'Roboto Mono',
    fontSize: 'calc(8px + 1vmin)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingDown: 20,
    margin: 20,
    textAlign: 'center',
    height:'85vh'
};

const Home = (props) => {
    return (
        <div style={styleText}>
            <h1 className="title" style={{color:'#D36135'}}>Charalampos Piotopoulos</h1>
            <p style={{fontSize:'80%'}}>Computer Science Student - Software Engineer - Programmer</p>
            
            <p style={{padding:10}}>
                Welcome! This is my personal website. Here you can find information about me and my projects.
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
import React from "react";
import "../../App.css"

const buttonStyle = {
    border: 'transparent', 
    background: 'transparent', 
    width: 70, 
    padding: 10
}

const Home = (props) => {
    return (
        <>
            <div className="divHome">
                <h1 className="title" style={{ color: 'white', zIndex:'1'}}>Charalampos Piotopoulos</h1>
                <p style={{ fontSize: '80%', zIndex:'1' }}>Computer Science Student - Software Engineer - Programmer</p>

                <p style={{ padding: 10, zIndex:'1'}}>
                    Welcome! This is my personal website. Here you can find information about me and my projects.
                </p>
                <div style={{ flexDirection: 'row', width: '100%', height: 60, zIndex:'1' }}>
                    <a href="https://www.linkedin.com/in/charis-piotopoulos/">
                        <button style={buttonStyle}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
                        </button>
                    </a>
                    <a href="https://github.com/piotcharis/">
                        <button style={buttonStyle}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                        </button>
                    </a>
                </div>

                <a href="#aboutMe" style={{zIndex:'1'}}>
                    <img src={require(props.isDark ? "./resources/arrow-down-white.png" : "./resources/arrow-down.png")} style={{ width: 40, height: 140, paddingTop: 100 }} alt="arrow down" />
                </a>

                <div className="blob">
                    <svg xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
                        <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
                    </svg>
                </div>
            </div>
        </>
    );
}

export default Home;
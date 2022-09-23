import React from "react";
import "../App.css"
import Card from 'react-bootstrap/Card';
import ReactCardCarousel from "react-card-carousel";



const style = {
    fontFamily: 'Roboto Mono',
    fontSize: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
};

function Projects () {
    function getWidth() {
        let temp = window.innerWidth > 1000 ? "70vw" : "100vw";
        if (window.screen.orientation.type === "landscape-primary") {
            temp = "65vw";
        }
        return temp;
    };

    const CONTAINER_STYLE = {
          position: "relative",
          height: "60vh",
          width: getWidth(),
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
    };

    const CARD_STYLE = {
          height: "auto",
          width: "auto",
          paddingTop: "0px",
          textAlign: "center",
          color: "#FFF",
          borderRadius: "0px",
          boxSizing: "border-box"
    };

    const styleCard = {
        width:'auto',
        height:'auto'
    };

    const styleCardText = {
        fontSize: window.innerWidth > 1000 ? 15 : 12, 
        height:'auto'
    };

    function getAlignment() {
        let temp = window.innerWidth < 1000 ? "vertical" : "horizontal";
        if (window.screen.orientation.type === "landscape-primary") {
            temp = "horizontal";
        }
        return temp;
    };

    return (
        <div style={style}>
            <h1 className="title">Projects</h1>
            <div style={CONTAINER_STYLE}>
                <ReactCardCarousel autoplay={false} alignment={getAlignment()}>
                    <div style={CARD_STYLE}>
                        <Card bg='Dark' text='dark' style={styleCard}>
                            <Card.Img variant="top" src={require("./resources/website-dark.png")} />
                            <Card.Body>
                                <Card.Title>This website</Card.Title>
                                <Card.Text>
                                    <p style={styleCardText}>This website was created using React.js and Bootstrap.</p>
                                    <a href="https://github.com/piotcharis/personal_site">
                                        <button style={{border:'transparent', background:'transparent', width:50}}>
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub"/>
                                        </button>
                                    </a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div style={CARD_STYLE}>
                        <Card bg='Dark' text='dark' style={styleCard}>
                            <Card.Img variant="top" src={require("./resources/search-engine.png")} />
                            <Card.Body>
                                <Card.Title>Pingu Search Engine</Card.Title>
                                <Card.Text>
                                    <p style={styleCardText}>This app was created using Java.</p>
                                    <a href="https://github.com/piotcharis/SearchEnginePGdP">
                                        <button style={{border:'transparent', background:'transparent', width:50}}>
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub"/>
                                        </button>
                                    </a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div style={CARD_STYLE}>
                        <Card bg='Dark' text='dark' style={styleCard}>
                            <Card.Img variant="top" src={require("./resources/mandelbrot.png")} />
                            <Card.Body>
                                <Card.Title>Mandelbrot set</Card.Title>
                                <Card.Text>
                                    <p style={styleCardText}>This program was created using C. (repo coming soon...)</p>
                                    <a href="https://github.com/piotcharis/Mandelbrot">
                                        <button style={{border:'transparent', background:'transparent', width:50}}>
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub"/>
                                        </button>
                                    </a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div style={CARD_STYLE}>
                        <Card bg='Dark' text='dark' style={styleCard}>
                            <Card.Img variant="top" src={require("./resources/top-of-the-hats.png")} />
                            <Card.Body>
                                <Card.Title>Top of the Hats</Card.Title>
                                <Card.Text>
                                    <p style={styleCardText}>This program was created using Java and Java Swing.</p>
                                    <a href="https://github.com/piotcharis/TopOfTheHats">
                                        <button style={{border:'transparent', background:'transparent', width:50, paddingRight:10}}>
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub"/>
                                        </button>
                                    </a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </ReactCardCarousel>
            </div>
        </div>
    );
}

export default Projects;
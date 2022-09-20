import React from "react";
import "../App.css"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const style = {
    fontFamily: 'Roboto Mono',
    fontSize: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 20,
    textAlign: 'center',
    paddingTop: 30,
};

function Projects () {

    const styleCard = {
        width:'20rem',
        height:'20rem'
    };

    return (
        <div style={style}>
            <h1 className="title">Projects</h1>

            <div style={{padding:50}}>
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Card bg='Dark' text='dark' style={styleCard}>
                            <Card.Img variant="top" src={require("./resources/website-dark.png")} />
                            <Card.Body>
                                <Card.Title>This website</Card.Title>
                                <Card.Text>
                                    <p style={{fontSize:15, height:40}}>This website was created using React.js and Bootstrap.</p>
                                    <a href="https://github.com/piotcharis/personal_site">
                                        <button style={{border:'transparent', background:'transparent', width:50, paddingRight:10}}>
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub"/>
                                        </button>
                                    </a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card bg='Dark' text='dark' style={styleCard}>
                            <Card.Img variant="top" src={require("./resources/search-engine.png")} />
                            <Card.Body>
                                <Card.Title>Pingu Search Engine</Card.Title>
                                <Card.Text>
                                    <p style={{fontSize:15, height:40}}>This app was created using Java.</p>
                                    <a href="https://github.com/piotcharis/SearchEnginePGdP">
                                        <button style={{border:'transparent', background:'transparent', width:50, paddingRight:10}}>
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub"/>
                                        </button>
                                    </a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card bg='Dark' text='dark' style={styleCard}>
                            <Card.Img variant="top" src={require("./resources/mandelbrot.png")} />
                            <Card.Body>
                                <Card.Title>Mandelbrot set</Card.Title>
                                <Card.Text>
                                    <p style={{fontSize:15, height:40}}>This program was created using C. (repo coming soon...)</p>
                                    <a href="https://github.com/piotcharis/Mandelbrot">
                                        <button style={{border:'transparent', background:'transparent', width:50, paddingRight:10}}>
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub"/>
                                        </button>
                                    </a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Projects;
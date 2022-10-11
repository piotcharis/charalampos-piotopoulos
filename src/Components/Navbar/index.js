import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Astronaut from "./resources/astronaut.png";
import ModeButton from "./ModeButton";

const styleImage = {
    width: 40,
    height: 40
};

const styleNavbar = {
  fontWeight: 'bold',
  fontSize: 'auto',
  maxHeight: '100px',
};

function NavBar(props) {

  const styleText = {
    color: props.isDark ? '#FFFFFF' : '#526062'
  };

  return (
    <Navbar bg="" expand="lg" sticky='top'>
      <Container fluid>
        <Navbar.Brand href="#"><img src={Astronaut} alt="Astronaut" style={styleImage}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={styleNavbar}
            navbarScroll
          >
            <Nav.Link href="#aboutMe" style={styleText}>About Me</Nav.Link>
            <Nav.Link href="#edu" style={styleText}>Education</Nav.Link>
            <Nav.Link href="#projects" style={styleText}>Projects</Nav.Link>
            <Nav.Link href="#languages" style={styleText}>Languages and Tools</Nav.Link>
            <Nav.Link href="#contact" style={styleText}>Contact</Nav.Link>
          </Nav>
          <div onClick={props.onChange}>
            <ModeButton />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

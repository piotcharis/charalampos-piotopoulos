import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Astronaut from "./resources/logo/astronaut.png";
import ModeButton from "./ModeButton";

const styleImage = {
    width: 40,
    height: 40
};

const styleNavbar = {
  fontWeight: 'bold',
  fontFamily: 'Rubik',
  fontSize: 'calc(8px + 1vmin)',
  maxHeight: '0px',
};

function NavBar(props) {

  const styleText = {
    color: '#FFFFFF'
  };

  return (
    <Navbar bg="" expand="lg" sticky='top' style={{backgroundColor: props.isDark ? '#232C33' : '#85807f'}}>
      <Container fluid>
        <Navbar.Brand href="#"><img src={Astronaut} alt="Astronaut" style={styleImage}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={styleNavbar}
          >
            <Nav.Link href="#aboutMe" style={styleText}>/About Me </Nav.Link>
            <Nav.Link href="#edu" style={styleText}>/Education </Nav.Link>
            <Nav.Link href="#projects" style={styleText}>/Projects </Nav.Link>
            <Nav.Link href="#languages" style={styleText}>/Languages and Tools </Nav.Link>
            <Nav.Link href="#contact" style={styleText}>/Contact</Nav.Link>
            <div onClick={props.onChange}>
              <ModeButton />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
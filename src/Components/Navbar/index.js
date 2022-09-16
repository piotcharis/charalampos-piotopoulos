import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Astronaut from "./resources/astronaut.png";

const styleImage = {
    width: 40,
    height: 40
};

function NavScrollExample() {
  return (
    <Navbar bg="#F7F0DE" expand="lg" sticky='top'>
      <Container fluid>
        <Navbar.Brand href="#"><img src={Astronaut} alt="Astronaut" style={styleImage}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#aboutMe">About Me</Nav.Link>
            <Nav.Link href="#edu">Education</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#languages">Languages and Tools</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
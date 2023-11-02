import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function CustomNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id="CustomNav">
      <Container className="HeadingStyle">
        <Navbar.Brand className="TextStyle" href="/">
          MATEO RODRIGUEZ
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="LinkStyle" href="/">About Me</Nav.Link>
            <Nav.Link className="LinkStyle" href="/Portfolio">Portfolio</Nav.Link>
            <Nav.Link className="LinkStyle" href="/Contact">Contact</Nav.Link>
            <Nav.Link className="LinkStyle" href="/Resume">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNav;

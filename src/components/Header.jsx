import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  //   const [lenguage, setLenguage] = useState(false)
  // console.log(lenguage);

  return (
    <header>
      <div>
        <Navbar className="navbar" variant="dark">
          <Container>
            <Navbar.Brand>My portfolio</Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
            {/* <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"> */}
            {/* <NavDropdown  title="Language" id="collasible-nav-dropdown">
              <NavDropdown.Item>I working on this (soon in english)</NavDropdown.Item>
              <NavDropdown.Item >
                Español
              </NavDropdown.Item>
                </NavDropdown> */}
            {/* </Nav>
            </Navbar.Collapse> */}
          </Container>
        </Navbar>
      </div>
    </header>
  );
}

export default Header;

import React from "react";
import "./Header.css";
import logo from "../assets/logo.svg";
import { Container, Nav, Navbar, NavDropdown, Button} from "react-bootstrap";

function Header() {
  return (
    <>
    <div className="nav-container">
      <Navbar className="navbar" expand="xl" >
        <Container className="content-container">
          <Navbar.Brand href="#home">
          <img src={logo} alt="logo" style={{width:"130px", marginLeft: "1em"}}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-expand-xl" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="li" href="#home">Home</Nav.Link>
             
              <NavDropdown className="li" title="Solutions" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Option1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Option2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                Option3
                </NavDropdown.Item>
              
              </NavDropdown>

              <NavDropdown className="li" title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/4.1">Option1</NavDropdown.Item>
                <NavDropdown.Item href="#action/4.2">
                Option2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/4.3">
                Option3
                </NavDropdown.Item>
              
              </NavDropdown>

              <Nav.Link className="li" href="#About">About</Nav.Link>
              <Nav.Link className="li" href="#Feedback">nFeedback</Nav.Link>
              <div className="dot"></div>
            </Nav>
            <div className="btns-container">
            <button className="secondary-btn">Download app</button>
            <button className="primary-btn">Dark mode</button>
            </div>
            {/* <Button  className="secondary-btn">Download app</Button>
            <Button className="primary-btn" >Dark mode</Button> */}

          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    </>
  );
}

export default Header;

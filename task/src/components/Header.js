import React from "react";
import "./Header.css";
import styled from "styled-components";

import logo from "../assets/logo.svg";
import logoDark from "../assets/logoDark.svg";
import twitter from "../assets/twitter.svg";
import { Container, Nav, Navbar, NavDropdown, Button} from "react-bootstrap";

// const NavContainer = styled.div`
//   width: 100%;
// `

// const StyledNavbar = styled(Navbar)`
//   width: 80%;
//   margin: 0 auto;
//   background-color: var(--background);
//   margin-top: 1.5em;
//   box-shadow: 0px 19px 55px #00000014;
//   border-radius: 62px;
// `
// const ContentContainer = styled(Container)`
//   padding: 0.8em;
// `
// const StyledNav = styled(Nav)`
//   margin: 0 auto;
//   margin-top: 0.5em;
//   gap: 1em;
// `



function Header({switchTheme, theme}) {

 


  return (
    <>
    <div className="nav-container">
      <Navbar className="navbar" expand="xl" >
        <Container className="content-container">
          <Navbar.Brand href="#home">
          {/* style={{width:"130px", marginLeft: "1em"}} */}
          {theme === 'light'? <img src={logo} alt="logo" className="logo"/> : <img src={logoDark} alt="logo" className="logo"/>}
          
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-expand-xl" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="li" href="#home">Home</Nav.Link>
             
              <NavDropdown   className="li" title="Solutions" id="basic-nav-dropdown">
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
              <Nav.Link className="li" href="#Feedback">Feedback</Nav.Link>
              <div className="dot"></div>
            </Nav>
            <div className="btns-container">
            <button className="primary-btn" onClick={switchTheme}>{theme === 'light'? 'Dark': 'Light'} mode</button>
            <button className="secondary-btn">Download app</button>
            </div>
  

          </Navbar.Collapse>
        </Container>
      </Navbar >
      </div>
    </>
  );
}

export default Header;

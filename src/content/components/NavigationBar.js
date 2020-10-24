import React from 'react'
import linkedInIcon from '../assets/LI-In-Bug.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

export const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="brand-blue" variant="brand-blue">
            {/*<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">*/}

            <Navbar.Brand className={"mr-5"} href="/">Daniel Walford</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">About</Nav.Link>
                    <NavDropdown title="Experience" id="collasible-nav-dropdown-experience">
                        <NavDropdown.Item href="/experience/game-dev">Game Developer</NavDropdown.Item>
                        <NavDropdown.Item href="/experience/web-dev">Web Developer</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Projects" id="collasible-nav-dropdown-projects">
                        <NavDropdown.Item href="/projects/portfolio">Portfolio</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="https://uk.linkedin.com/in/daniel-walford">
                        <img className={"header-widget"} src={linkedInIcon} alt={"linked-in portfolio"}/>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>)
}
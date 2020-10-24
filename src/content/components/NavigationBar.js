import React from 'react'
import linkedInIcon from '../assets/LI-In-Bug.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

export const NavigationBar = () => {
    return (
        <header className={"header-banner background--brand-blue"}>
            <Navbar collapseOnSelect expand="lg" bg="brand-blue" variant="brand-blue">
                <Navbar.Brand href="/">Daniel Walford</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">About</Nav.Link>
                        <NavDropdown title="Experience" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Game Developer</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Web Developer</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="https://uk.linkedin.com/in/daniel-walford">
                            <img className={"header-widget"} src={linkedInIcon}/>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar></header>)
}
import React from 'react'
import useToggle from "../utils/react/toggle";
import LinkedInIcon from '../assets/LI-In-Bug.png'
import GithubIcon from '../assets/GitHub-Mark-Light-64px.png'

export const NavigationBar = () => {
    const [menuOpen, toggleMenu] = useToggle();
    const navClasses = `navigation ${menuOpen ? "active" : ""}`
    return (
        <nav>
            <ul className={navClasses}>
                <li className="name"><a href="/">Daniel Walford</a></li>
                <li className="item"><a href="/about">About</a></li>
                <li className="item">
                    <a tabIndex="0">Experience <div className={"has-subnavigation"}/> </a>
                    <ul className="subnavigation">
                        <li className="subitem"><a href="experience/game-dev">Game Development</a></li>
                        <li className="subitem"><a href="experience/web-dev">Web Development</a></li>
                    </ul>
                </li>
                <li className="item"><a href="/projects">Projects</a></li>
                <li className="item"><a href="/contact">Contact</a>
                </li>
                <li className="item">
                    <a href="https://uk.linkedin.com/in/daniel-walford" className={"logo"}><img
                        className={"header-widget"}
                        src={LinkedInIcon}
                        alt={"Linked-in portfolio"}/></a>
                </li>
                <li className="item">
                    <a href="https://github.com/dandwal" className={"logo"}><img
                        className={"header-widget"}
                        src={GithubIcon}
                        alt={"Github user dandwal"}/></a>
                </li>
                <Toggle menuOpen={menuOpen} toggleMenu={toggleMenu}/>
            </ul>
        </nav>
    )
}

export const Toggle = (props) => {
    const closeMenuIcon = <div className={"cross"}/>
    const openMenuIcon = <div>
        <div class={"hamburger-line"}/>
        <div className={"hamburger-line"}/>
        <div className={"hamburger-line"}/>
    </div>
    const toggle = props.menuOpen ? closeMenuIcon : openMenuIcon;
    return (
        <li className="toggle">
            <a href={"#"}
               onClick={props.toggleMenu}>
                {toggle}
            </a>
        </li>
    )
}
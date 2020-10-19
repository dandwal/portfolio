import React from 'react'
import linkedInIcon from '../assets/LI-In-Bug.png'

export const Header = () => {
    return (
        <header className={"header-banner background--brand-blue"}>
            <nav className={"wrapper"}>
                <div className={"column-3"}><h1><a href={"/"} className={"non-changing-link"}>Daniel Walford</a></h1></div>
                <div className={"column-1"}></div>
                <ul className={"column-6"}>
                    <li>
                        <a href={"/"}>About</a>
                    </li>
                    <li>
                        <a href={"/"}>Experience</a>
                    </li>
                    <li>
                        <a href={"/"}>Contact</a>
                    </li>
                </ul>
                {/*<div className={"column-2 font-size--20"}>About</div>*/}
                {/*<div className={"column-2 font-size--20"}>Experience</div>*/}
                {/*<div className={"column-2 font-size--20"}>Contact</div>*/}
                <div className={"column-2"}>
                    <a href={"https://uk.linkedin.com/in/daniel-walford"}>
                        <img className={"header-widget"} src={linkedInIcon}/>
                    </a>
                </div>
            </nav>
        </header>)
}
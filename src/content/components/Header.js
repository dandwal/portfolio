import React from 'react'
import linkedInIcon from '../assets/LI-In-Bug.png'

export const Header = () => {
    return (
        <header className={"header-banner background--brand-blue"}>
            <nav className={"wrapper"}>
                <div className={"column-4"}><h1><a href={"/"}>Daniel Walford</a></h1></div>
                <div className={"column-7"}></div>
                <div className={"column-1"}><img className={"header-widget"} src={linkedInIcon}/></div>
            </nav>
        </header>)
}
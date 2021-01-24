import React from 'react'
import useToggle from "../../utils/react/toggle";
import LinkedInIcon from '../../assets/LI-In-Bug.png'
import GithubIcon from '../../assets/GitHub-Mark-Light-64px.png'
import {Item} from "./Item";

export const Bar = () => {
    const [navigationOpen, toggleNavigation] = useToggle();
    const navClasses = `navigation ${navigationOpen ? "active" : ""}`
    const experiencesNavSubNavigationItems = [{
        URI: "/experience/game-dev",
        name: "Game Development"
    }, {URI: "/experience/web-dev", name: "Web Development"}]
    return (
        <nav>
            <ul className={navClasses}>
                <li className="name"><a href="/">Daniel Walford</a></li>
                <Item rootURI={"/about"} rootName={"About"}/>
                <Item rootURI={"/tech"} rootName={"Technology"}/>
                <Item rootName={"Experience"} isParent={true} subNavigationItems={experiencesNavSubNavigationItems}/>
                <Item rootURI={"/projects/portfolio"} rootName={"Projects"}/>
                <Item rootURI={"/contact"} rootName={"Contact"}/>
                <li className="item item-img">
                    <a href="https://uk.linkedin.com/in/daniel-walford" className={"logo"}><img
                        className={"header-widget"}
                        src={LinkedInIcon}
                        alt={"Linked-in portfolio"}/></a>
                </li>
                <li className="item item-img">
                    <a href="https://github.com/dandwal" className={"logo"}><img
                        className={"header-widget"}
                        src={GithubIcon}
                        alt={"Github user dandwal"}/></a>
                </li>
                <Toggle navigationOpen={navigationOpen} toggleNavigation={toggleNavigation}/>
            </ul>
        </nav>
    )
}

export const Toggle = (props) => {
    const closeNavigationIcon = <div className={"cross"} aria-hidden="true"/>
    const openNavigationIcon = <div>
        <div className={"hamburger-line"} aria-hidden="true"/>
        <div className={"hamburger-line"} aria-hidden="true"/>
        <div className={"hamburger-line"} aria-hidden="true"/>
    </div>
    const toggle = props.navigationOpen ? closeNavigationIcon : openNavigationIcon;
    return (
        <li className="toggle">
            <button href={"#"}
               onClick={props.toggleNavigation}
               aria-label={"Toggle the menu"}
            >
                {toggle}
            </button>
        </li>
    )
}
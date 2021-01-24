import React from 'react'
import {Header} from '../components/Header'
import {Footer} from '../components/Footer'


export const Homepage = () => {
    return (<div className={"page-container background-lettering"}>
        <a className="skip-link" href="#main">Skip to main</a>
        <Header/>
        <main id="main">
            <HomepageContent/>
        </main>
        <Footer/>
    </div>)
}

const HomepageContent = () => {
    return (
        <div className={"wrapper homepage-content"}>
            <h1 className={""}><span className={"homepage-intro__heading"}>Hi, I am </span><span
                className={"homepage-intro__heading homepage-intro__heading--secondary-color"}>Daniel</span><span
                className={"homepage-intro__heading"}>!</span></h1>
            <h2 className={"homepage-intro__sub-heading"}>Senior Developer</h2>
            <p className={"homepage-intro__desc"}>Fullstack developer that specialises in frontend web development.
                Based in Cardiff. <br/>
                Programming for 11 years, with 6 years of profession experience.
            </p>
            <div>
                <a className={"button-a button-a--cta button-a--dont-grow"} href={"/about"} tabIndex={0}>Find out more
                    about me</a>
            </div>
            <div className={"page-push"}/>
            {/*<img src={face} alt={"Daniel Walford Avatar"} className={"face d-none d-md-block"}/>*/}
        </div>
    )
}
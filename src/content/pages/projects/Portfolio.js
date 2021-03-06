import React from 'react'
import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'
import construction from '../../assets/under-construction.png'

export const Portfolio = () => {
    return (<div className={"page-container background-lettering"}>
        <a className="skip-link" href="#main">Skip to main</a>
        <Header/>
        <main id="main">
            <PortfolioContent/>
        </main>
        <Footer/>
    </div>)
}

const PortfolioContent = () => {
    return (
        <div className={"content"}>
            <img src={construction} style={{width:"100%"}} alt={"Web page under construction"}></img>
        </div>
    )
}
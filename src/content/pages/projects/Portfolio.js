import React from 'react'
import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'

export const Portfolio = () => {
    return (<div className={"page-container"}>
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

        </div>
    )
}
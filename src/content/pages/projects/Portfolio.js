import React from 'react'
import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'

export const Portfolio = () => {
    return (<div className={"page-container"}>
        <Header/>
        <PortfolioContent/>
        <Footer/>
    </div>)
}

const PortfolioContent = () => {
    return (
        <div className={"content"}>

        </div>
    )
}
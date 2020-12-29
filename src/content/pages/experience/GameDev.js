import React from 'react'
import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'

export const GameDev = () => {
    return (<div className={"page-container background-lettering"}>
        <a className="skip-link" href="#main">Skip to main</a>
        <Header/>
        <main id="main">
            <GameDevContent/>
        </main>
        <Footer/>
    </div>)
}

const GameDevContent = () => {
    return (
        <div className={"content"}>

        </div>
    )
}
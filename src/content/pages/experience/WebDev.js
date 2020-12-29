import React from 'react'
import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'

export const WebDev = () => {
    return (<div className={"page-container background-lettering"}>
        <a className="skip-link" href="#main">Skip to main</a>
        <Header/>
        <main id="main">
            <WebDevContent/>
        </main>
        <Footer/>
    </div>)
}

const WebDevContent = () => {
    return (
        <div className={"content"}>

        </div>
    )
}
import React from 'react'
import {Header} from '../components/Header'
import {Footer} from '../components/Footer'

export const Contact = () => {
    return (<div className={"page-container background-lettering"}>
        <a className="skip-link" href="#main">Skip to main</a>
        <Header/>
        <main id="main">
            <ContactContent/>
        </main>
        <Footer/>
    </div>)
}

const ContactContent = () => {
    return (
        <div className={"content"}>
            Email: danielwalforddeveloper@gmail.com
        </div>
    )
}
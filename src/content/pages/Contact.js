import React from 'react'
import {Header} from '../components/Header'
import {Footer} from '../components/Footer'

export const Contact = () => {
    return (<div className={"page-container background-lettering"}>
        <Header/>
        <ContactContent/>
        <Footer/>
    </div>)
}

const ContactContent = () => {
    return (
        <div className={"content"}>

        </div>
    )
}
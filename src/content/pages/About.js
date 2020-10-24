import React from 'react'
import {Header} from '../components/Header'
import {Footer} from '../components/Footer'

export const About = () => {
    return (<div className={"page-container"}>
        <Header/>
        <AboutContent/>
        <Footer/>
    </div>)
}

const AboutContent = () => {
    return (
        <div className={"content"}>

        </div>
    )
}
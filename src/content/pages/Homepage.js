import React from 'react'
import {Header} from '../components/Header'
import {Footer} from '../components/Footer'

export const Homepage = () => {
    return (<div className={"page-container"}>
        <Header/>
        <HomepageContent/>
        <Footer/>
    </div>)
}

const HomepageContent = () => {
    return (
        <div className={"content"}>

        </div>
    )
}
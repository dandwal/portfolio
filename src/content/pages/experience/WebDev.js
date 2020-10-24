import React from 'react'
import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'

export const WebDev = () => {
    return (<div className={"page-container"}>
        <Header/>
        <WebDevContent/>
        <Footer/>
    </div>)
}

const WebDevContent = () => {
    return (
        <div className={"content"}>

        </div>
    )
}
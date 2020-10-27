import React from 'react'
import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'

export const GameDev = () => {
    return (<div className={"page-container background-lettering"}>
        <Header/>
        <GameDevContent/>
        <Footer/>
    </div>)
}

const GameDevContent = () => {
    return (
        <div className={"content"}>

        </div>
    )
}
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
            <div className="">
                <h1 className={"contact__heading"}>Get in touch</h1>
                <form action="" className={"contact__wrapper__outer contact__wrapper__outer--spaced"}>
                    <div className={"contact__side-section"}></div>
                    <div className={"contact__main-section"}>
                        <p className={"contact__section"}>
                            <label htmlFor="name" className={"contact__label"}>Your name*</label>
                            <input id={"name"} className={"contact__input-area"} type="text"/>
                        </p>
                        <p className={"contact__section"}>
                            <label htmlFor="email" className={"contact__label"}>Your e-mail address*</label>
                            <input id={"email"} className={"contact__input-area"} type="text"/>
                        </p>
                        <p className={"contact__section"}>
                            <label htmlFor="message" className={"contact__label"}>Write your message</label>
                            <textarea id={"message"} className={"contact__text-area"} name="message" cols="30"
                                      rows="7"></textarea>
                        </p>
                        <p className={"contact__section"}>
                            <button className={"contact__button button-a button-a--cta button-a--dont-grow"}>Send your
                                message!
                            </button>
                        </p>
                    </div>
                    <div className={"contact__side-section"}></div>
                </form>

                {/*<p><span>Looking for work status:</span><span> Not actively looking</span></p>*/}
                {/*Email: danielwalforddeveloper@gmail.com*/}
            </div>
            <div className={"page-push"}/>

        </div>
    )
}
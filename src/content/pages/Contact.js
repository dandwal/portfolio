import React, {useState} from 'react'
import {Header} from '../components/Header'
import {Footer} from '../components/Footer'
import * as emailjs from "emailjs-com";

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

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const templateParams = {name, email, message}
        emailjs.send("service_bh76zil", "template_0b3pmrk", templateParams)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
    }

    return (
        <div className={"content"}>
            <div className="">
                <h1 className={"contact__heading"}>Get in touch</h1>
                <form onSubmit={handleSubmit} action=""
                      className={"contact__wrapper__outer contact__wrapper__outer--spaced"}>
                    <div className={"contact__side-section"}/>
                    <div className={"contact__main-section"}>
                        <p className={"contact__section"}>
                            <label htmlFor="name" className={"contact__label"}>Your name*</label>
                            <input value={name}
                                   onChange={e => setName(e.target.value)}
                                   id={"name"} className={"contact__input-area"} type="text"/>
                        </p>
                        <p className={"contact__section"}>
                            <label htmlFor="email" className={"contact__label"}>Your e-mail address*</label>
                            <input value={email}
                                   type={"email"}
                                   onChange={e => setEmail(e.target.value)}
                                   id={"email"}
                                   className={"contact__input-area"}/>
                            <span>Please use a real email address so I can get back to you</span>
                        </p>
                        <p className={"contact__section"}>
                            <label htmlFor="message" className={"contact__label"}>Write your message</label>
                            <textarea value={message}
                                      onChange={e => setMessage(e.target.value)}
                                      maxLength="2000"
                                      id={"message"}
                                      className={"contact__text-area"}
                                      name="message"
                                      cols="30"
                                      rows="7"/>
                        </p>
                        <p className={"contact__section"}>
                            <button className={"contact__button button-a button-a--cta button-a--dont-grow"}
                            >Send your
                                message!
                            </button>
                        </p>
                    </div>
                    <div className={"contact__side-section"}/>
                </form>

                {/*<p><span>Looking for work status:</span><span> Not actively looking</span></p>*/}
                {/*Email: danielwalforddeveloper@gmail.com*/}
            </div>
            <div className={"page-push"}/>

        </div>
    )
}
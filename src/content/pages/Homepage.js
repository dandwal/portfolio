import React from 'react'
import {Header} from '../components/Header'
import {Footer} from '../components/Footer'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import face from '../assets/dw_face.svg'


export const Homepage = () => {
    return (<div className={"page-container background-lettering"}>
        <Header/>
        <HomepageContent/>
        <Footer/>
    </div>)
}

const HomepageContent = () => {
    return (
        <div>
            <Container className={"d-none d-sm-block"}>
                <Row>
                    <Col className={"mt-5"}/>
                </Row>
            </Container>
            <div className={"intro--banner-dark mt-5"}>
                <Container className={"mt-5 content wrapper justify-content-md-center"}>
                    <Row className={""}>
                        <Col className={""}>
                            <h1 className={"intro--heading"}><span>Hi, I am </span><span
                                className={"intro--color-primary"}>Daniel</span><span>!</span></h1>
                            <p className={"intro--sub-heading"}>Senior Developer</p>
                            <p className={"intro--p"}>Fullstack developer with a speciality in frontend.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant={"secondary"} size={"lg"} href={"/about"} className={"mb-3"}>Find out more about
                                me</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <img src={face} alt={"Daniel Walford Avatar"} className={"face d-none d-md-block"}/>
        </div>
    )
}
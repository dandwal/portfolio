import React from 'react'
import {Header} from '../components/Header'
import {Footer} from '../components/Footer'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export const About = () => {
    return (<div className={"page-container background-lettering"}>
        <Header/>
        <AboutContent/>
        <Footer/>
    </div>)
}

const AboutContent = () => {
    return (
        <div className={"content mt-5"}>
            <Container>
                <Row>
                    <Col>
                        <h1> Education</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>I Studied <b>BSc (Hons) Computing & Games Development</b> at the University of Plymouth,
                            whilst
                            working as an IT consultant for Cherith (Wales) ltd between 2012-2015.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>Career</h1>
                        <p>I Worked for <b>Red7 Mobile ltd</b> between 2015-2019 as a <b>Game Developer</b> which was
                            acquired by <b>Scientific Games Corporations</b>. I Created web-based games for desktop,
                            mobile and tablet devices. These games are played around the globe by millions of people in
                            many languages and currencies. Started as <b>Junior Developer</b> then in 2017 became <b>Senior
                                Developer</b> to finally be promoted in 2018 to <b>Lead Developer</b> in which I lead a
                            team of 16 developers. Find out more by visiting my <a href={"/experience/game-dev"} className={"brand-link"}>Game Developer Experience</a> page.</p>
                        <p>
                            Currently, work for the <b>Office of National Statistics</b> as <b>Software Engineer
                            (Frontend Developer) - Senior Executive Officer</b> since 2019. Working with a team to build
                            and maintain the public-facing website <a href={"https://www.ons.gov.uk"} className={"brand-link"}>ons.gov.uk</a> along with the internal
                            Content Management System (CMS) for the publishing teams. Find out more by visiting my <a href={"/experience/web-dev"} className={"brand-link"}>Web Developer Experience</a> page.
                        </p>
                    </Col>
                </Row>
                <Row>
                {/*    <Col>*/}
                {/*        <h1>A bit about me, as a person</h1>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
                {/*<Row>*/}
                {/*    <Col>*/}
                {/*        <h2>Principles and paradigms</h2>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
                {/*<Row>*/}
                {/*    <Col>*/}
                {/*        <p> test*/}
                {/*        </p>*/}
                {/*    </Col>*/}
                </Row>
            </Container>
        </div>
    )
}
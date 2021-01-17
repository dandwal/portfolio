import React from 'react'
import {Header} from '../components/Header'
import {Footer} from '../components/Footer'
import ons_logo from '../assets/ons-logo.svg'
import red7_logo from '../assets/red7_logo.png'
import sg_logo from '../assets/sg_logo.png'

export const About = () => {
    return (<div className={"page-container background-lettering"}>
        <a className="skip-link" href="#main">Skip to main</a>
        <Header/>
        <main id="main">
            <AboutContent/>
        </main>
        <Footer relative={true}/>
    </div>)
}

const AboutContent = () => {
    return (<section className="timeline">
            <ul>
                <li className={"in-view"}>
                    <div>
                        <time>2019</time>
                        <p>I currently work for the <b>Office of National Statistics (ONS)</b> as a <b>Software Engineer
                            (Frontend Developer) - Senior Executive Officer</b> since 2019. I am working with a team to
                            build and maintain the public-facing website <a href={"https://www.ons.gov.uk"}
                                                                            className={"brand-link--on-dark"}>ons.gov.uk</a> and
                            the internal Content Management System (CMS) for the publishing teams. Please find out more
                            by visiting my <a href={"/experience/web-dev"} className={"brand-link--on-dark"}>Web
                                Developer Experience</a> page.
                        </p>
                    </div>
                </li>
                <li className={"in-view"}>
                    <div>
                        <time>2018</time>
                        Promoted at <b>Red7Mobile</b> to <b>Lead Developer</b>; leading a team of 16 developers and overseeing all
                        games. Due to our team's success compared to all other studios, we
                        became the main game studio for Scientific Games globally.
                    </div>
                </li>
                <li className={"in-view"}>
                    <div>
                        <time>2017</time>
                        Promoted at <b>Red7Mobile</b> to <b>Senior Developer</b>. <b>Scientific Games</b> acquires Red7Mobile after testing
                        our team out against competitors from around the globe. Scientific Games is arguably the largest
                        and most successful company in the global gambling industry.
                    </div>
                </li>
                <li className={"in-view"}>
                    <div>
                        <time>2015</time>
                        Joined <b>Red7Mobile</b> ltd a start-up that had been operating for 3 years before I joined.
                    </div>
                </li>
                <li className={"in-view"}>
                    <div>
                        <time>2012</time>
                        Joined <b>Cherith (Wales) ltd</b> as an <b>IT Consultant</b>.
                    </div>
                </li>
                <li className={"in-view"}>
                    <div>
                        <time>2012</time>
                        Studied <b>BSc (Hons) Computing & Games Development</b> at the <b>University of Plymouth</b>.
                    </div>
                </li>
            </ul>
            <div className={"page-push"}/>

        </section>

    )
}


(function () {

    var items = document.querySelectorAll(".timeline li");

    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

})();
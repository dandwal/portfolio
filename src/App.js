import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Homepage} from "./content/pages/Homepage";
import {Contact} from "./content/pages/Contact";
import {About} from "./content/pages/About";
import {Tech} from "./content/pages/Tech"
import {GameDev} from "./content/pages/experience/GameDev";
import {WebDev} from "./content/pages/experience/WebDev";
import {Portfolio} from "./content/pages/projects/Portfolio"
import * as emailjs from "emailjs-com";

function App() {
    emailjs.init("user_8U2pKlSNWCfTaJ2dPbEiJ");
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/experience/game-dev" component={GameDev} exact/>
                    <Route path="/experience/web-dev" component={WebDev} exact/>
                    <Route path="/projects/portfolio" component={Portfolio} exact/>
                    <Route path="/contact" component={Contact} exact/>
                    <Route path="/about" component={About} exact/>
                    <Route path="/tech" component={Tech} exact/>
                    <Route path="/" component={Homepage} exact/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

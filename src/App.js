import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Homepage} from "./content/pages/Homepage";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" component={Homepage} exact/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

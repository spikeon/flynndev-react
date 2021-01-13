import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Home from './Home/Home';
import reportWebVitals from './reportWebVitals';

// @ts-ignore
import Analytics from 'react-router-ga';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import config from "./config";
import FlynnDevHeader from "./nav/FlynnDevHeader";
import Projects from "./Projects/Projects";
import Project from "./Project/Project";
import splash from "./img/Vector300.png";
import {Container} from "react-bootstrap";

const App = () => (
    <Router>
        <Analytics id={config.GA_TRACKING_ID}>
            <Container className="splash_outer">
                <img src={splash} className="splash" />
            </Container>
            <FlynnDevHeader/>
            <Switch>
                <Route path="/projects" component={Projects}/>
                <Route path="/project/:name" component={Project}/>
                <Route path="/" component={Home}/>
            </Switch>
        </Analytics>
    </Router>
);

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

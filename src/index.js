import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Edit from './Edit';
import See from './See';
import Add from './Add';

const routing = (
    <Router>
    <div>
        <Route exact path="/" component = {App} />
        <Route exact path="/Edit/:id" component={Edit} />
        <Route exact path="/See/:id" component={See} />
        <Route exact path="/Add" component={Add} />
    </div>
    </Router>
)

ReactDOM.render(routing,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

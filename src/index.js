import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import About from './components/About';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Whoops404 from './components/Whoops404';

import registerServiceWorker from './registerServiceWorker';

let rootID = document.getElementById('root');

ReactDOM.render(
    <HashRouter>
        <div className="main">
            <Switch>
                <Route exact path="/" component={About} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route component={Whoops404} />
            </Switch>
        </div>
    </HashRouter>
    , rootID);
registerServiceWorker();
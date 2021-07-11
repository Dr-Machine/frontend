import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Landing from './Landing'
import Dashboard from './dashboard'
import Account from './Account'


const Main = ()=>{
    return (
    <div className="main">
    <Router>
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/" component={Account} />
        </Switch>
    </Router>
    </div>
    )
}
export default Main;
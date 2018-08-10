import React from 'react';
import { Component } from 'react';

import {Route, Switch} from "react-router-dom";

import Dashboard from './Dashboard';
import Users from './Users';

export default class Admin extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Dashboard}/>
                <Route exact path='/users' component={Users}/>
            </Switch>
        );
    }
}

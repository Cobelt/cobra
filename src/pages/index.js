import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom'

import HomePage from './Home/index';
import Account from './Account/index';
import Admin from './Admin/index';

export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/account' component={Account}/>
                <Route path='/admin' component={Admin}/>
            </Switch>
        );
    }
}

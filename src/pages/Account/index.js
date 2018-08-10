import React from 'react';
import { Component } from 'react';

import {Route, Switch} from "react-router-dom";

import Details from './AccountDetails';

export default class Account extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Details}/>
            </Switch>
        );
    }
}

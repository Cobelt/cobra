import React, { Component } from 'react';
import { Grid, Body, BodyElement } from 'muejs';

import SignInForm from "../../containers/Forms/SignIn";

import './index.styl';

export default class Home extends Component {
    render() {
        return (
            <Body>
                <BodyElement className="signin-form" style={{justifySelf: 'center'}}>
                    <h2>Pas encore inscrit ?</h2>

                    <SignInForm />
                </BodyElement>
            </Body>
        );
    }
}
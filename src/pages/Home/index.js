import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Body, BodyElement } from 'muejs';

import SignInForm from "../../containers/Forms/SignIn";

import './index.styl';

export class Home extends Component {
    render() {
        return (
            <Body>
                {/*<BodyElement className="signin-form" style={{justifySelf: 'center'}}>*/}
                    {/*<h2>Pas encore inscrit ?</h2>*/}

                    {/*<SignInForm />*/}
                {/*</BodyElement>*/}
            </Body>
        );
    }
}

export default withRouter(Home);
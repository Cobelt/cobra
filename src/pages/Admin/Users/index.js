import React from 'react';
import { Component } from 'react';

import { Row } from 'muejs';

export default class AccountDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    <h2>Dernieres news :</h2>
                </Row>

                <Row>
                    <h1>Contenu</h1>
                </Row>
            </React.Fragment>
        );
    }
}

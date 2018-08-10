import React, { Component } from 'react';

import { Grid, Row, Navbar, NavLogo, NavLabel } from 'muejs';

export default class Nav extends Component {
    render() {
        return (
            <Row pos={1}>
                <Navbar>
                    <NavLogo justify='left'>MueJS</NavLogo>
                    <NavLabel justify='right' label='cobelt.fr' route='http://cobelt.fr'/>
                    <NavLabel justify='right' label='ophis.cobelt.fr' route='http://ophis.cobelt.fr'/>
                    <NavLabel justify='right' label='Github' route='http://github.cobelt.fr'/>
                </Navbar>
            </Row>
        );
    }
}
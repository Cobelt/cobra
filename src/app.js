import React, { Component } from 'react';

import Navbar from './containers/Navbar';
import Router from './pages/index';

import { Grid } from 'muejs';

export default class App extends Component {
    render() {
        return (
            <Grid columnsTemplate='1fr'>
                <Navbar />
                <Router />
                {/*<Footer />*/}
            </Grid>
        );
    }
}

// <div>
    // Header
        // Page component from router
    // Footer
// </div>

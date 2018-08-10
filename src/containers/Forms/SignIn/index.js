import React, { Component } from 'react';

export default class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const newState = {};
        newState[event.target.name] = event.target.value;
        this.setState({ ...newState });
    }

    handleSubmit(event) {
        console.log('username:', this.state.username, 'password:', this.state.password);
        // make a call to server here
        event.preventDefault();
    }

    render() {
        const { username, password } = this.state;
        return (
            <form style={{display: 'grid', justifyContent: 'center'}} onSubmit={this.handleSubmit}>
                <div style={{ display:'inline-grid', gridTemplateColumns: '1fr 6fr' }}>
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={this.handleChange} />
                </div>
                <div style={{ display:'inline-grid', gridTemplateColumns: '1fr 6fr' }}>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={this.handleChange} />
                </div>
                <input className="push-right" type="submit" value="S'inscrire" />

            </form>
        );
    }
}
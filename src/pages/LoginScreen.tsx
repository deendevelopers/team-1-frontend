import React, { Component } from 'react';
import logo from '../assets/logo.svg';

class LoginScreen extends Component {
	render() {
		return (
			<>
                <img src={logo} alt="logo"></img>
				
				<a href="/list">See All Mosques</a>
			</>
		);
	}
}

export default LoginScreen;

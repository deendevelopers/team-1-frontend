import React, { Component } from 'react';
import Context from './AuthContext';

class AuthProvider extends Component<any> {
	state = {
		authenticated: false,
	};
	render() {
		return (
			<Context.Provider value={{ ...this.state }}>
				{this.props.children}
			</Context.Provider>
		);
	}
}
export default AuthProvider;

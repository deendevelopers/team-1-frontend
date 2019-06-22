import React, { Component } from 'react';
import Context from './AuthContext';

class AuthProvider extends Component<any> {
	state = {
		authenticated: false,
	};
	handleLogin = (e: any, cb: any) => {
		e.preventDefault();
		setTimeout(() => {
			this.setState(
				{
					authenticated: true,
				},
				cb,
			);
		}, 1500);
	};
	handleLogout = (e: any, cb: any) => {
		setTimeout(() => {
			this.setState(
				{
					authenticated: false,
				},
				cb,
			);
		}, 1500);
	};
	render() {
		return (
			<Context.Provider
				value={{
					...this.state,
					handleLogin: this.handleLogin,
					handleLogout: this.handleLogout,
				}}
			>
				{this.props.children}
			</Context.Provider>
		);
	}
}
export default AuthProvider;

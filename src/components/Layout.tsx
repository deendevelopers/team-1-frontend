import React, { Component } from 'react';
import Header from './Navbar';

class Layout extends Component {
	render() {
		return (
			<div>
				<Header />
				{this.props.children}
			</div>
		);
	}
}

export default Layout;

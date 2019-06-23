import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

import '../css/HomeScreen.css';

class HomeScreen extends Component {
	render() {
		return (
			<Layout>
				<Jumbotron>
					<h1 className="display-3">Front Row!</h1>
					<p className="lead">
						This is a simple hero unit, a simple Jumbotron-style component for
						calling extra attention to featured content or information.
					</p>
					<div className="hero-button-wrapper">
						<Link to="/list">
							<Button color="primary">Mosques</Button>
						</Link>
					</div>
				</Jumbotron>
			</Layout>
		);
	}
}

export default HomeScreen;

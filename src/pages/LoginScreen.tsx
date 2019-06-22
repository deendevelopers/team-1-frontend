import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Row, Container, Col } from 'reactstrap';

class LoginScreen extends Component {
	render() {
		return (
			<Layout>
				<Container>
					<Row>
						<Col xs="12">Login Page</Col>
					</Row>
				</Container>
			</Layout>
		);
	}
}

export default LoginScreen;

import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Row, Container, Col } from 'reactstrap';

class RegisterScreen extends Component {
	render() {
		return (
			<Layout>
				<Container>
					<Row>
						<Col xs="12">Register Page</Col>
					</Row>
				</Container>
			</Layout>
		);
	}
}

export default RegisterScreen;

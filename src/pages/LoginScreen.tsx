import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Layout from '../components/Layout';
import { Row, Container, Col } from 'reactstrap';

class LoginScreen extends Component {
	handleChange = (e: any) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};
	handleSubmit = (e: any) => {
		e.preventDefault();
		console.log(this.state);
	};
	render() {
		return (
			<Layout>
				<Container>
					<Row>
						<Col xs="12">
							<Form onSubmit={this.handleSubmit}>
								<FormGroup className="text-left">
									<Label for="email">Email</Label>
									<Input
										type="email"
										name="email"
										id="email"
										placeholder="Email"
										onChange={this.handleChange}
									/>
								</FormGroup>
								<FormGroup className="text-left">
									<Label for="password">Password</Label>
									<Input
										type="password"
										name="password"
										id="password"
										onChange={this.handleChange}
									/>
								</FormGroup>
								<Button>Login</Button>
							</Form>
						</Col>
					</Row>
				</Container>
			</Layout>
		);
	}
}

export default LoginScreen;

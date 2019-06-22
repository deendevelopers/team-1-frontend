import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Layout from '../components/Layout';
import { Row, Container, Col } from 'reactstrap';

class RegisterScreen extends Component {
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
									<Label for="name">Name</Label>
									<Input
										type="text"
										name="name"
										id="name"
										placeholder="name"
										onChange={this.handleChange}
									/>
								</FormGroup>
								<FormGroup className="text-left">
									<Label for="email">Email</Label>
									<Input
										type="text"
										name="email"
										id="email"
										onChange={this.handleChange}
									/>
								</FormGroup>
								<Button>Register</Button>
							</Form>
						</Col>
					</Row>
				</Container>
			</Layout>
		);
	}
}

export default RegisterScreen;

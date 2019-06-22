import React, { Component } from 'react';
import { compose } from 'recompose';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Layout from '../components/Layout';
import { Row, Container, Col } from 'reactstrap';
import withAuthContext from '../components/context/withAuth';
import { withRouter } from 'react-router';

class LoginScreen extends Component<any> {
	handleChange = (e: any) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};
	render() {
		const { handleLogin } = this.props.context;
		return (
			<Layout>
				<Container>
					<Row>
						<Col xs="12">
							<Form
								onSubmit={e => {
									handleLogin(e, () => {
										this.props.history.push('/list');
									});
								}}
							>
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
								<Button color="primary">Login</Button>
							</Form>
						</Col>
					</Row>
				</Container>
			</Layout>
		);
	}
}

export default compose(
	withAuthContext,
	withRouter,
)(LoginScreen);

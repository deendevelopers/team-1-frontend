import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Layout from '../components/Layout';

class FeedScreen extends Component {
	render() {
		return (
			<Layout>
				<Container>
					<Row>
						<Col>Add Feed Here</Col>
					</Row>
				</Container>
			</Layout>
		);
	}
}

export default FeedScreen;

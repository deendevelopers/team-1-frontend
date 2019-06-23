import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import Layout from '../components/Layout';
import Collapse from '../components/Collapse';

import '../css/MosqueScreen.css';
class MosqueScreen extends Component {
	render() {
		return (
			<Layout>
				<div className="mosque-details-wrapper">
					<div className="mosque-thumbnail-wrapper">
						<img
							src="https://source.unsplash.com/800x300/?mosque"
							alt="thumbnail"
						/>
					</div>
					<Container>
						<Row>
							<Col>
								<div className="mosque-details-content">
									<h1>Mosque Name</h1>

									<Collapse title="Description">
										This mosque is a great place to pray.
									</Collapse>

									<Collapse title="Address">
										177-179 Plashet Grove, East Ham, London, E6 1BX
									</Collapse>

									<Collapse title="Facilities">
										<p className="wudhu-area-rating">
											The wudhu area has clean, running water.
										</p>
										<p className="prayer-space-description">
											300 spaces to pray.
										</p>
									</Collapse>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</Layout>
		);
	}
}

export default MosqueScreen;

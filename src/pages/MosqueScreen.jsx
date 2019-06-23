import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import Layout from '../components/Layout';
import Collapse from '../components/Collapse';

import wudhu from '../assets/wudhu.png';
import wheelchair from '../assets/wheelchair.png';
import women from '../assets/women.png';
import aircon from '../assets/aircon.png';
import committe from '../assets/committee.png';
import prayer from '../assets/prayer-space.png';

import bannerImages from '../assets/mosque.jpg';

import '../css/MosqueScreen.css';
class MosqueScreen extends Component {
	state = {
		data: {},
		loading: true,
	};

	async componentDidMount() {
		const response = await fetch(
			`https://frontrow-fe.herokuapp.com/fr/mosques/${
				this.props.match.params.id
			}`,
		).then(res => res.json());
		this.setState({
			data: response,
			loading: false,
		});
	}

	render() {
		const { data, loading } = this.state;
		console.log(data);
		return (
			<Layout>
				<div className="mosque-details-wrapper">
					<div
						className="mosque-thumbnail-wrapper"
						style={{ backgroundImage: `url(${bannerImages})` }}
					/>
					<Container>
						<Row>
							{loading && (
								<Col>
									<p className="has-text-center">Loading...</p>
								</Col>
							)}
							{!loading && data && (
								<Col>
									<div className="mosque-details-content">
										<h1>{data.name}</h1>

										<Collapse title="Description" open>
											<p>
												This mosque is a great place to pray.
											</p>
										</Collapse>

										<Collapse title="Address">
											{`${data.area} ${data.city} ${data.postcode}`}
											{/* <p>
												177-179 Plashet Grove, East Ham, London, E6 1BX
											</p> */}
										</Collapse>

										<Collapse title="Facilities">
											<div class="facilities-list">
												<div className="facility-option">
													<img src={wudhu} alt="wudhu" />
													<h6>Wudhu</h6>
												</div>

												<div className="facility-option">
													<img src={prayer} alt="prayer" />
													<h6>Prayer</h6>
												</div>

												<div className="facility-option">
													<img src={wheelchair} alt="wheelchair" />
													<h6>Wheelchair</h6>
												</div>

												<div className="facility-option">
													<img src={aircon} alt="aircon" />
													<h6>Aircon</h6>
												</div>

												<div className="facility-option">
													<img src={committe} alt="comittee" />
													<h6>Committee</h6>
												</div>

												<div className="facility-option">
													<img src={women} alt="women" />
													<h6>Women</h6>
												</div>
											</div>
										</Collapse>
									</div>
								</Col>
							)}
						</Row>
					</Container>
				</div>
			</Layout>
		);
	}
}

export default MosqueScreen;

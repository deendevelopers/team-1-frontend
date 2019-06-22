import React, { Component } from 'react';
import MosqueListCard from '../components/MosqueListCard';
import Layout from '../components/Layout';
import MosqueFilter from '../components/MosqueFilter';

import '../css/MosqueList.css';
import { Container, Row, Col } from 'reactstrap';
import { FilterIcon } from '../components/svgs';

class MosqueList extends Component {
	state = {
		items: [],
		loading: true,
		filter: false,
		windowWidth: 0,
	};
	async componentDidMount() {
		this.handleResize();
		window.addEventListener('resize', this.handleResize);
		const response = await fetch(
			'https://frontrow-fe.herokuapp.com/fr/mosques/',
		).then(res => res.json());
		this.setState({
			items: response,
			loading: false,
		});
	}

	handleResize = () => {
		this.setState({ windowWidth: window.innerWidth });
	};

	toggleFilter = () => {
		this.setState({
			filter: !this.state.filter,
		});
	};

	render() {
		const { items, loading, filter, windowWidth } = this.state;
		return (
			<Layout>
				<Container>
					{windowWidth > 768 ? (
						<Row>
							<Col xs="11" sm="11" md="11" lg="11">
								{filter && <MosqueFilter />}
							</Col>
							<Col xs="1" sm="1" md="1" lg="1">
								<div className="filter-wrapper" onClick={this.toggleFilter}>
									<FilterIcon />
								</div>
							</Col>
						</Row>
					) : null}

					<Row>
						{loading ? (
							<Col>
								<p className="text-center">Loading...</p>
							</Col>
						) : (
							items.map((item, index) => {
								return (
									<Col xs="12" sm="12" md="6" lg="4">
										<MosqueListCard key={index} {...item} />
									</Col>
								);
							})
						)}
					</Row>
				</Container>
			</Layout>
		);
	}
}

export default MosqueList;

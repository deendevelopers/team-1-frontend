import React, { Component } from 'react';
import MosqueListCard from '../components/MosqueListCard';
import Layout from '../components/Layout';
import MosqueFilter from '../components/MosqueFilter';

import { Container, Row, Col } from 'reactstrap';
import '../css/MosqueList.css';

class MosqueList extends Component {
	state = {
		searchString: '',
		items: [],
		loading: true,
	};

	async componentDidMount() {
		const response = await fetch(
			'https://frontrow-fe.herokuapp.com/fr/mosques/',
		).then(res => res.json());
		this.setState({
			items: response,
			loading: false,
		});
	}

	handleSearch = (e: any) => {
		const { value } = e.target;
		this.setState({
			searchString: value,
		});
	};

	render() {
		let { items, loading, searchString } = this.state;
		let search = searchString.trim().toLowerCase();

		if (search.length > 0) {
			items = items.filter(function(item: any) {
				return item.name.toLowerCase().match(search);
			});
		}
		return (
			<Layout>
				<Container>
					<MosqueFilter handleSearch={this.handleSearch} />
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

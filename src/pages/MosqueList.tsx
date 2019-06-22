import React, { Component } from 'react';
import MosqueListCard from '../components/MosqueListCard';
import Layout from '../components/Layout';

import '../css/MosqueList.css';

class MosqueList extends Component {
	state = {
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

	render() {
		const { items, loading } = this.state;
		return (
			<Layout>
				<div className="mosque-list-container">
					{loading ? (
						<p className="text-center">Loading...</p>
					) : (
						items.map(item => {
							return <MosqueListCard {...item} />;
						})
					)}
				</div>
			</Layout>
		);
	}
}

export default MosqueList;

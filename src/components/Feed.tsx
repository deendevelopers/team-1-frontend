import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Layout from '../components/Layout';
import FeedListCard from '../components/FeedListCard';
import "../css/Feed.css";

class Feed extends Component<{id: number}> {

	state = {
		items: [],
		loading: true,
	};

	async componentDidMount() {
		const response = await fetch(
			`https://frontrow-fe.herokuapp.com/fr/mosques/${this.props.id}/comments/`,
		).then(res => res.json());
		this.setState({
			items: response,
			loading: false,
		});
	}

	getAllCategories() {
		return (
			this.state.items.map((item: any, index) => {
				return item.category_name;
			}).filter((category, pos, a) => {
				return a.indexOf(category) == pos;
			})
			.map((category: string, index) => {
				return (
					<span className="category">{category}</span>
				);
			})
		)
	}

	render() {

		let { items, loading } = this.state;

		return (
			<div className="feed-wrapper">
				{/* <div className="comments-filter-wrapper">
					<b>Filter By: </b> {this.getAllCategories()}
				</div> */}
				<div className="comments-wrapper">
					<Row>
						{loading ? (
							<Col>
								<p className="text-center">Loading...</p>
							</Col>
						) : (
							items.map((item: any, index) => {
								return (
									<Col xs="12">
										<FeedListCard item={item}></FeedListCard>
									</Col>
								);
							})
						)}
					</Row>
				</div>
			</div>
		);
	}
}

export default Feed;

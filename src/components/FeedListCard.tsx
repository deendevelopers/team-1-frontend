import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as dateFns from "date-fns";

import '../css/FeedListCard.css';

class FeedListCard extends Component<any> {
	state = {
		modalOpen: false,
	};

	openModal = () => {
		this.setState({
			modalOpen: true,
		});
	};

	closeModal = () => {
		this.setState({
			modalOpen: false,
		});
	};

	render() {
		const { item } = this.props;

		return (
			<div className={'feed-list-card-wrapper'}>
				<div
					className="feed-list-card-link"
					id={`feed-card-${item.id}`}
				>
					<div className="feed-list-card">
						<div className="feed-details-wrapper">
							<div className="feed-details">
								<p>{item.comment}</p>
								<p className="author-meta">by {item.user_id} about {dateFns.distanceInWords(item.timestamp, new Date())} ago.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default FeedListCard;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/MosqueListCard.css';

class MosqueListCard extends Component<any> {
	render() {
		return (
			<Link to={`/mosque/${this.props.id}`}>
				<div className="mosque-list-card-wrapper">
					<div className="mosque-list-card">
						<div className="mosque-thumbnail-wrapper">
							<img
								src="https://source.unsplash.com/400x400/?mosque"
								alt="thumbnail"
							/>
						</div>

						<div className="mosque-details-wrapper">
							<div className="mosque-details">
								<h3>{this.props.name}</h3>
							</div>
						</div>
					</div>
				</div>
			</Link>
		);
	}
}

export default MosqueListCard;

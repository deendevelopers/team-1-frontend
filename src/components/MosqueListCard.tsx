import React, { Component } from 'react';
import "../css/MosqueListCard.css";

class MosqueListCard extends Component {
	render() {
		return (
			<>
                <div className="mosque-list-card-wrapper">
					<div className="mosque-list-card">
						<div className="mosque-thumbnail-wrapper">
							<img src="https://source.unsplash.com/800x300/?mosque" alt="thumbnail"></img>
						</div>

						<div className="mosque-details-wrapper">
							<div className="mosque-details">
								<h3>Mosque Name</h3>
								Details for mosque here
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default MosqueListCard;

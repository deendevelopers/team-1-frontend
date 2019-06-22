import React, { Component } from 'react';
import data from '../data';

import '../css/MosqueScreen.css';

class MosqueScreen extends Component {
	render() {
		return (
			<>
				<div className="mosque-screen-wrapper">
					<div className="mosque-thumbnail-wrapper">
						<img
							src="https://source.unsplash.com/800x300/?mosque"
							alt="thumbnail"
						/>
					</div>

					<div className="mosque-details-wrapper">
						<h1>Mosque Name</h1>

						<p className="description">This mosque is a great place to pray.</p>

						<p className="address">
							177-179 Plashet Grove, East Ham, London, E6 1BX
						</p>

						<p className="wudhu-area-rating">
							The wudhu area has clean, running water.
						</p>

						<p className="prayer-space-description">300 spaces to pray.</p>
					</div>
				</div>
			</>
		);
	}
}

export default MosqueScreen;

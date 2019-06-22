import React, { Component } from 'react';
import MosqueListCard from '../components/MosqueListCard';
import "../css/MosqueList.css";

class MosqueList extends Component {

	goToMosque(id: number) {
		console.warn("not implemented");
	}

	render() {
		return (
			<>
				<div className="mosque-list-container">
					<a href="/mosque/1">
						<MosqueListCard></MosqueListCard>
					</a>
					
					<a href="/mosque/2">
						<MosqueListCard></MosqueListCard>
					</a>

					<a href="/mosque/3">
						<MosqueListCard></MosqueListCard>
					</a>
				</div>
			</>
		);
	}
}

export default MosqueList;

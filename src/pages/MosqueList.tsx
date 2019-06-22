import React, { Component } from 'react';
import MosqueListCard from '../components/MosqueListCard';
import "../css/MosqueList.css";

class MosqueList extends Component {
	render() {
		return (
			<>
				<div className="mosque-list-container">
					<MosqueListCard></MosqueListCard>
					<MosqueListCard></MosqueListCard>
					<MosqueListCard></MosqueListCard>
				</div>
			</>
		);
	}
}

export default MosqueList;

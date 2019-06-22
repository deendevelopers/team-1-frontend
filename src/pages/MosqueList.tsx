import React, { Component } from 'react';
import MosqueListCard from '../components/MosqueListCard';
import '../css/MosqueList.css';
import Layout from '../components/Layout';
import MosqueFilter from "../components/MosqueFilter"

class MosqueList extends Component {
	goToMosque = (id: number) => {
		console.warn('not implemented');
	};

	render() {
		return (
			<Layout>
				<div className="mosque-list-container">
					<a
						onClick={e => {
							this.goToMosque(1);
						}}
						href="/mosque/1"
					>
						<MosqueListCard />
					</a>

					<a href="/mosque/2">
						<MosqueListCard />
					</a>

					<a href="/mosque/3">
						<MosqueListCard />
					</a>

					<a href="/mosque/3">
						<MosqueListCard />
					</a>

					<a href="/mosque/3">
						<MosqueListCard />
					</a>

					<a href="/mosque/3">
						<MosqueListCard />
					</a>

					<a href="/mosque/3">
						<MosqueListCard />
					</a>
				</div>

				{/* // todo: dynamically show/hide the MosqueFilter */}
				<MosqueFilter></MosqueFilter>
			</Layout>
		);
	}
}

export default MosqueList;

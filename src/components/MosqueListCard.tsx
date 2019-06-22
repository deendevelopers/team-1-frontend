import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/MosqueListCard.css';

class MosqueListCard extends Component<any> {

	state = {
		isActive: false
	};

	componentDidMount() {
		document.addEventListener("scroll", ()=>{
			let el = document.getElementById(`mosque-card-${this.props.id}`);

			if (!el) {
				return;
			}

			const loc = el.getBoundingClientRect();

			if (loc.top > -65 && loc.top < 100) {
				this.setState({
					isActive: true
				});
			}
			else {
				this.setState({
					isActive: false
				})
			}
		});
	}

	componentWillUnmount() {
		document.removeEventListener('scroll', (event) => {});
	}

	handleScroll() {
		
	}

	render() {
		return (
			<Link className="mosque-list-card-link" id={ `mosque-card-${this.props.id}` } to={`/mosque/${this.props.id}`}>
				<div className={ "mosque-list-card-wrapper " + (this.state.isActive ? "active" : "") }>
					<div className="mosque-list-card">
						<div className="mosque-thumbnail-wrapper">
							<img
								src={ "https://source.unsplash.com/400x400/?mosque&sig=" + Math.random() }
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

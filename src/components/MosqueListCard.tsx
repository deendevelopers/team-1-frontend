import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/MosqueListCard.css';
import { CommentIcon } from './svgs';
import Modal from './Modal';
import withAuthContext from './context/withAuth';

class MosqueListCard extends Component<any> {
	state = {
		isActive: false,
		modalOpen: false,
	};

	componentDidMount() {
		document.addEventListener('scroll', () => {
			let el = document.getElementById(`mosque-card-${this.props.id}`);

			if (!el) {
				return;
			}

			const loc = el.getBoundingClientRect();

			if (loc.top > -65 && loc.top < 100) {
				this.setState({
					isActive: true,
				});
			} else {
				this.setState({
					isActive: false,
				});
			}
		});
	}

	componentWillUnmount() {
		document.removeEventListener('scroll', event => {});
	}

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
		const { modalOpen, isActive } = this.state;
		return (
			<div className={'mosque-list-card-wrapper ' + (isActive ? 'active' : '')}>
				<Link
					className="mosque-list-card-link"
					id={`mosque-card-${this.props.id}`}
					to={`/mosque/${this.props.id}`}
				>
					<div className="mosque-list-card">
						<div className="mosque-details-wrapper">
							<div className="mosque-details">
								<h3>{this.props.name}</h3>
							</div>
						</div>
					</div>
				</Link>
				<div className="message-cta" onClick={this.openModal}>
					<CommentIcon />
				</div>
				<Modal
					userId={this.props.context.user.id}
					mosqueId={this.props.id}
					closeModal={this.closeModal}
					modal={modalOpen}
				>
					<div>{this.props.name}</div>
				</Modal>
			</div>
		);
	}
}

export default withAuthContext(MosqueListCard);

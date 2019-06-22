import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import wudhu from '../assets/wudhu.png';
import wheelchair from '../assets/wheelchair.png';
import women from '../assets/women.png';
import aircon from '../assets/aircon.png';
import committe from '../assets/committee.png';
import prayer from '../assets/prayer-space.png';

import '../css/MosqueFilter.css';
import ReactDOM from 'react-dom';

class MosqueFilter extends React.Component<any> {
	// componentDidMount() {
	//     setTimeout(() => {
	//         document.addEventListener('click', this.handleClickOutside, true);
	//     }, 1000);

	//     this.setState({

	//     })
	// }

	// componentWillUnmount() {
	//     document.removeEventListener('click', this.handleClickOutside, true);
	// }

	getFilters() {
		return (
			<>
				<div className="filter-option">
					<img src={wudhu} />
					<h6>Wudhu</h6>
				</div>

				<div className="filter-option">
					<img src={prayer} />
					<h6>Prayer</h6>
				</div>

				<div className="filter-option">
					<img src={wheelchair} />
					<h6>Wheelchair</h6>
				</div>

				<div className="filter-option">
					<img src={aircon} />
					<h6>Aircon</h6>
				</div>

				<div className="filter-option">
					<img src={committe} />
					<h6>Committee</h6>
				</div>

				<div className="filter-option">
					<img src={women} />
					<h6>Women</h6>
				</div>
			</>
		);
	}

	handleClickOutside(event: any) {
		const domNode = ReactDOM.findDOMNode(this.refs.filterPanel);

		if (!domNode || !domNode.contains(event.target)) {
			this.props.dismissed();
		}
	}

	render() {
		return (
			<div id="filter-pop-up-panel">
				<div className="pop-up" ref="filterPanel">
					<div className="title">
						<h5>Filter</h5>
					</div>

					<div className="filter-scroll-panel">{this.getFilters()}</div>

					<div className="filter-btn-panel">
						<Button block>Apply Filter</Button>
					</div>
				</div>
			</div>
		);
	}
}

export default MosqueFilter;

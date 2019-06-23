import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { ArrowDownIcon } from './svgs';

class CustomCollapse extends Component<any> {
	state = {
		collapse: false,
	};

	toggle = () => {
		this.setState(state => ({ collapse: !this.state.collapse }));
	};

	render() {
		return (
			<div>
				<Button
					className="custom-accordion-trigger"
					onClick={this.toggle}
					style={{ marginBottom: '1rem' }}
				>
					{this.props.title}{' '}
					<span
						className={`icon-wrapper ${this.state.collapse ? 'active' : ''}`}
					>
						<ArrowDownIcon />
					</span>
				</Button>
				<Collapse isOpen={this.state.collapse}>
					<Card>
						<CardBody>{this.props.children}</CardBody>
					</Card>
				</Collapse>
			</div>
		);
	}
}

export default CustomCollapse;

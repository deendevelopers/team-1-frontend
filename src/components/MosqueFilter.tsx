import React, { Component } from 'react';

import '../css/MosqueFilter.css';
import { Container, Row, Col, InputGroup, Input } from 'reactstrap';

class MosqueFilter extends Component<any> {
	render() {
		return (
			<Container>
				<Row>
					<Col>
						<InputGroup className="filter-wrapper">
							<Input
								onChange={this.props.handleSearch}
								placeholder="Search a masjid"
							/>
						</InputGroup>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default MosqueFilter;

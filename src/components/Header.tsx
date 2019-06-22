import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Logo } from './svgs';

import '../css/header.css';

class Header extends React.Component {
	render() {
		return (
			<div className="header-wrapper">
				<Container>
					<Row>
						<Col xs="3">
							<Logo />
						</Col>
						<Col xs="9">
							<ul className="nav-list">
								<li>
									<Link to="/">Login</Link>
								</li>
								<li>
									<Link to="/register">Register</Link>
								</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Header;

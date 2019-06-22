import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Logo } from './svgs';

import '../css/header.css';
import withAuthContext from './context/withAuth';

class Header extends React.Component<any> {
	render() {
		const { authenticated } = this.props.context;
		return (
			<div className="header-wrapper">
				<Container>
					<Row>
						<Col xs="3">
							<Logo />
						</Col>
						<Col xs="9">
							<ul className="nav-list">
								{authenticated && (
									<React.Fragment>
										<li>
											<Link to="/list">Mosques</Link>
										</li>
										<li>
											<Link to="/">Logout</Link>
										</li>
									</React.Fragment>
								)}
								{!authenticated && (
									<React.Fragment>
										<li>
											<Link to="/">Login</Link>
										</li>
										<li>
											<Link to="/register">Register</Link>
										</li>
									</React.Fragment>
								)}
							</ul>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default withAuthContext(Header);

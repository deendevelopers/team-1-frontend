import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Logo } from './svgs';
import withAuthContext from './context/withAuth';

import '../css/header.css';

class Header extends React.Component<any> {
	render() {
		const { authenticated, user, handleLogout } = this.props.context;
		return (
			<div className="header-wrapper">
				<Container>
					<Row>
						<Col xs="2" sm="2" md="2" lg="2">
							<Logo />
						</Col>
						<Col xs="9" sm="10" md="10" lg="10">
							<ul className="nav-list">
								{authenticated && (
									<React.Fragment>
										<li>Hello {user.name}</li>
										<li>
											<Link to="/list">Mosques</Link>
										</li>
										<li
											onClick={() => {
												handleLogout(() => {
													this.props.history.push('/');
												});
											}}
										>
											Logout
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

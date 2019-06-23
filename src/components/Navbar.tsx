import React from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
} from 'reactstrap';
import { Logo } from './svgs';
import { Link } from 'react-router-dom';
import withAuthContext from './context/withAuth';
import '../css/header.css';

class Header extends React.Component<any> {
	state = {
		isOpen: false,
	};

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	};
	render() {
		const { authenticated, user, handleLogout } = this.props.context;
		return (
			<div>
				<Navbar light expand="md">
					<NavbarBrand href="/">
						<Logo />
					</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							{authenticated && (
								<React.Fragment>
									<NavItem className="dead-link">Hello {user.name}</NavItem>
									<NavItem>
										<Link className="nav-link" to="/list">
											Mosque
										</Link>
									</NavItem>
									<NavItem>
										<Link className="nav-link" to="/feed">
											Feed
										</Link>
									</NavItem>
									{/* <NavItem
										className="dead-link"
										onClick={() => {
											handleLogout(() => {
												this.props.history.push('/');
											});
										}}
									>
										Logout
									</NavItem> */}
								</React.Fragment>
							)}
							{!authenticated && (
								<React.Fragment>
									<NavItem>
										<Link className="nav-link" to="/">
											Login
										</Link>
									</NavItem>
									<NavItem>
										<Link className="nav-link" to="/register">
											Register
										</Link>
									</NavItem>
								</React.Fragment>
							)}
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

export default withAuthContext(Header);

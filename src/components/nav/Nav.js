import React from 'react';
import NavLink from './NavLink';
import { navLinks } from './navLinks';
import { Navbar } from 'react-bootstrap'
import './Nav.css';

const Nav = () => {
	
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				{navLinks.map(({ navLinkId, scrollToId }, idx) => (
					<NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
				))}
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Nav

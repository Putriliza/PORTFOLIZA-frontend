
import React, { useRef } from "react";
import { Navbar, Nav } from 'react-bootstrap'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import { Link } from "react-scroll";
import './Nav.css';

const MyNav = () => {
	const offCanvasRef = useRef();
	const offsetValue = -56;

	
	const closeOffCanvas = () => {
		if(offCanvasRef.current.backdrop === undefined || offCanvasRef.current.backdrop === null) {
			console.log('offCanvasRef.current.backdrop is null');
		} else {
			offCanvasRef.current.backdrop.click();
		}
	}
	
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container fluid>
				<Navbar.Brand href="#">PUTRI NURHALIZA</Navbar.Brand>
				<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
				<Navbar.Offcanvas
				id={`offcanvasNavbar-expand-lg`}
				aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
				placement="end"
				ref={offCanvasRef}
				>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
					PUTRI NURHALIZA
					</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Nav>
						<Link
							activeClass="active"
							to="homeContainer"
							spy={true}
							smooth={true}
							offset={offsetValue}
							duration={100}
							className="p-3 border-bottom border-dark text-decoration-none"
							onClick={closeOffCanvas}
							>
							Home
						</Link>
						<Link
							activeClass="active"
							to="projectContainer"
							spy={true}
							smooth={true}
							offset={offsetValue}
							duration={100}
							className="p-3 border-bottom border-dark text-decoration-none"
							onClick={closeOffCanvas}
							>
							Projects
						</Link>
						<Link
							activeClass="active"
							to="experienceContainer"
							spy={true}
							smooth={true}
							offset={offsetValue}
							duration={100}
							className="p-3 border-bottom border-dark text-decoration-none"
							onClick={closeOffCanvas}
							>
							Experiences
						</Link>
						<Link
							activeClass="active"
							to="achievementContainer"
							spy={true}
							smooth={true}
							offset={offsetValue}
							duration={100}
							className="p-3 border-bottom border-dark text-decoration-none"
							onClick={closeOffCanvas}
							>
							Achievements
						</Link>
					</Nav>
				</Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
			
	);
};

export default MyNav

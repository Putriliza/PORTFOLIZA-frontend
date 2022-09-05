
import React, { useRef } from "react";
import { Navbar, Nav } from 'react-bootstrap'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import { Link } from "react-scroll";
import './Nav.css';

import Button from '@mui/material/Button';

import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import AutoAwesomeMotionOutlinedIcon from '@mui/icons-material/AutoAwesomeMotionOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';

const MyNav = () => {
	const offCanvasRef = useRef();
	const offsetValue = -56;

	const closeOffCanvas = () => {
		if (!(offCanvasRef.current.backdrop === undefined || offCanvasRef.current.backdrop === null)) {
			offCanvasRef.current.backdrop.click();
		}
	}
	
	return (
		<Navbar collapseOnSelect expand="lg" variant="light">
			<Container fluid>
				<Navbar.Brand href="#" style={{fontFamily: 'Dancing Script, cursive', fontSize:'30px', color:'darkslateblue'}}>
					<b>Putri Nurhaliza</b>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
				<Navbar.Offcanvas
					id={`offcanvasNavbar-expand-lg`}
					aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
					placement="end"
					ref={offCanvasRef}
				>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}
						style={{fontFamily: 'Dancing Script, cursive', fontSize:'30px', color:'darkslateblue'}}
					>
					Putri Nurhaliza
					</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Nav>
						{/* <Link
							activeClass="active"
							to="homeContainer"
							spy={true}
							smooth={true}
							offset={offsetValue}
							duration={100}
							className="p-3 text-decoration-none"
							onClick={closeOffCanvas}
							>
							<ChaletRoundedIcon /> Home
						</Link> */}
						<Button color="secondary" style={{justifyContent:"flex-start"}}>
							<Link
								activeClass="active"
								to="projectContainer"
								spy={true}
								smooth={true}
								offset={offsetValue}
								duration={100}
								className="p-3 text-decoration-none"
								onClick={closeOffCanvas}
								>
								<AutoAwesomeMotionOutlinedIcon /> Projects
							</Link>
						</Button>
						<Button color="secondary" style={{justifyContent:"flex-start"}}>
							<Link
								activeClass="active"
								to="experienceContainer"
								spy={true}
								smooth={true}
								offset={offsetValue}
								duration={100}
								className="p-3 text-decoration-none"
								onClick={closeOffCanvas}
								>
								<BadgeOutlinedIcon /> Experiences
							</Link>
						</Button>
						<Button color="secondary" style={{justifyContent:"flex-start"}}>
							<Link
								activeClass="active"
								to="achievementContainer"
								spy={true}
								smooth={true}
								offset={offsetValue}
								duration={100}
								className="p-3 text-decoration-none"
								onClick={closeOffCanvas}
								>
								<AutoAwesomeOutlinedIcon /> Achievements
							</Link>
						</Button>
					</Nav>
				</Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
			
	);
};

export default MyNav

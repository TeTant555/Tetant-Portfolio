import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Toggler.css';
import './Custom.sass';
import './fonts.css';
import About from './About';
import Home from './Home';
import Experience from './Experience';
import Contact from './Contact';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import React from 'react';
import { Navigate } from 'react-router-dom';

const Layout = () => {
    // Add state to control navbar collapse
    const [expanded, setExpanded] = React.useState(false);

    return ( 
        <>  <BrowserRouter>
                <Navbar 
                    fixed='top' 
                    expand="lg" 
                    data-bs-theme="dark" 
                    className="custom-navbar nav-shadow"
                    // Add expanded state and onToggle handler
                    expanded={expanded}
                    onToggle={() => setExpanded(!expanded)}
                >
                    <Container>
                        <Navbar.Brand className='fs-3 text-primary ubuntu-bold'>Thet Tetant</Navbar.Brand>
                        {/* <button type='button' className='me-auto btn fs-3'><FontAwesomeIcon icon={faMoon} style={{color: "#364CE4"}} /></button> */}
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto roboto-regular">
                            <Nav.Link onClick={() => setExpanded(false)}><NavLink className={({ isActive }) =>
                                `navlink text-decoration-none fs-5 d-flex justify-content-end ${
                                isActive ? 'text-primary' : 'text-secondary'
                                }`
                            } to="/">Home</NavLink></Nav.Link>
                            <Nav.Link onClick={() => setExpanded(false)}><NavLink className={({ isActive }) =>
                                `navlink text-decoration-none fs-5 d-flex justify-content-end ${
                                isActive ? 'text-primary' : 'text-secondary'
                                }`
                            } to="/Experience">Experience</NavLink></Nav.Link>
                            <Nav.Link onClick={() => setExpanded(false)}><NavLink className={({ isActive }) =>
                                `navlink text-decoration-none fs-5 d-flex justify-content-end ${
                                isActive ? 'text-primary' : 'text-secondary'
                                }`
                            } to="/About">About</NavLink></Nav.Link>
                            <Nav.Link onClick={() => setExpanded(false)}><NavLink className={({ isActive }) =>
                                `navlink text-decoration-none fs-5 d-flex justify-content-end ${
                                isActive ? 'text-primary' : 'text-secondary'
                                }`
                            } to="/Contact">Contact</NavLink></Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Routes>
                    <Route index element={<Home />} />
                    <Route path="Experience" element={<Experience />} />
                    <Route path="About" element={<About />} />
                    <Route path="Contact" element={<Contact />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
 
export default Layout;
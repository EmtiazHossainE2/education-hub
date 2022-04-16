import React from 'react';
import './Header.css';
import logo from '../../../images/logo.svg'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../../../components/CustomLink/CustomLink';

const Header = () => {

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container >
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} height="40" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav className='nav-style'>
                            <Nav.Link as={CustomLink} to='/home'>Home</Nav.Link>
                            <Nav.Link as={CustomLink} to='/blog'>Blog</Nav.Link>
                            <Nav.Link as={CustomLink} to='/about'>About</Nav.Link>
                            <NavDropdown className='p-0 text-light' title="Account" id="collasible-nav-dropdown">
                                <Nav.Link as={CustomLink} to='/signup'>Sign up</Nav.Link>
                                <Nav.Link as={CustomLink} to='/login'>Log in</Nav.Link>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
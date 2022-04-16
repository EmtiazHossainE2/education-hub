import React from 'react';
import './Header.css';
import logo from '../../../images/logo.svg'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../../../components/CustomLink/CustomLink';
import auth from '../../../Firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)
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
                            {/* <Nav.Link as={CustomLink} to='/signup'>Sign up</Nav.Link>
                            <Nav.Link as={CustomLink} to='/login'>Log in</Nav.Link> */}
                            {user?.uid
                                ?
                                ""
                                :
                                <CustomLink className='pb-5' to='/signup'>Sign up</CustomLink>
                            }
                            {user?.uid
                                ?
                                <CustomLink className='pb-5' to='/login' onClick={() => signOut(auth)}>Log Out</CustomLink>
                                :
                                <CustomLink className='pb-5' to='/login'>Log in</CustomLink>}
                            {/* <NavDropdown className='p-0 text-light' title="Account" id="collasible-nav-dropdown">
                                <Nav.Link as={CustomLink} to='/signup'>Sign up</Nav.Link>
                                <Nav.Link as={CustomLink} to='/login'>Log in</Nav.Link>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar bg="transparent" expand="lg">
                <Link to="/home"><Navbar.Brand className="logo text-primary">BOOK GURU</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="headerLink" to="/home">Home</Link>
                        <Link className="headerLink" to="/orders">Orders</Link>
                        <Link className="headerLink" to="/admin">Admin</Link>
                        <Link className="headerLink" to="/Deals">Deals</Link>
                        <Link className="headerLink btn btn-primary text-white" to="/login">Login</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';
import avatarImg from '../../icons/Avatar face.png';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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
                        {
                            (loggedInUser?.email || loggedInUser?.name)
                            ? <Link className="headerLink" to="/checkout">Checkout</Link>
                            : <Link className="headerLink" to="/Deals">Deals</Link>
                        }
                        {
                            (loggedInUser?.email || loggedInUser?.name) &&
                            <Link className="headerLink font-weight-bold avatar" to="/home"><img src={avatarImg} alt=""/> {loggedInUser.name}</Link>
                        }
                        {
                            (loggedInUser?.email || loggedInUser?.name)
                            ? <Link onClick={() => setLoggedInUser({})} className="headerLink btn btn-primary text-white" to="/login">Log Out</Link>
                            : <Link className="headerLink btn btn-primary text-white" to="/login">Login</Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
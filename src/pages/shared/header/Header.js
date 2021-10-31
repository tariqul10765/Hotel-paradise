import React from 'react';
import './Header.css';
import { Container, Navbar, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Header = () => {

    const { user, userSignOut } = useAuth();
    console.log(user);

    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand>
                        <Link to='/home'>
                            <h2>HOTEL PARADISE</h2>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            {
                                user.email
                                    ?
                                    <div className='user__profile'>
                                        <div className='d-none d-md-block me-3'>
                                            Signed in as: <a href="#login">{user.displayName}</a>
                                        </div>
                                        <div className="dropdown dropstart">
                                            <div
                                                className='dropdown-toggle'
                                                id="dropdownMenuButton1"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                {
                                                    user.photoUrl
                                                        ?
                                                        <img
                                                            src={user.photoURL}
                                                            alt={user.displayName}
                                                            className='user__photo'
                                                        />
                                                        :
                                                        <img
                                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/2048px-User_font_awesome.svg.png"
                                                            alt=""
                                                            className='user__photo'
                                                        />
                                                }
                                            </div>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li>
                                                    <Link to='/my-orders' className='dropdown-item'>
                                                        My Orders
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/manage-orders' className='dropdown-item'>
                                                        Manage All Orders
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/add-service' className='dropdown-item'>
                                                        Add A New Service
                                                    </Link>
                                                </li>
                                                <li onClick={userSignOut}>
                                                    <Link
                                                        to='/login'
                                                        className='dropdown-item'
                                                    >
                                                        Sign Out
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    :
                                    <div className="user__authentication">
                                        <Button variant="outline-success">
                                            <Link to='/login'>Login</Link>
                                        </Button>{' '}
                                        {/* <Button variant="outline-warning">
                                            <Link to='/register'>Sign Up</Link>
                                        </Button> */}
                                    </div>
                            }
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
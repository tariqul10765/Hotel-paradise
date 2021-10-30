import React from 'react';
import './Header.css';
import { Container, Navbar } from 'react-bootstrap';

const Header = () => {

    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">PARADISE</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
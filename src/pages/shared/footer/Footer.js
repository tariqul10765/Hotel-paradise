import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='bg-dark py-5 mt-5 text-white'>
            <Container className='text-start ml-auto my-5'>
                <h2>About Us</h2>
                <p>The Libra Diagnostic Center started its journey with the vision of taking the health care services into a new height through providing the most accurate and reliable test results to all its customers and caring the patients at the top of its values.Libra Diagnostic Centre Ltd. is an advanced Centre for diagnostic and medical services. It is one of the prestigious diagnostic complexes of Bangladesh which started its activities in 1983. Popular Diagnostic Centre Ltd. is the largest diagnostic services provider organization in private sector of the country. It is been pioneer in introducing world latest medical equipments and advanced technology to provide round the clock medical investigations and consultancy services.</p>
            </Container>
            <Container>
                <Row>
                    <Col md='8'>
                        <p>© 2021 - LIBRA Diagnostics Center Limited. All rights reserved
                            Powered by LIBRA</p>
                    </Col>
                    <Col md='4' className='text-center'>
                        <div className='d-flex gap-3 justify-content-center'>
                            <a href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a>
                            <a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
                            <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Footer;
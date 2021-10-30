import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';

const PlaceOrder = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="text" placeholder="address" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="text" placeholder="Cell number" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Book Now
                            </Button>
                        </Form>
                    </Col>

                    <Col>
                        <h3>Order Summery</h3>
                        <h5>Double Room</h5>
                        <h6>$180/night</h6>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PlaceOrder;
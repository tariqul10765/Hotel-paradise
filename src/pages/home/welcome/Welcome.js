import React from 'react';
import './Welcome.css';
import { Col, Container, Row, Button } from 'react-bootstrap';

const Welcome = () => {
    return (
        <div className='my-5'>
            <Container>
                <Row>
                    <Col className='welcome__des'>
                        <h2>WELCOME TO HOTEL PARADISE</h2>
                        <p>We have taken all the nescessary steps in order to guarantee you a save business and leisure trip.</p>

                        <p>We can also still welcome our conference guests thanks to our vaste meeting rooms. Simply tell us the number of participants and we will get you the right location with enough space between each of the participants.</p>
                        <Button variant="outline-secondary">Explore</Button>
                    </Col>
                    <Col className='welcome__img'>
                        <img src="https://i.pinimg.com/564x/5f/ad/db/5faddb20b9d11bed0762a1faf5f6bee9.jpg" alt="" width='300' height='200' />
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Welcome;
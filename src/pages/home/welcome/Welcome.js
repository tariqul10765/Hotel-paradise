import React from 'react';
import './Welcome.css';
import { Col, Container, Row, Button } from 'react-bootstrap';

const Welcome = () => {
    return (
        <div className='my-5'>
            <Container>
                <Row>
                    <Col className='welcome__des'>
                        <h2>Welcome To Hotel Paradise</h2>
                        <p>Picklu luptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius Picklu luptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem</p>
                        <Button variant="outline-secondary">Explore</Button>
                    </Col>
                    <Col className='welcome__img'>
                        <img src="https://i.pinimg.com/564x/5f/ad/db/5faddb20b9d11bed0762a1faf5f6bee9.jpg" alt="" width='300' height='200' />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Welcome;
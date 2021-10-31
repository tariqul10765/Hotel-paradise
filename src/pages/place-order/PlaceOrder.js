import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Button, Modal } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const history = useHistory();
    const { control, handleSubmit } = useForm();
    const { user } = useAuth();
    const { roomId } = useParams();

    const [show, setShow] = useState(false);
    const [room, setRoom] = useState({});

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}/rooms/get-single-room/${roomId}`;
        fetch(url)
            .then(res => res.json())
            .then(json => setRoom(json.data))

    }, [roomId]);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onSubmit = data => {
        const uId = user.uid;
        const roomType = room.title;
        const imgUrl = room.imgUrl;
        const price = room.price;
        const status = 'pending';

        const orderData = { ...data, uId, roomType, imgUrl, price, status }
        console.log(orderData);

        const url = `${process.env.REACT_APP_API_URL}/orders/add-order`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
        history.push('/');
    }
    return (
        <div className='my-5'>
            <Container>
                <Row>
                    <Col md={6}>
                        <form>
                            <Controller
                                name="name"
                                control={control}
                                defaultValue={user.displayName}
                                render={({ field }) => {
                                    return (
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control
                                                {...field}
                                                type="text"
                                                placeholder="Enter Name"
                                            />
                                        </Form.Group>
                                    )
                                }}
                            />
                            <Controller
                                name="email"
                                control={control}
                                defaultValue={user.email}
                                render={({ field }) => {
                                    return (
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control
                                                {...field}
                                                type="email"
                                                placeholder="Enter email"
                                            />
                                        </Form.Group>
                                    )
                                }}
                            />
                            <Controller
                                name="address"
                                control={control}
                                defaultValue=""
                                render={({ field }) => {
                                    return (
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control
                                                {...field}
                                                type="text"
                                                placeholder="Enter address"
                                            />
                                        </Form.Group>
                                    )
                                }}
                            />
                            <Controller
                                name="number"
                                control={control}
                                defaultValue=""
                                render={({ field }) => {
                                    return (
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control
                                                {...field}
                                                type="text"
                                                placeholder="Enter number"
                                            />
                                        </Form.Group>
                                    )
                                }}
                            />

                            <Button variant="primary" onClick={handleShow}>
                                Book Now
                            </Button>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{room.title}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>{room.description}</Modal.Body>
                                <Modal.Body><strong>Price:</strong> ${room.price}/night</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleSubmit(onSubmit)}>
                                        Confirm
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </form>


                    </Col>

                    <Col md={6}>
                        <h3>Order Summery</h3>
                        <h5>{room.title}</h5>
                        <p>{room.description}</p>
                        <h6>${room.price}/night</h6>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PlaceOrder;
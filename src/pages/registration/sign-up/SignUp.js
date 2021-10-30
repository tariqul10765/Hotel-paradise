import React from 'react';
import './SignUp.css';
import { Form, Button } from 'react-bootstrap';

const SignUp = () => {
    return (
        <div className='w-50 mx-auto mt-5'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>

            <div className='signin__methods'>
                <span>
                    <strong>Sign Up With</strong>
                </span>
                <i class="fab fa-google google__icon"></i>
            </div>

            <h6>Already have an account? <a href="/">sign In</a></h6>
        </div>
    );
};

export default SignUp;
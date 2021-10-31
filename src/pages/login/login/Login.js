import React from 'react';
import './Login.css';
import { Form, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';

const Login = () => {
    let location = useLocation();
    const history = useHistory();
    const { googleSignIn, emailPassSignIn, updateUserProfile } = useAuth();
    const { user } = useAuth();
    const { control, handleSubmit } = useForm();

    const redirect_url = location.state?.from || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_url);
            })
    }

    const onSubmit = data => {

        emailPassSignIn(data.email, data.password)
            .then(result => {
                updateUserProfile('tariqul');
                history.push(redirect_url);
            })
    }

    return (
        <div className='w-50 mx-auto mt-5'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="email"
                    control={control}
                    defaultValue={user.displayName}
                    render={({ field }) => {
                        return (
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control
                                    {...field}
                                    type="email"
                                    placeholder="Enter Email"
                                />
                            </Form.Group>
                        )
                    }}
                />
                <Controller
                    name="password"
                    control={control}
                    defaultValue={user.email}
                    render={({ field }) => {
                        return (
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control
                                    {...field}
                                    type="password"
                                    placeholder="Enter Password"
                                />
                            </Form.Group>
                        )
                    }}
                />
                <Button variant="primary" type='submit'>Login</Button>
            </form>

            <div className='signin__methods'>
                <span>
                    <strong>Sign In With</strong>
                </span>
                <i
                    className="fab fa-google google__icon"
                    role="button"
                    onClick={handleGoogleSignIn}
                ></i>
            </div >

            <h6>Don't have an account? <Link to="/login">sign up</Link></h6>
        </div >
    );
};

export default Login;
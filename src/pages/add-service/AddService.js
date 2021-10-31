import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const AddService = () => {
    const { control, handleSubmit, reset } = useForm();
    const { user } = useAuth();


    const onSubmit = data => {

        console.log(data);
        const url = `${process.env.REACT_APP_API_URL}/rooms/add-room`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        reset();
    }

    return (
        <div className='w-50 mx-auto mt-5'>
            {
                user.email !== 'tariqul500@gmail.com'
                    ?
                    <h1 className='text-center'>You are not an admin</h1>
                    :
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            name="title"
                            control={control}
                            defaultValue=""
                            render={({ field }) => {
                                return (
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control
                                            {...field}
                                            type="text"
                                            placeholder="Enter Title"
                                        />
                                    </Form.Group>
                                )
                            }}
                        />
                        <Controller
                            name="description"
                            control={control}
                            defaultValue=""
                            render={({ field }) => {
                                return (
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control
                                            {...field}
                                            type="text"
                                            placeholder="Enter Description"
                                        />
                                    </Form.Group>
                                )
                            }}
                        />
                        <Controller
                            name="price"
                            control={control}
                            defaultValue=""
                            render={({ field }) => {
                                return (
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control
                                            {...field}
                                            type="number"
                                            placeholder="Enter Price"
                                        />
                                    </Form.Group>
                                )
                            }}
                        />
                        <Controller
                            name="imgUrl"
                            control={control}
                            defaultValue=""
                            render={({ field }) => {
                                return (
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control
                                            {...field}
                                            type="text"
                                            placeholder="Enter image Url"
                                        />
                                    </Form.Group>
                                )
                            }}
                        />
                        <Button variant="primary" type='submit'>Add Service</Button>
                    </form>
            }
        </div>
    );
};

export default AddService;
import React, { useEffect, useState } from 'react';
import './MyOrders.css';
import { Modal, Table, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Order from '../orders/Order';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}/orders/order-list/${user.uid}`;
        console.log(url);

        fetch(url)
            .then(res => res.json())
            .then(json => setMyOrders(json.data))
    }, [user.uid]);

    const handleDelete = order => {
        console.log(order);
        const afterDelete = myOrders.filter(myOrder => myOrder._id !== order._id);
        console.log(afterDelete)
        setMyOrders(afterDelete);
        const url = `${process.env.REACT_APP_API_URL}/orders/delete-order/${order._id}`;
        console.log('handleDelete', url);

        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        // setShow(false);
    }


    return (
        <div>
            <div>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Room Type</th>
                            <th>Rent</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map(order => <Order
                                handleDelete={handleDelete}
                                userOrder={order}
                                key={order._id}
                            ></Order>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyOrders;
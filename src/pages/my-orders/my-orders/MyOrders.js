import React, { useEffect, useState } from 'react';
import './MyOrders.css';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Order from '../orders/Order';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}/orders/order-list/${user.uid}`;

        fetch(url)
            .then(res => res.json())
            .then(json => setMyOrders(json.data))
    }, [user.uid]);

    const handleDelete = order => {

        const afterDelete = myOrders.filter(myOrder => myOrder._id !== order._id);

        setMyOrders(afterDelete);
        const url = `${process.env.REACT_APP_API_URL}/orders/delete-order/${order._id}`;

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
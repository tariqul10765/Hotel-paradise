import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Order from '../my-orders/orders/Order';

const ManageOrders = () => {
    const { user } = useAuth();
    const [manageOrders, setManageOrders] = useState([]);

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}/orders/order-list`;

        fetch(url)
            .then(res => res.json())
            .then(json => setManageOrders(json.data))
    }, [user.uid]);

    const handleDelete = order => {

        const afterDelete = manageOrders.filter(manageOrder => manageOrder._id !== order._id);

        setManageOrders(afterDelete);
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
                            <th>User Name</th>
                            <th>Room Type</th>
                            <th>Rent</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manageOrders.map(order => <Order
                                handleDelete={handleDelete}
                                userOrder={order}
                                key={order._id}
                            >{order.name}</Order>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageOrders;
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Order = ({ userOrder, handleDelete, children }) => {
    const { _id, imgUrl, roomType, price, status } = userOrder;
    const { user } = useAuth();

    const [show, setShow] = useState(false);
    const [isPending, setIsPending] = useState(status);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleApproved = () => {
        setIsPending('approved');

        const url = `${process.env.REACT_APP_API_URL}/orders/update-order/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: 'approved' })
        })
    }

    return (
        <tr key={_id}>
            <td><img src={imgUrl} alt="" width='30' /></td>
            {
                children && <td>{children}</td>
            }
            <td>{roomType}</td>
            <td>{price}</td>
            <td>12-05-2020</td>
            <td>{isPending}</td>
            <td>
                <div className='actions'>
                    {/* <i onClick={handleShow} className="fas fa-trash"></i> */}
                    {
                        children ?
                            user.email === 'tariqul500@gmail.com' && <div className='actions'>
                                <i onClick={handleShow} className="fas fa-trash"></i>
                                <i class="far fa-check-circle" onClick={handleApproved}></i>
                            </div>
                            :
                            <div>
                                <i onClick={handleShow} className="fas fa-trash"></i>
                            </div>
                    }

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{roomType}</Modal.Title>
                        </Modal.Header>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button
                                variant="primary"
                                onClick={() => handleDelete(userOrder)}
                            >
                                Delete
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </td>
        </tr>
    );
};

export default Order;
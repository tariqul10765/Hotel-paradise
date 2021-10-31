import React from 'react';
import { Link } from 'react-router-dom';
import './Room.css';

const Room = ({ room }) => {
    const { _id, title, description, price, imgUrl } = room;
    console.log(imgUrl);
    return (
        <div>
            <div className='slider__item'>
                <img src={imgUrl} alt='' />
                <div className='about__room'>
                    <h3>{title.toUpperCase()}</h3>
                    <p>{description}</p>

                    <div>
                        <span><strong>${price}</strong></span>
                        <span>/ night</span>
                    </div>
                    <div className="shop__btn">
                        <Link to={`/order/${_id}`}>Book Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Room;
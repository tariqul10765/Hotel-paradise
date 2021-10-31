import React from 'react';
import FavouriteRooms from '../favourite-rooms/FavouriteRooms';
import Slider from '../slider/Slider';
import SpecialStaff from '../special-staff/SpecialStaff';
import Welcome from '../welcome/Welcome';

const Home = () => {
    return (
        <div className='mw-100'>
            <Slider></Slider>
            <Welcome></Welcome>
            <FavouriteRooms></FavouriteRooms>
            <SpecialStaff></SpecialStaff>
        </div>
    );
};

export default Home;
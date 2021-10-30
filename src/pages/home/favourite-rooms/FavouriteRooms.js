import React from 'react';
import Slider from "react-slick";
import './FavouriteRooms.css';

const FavouriteRooms = () => {
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <h2 className='text-center mb-5'>Our Favourite Rooms</h2>
            <Slider {...settings} className='favourite__room__container'>
                <div className='slider__item'>
                    <img src="https://template.hasthemes.com/picklu/picklu/img/room/room2.jpg" alt='' />
                    <div className='about__room'>
                        <h5>Double Room</h5>
                        <p>Our stunning shoe collection is crafted from the finest leathers and super-soft suede's. You’ll find a style for you in these new arrivals to the L.K.Bennett shoe collection.</p>

                        <div>
                            <span>$180</span>
                            <span>/ night</span>
                        </div>
                        <div className="shop__btn">
                            <a href="/">Book now</a>
                        </div>
                    </div>
                </div>
                <div className='slider__item'>
                    <img src="https://template.hasthemes.com/picklu/picklu/img/room/room3.jpg" alt='' />
                    <div className='about__room'>
                        <h5>Double Room</h5>
                        <p>Our stunning shoe collection is crafted from the finest leathers and super-soft suede's. You’ll find a style for you in these new arrivals to the L.K.Bennett shoe collection.</p>

                        <div>
                            <span>$180</span>
                            <span>/ night</span>
                        </div>
                        <div className="shop__btn">
                            <a href="/">Book now</a>
                        </div>
                    </div>
                </div>
                <div className='slider__item'>
                    <img src="https://template.hasthemes.com/picklu/picklu/img/room/room4.jpg" alt='' />
                    <div className='about__room'>
                        <h5>Double Room</h5>
                        <p>Our stunning shoe collection is crafted from the finest leathers and super-soft suede's. You’ll find a style for you in these new arrivals to the L.K.Bennett shoe collection.</p>

                        <div>
                            <span>$180</span>
                            <span>/ night</span>
                        </div>
                        <div className="shop__btn">
                            <a href="/">Book now</a>
                        </div>
                    </div>
                </div>
                <div className='slider__item'>
                    <img src="https://template.hasthemes.com/picklu/picklu/img/room/room2.jpg" alt='' />
                    <div className='about__room'>
                        <h5>Double Room</h5>
                        <p>Our stunning shoe collection is crafted from the finest leathers and super-soft suede's. You’ll find a style for you in these new arrivals to the L.K.Bennett shoe collection.</p>

                        <div>
                            <span>$180</span>
                            <span>/ night</span>
                        </div>
                        <div className="shop__btn">
                            <a href="/">Book now</a>
                        </div>
                    </div>
                </div>
                <div className='slider__item'>
                    <img src="https://template.hasthemes.com/picklu/picklu/img/room/room3.jpg" alt='' />
                    <div className='about__room'>
                        <h5>Double Room</h5>
                        <p>Our stunning shoe collection is crafted from the finest leathers and super-soft suede's. You’ll find a style for you in these new arrivals to the L.K.Bennett shoe collection.</p>

                        <div>
                            <span>$180</span>
                            <span>/ night</span>
                        </div>
                        <div className="shop__btn">
                            <a href="/">Book now</a>
                        </div>
                    </div>
                </div>
                <div className='slider__item'>
                    <img src="https://template.hasthemes.com/picklu/picklu/img/room/room4.jpg" alt='' />
                    <div className='about__room'>
                        <h5>Double Room</h5>
                        <p>Our stunning shoe collection is crafted from the finest leathers and super-soft suede's. You’ll find a style for you in these new arrivals to the L.K.Bennett shoe collection.</p>

                        <div>
                            <span>$180</span>
                            <span>/ night</span>
                        </div>
                        <div className="shop__btn">
                            <a href="/">Book now</a>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default FavouriteRooms;
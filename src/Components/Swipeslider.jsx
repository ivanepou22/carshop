import React from 'react'
import './Swipeslider.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Link} from "react-router-dom";

// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper';
import Stars from './Stars';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);

function Swipeslider(props) {
    return (
        <div>
            <Swiper slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                "clickable": true
                }} navigation={true}
                autoplay={{
                    delay: 9000,
                    pauseOnMouseEnter: false
                }}
            className="mySwiper">
               { props.cars.map(car => (
                    <SwiperSlide key={car.id}>
                        <Link key={car.id}
                                        to={{
                                            pathname: `/product/${car.id}`,
                                            state: car,
                                            }}
                                    >
                        <div className="featured-swiper-slide box">
                            <img src={car.image} alt="" />
                            <div className="content">
                                <h3>{car.carName}</h3>
                                <div className="stars">
                                    <Stars carStars={car.stars} />
                                </div>
                                <div className="price">{
                                car.price.toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                    maximumFractionDigits: 0,
                                  })
                                }</div>
                                <button className="btn">check out</button>
                            </div>
                        </div>
                        </Link>
                    </SwiperSlide>
                ))
               }

            </Swiper>
        </div>
    )
}

export default Swipeslider

import React from 'react';
import './Vehicle.css';
import {Link} from "react-router-dom";
// Import Swiper React components
import {Swiper, SwiperSlide } from "swiper/react";

import {FaCircle} from 'react-icons/fa';

// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation,Autoplay
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination,Navigation,Autoplay]);

function Vehicle(props) {
    const latestCars = props.latest;
    return (
            <Swiper slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                pagination={{
                    "clickable": true
                }}
                autoplay={{
                    delay: 8000
                }}
                navigation={false}
              className="mySwiper">
                  {
                      latestCars.slice(latestCars.length-6, latestCars.length).map(vehicle => (

                        <SwiperSlide key={vehicle.id}>
                            <Link key={vehicle.id}
                                        to={{
                                            pathname: `/product/${vehicle.id}`,
                                            state: vehicle,
                                            }}
                                    >
                            <div className="swiper-container">
                                <img src={vehicle.image} alt="" />
                                <div className="content">
                                    <h3>{vehicle.carName}</h3>
                                    <div className="price"> <span>price : </span>
                                    {
                                        vehicle.price.toLocaleString('en-US', {
                                            style: 'currency',
                                            currency: 'USD',
                                            maximumFractionDigits: 0,
                                          })
                                    }
                                    </div>
                                    <p>
                                        <FaCircle className="fa_circle" /> <span> {vehicle.category} </span>
                                        <FaCircle className="fa_circle" /> <span> {vehicle.make} </span>
                                        <FaCircle className="fa_circle" /> <span> {vehicle.drive} </span>
                                        <FaCircle className="fa_circle" /> <span> {vehicle.engine} </span>
                                        <FaCircle className="fa_circle" /> <span> {vehicle.speed} </span>
                                    </p>
                                    <div>
                                        <button  className="btn">check out</button>
                                    </div>

                                </div>
                            </div>
                            </Link>
                        </SwiperSlide>
                      ))
                  }
            </Swiper>
    )
}
export default Vehicle

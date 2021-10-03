import React from 'react'
import './Swipeslider.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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
                }} navigation={false}
                autoplay={{
                    delay: 5000,
                    pauseOnMouseEnter: false
                }}
            className="mySwiper">
               { props.cars.map(car => (
                    <SwiperSlide key={car.id}>
                        <div className="featured-swiper-slide box">
                            <img src={car.image} alt="" />
                            <div className="content">
                                <h3>{car.name}</h3>
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
                                <a href="/#" className="btn">check out</a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
               }

            </Swiper>
        </div>
    )
}

export default Swipeslider

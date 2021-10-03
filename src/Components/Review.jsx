import React from 'react';
import './Review.css';

// Import Swiper React components
import {Swiper, SwiperSlide } from "swiper/react";


// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation,Autoplay
} from 'swiper';
import Stars from './Stars';

// install Swiper modules
SwiperCore.use([Pagination,Navigation,Autoplay]);

function Review(props) {
    return (
        <Swiper slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        loop={true} pagination={{
            "clickable": true
        }}
        autoplay={{
            delay: 8000
        }}
      className="mySwiper">
          {
              props.reviews.map(rev => (
                    <SwiperSlide className="review-main" key={rev.id}>
                    <div className="review-container">
                            <img src={rev.image} alt="" />
                            <div className="content">
                                <p>{rev.comment}</p>
                                <h3>{rev.fullName}</h3>
                                <div className="stars">
                                <Stars carStars={rev.stars} />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
              ))
          }
    </Swiper>
    )
}

export default Review

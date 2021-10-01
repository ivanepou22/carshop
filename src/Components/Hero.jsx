import React from 'react';
import './Hero.css';
// Import Swiper React components
import {Swiper, SwiperSlide } from "swiper/react";
import {slideImage} from '../apis/api';

// Import Swiper styles
import "swiper/swiper-bundle.min.css"
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/scrollbar/scrollbar.min.css"

// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation,Autoplay
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination,Navigation,Autoplay]);

function Hero() {

  return (
    <div className="Hero">
        <Swiper slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{"clickable": true}}
        autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true
        }}
        navigation={false}
        className="swiper">
          {
            slideImage.map(slider => (
              <SwiperSlide className="swiper-slide" key={slider.id}>
                <img src={slider.image} alt=""/>
              </SwiperSlide>
            ))
          }
        </Swiper>
    </div>
  )


}

export default Hero

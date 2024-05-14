import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// IMAGES
import HeroBg1 from '../../images/heroBag.png'
import HeroBg2 from '../../images/heroBag2.png'

import { Navigation, Autoplay, Pagination} from 'swiper/modules';

const Hero = () => {
  return (
    <div className='hero-section'>
      <div className="container">
        <Swiper 
          loop={true} 
          navigation={true} 
          pagination={true}
          autoplay={{
            delay: 25000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay, Pagination]} 
          className="hero__swiper">
          <SwiperSlide>
            <img src={HeroBg1} alt="swiper img" />
            <div className="delivery-section__content">
                <h5>Welcome to GreenShop</h5>
                <h2>Let’s Make a Better <span>Planet</span></h2>
                <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                <button>SHOP NOW</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={HeroBg2} alt="swiper img" />
            <div className="delivery-section__content">
            <h5>Welcome to GreenShop</h5>
            <h2>Stay home & get your daily</h2>
                <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                <button>SHOP NOW</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Hero
import React, { useState, useEffect, useRef } from 'react';
import './Featured.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , Navigation, Autoplay, Thumbs } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/thumbs';

const Featured = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const backgroundSwiperParams = {
      autoplay: { delay: 5000, disableOnInteraction: false },
    };

    const thumbnailSwiperParams = {
      centeredSlides: true,
      autoplay: { delay: 5000, disableOnInteraction: false },
      pagination: { clickable: true },
      navigation: { prevEl: '.featured-btn-prev', nextEl: '.featured-btn-next' },
      modules: [Autoplay, Navigation, Pagination, Thumbs]
    };
    

  return (
    <>
      <div className="section-container-featured">
        <div className="widescreen-gradient"></div>
        <div className="carousel-container-edgefade">
          <div className="swiper featuredSwiper">
            <div className="feature-side-pic"></div>
            <div className="section-featured-backgroundswipe-container">
              <div className="section-featured-image-perspective">
                <div className="swiper featuredBackgroundSwiper">
                    <Swiper className="swiper-wrapper" {...backgroundSwiperParams} centeredSlides= {true} direction={'vertical'} modules= {[Autoplay, Thumbs]}>
                      <SwiperSlide>
                        <div className="section-featured-image1">1</div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="section-featured-image3">3</div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="section-featured-image2">2</div>
                      </SwiperSlide>
                    </Swiper>
                </div>
              </div>
            </div>
            <div className="section-title-featured">FEATURED</div>
            <div className="swiper-button-prev featured-btn-prev">
              <div className="featured-button">
                <i className="fa fa-caret-left"></i>
              </div>
            </div>
            <div className="swiper-button-next featured-btn-next">
              <div className="featured-button">
                <i className="fa fa-caret-right"></i>
              </div>
            </div>
            
            <Swiper className="swiper-wrapper" {...thumbnailSwiperParams}>
              <SwiperSlide>
                <div className="feature-card">
                  <div className="feature-card-content">New single "Fluffy"!</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="feature-card">
                  <div className="feature-card-content">Old underwear giveaway!</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="feature-card">
                  <div className="feature-card-content">The Lion King</div>
                </div>
              </SwiperSlide>
              <div className="section-footer-featured">
                <div className="swiper-pagination"></div>
              </div>
            </Swiper>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
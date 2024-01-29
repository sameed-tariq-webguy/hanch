import React, { useState, useEffect, useRef } from 'react';
import './Featured.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , Navigation, Autoplay, Thumbs, Controller } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/thumbs';

const Featured = () => {

  const [controlledSwiper, setControlledSwiper] = useState(null);


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
                <Swiper
                  className="swiper featuredBackgroundSwiper"
                  direction={'vertical'}
                  modules={[Autoplay, Controller]}
                  onSwiper={setControlledSwiper}
                  
                >
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

              <Swiper
                className="swiper featuredThumbsSwiper"
                modules={[Autoplay, Navigation, Pagination, Controller]}
                controller={{ control: controlledSwiper }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{ prevEl: '.featured-btn-prev', nextEl: '.featured-btn-next' }}
                centeredSlides={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                onSlideChange={(swiper) => onChange(swiper)}
              >            
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
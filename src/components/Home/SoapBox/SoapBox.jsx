
import './SoapBox.css'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , Navigation, Autoplay, Controller, EffectFade } from 'swiper/modules';


const SoapBox = () => {
    const [controlledSwiper, setControlledSwiper] = useState(null);
  return (
    <>
        <div className="section-container-whatsup">
            <div className="widescreen-gradient"></div>
            <div className="section-background-container">
                <div className="swiper sectionBackgroundSwiper">
                <Swiper className="swiper-wrapper" centeredSlides={true} effect="fade"  modules={[Controller, EffectFade]} onSwiper={setControlledSwiper} >
                    <SwiperSlide className="swiper-slide">
                        <div className="section-background-soapbox"></div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="section-background-learn"></div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="section-background-music"></div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="section-background-live"></div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="section-background-discover"></div>
                    </SwiperSlide>
                </Swiper>
                        
                </div>
            </div>
            <div className="carousel-container-edgefade">
                <div className="swiper postsSwiper">
                    <div className="section-title-default">WHAT'S NEW</div>
                    <div className="swiper-button-prev hero-btn-prev">
                        <div className="postcard-button"><i className="fa fa-caret-left"></i></div>
                    </div>
                    <div className="swiper-button-next hero-btn-next">
                        <div className="postcard-button"><i className="fa fa-caret-right"></i></div>
                    </div>
                    <div className="carousel-edge-fade"></div>
                    <Swiper className="swiper-wrapper mySwiper" centeredSlides={true} pagination={{ el: '.swiper-pagination', clickable: true }} navigation={{ prevEl: '.hero-btn-prev', nextEl: '.hero-btn-next' }} modules={[Navigation, Pagination, Controller]} controller={{ control: controlledSwiper }} slidesPerView={1.1} spaceBetween={'8px'}>
                        <SwiperSlide className='swiper-slide'>
                            <div className="postcard-soapbox">
                                <div className="postcard-spacer-height"></div>
                                <div className="postcard-title-soapbox">Return of the Webmaster</div>
                            </div>
                            <div className="postcard-info">
                                <span className="postcard-date">Fri, Dec 15</span><span
                                    className="postcard-tag">rant</span><span className="postcard-tag">site</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='swiper-slide'>
                            <div className="postcard-learn">
                                <div className="postcard-spacer-height"></div>
                                <div className="postcard-title-learn">Let's Learn About Music.</div>
                            </div>
                            <div className="postcard-info">
                                <span className="postcard-date">Thu, Dec 14</span><span className="postcard-tag">fun</span><span
                                    className="postcard-tag">educuation</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='swiper-slide'>
                            <div className="postcard-music">
                                <div className="postcard-spacer-height"></div>
                                <div className="postcard-title-music">"Dragon Ball Z Theme" Cover Video
                                </div>
                            </div>
                            <div className="postcard-info">
                                <span className="postcard-date">Thu, Dec 14</span><span
                                    className="postcard-tag">cover</span><span className="postcard-tag">musicvideo</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='swiper-slide'>
                            <div className="postcard-live">
                                <div className="postcard-spacer-height"></div>
                                <div className="postcard-title-live">New show dates!</div>
                            </div>
                            <div className="postcard-info">
                                <span className="postcard-date">Fri, Dec 15</span><span
                                    className="postcard-tag">rant</span><span className="postcard-tag">site</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='swiper-slide'>
                            <div className="postcard-discover">
                                <div className="postcard-title-discover">
                                    <a href="#"><i className="fa-solid fa-eye"></i>
                                        DISCOVER MORE
                                    </a>
                                </div>
                            </div>
                            <div className="postcard-info">
                                <span className="discover-subtitle">Down the rabbit hole</span>
                            </div>
                        </SwiperSlide>
                        <div className="section-footer-whatsup">
                            <div className="swiper-pagination"></div>
                        </div>
                    </Swiper>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default SoapBox
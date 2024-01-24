
import './SoapBox.css'
import { useEffect } from 'react';

const SoapBox = () => {

    useEffect(() => {
        // Initialize postsSwiper
        const postsSwiper = new Swiper('.postsSwiper', {
          direction: 'horizontal',
          loop: false,
          speed: 500,
          slidesPerView: 1.1,
          mousewheelControl: true,
          mousewheel: {
            forceToAxis: true,
            thresholdDelta: 30,
            thresholdTime: 500,
          },
          centeredSlides: true,
          spaceBetween: 5,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
    
        // Initialize sectionBackgroundSwiper
        const sectionBackgroundSwiper = new Swiper('.sectionBackgroundSwiper', {
          direction: 'horizontal',
          loop: false,
          speed: 500,
          slidesPerView: 1,
          centeredSlides: true,
          spaceBetween: 0,
          allowTouchMove: false,
          effect: 'fade',
        });
    
        // Connect the Swiper instances
        postsSwiper.controller.control = sectionBackgroundSwiper;
        sectionBackgroundSwiper.controller.control = postsSwiper;
    
        // Clean up the Swiper instances on component unmount
        return () => {
          postsSwiper.destroy();
          sectionBackgroundSwiper.destroy();
        };
      }, []); // Run the effect only once on component mount
    
  return (
    <>
        <div className="section-container-whatsup">
            <div className="widescreen-gradient"></div>
            <div className="section-background-container">
                <div className="swiper sectionBackgroundSwiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="section-background-soapbox"></div>
                        </div>
                        <div className="swiper-slide">
                            <div className="section-background-learn"></div>
                        </div>
                        <div className="swiper-slide">
                            <div className="section-background-music"></div>
                        </div>
                        <div className="swiper-slide">
                            <div className="section-background-live"></div>
                        </div>
                        <div className="swiper-slide">
                            <div className="section-background-discover"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-container-edgefade">
                <div className="swiper postsSwiper">
                    <div className="section-title-default">WHAT'S NEW</div>
                    <div className="swiper-button-prev">
                        <div className="postcard-button"><i className="fa fa-caret-left"></i></div>
                    </div>
                    <div className="swiper-button-next">
                        <div className="postcard-button"><i className="fa fa-caret-right"></i></div>
                    </div>
                    <div className="carousel-edge-fade"></div>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="postcard-soapbox">
                                <div className="postcard-spacer-height"></div>
                                <div className="postcard-title-soapbox">Return of the Webmaster</div>
                            </div>
                            <div className="postcard-info">
                                <span className="postcard-date">Fri, Dec 15</span><span
                                    className="postcard-tag">rant</span><span className="postcard-tag">site</span>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="postcard-learn">
                                <div className="postcard-spacer-height"></div>
                                <div className="postcard-title-learn">Let's Learn About Music.
                                </div>
                            </div>
                            <div className="postcard-info">
                                <span className="postcard-date">Thu, Dec 14</span><span className="postcard-tag">fun</span><span
                                    className="postcard-tag">educuation</span>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="postcard-music">
                                <div className="postcard-spacer-height"></div>
                                <div className="postcard-title-music">"Dragon Ball Z Theme" Cover Video
                                </div>
                            </div>
                            <div className="postcard-info">
                                <span className="postcard-date">Thu, Dec 14</span><span
                                    className="postcard-tag">cover</span><span className="postcard-tag">musicvideo</span>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="postcard-live">
                                <div className="postcard-spacer-height"></div>
                                <div className="postcard-title-live">New show dates!</div>
                            </div>
                            <div className="postcard-info">
                                <span className="postcard-date">Fri, Dec 15</span><span
                                    className="postcard-tag">rant</span><span className="postcard-tag">site</span>
                            </div>
                        </div>
                        <div className="swiper-slide">
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
                        </div>
                    </div>
                    <div className="section-footer-whatsup">
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SoapBox
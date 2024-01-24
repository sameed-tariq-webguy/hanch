
import { useEffect } from 'react';
import './Featured.css'

const Featured = () => {

    useEffect(() => {
        // Initialize featuredSwiper
        const featuredSwiper = new Swiper('.featuredSwiper', {
          direction: 'horizontal',
          loop: true,
          speed: 500,
          slidesPerView: 1,
          autoplay: {
            delay: 6000,
          },
          mousewheelControl: true,
          mousewheel: {
            forceToAxis: true,
            thresholdDelta: 30,
            thresholdTime: 500,
          },
          centeredSlides: true,
          spaceBetween: 200,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
    
        // Initialize featuredBackgroundSwiper
        const featuredBackgroundSwiper = new Swiper('.featuredBackgroundSwiper', {
          direction: 'vertical',
          loop: true,
          speed: 500,
          slidesPerView: 1,
          centeredSlides: true,
          spaceBetween: 0,
          allowTouchMove: false,
        });
    
        // Connect the Swiper instances
        featuredSwiper.controller.control = featuredBackgroundSwiper;
        featuredBackgroundSwiper.controller.control = featuredSwiper;
    
        // Clean up the Swiper instances on component unmount
        return () => {
          featuredSwiper.destroy();
          featuredBackgroundSwiper.destroy();
        };
      }, []); // Run the effect only once on component mount
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
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="section-featured-image1">1</div>
                    </div>
                    <div className="swiper-slide">
                      <div className="section-featured-image2">2</div>
                    </div>
                    <div className="swiper-slide">
                      <div className="section-featured-image3">3</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-title-featured">FEATURED</div>
            <div className="swiper-button-prev">
              <div className="featured-button">
                <i className="fa fa-caret-left"></i>
              </div>
            </div>
            <div className="swiper-button-next">
              <div className="featured-button">
                <i className="fa fa-caret-right"></i>
              </div>
            </div>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="feature-card">
                  <div className="feature-card-content">New single "Fluffy"!</div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="feature-card">
                  <div className="feature-card-content">The Lion King</div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="feature-card">
                  <div className="feature-card-content">
                    Old underwear giveaway!
                  </div>
                </div>
              </div>
            </div>
            <div className="section-footer-featured">
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;

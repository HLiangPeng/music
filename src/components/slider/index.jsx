import React, { useEffect, useState } from "react";
import { SliderContainer } from "./style";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";

const Slider = function (props) {
  const [newSlider, setSlider] = useState(null);
  const { bannerList } = props;

  useEffect(() => {
    if (bannerList && !newSlider) {
      const mySwiper = new Swiper(".swiper-container", {
        autoplay: true,
        loop : true,
        autoplayDisableOnInteraction: false,
        pagination: {el:'.swiper-pagination'},
      });
      setSlider(mySwiper);
    }
  }, [bannerList, newSlider]);

  return (
    <SliderContainer>
      <div className="before"></div>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {
            bannerList.map((banner, index) => {
              return (
                <div className="swiper-slide" key={index}>
                  <img src={banner} alt="轮播图" />
                </div>
              );
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </SliderContainer>
  );
}

export default React.memo(Slider)
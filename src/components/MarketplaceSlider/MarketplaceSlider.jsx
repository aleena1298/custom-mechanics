import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./MarketplaceSlider.css";

import aerox from "../../assets/images/Yamaha Aerox YECVT 2.png";
import nmaxStd from "../../assets/images/yamaha nmax std 3.png";
import nmaxTech from "../../assets/images/Yamaha Nmax Tech max 3.png";
import mio from "../../assets/images/Yamaha mio 3.png";
import gearUltimata from "../../assets/images/Yamaha gear ultimata 3.png";

export default function MarketplaceSlider() {
  const sliderData = [aerox, nmaxStd, nmaxTech, mio, gearUltimata];

  return (
    <div className="marketplace-slider">
      <div className="marketplace-slider-inside">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={10}
          slidesPerView={1}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          scrollbar={{
            draggable: true,
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {sliderData.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="marketplace-slide">
                <div className="marketplace-slide-inside">
                  <img src={image} alt="Yamaha bike" />

                  <h1></h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { UsaPreviewPhotos } from "@/constants/countryPreviewPhotosData";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

// import Swiper styles
import "swiper/css";

interface Props {
  countryName: string;
}

const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <button onClick={() => swiper.slidePrev()}>Prev</button>
      <button onClick={() => swiper.slideNext()}>Next</button>
    </div>
  );
};
// https://codesandbox.io/s/brave-gwen-ddfsbg?file=/styles/Bootstrap.module.css:42-55
const CountryPhotosCarousel = (props: Props) => {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation, Pagination]}
      >
        {UsaPreviewPhotos.previewPhotos.map((photo, index) => (
          <SwiperSlide key={index}>
            <img src={photo.photoUrl} className="mx-auto" />
          </SwiperSlide>
        ))}
        {/* <SwiperNavButtons /> */}
      </Swiper>
    </>
  );
};

export default CountryPhotosCarousel;

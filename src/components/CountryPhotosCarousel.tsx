"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

// import Swiper styles
import "swiper/css";
import { countryPreviewPhotos } from "@/constants/countryPreviewPhotosCompiled";

interface Props {
  countryName: string;
}

const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <button onClick={() => swiper.slidePrev()}>
        <svg
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          ></path>
        </svg>
      </button>
      <button onClick={() => swiper.slideNext()}>
        <svg
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          ></path>
        </svg>
      </button>
    </div>
  );
};
// https://codesandbox.io/s/brave-gwen-ddfsbg?file=/styles/Bootstrap.module.css:42-55
const CountryPhotosCarousel = (props: Props) => {
  const { countryName } = props;
  const countryPhotos = countryPreviewPhotos.get(countryName);
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        modules={[Autoplay, Navigation, Pagination]}
      >
        {countryPhotos?.previewPhotos.map((photo, index) => (
          <SwiperSlide key={index} className="h-auto">
            <img src={photo.photoUrl} className="mx-auto" />
          </SwiperSlide>
        ))}
        <div className="flex items-center justify-center">
          <SwiperNavButtons />
        </div>
      </Swiper>
    </>
  );
};

export default CountryPhotosCarousel;

import React, { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
const ImgVariantSlider = ({ smallImgs, setBigImg }) => {
  const swiperRef = useRef(null);
  const CustomPrevArrow = ({ onClick }) => (
    <div
      className={`bg-bg_D9D absolute top-0 translate-y-[-50%] left-[27rem] lg:left-[38rem] flex justify-center items-center w-[3.4rem] h-[3.4rem] cursor-pointer rounded-full z-10`}
    >
      <button
        className="swiper-button-prev custom-prev-arrow "
        onClick={onClick}
      >
        <GoArrowRight className="w-[2.4rem] h-[2.4rem]" />
      </button>
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div
      className={`bg-bg_D9D absolute top-0 translate-y-[-50%] right-[2rem] lg:right-[4.5rem] flex justify-center items-center w-[3.4rem] h-[3.4rem] cursor-pointer rounded-full z-10`}
    >
      <button
        className="swiper-button-next custom-next-arrow"
        onClick={onClick}
      >
        <GoArrowLeft className="w-[2.4rem] h-[2.4rem]" />
      </button>
    </div>
  );
  return (
    <div className="max-w-[25rem] lg:max-w-[35rem] relative">
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        navigation={{
          prevEl: ".custom-prev-arrow",
          nextEl: ".custom-next-arrow",
        }}
        modules={[Navigation]}
        className=""
        // breakpoints={{
        //   // when window width is >= 640px
        //   1024: {
        //     // width: 1024,
        //     slidesPerView: 3,
        //   },
        //   // when window width is >= 768px
        //   640: {
        //     // width: 768,
        //     slidesPerView: 2,
        //   },
        //   320: {
        //     // width: 420,
        //     slidesPerView: 1,
        //   },
        // }}
      >
        {smallImgs.map((imgs, i) => (
          <SwiperSlide key={i}>
            <img
              key={i}
              src={imgs}
              className="w-[7rem] lg:w-[9.6rem] h-[7rem] lg:h-[9.6rem] object-cover cursor-pointer"
              alt="product image"
              onClick={() => {
                setBigImg(i),
                  setTimeout(() => {
                    swiperRef.current.navigation.update();
                  }, 0);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute top-[50%]">
        <CustomPrevArrow onClick={() => swiperRef.current.slidePrev()} />
        <CustomNextArrow onClick={() => swiperRef.current.slideNext()} />
      </div>
    </div>
  );
};

export default ImgVariantSlider;

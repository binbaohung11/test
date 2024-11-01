"use client";

import { useTranslations } from "next-intl";
import React from "react";
import emptyImage from "../../assets/image/home/empty-image.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const OtherProduct = () => {
  const t = useTranslations("Home");

  const data = [
    { image: emptyImage, title: "Dừa Trái" },
    { image: emptyImage, title: "Hạt Điều" },
    { image: emptyImage, title: "Trái cam" },
    { image: emptyImage, title: "Trái bưởi" },
    { image: emptyImage, title: "Trái quýt" },
  ];

  return (
    <div className="px-5 md:px-10 lg:px-20 xl:px-32 w-full py-10 lg:py-20 space-y-4 text-[12px] font-mainR">
      <p className="text-center md:text-start text-[16px] md:text-[24px] lg:text-[34px] xl:text-[40px] font-mainB py-3">
        {t("OtherProduct")}
      </p>

      <div className="md:hidden">
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          loop={true}
          modules={[Autoplay]} // Thêm modules vào đây
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Image src={item.image} alt={item.title} className="" />
              <h3 className="text-[13px] font-mainB text-center py-1">
                {item.title}
              </h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden md:block lg:hidden">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          modules={[Autoplay]} // Thêm modules vào đây
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Image src={item.image} alt={item.title} />
              <h3 className="text-[14px] font-mainB text-center md:text-[18px] lg:text-[20px] xl:text-[22px]  py-3">
                {item.title}
              </h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden md:hidden lg:block">
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          modules={[Autoplay]} // Thêm modules vào đây
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Image src={item.image} alt={item.title} />
              <h3 className="text-[12px] font-mainB text-center md:text-[18px] lg:text-[20px] xl:text-[22px]  py-3">
                {item.title}
              </h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OtherProduct;

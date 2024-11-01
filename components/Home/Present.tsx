"use client";

import { useTranslations } from "next-intl";
import React from "react";
import cn from "../../assets/image/home/cn-image.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const Present = () => {
  const t = useTranslations("Home");

  const data = [
    { image: cn, title: "Dừa Trái" },
    { image: cn, title: "Hạt Điều" },
    { image: cn, title: "Trái cam" },
    { image: cn, title: "Trái bưởi" },
    { image: cn, title: "Trái quýt" },
    { image: cn, title: "Trái quýt" },
    { image: cn, title: "Trái quýt" },
    { image: cn, title: "Trái quýt" },
    { image: cn, title: "Trái quýt" },
    { image: cn, title: "Trái quýt" },
  ];

  return (
    <div className=" w-full py-10 lg:py-20 space-y-4 text-[12px] font-mainR">
      <p className="text-center  text-[16px] md:text-[24px] lg:text-[34px] xl:text-[40px] font-mainB py-3">
        {t("Present")}
      </p>

      <div className="bg-[#EEEEEE] //px-5 md:px-10 lg:px-20  py-10 ">
        <div className="md:hidden">
          <Swiper
            spaceBetween={10}
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
                <Image
                  src={item.image}
                  alt={item.title}
                  className="shadow-lg"
                />
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
            slidesPerView={5}
            loop={true}
            modules={[Autoplay]} // Thêm modules vào đây
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={item.image}
                  alt={item.title}
                  className="shadow-lg"
                />
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
            slidesPerView={6}
            loop={true}
            modules={[Autoplay]} // Thêm modules vào đây
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={item.image}
                  alt={item.title}
                  className="shadow-lg"
                />
                <h3 className="text-[12px] font-mainB text-center md:text-[18px] lg:text-[20px] xl:text-[22px]  py-3">
                  {item.title}
                </h3>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="text-center text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] px-10 md:px-24 lg:px-40 xl:px-60">
        {t("PrideMobile")}
      </div>
    </div>
  );
};

export default Present;

"use client";
import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import nl1 from "../../../assets/image/our/introduction/nl1.jpg";
import nl2 from "../../../assets/image/our/introduction/nl2.jpg";
import nl3 from "../../../assets/image/our/introduction/nl3.jpg";
import nl4 from "../../../assets/image/our/introduction/nl4.jpg";
import nl5 from "../../../assets/image/our/introduction/nl5.jpg";
import nl6 from "../../../assets/image/our/introduction/nl6.jpg";
import nl7 from "../../../assets/image/our/introduction/nl7.jpg";
import nl8 from "../../../assets/image/our/introduction/nl8.jpg";
import nl9 from "../../../assets/image/our/introduction/nl9.jpg";
import nl10 from "../../../assets/image/our/introduction/nl10.jpg";

import "swiper/css";
import "swiper/css/navigation"; // Import CSS cho nút điều hướng

const Materials = () => {
  const t = useTranslations("Our-Intro");

  const data = [
    { image: nl1, title: "Hình 1" },
    { image: nl2, title: "Hình 2" },
    { image: nl3, title: "Hình 3" },
    { image: nl4, title: "Hình 4" },
    { image: nl5, title: "Hình 5" },
    { image: nl6, title: "Hình 7" },
    { image: nl7, title: "Hình 9" },
    { image: nl8, title: "Hình 10" },
    { image: nl9, title: "Hình 11" },
    { image: nl10, title: "Hình 12" },
  ];

  return (
    <div className="pt-10 lg:pt-20">
      <h2 className="py-2 lg:py-5 text-[14px] md:text-[24px] lg:text-[34px] xl:text-[40px] font-mainB">
        {t("Material")}
      </h2>

      <div className="text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-mainR space-y-10">
        <div className="space-y-2">
          <p>{t("Material1")}</p>
        </div>
        <div className="w-full space-y-3 md:flex md:space-y-0 md:space-x-5">
          <Swiper
            spaceBetween={10}
            loop={true}
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation
            breakpoints={{
              // Kích thước màn hình nhỏ (mobile)
              320: {
                slidesPerView: 2, // Hiển thị 1 slide
              },
              // Kích thước màn hình trung bình (tablet)
              768: {
                slidesPerView: 2, // Hiển thị 2 slides
              },
              // Kích thước màn hình lớn (desktop)
              1024: {
                slidesPerView: 3, // Hiển thị 3 slides
              },
              // Kích thước màn hình rất lớn (wide screen)
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={item.image}
                  alt={item.title}
                  className="shadow-lg w-full h-[120px] md:h-[250px] xl:h-[400px] object-cover rounded-[10px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Materials;

"use client";

import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Germany from "../../assets/image/home/flag/Flag_of_Germany.svg";
import Belgium from "../../assets/image/home/flag/Flag_of_Belgium.svg";
import Brazil from "../../assets/image/home/flag/Flag_of_Brazil.svg";
import Dubai from "../../assets/image/home/flag/Flag_of_Dubai.svg";
import France from "../../assets/image/home/flag/Flag_of_France.svg";
import Israel from "../../assets/image/home/flag/Flag_of_Israel.svg";
import Japan from "../../assets/image/home/flag/Flag_of_Japan.svg";
import Jordan from "../../assets/image/home/flag/Flag_of_Jordan.svg";
import Kuwait from "../../assets/image/home/flag/Flag_of_Kuwait.svg";
import Palestine from "../../assets/image/home/flag/Flag_of_Palestine.svg";
import Russia from "../../assets/image/home/flag/Flag_of_Russia.svg";
import SaudiArabia from "../../assets/image/home/flag/Flag_of_Saudi_Arabia.svg";
import SouthAfrica from "../../assets/image/home/flag/Flag_of_South_Africa.svg";
import SouthKorea from "../../assets/image/home/flag/Flag_of_South_Korea.svg";
import Turkey from "../../assets/image/home/flag/Flag_of_Turkey.svg";
import Ukraine from "../../assets/image/home/flag/Flag_of_Ukraine.svg";
import RepublicofChina from "../../assets/image/home/flag/Flag_of_the_Republic_of_China.svg";
import UK from "../../assets/image/home/flag/Flag_of_the_United_Kingdom_1-2.svg";
import US from "../../assets/image/home/flag/Flag_of_the_United_States.svg";

// Import Swiper styles
import "swiper/css";

const Present = () => {
  const t = useTranslations("Home");
  const tFlag = useTranslations("Flag");

  const data = [
    { image: Germany, title: tFlag("Germany") },
    { image: Belgium, title: tFlag("Belgium") },
    { image: Dubai, title: tFlag("Dubai") },
    { image: Brazil, title: tFlag("Brazil") },
    { image: France, title: tFlag("France") },
    { image: Israel, title: tFlag("Israel") },
    { image: Japan, title: tFlag("Japan") },
    { image: Jordan, title: tFlag("Jordan") },
    { image: Kuwait, title: tFlag("Kuwait") },
    { image: Palestine, title: tFlag("Palestine") },
    { image: Russia, title: tFlag("Russia") },
    { image: SaudiArabia, title: tFlag("Saudi Arabia") },
    { image: SouthAfrica, title: tFlag("South Africa") },
    { image: SouthKorea, title: tFlag("South Korea") },
    { image: RepublicofChina, title: tFlag("Republic of China") },
    { image: UK, title: tFlag("UK") },
    { image: US, title: tFlag("US") },
    { image: Turkey, title: tFlag("Turkey") },
    { image: Ukraine, title: tFlag("Ukraine") },
  ];

  return (
    <div className=" w-full py-10 lg:py-20 space-y-4 text-[12px] font-mainR">
      <p className="text-center  text-[16px] md:text-[24px] lg:text-[34px] xl:text-[40px] font-mainB py-3">
        {t("Present")}
      </p>

      <div className="bg-[#EEEEEE] px-5 md:px-10 lg:px-20  py-5 xl:py-10 ">
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
                <Image
                  src={item.image}
                  alt={item.title}
                  className=" h-[120px] w-[300px] object-cover hover:shadow-2xl"
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
                  className="h-[120px] w-[300px] object-cover hover:shadow-2xl"
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
                <div className="flex justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className=" h-[180px] w-[300px] object-cover hover:shadow-2xl"
                  />
                </div>
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

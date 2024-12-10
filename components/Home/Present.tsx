"use client";

import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Germany from "../../assets/image/home/flag/Flag_of_Germany.svg";
import Belgium from "../../assets/image/home/flag/Flag_of_Belgium.svg";
import Brazil from "../../assets/image/home/flag/Flag_of_Brazil.svg";
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
import RepublicofChina from "../../assets/image/home/flag/Flag_of_the_Republic_of_China.svg";
import UK from "../../assets/image/home/flag/Flag_of_the_United_Kingdom_1-2.svg";
import US from "../../assets/image/home/flag/Flag_of_the_United_States.svg";

import Australia from "../../assets/image/home/flag/Flag_of_Australia.png";
import Lebanon from "../../assets/image/home/flag/Flag_of_Lebanon.svg";
import UaE from "../../assets/image/home/flag/uae.png";
import Nigeria from "../../assets/image/home/flag/flag-for-flag-nigeria.svg";
import Netherland from "../../assets/image/home/flag/Flag-of-Netherlands.svg";
import Iran from "../../assets/image/home/flag/Iran.png";
import Iraq from "../../assets/image/home/flag/Iraq.png";
import Lybia from "../../assets/image/home/flag/libya-flag-icon.webp";
import Mali from "../../assets/image/home/flag/Flag_of_Mali.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"; // Import CSS cho nút điều hướng

const Present = () => {
  const t = useTranslations("Home");
  const tFlag = useTranslations("Flag");

  const data = [
    { image: US, title: tFlag("US") },
    { image: Germany, title: tFlag("Germany") },
    { image: Belgium, title: tFlag("Belgium") },
    { image: Netherland, title: tFlag("Netherlands") },
    { image: Turkey, title: tFlag("Turkey") },
    { image: Palestine, title: tFlag("Palestine") },
    { image: Jordan, title: tFlag("Jordan") },
    { image: Israel, title: tFlag("Israel") },
    { image: Kuwait, title: tFlag("Kuwait") },
    { image: UaE, title: tFlag("UAE") },
    { image: SaudiArabia, title: tFlag("Saudi Arabia") },
    { image: Lebanon, title: tFlag("Lebanon") },
    { image: Lybia, title: tFlag("Lybia") },
    { image: Nigeria, title: tFlag("Nigeria") },
    { image: SouthAfrica, title: tFlag("South Africa") },
    { image: Mali, title: tFlag("Mali") },
    { image: Russia, title: tFlag("Russia") },
    { image: UK, title: tFlag("UK") },
    { image: France, title: tFlag("France") },
    { image: Brazil, title: tFlag("Brazil") },
    { image: Japan, title: tFlag("Japan") },
    { image: RepublicofChina, title: tFlag("Taiwan") },
    { image: Iraq, title: tFlag("Iraq") },
    { image: Iran, title: tFlag("Iran") },
    { image: Australia, title: tFlag("Australia") },
    { image: SouthKorea, title: tFlag("South Korea") },
  ];

  return (
    <div className=" w-full py-10 lg:py-20 space-y-4 text-[12px] font-mainR">
      <p className="text-center  text-[16px] md:text-[24px] lg:text-[34px] xl:text-[40px] font-mainB py-3">
        {t("Present")}
      </p>

      <div className="bg-[#EEEEEE] px-5 md:px-10 lg:px-20  py-5 xl:py-10 ">
        <div className="">
          <Swiper
            spaceBetween={30}
            loop={true}
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation
            breakpoints={{
              // Dưới 640px
              1: {
                slidesPerView: 2,
              },
              // Từ 640px đến 768px
              768: {
                slidesPerView: 2,
              },
              // Từ 768px đến 1024px
              1024: {
                slidesPerView: 3,
              },
              // Từ 1024px trở lên
              1280: {
                slidesPerView: 5,
              },
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center ">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="h-[120px] md:h-[200px] w-[300px] object-cover hover:shadow-2xl"
                  />
                </div>
                <h3 className="text-[12px] font-mainB text-center md:text-[18px] lg:text-[20px] xl:text-[22px] py-3">
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

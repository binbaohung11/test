"use client";

import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Germany from "../../assets/image/home/flag/germany.png";
import Belgium from "../../assets/image/home/flag/belgium.png";
import Brazil from "../../assets/image/home/flag/brazil.png";
import France from "../../assets/image/home/flag/france.png";
import Israel from "../../assets/image/home/flag/israel.png";
import Japan from "../../assets/image/home/flag/japan.png";
import Jordan from "../../assets/image/home/flag/jordan.png";
import Kuwait from "../../assets/image/home/flag/kuwait.png";
import Palestine from "../../assets/image/home/flag/palestine.png";
import Russia from "../../assets/image/home/flag/russia.png";
import SaudiArabia from "../../assets/image/home/flag/SaudiArabia.png";
import SouthAfrica from "../../assets/image/home/flag/south-africa.png";
import SouthKorea from "../../assets/image/home/flag/south-korea.png";
import Turkey from "../../assets/image/home/flag/turkey.png";
import RepublicofChina from "../../assets/image/home/flag/taiwan.png";
import UK from "../../assets/image/home/flag/united-kingdom.png";
import US from "../../assets/image/home/flag/united-states.png";

import Australia from "../../assets/image/home/flag/Australia.png";
import Lebanon from "../../assets/image/home/flag/Lebanon.png";
import UaE from "../../assets/image/home/flag/united-arab-emirates.png";
import Nigeria from "../../assets/image/home/flag/nigeria.png";
import Netherland from "../../assets/image/home/flag/netherlands.png";
import Iran from "../../assets/image/home/flag/Iran.png";
import Iraq from "../../assets/image/home/flag/iraq.png";
import Lybia from "../../assets/image/home/flag/libya-flag-icon.png";
import Mali from "../../assets/image/home/flag/Mali.png";

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
                    className="h-[120px] md:h-[200px] w-[300px] object-contain hover:shadow-2xl"
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

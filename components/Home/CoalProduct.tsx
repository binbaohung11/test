"use client";

import { useLocale, useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import cube from "../../assets/image/product/cube/cube-image-1.jpg";
import stick from "../../assets/image/product/stick/STICK-1.8X3.5.jpg";
import bbq from "../../assets/image/product/bbq/coconut-charcoal-bbq-4x10.jpg";
import hexa from "../../assets/image/product/hexogon/HEXAGON-2X4.jpg";
import material from "../../assets/image/product/Material/coconut-shell-charcoal-1-1536x1152.jpg";
import cf from "../../assets/image/product/other/THAN-CAFE.jpg";
import xc from "../../assets/image/product/other/THAN-XA-CU.jpg";

// Import Swiper styles
import "swiper/css";
import Link from "next/link";

const CoalProduct = () => {
  const t = useTranslations("Home");
  const tProduct = useTranslations("Product");
  const locale = useLocale(); // Get the current locale

  const data = [
    {
      image: cube,
      title: tProduct("ThanVuong"),
      url: `${locale}/product/coconut-charcoal-cube`,
    },
    {
      image: stick,
      title: tProduct("ThanQue"),
      url: `${locale}/product/coconut-charcoal-stick`,
    },
    {
      image: hexa,
      title: tProduct("ThanLG"),
      url: `${locale}/product/coconut-charcoal-hexagonal`,
    },
    {
      image: material,
      title: tProduct("ThanNL"),
      url: `${locale}/product/coconut-charcoal-bbq`,
    },
    {
      image: bbq,
      title: tProduct("ThanBBQ"),
      url: `${locale}/product/coconut-charcoal-material`,
    },
    {
      image: cf,
      title: tProduct("ThanCF"),
      url: `${locale}/product/charcoal-nacre`,
    },
    {
      image: xc,
      title: tProduct("ThanXC"),
      url: `${locale}/product/charcoal-cafe`,
    },
  ];

  return (
    <div className="px-5 md:px-10 lg:px-20 xl:px-32 w-full py-10 lg:py-20 space-y-4 text-[12px] font-mainR">
      <p className="text-center md:text-start text-[16px] md:text-[24px] lg:text-[34px] xl:text-[40px] font-mainB py-3">
        {t("CoalProduct")}
      </p>

      <div className="md:hidden">
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          loop={true}
          modules={[Autoplay]} // Thêm modules vào đây
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Link href={item.url}>
                <div className="hover:text-[#969696]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="hover:shadow-2xl"
                  />
                  <h3 className="text-[13px] font-mainB text-center py-1">
                    {item.title}
                  </h3>
                </div>
              </Link>
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
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Link href={item.url || ""}>
                <div className="hover:text-[#969696]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="hover:shadow-2xl"
                  />
                  <h3 className="text-[14px] font-mainB text-center md:text-[18px] lg:text-[20px] xl:text-[22px]  py-3">
                    {item.title}
                  </h3>
                </div>
              </Link>
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
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Link href={item.url || ""}>
                <div className="hover:text-[#969696]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="hover:shadow-2xl"
                  />
                  <h3 className="text-[12px] font-mainB text-center md:text-[18px] lg:text-[20px] xl:text-[22px]  py-3">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CoalProduct;

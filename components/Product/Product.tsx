"use client";
import { getProductData } from "@/lib/data";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Image from "next/image";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import Characteristic from "./Characteristic";

const Product = () => {
  const { product } = useParams(); // Lấy giá trị product từ URL
  const t = useTranslations("Product-Detail"); // Sử dụng hook useTranslations

  const productData = getProductData(t); // Lấy dữ liệu sản phẩm với tiêu đề đã dịch

  const currentProduct = productData.find((item) => item.link === product);

  if (!currentProduct) {
    return <div>hello</div>;
  }

  return (
    <div className="py-5">
      <div className="flex justify-center items-center md:hidden">
        <Image
          src={currentProduct?.linkImage || ""}
          alt={currentProduct?.title || ""}
          width={200}
          height={200}
        />
      </div>

      <div className="w-full flex items-center space-x-5">
        <div className="w-full md:w-[70%]">
          <h2 className="py-5 lg:py-5 text-[14px] md:text-[24px] lg:text-[34px] xl:text-[40px] font-mainB">
            {currentProduct?.title}
          </h2>
          <div className="text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-mainR">
            <div className="space-y-2">
              <p>{currentProduct?.intro1}</p>
              <p>{currentProduct?.intro2}</p>
              <p>{currentProduct?.intro3}</p>
            </div>
          </div>
        </div>
        <div className="w-[30%] hidden md:block">
          <div className="flex w-full justify-center">
            <Image
              src={currentProduct?.linkImage || ""}
              alt={currentProduct?.title || ""}
              width={370}
              height={370}
            />
          </div>
        </div>
      </div>
      <div className="text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-mainR">
        <p className="font-mainB mt-4">{t("Same")}</p>
        <div className="space-y-2">
          <p>{currentProduct?.intro4}</p>
        </div>
      </div>

      <h2 className="py-5 lg:mt-20  text-[14px] md:text-[24px] lg:text-[34px] xl:text-[40px] font-mainB">
        {t("Product")}
      </h2>
      <div className="lg:hidden">
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
          {currentProduct?.img.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="shadow-lg w-full h-[150px] md:h-[200px]"
                />
              </div>
              <h3 className="text-[13px] font-mainB text-center py-1">
                {item.title}
              </h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden lg:block ">
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
          {currentProduct?.img.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="shadow-lg w-full h-[250px] xl:h-[350px]"
                />
              </div>
              <h3 className="text-[12px] font-mainB text-center md:text-[18px] lg:text-[20px] xl:text-[22px]  py-3">
                {item.title}
              </h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Characteristic />
    </div>
  );
};

export default Product;

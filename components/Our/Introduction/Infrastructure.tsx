"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import infras1 from "../../../assets/image/our/introduction/infras-image-1.jpg";
import infras2 from "../../../assets/image/our/introduction/infras-image-2.jpg";
import infras3 from "../../../assets/image/our/introduction/infras-image-3.jpg";
import infras4 from "../../../assets/image/our/introduction/infras-image-4.jpg";
import infras5 from "../../../assets/image/our/introduction/infras-image-5.jpg";
import infras7 from "../../../assets/image/our/introduction/infras-image-7.jpg";
import infras9 from "../../../assets/image/our/introduction/DJI_0988 2.jpg";
import infras10 from "../../../assets/image/our/introduction/DJI_0999 2.jpg";
import infras11 from "../../../assets/image/our/introduction/P102549602.jpg";
import infras12 from "../../../assets/image/our/introduction/P1025560 2.jpg";
import infras13 from "../../../assets/image/our/introduction/P1025613 2.jpg";
import infras14 from "../../../assets/image/our/introduction/P1025697 2.jpg";
import infras15 from "../../../assets/image/our/introduction/P1025894 2.jpg";
import infras16 from "../../../assets/image/our/introduction/P1026151 2.jpg";
import infras17 from "../../../assets/image/our/introduction/P1026187 2.jpg";
import infras18 from "../../../assets/image/our/introduction/P1026260 2.jpg";
import infras19 from "../../../assets/image/our/introduction/P1026360 2.jpg";
import infras20 from "../../../assets/image/our/introduction/P1026438 2.jpg";

import "swiper/css";

const Infrastructure = () => {
  const t = useTranslations("Our-Intro");
  const data = [
    { image: infras1, title: "Hình 1" },
    { image: infras2, title: "Hình 2" },
    { image: infras3, title: "Hình 3" },
    { image: infras4, title: "Hình 4" },
    { image: infras5, title: "Hình 5" },
    { image: infras7, title: "Hình 7" },
    { image: infras9, title: "Hình 9" },
    { image: infras10, title: "Hình 10" },
    { image: infras11, title: "Hình 11" },
    { image: infras12, title: "Hình 12" },
    { image: infras13, title: "Hình 13" },
    { image: infras14, title: "Hình 14" },
    { image: infras15, title: "Hình 15" },
    { image: infras16, title: "Hình 16" },
    { image: infras17, title: "Hình 17" },
    { image: infras18, title: "Hình 18" },
    { image: infras19, title: "Hình 19" },
    { image: infras20, title: "Hình 20" },

  ];
  return (
    <div className="pt-10 lg:pt-20">
      <h2 className="py-2 lg:py-5 text-[14px] md:text-[24px] lg:text-[34px] xl:text-[40px] font-mainB">
        {t("Infrastructure")}
      </h2>
      <div className="text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-mainR">
        <div className="space-y-2">
          <p>{t("Infrastructure1")}</p>
          <div>
            <p>{t("Infrastructure2")}</p>
            <ul className="list-disc pl-5">
              <li>{t("Infrastructure3")}</li>
              <li>{t("Infrastructure4")}</li>
              <li>{t("Infrastructure5")}</li>
              <li>{t("Infrastructure6")}</li>
              <li>{t("Infrastructure7")}</li>
            </ul>
          </div>
          <p>{t("Infrastructure8")}</p>
          <p>{t("Infrastructure9")}</p>
        </div>
      </div>
      <div className="py-5">
        <div className="md:hidden">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
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
                  className="shadow-lg w-full h-[250px] object-cover rounded-[10px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden md:block ">
          <Swiper
            spaceBetween={30}
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
                  className="shadow-lg w-full h-[250px] xl:h-[400px] object-cover rounded-[10px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;

"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import coconut from "../../../assets/image/product/coconut/dua-trai-xuat-khau-highlandbp.jpg";
import CharacteristicCoconut from "./CharacteristicCoconut";

const Coconut = () => {
  const t = useTranslations("Coconut"); // Sử dụng hook useTranslations

  return (
    <div className="py-5">
      <div className="flex justify-center items-center md:hidden">
        <Image src={coconut} alt="coconut " />
      </div>

      <div className="w-full flex items-center space-x-5">
        <div className="w-full md:w-[60%]">
          <h2 className="py-5 lg:py-5 text-[14px] md:text-[24px] lg:text-[34px] xl:text-[40px] font-mainB">
            {t("Title")}
          </h2>
          <div className="text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-mainR">
            <div className="space-y-2">
              <p>{t("Title1")}</p>
              <p>{t("Title2")}</p>
            </div>
          </div>
        </div>
        <div className="w-[40%] hidden md:block">
          <div className="flex w-full justify-center">
            <Image src={coconut} alt="coconut"  />
          </div>
        </div>
      </div>

      <CharacteristicCoconut />

      
    </div>
  );
};

export default Coconut;

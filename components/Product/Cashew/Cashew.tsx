"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import cashew from "../../../assets/image/product/cashew/hat-dieu-rang-muoi.jpg";
// import cashew1 from "../../../assets/image/product/cashew/hat-dieu-rang-muoi-1.jpg";
import cashew2 from "../../../assets/image/product/cashew/hat-dieu-rang-muoi-2.jpg";
import CharacteristicCashew from "./CharacteristicCashew";

const Cashew = () => {
  const t = useTranslations("Cashew"); // Sử dụng hook useTranslations

  return (
    <div className="py-5">
      <div className="flex justify-center items-center md:hidden">
        <Image src={cashew} alt="Cashew " />
      </div>

      <div className="w-full flex items-center space-x-5">
        <div className="w-full md:w-[70%]">
          <h2 className="py-5 lg:py-5 text-[14px] md:text-[24px] lg:text-[34px] xl:text-[40px] font-mainB">
            {t("Title")}
          </h2>
          <div className="text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-mainR">
            <div className="space-y-2">
              <p>{t("Title1")}</p>
              <p>{t("Title2")}</p>
              <p>{t("Title3")}</p>
            </div>
          </div>
        </div>
        <div className="w-[30%] hidden md:block">
          <div className="flex w-full justify-center">
            <Image src={cashew} alt="Cashew" width={370} height={370} />
          </div>
        </div>
      </div>

      <CharacteristicCashew />

      <div className="w-full flex items-center space-x-5 ">
        <div className="w-full ">
          <h2 className="py-5 lg:py-5 text-[14px] md:text-[24px] lg:text-[34px] xl:text-[40px] font-mainB">
            {t("Benefit2")}
          </h2>

          <div className="w-full block md:flex md:items-center md:space-x-10 ">
            <div className="w-full md:w-[50%]">
              <div className="flex justify-center items-center ">
                <Image src={cashew2} alt="Cashew 2" />
              </div>
            </div>
            <div className="w-full md:w-[50%] mt-5 space-y-2 text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-mainR">
              <ul className="list-disc pl-5">
                <li>{t("RM1")}</li>
                <li>{t("RM2")}</li>
                <li>{t("RM3")}</li>
                <li>{t("RM4")}</li>
                <li>{t("RM5")}</li>
              </ul>
              <p>{t("RM6")}</p>
              <p>{t("RM7")}</p>
              <p>{t("RM8")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cashew;

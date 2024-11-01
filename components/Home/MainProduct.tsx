import { useTranslations } from "next-intl";
import React from "react";
import emptyImage from "../../assets/image/home/empty-image.png";
import Image from "next/image";
import vuongImage from "../../assets/image/home/vuong-image.png";

const MainProduct = () => {
  const t = useTranslations("Home");

  return (
    <>
      {/* Mobile */}
      <div className="px-5 md:px-10 lg:px-20 xl:px-32 w-full py-10 lg:py-20 md:hidden space-y-4 text-[12px] font-mainR  ">
        <div className="">
          <p className="text-[16px] font-mainB text-center py-3">{t("We")}</p>
          <p>{t("Intro")}</p>
        </div>
        <div className="w-full flex items-center">
          <div className="w-[50%]">
            <p className="text-[14px] font-mainB">{t("Established")}</p>
            <p>{t("EstablishedContent")}</p>
          </div>
          <div className="w-[50%] flex items-center justify-center">
            <Image
              src={emptyImage}
              alt="empty image"
              className="w-[170px] rounded-[10px]"
            />
          </div>
        </div>
        <div>
          <p className="text-[14px] font-mainB py-3">{t("Product")}</p>
          <p className="">{t("ProductContent")}</p>
          <p>{t("ProductContent2")}</p>
        </div>
      </div>

      {/* PC */}
      <div className="px-5 md:px-10 lg:px-20 xl:px-32 w-full py-10 lg:py-20 hidden md:block space-y-4 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[20px] font-mainR  ">
        <div className="">
          <p className="text-[16px] md:text-[24px] lg:text-[34px] xl:text-[40px] font-mainB text-start py-3">
            {t("We")}
          </p>
          <p className="text-[16px] md:text-[18px] lg:text-[22px] xl:text-[24px] font-mainB">
            {t("Company")}
          </p>
        </div>
        <div className="w-full flex items-center">
          <div className="w-[40%]">
            <p>{t("Intro")}</p>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-mainB pt-5">
              {t("Established")}
            </p>
            <p className="">{t("EstablishedContent")}</p>
          </div>
          <div className="w-[60%] flex items-center justify-center space-x-5">
            <Image
              src={vuongImage}
              alt="vuong image"
              className="w-[200px] lg:w-[250px]  xl:w-[325px] rounded-[10px]"
            />
            <Image
              src={vuongImage}
              alt="vuong image"
              className="w-[200px] lg:w-[250px]  xl:w-[325px] rounded-[10px]"
            />
          </div>
        </div>
        <div className="w-full flex space-x-5">
          <div className="w-[40%] flex justify-center">
            <Image
              src={emptyImage}
              alt="empty image"
              className="w-[200px] md:w-[333px] lg:w-[444px] xl:w-[500px] rounded-[10px] "
            />
          </div>
          <div className="w-[60%]">
            <p className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-mainB py-3">
              {t("Product")}
            </p>
            <p className="">{t("ProductContent")}</p>
            <p>{t("ProductContent2")}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainProduct;

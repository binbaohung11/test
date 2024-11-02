import { useTranslations } from "next-intl";
import React from "react";
import material1 from "../../../assets/image/our/introduction/material-image-1.png";
import material2 from "../../../assets/image/our/introduction/material-image-2.png";
import Image from "next/image";

const Materials = () => {
  const t = useTranslations("Our-Intro");

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
          <Image src={material1} alt="material 1" className="w-full" />
          <Image src={material2} alt="material 2" className="w-full"/>
        </div>
      </div>
    </div>
  );
};

export default Materials;

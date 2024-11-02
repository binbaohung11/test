import { useTranslations } from "next-intl";
import React from "react";
import cer1 from "../../../assets/image/our/certificate/cer-image-1.png";
import cer2 from "../../../assets/image/our/certificate/cer-image-2.png";
import cer3 from "../../../assets/image/our/certificate/cer-image-3.png";
import Image from "next/image";

const Certificate = () => {
  const t = useTranslations("Our-Cer");

  return (
    <div>
      <h1 className="py-2 lg:py-5 text-[14px] md:text-[24px] lg:text-[34px] xl:text-[40px] font-mainB">
        {t("Commit")}
      </h1>

      <div className="text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-mainR">
        <div className="space-y-2">
          <p>{t("Commit1")}</p>
          <p>{t("Commit2")}</p>
          <p>{t("Commit3")}</p>
          <p>{t("Commit4")}</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-5 items-center justify-center py-5">
        <Image src={cer1} alt="cer 1" className="w-[200px] md:w-[300px] lg:w-[300px] xl:w-[400px]" />
        <Image src={cer2} alt="cer 1" className="w-[200px] md:w-[300px] lg:w-[300px] xl:w-[400px] hidden lg:block" />
        <Image src={cer3} alt="cer 1" className="w-[200px] md:w-[300px] lg:w-[300px] xl:w-[400px] hidden lg:block" />

        <div className="flex space-x-3 lg:hidden">
          <Image src={cer2} alt="cer 1" className="w-[150px] md:w-[250px]" />
          <Image src={cer3} alt="cer 1" className="w-[150px] md:w-[250px]" />
        </div>
      </div>
    </div>
  );
};

export default Certificate;

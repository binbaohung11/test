import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

import product1 from "../../../assets/image/our/introduction/product-image-1.png";
import product2 from "../../../assets/image/our/introduction/product-image-2.png";
import product3 from "../../../assets/image/our/introduction/product-image-3.png";

const Product = () => {
  const t = useTranslations("Our-Intro");

  return (
    <div className="pt-10 lg:pt-20">
      <h2 className="py-2 lg:py-5 text-[14px] md:text-[24px] lg:text-[34px] xl:text-[40px] font-mainB">
        {t("Product")}
      </h2>
      <div className="text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-mainR">
        <div className="w-full block md:flex md:space-x-5">
          <div className="space-y-2 md:w-[60%]">
            <p>{t("Product1")}</p>
            <p>{t("Product2")}</p>
            <p>{t("Product3")}</p>
            <p className="font-mainB">{t("Product4Bold")}</p>
          </div>
          <div className="hidden md:block w-[40%]">
            <Image src={product1} alt="product1" />
          </div>
        </div>
      </div>
      <div>
        <div className=" w-full md:space-y-0 flex  md:space-x-5 md:items-center md:justify-center py-5">
          <Image src={product2} alt="product 2" className="w-[50%]" />
          <Image src={product3} alt="product 3" className="w-[50%]" />
        </div>
        <Image src={product1} alt="product1" className="h-[50%] block md:hidden" />
      </div>
    </div>
  );
};

export default Product;

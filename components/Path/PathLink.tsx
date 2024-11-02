"use client";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import React from "react";

const PathLink = () => {
  const pathname = usePathname();
  const t = useTranslations("Link");

  const breadcrumbs: { [key: string]: React.ReactNode } = {
    "[locale]/our/introduction": (
      <div className="text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px]">
        <span className="text-[#969696]">
          {t("Our")} {">"}
        </span>
        <span className="text-black">{t("Introduction")}</span>
      </div>
    ),
    "[locale]/our/certificate": (
      <div className="text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px]">
        <span className="text-[#969696]">
          {t("Our")} {">"}
        </span>
        <span className="text-black">{t("certificate")}</span>
      </div>
    ),
    "[locale]/product/coconut-charcoal-cube": (
      <div className="text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px]">
        <span className="text-[#969696]">
          {t("Product")} {">"}
        </span>
        <span className="text-black"> {t("ThanVuong")}</span>
      </div>
    ),

    "[locale]/product/coconut-charcoal-stick": (
      <div className="text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px]">
        <span className="text-[#969696]">
          {t("Product")} {">"}
        </span>
        <span className="text-black"> {t("ThanQue")}</span>
      </div>
    ),
    "[locale]/product/coconut-charcoal-hexagonal": (
      <div className="text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px]">
        <span className="text-[#969696]">
          {t("Product")} {">"}
        </span>
        <span className="text-black"> {t("ThanLG")}</span>
      </div>
    ),
    "[locale]/product/coconut-charcoal-bbq": (
      <div className="text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px]">
        <span className="text-[#969696]">
          {t("Product")} {">"}
        </span>
        <span className="text-black"> {t("ThanBBQ")}</span>
      </div>
    ),
    "[locale]/product/coconut-charcoal-material": (
      <div className="text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px]">
        <span className="text-[#969696]">
          {t("Product")} {">"}
        </span>
        <span className="text-black"> {t("ThanNL")}</span>
      </div>
    ),
    "[locale]/product/roasted-cashew-nuts": (
      <div className="text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px]">
        <span className="text-[#969696]">
          {t("Product")} {">"}
        </span>
        <span className="text-black"> {t("HatDieu")}</span>
      </div>
    ),
    "[locale]/product/coconut": (
      <div className="text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px]">
        <span className="text-[#969696]">
          {t("Product")} {">"}
        </span>
        <span className="text-black"> {t("Coconut")}</span>
      </div>
    ),
  };

  const normalizedPath = pathname.replace(/^\/[^/]+/, "[locale]");
  const breadcrumb = breadcrumbs[normalizedPath] || "Đường dẫn không xác định";

  return (
    <div>
      {breadcrumb} {/* No <p> here, just render the breadcrumb directly */}
    </div>
  );
};

export default PathLink;

"use client";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const PathLink = () => {
  const pathname = usePathname();
  const t = useTranslations("Link");
  const locale = useLocale();

  const breadcrumbs: { [key: string]: React.ReactNode } = {
    "[locale]/our/introduction": (
      <div className="text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px]">
        <span className="text-[#969696]">
          {t("Our")} {">"}
        </span>
        <span className="text-black"> {t("Introduction")}</span>
      </div>
    ),
    "[locale]/our/certificate": (
      <div className="text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px]">
        <span className="text-[#969696]">
          {t("Our")} {">"}
        </span>
        <span className="text-black"> {t("certificate")}</span>
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
    "[locale]/product/charcoal-nacre": (
      <div className="text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px]">
        <span className="text-[#969696]">
          {t("Product")} {">"}
        </span>
        <span className="text-black"> {t("ThanXC")}</span>
      </div>
    ),
    "[locale]/product/charcoal-cafe": (
      <div className="text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px]">
        <span className="text-[#969696]">
          {t("Product")} {">"}
        </span>
        <span className="text-black"> {t("ThanCF")}</span>
      </div>
    ),
    "[locale]/product/cashew": (
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
  // Normalize pathname by replacing the locale with [locale]
  const normalizedPath = pathname.replace(/^\/[^/]+/, "[locale]");

  // Check if the path is under [locale]/news/
  const isNewsPath = normalizedPath.startsWith("[locale]/news/");
  if (isNewsPath) {
    breadcrumbs["[locale]/news/..."] = (
      <div className="text-[12px] md:text-[16px] ">
        <span className="text-[#969696] hover:text-black">
          <Link href={`/${locale}`}>{t("Home")} </Link> {">"}
        </span>
        <span className="text-black">
          <Link href={`/${locale}/news`}> {t("News")}</Link>
        </span>
      </div>
    );
  }

  const isVideoPath = normalizedPath.startsWith("[locale]/video/");
  if (isVideoPath) {
    breadcrumbs["[locale]/video/..."] = (
      <div className="text-[12px] md:text-[16px] ">
        <span className="text-[#969696] hover:text-black">
          <Link href={`/${locale}`}>{t("Home")} </Link> {">"}
        </span>
        <span className="text-black">
          <Link href={`/${locale}/news`}> {t("Video")}</Link>
        </span>
      </div>
    );
  }

  const breadcrumb =
    breadcrumbs[normalizedPath] ||
    breadcrumbs["[locale]/news/..."] ||
    breadcrumbs["[locale]/video/..."] ||
    "Đường dẫn không xác định";

  return <div>{breadcrumb}</div>;
};

export default PathLink;

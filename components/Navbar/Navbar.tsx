"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion"; // Import AnimatePresence and motion
import logo from "../../assets/icons_navbar/highlandbp-logo-iso.png";
import Menu from "./Menu";

const Navbar = ({ locale }: { locale: string }) => {
  const t = useTranslations("Menu");
  const tProduct = useTranslations("Product");
  const tOur = useTranslations("Menu-Our");
  const tNews = useTranslations("News");
  const pathname = usePathname();
  const [showIntro, setShowIntro] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showNews, setShowNews] = useState(false);

  return (
    <div className="w-full sticky top-0 z-40 bg-white">
      <div className="py-5 px-[10rem] max-sm:px-[3rem] max-md:px-[3rem] max-lg:px-[3rem] max-xl:px-[5rem] max-2xl:px-[7rem] max-xl:py-4 max-2xl:py-5">
        <div className="w-full flex max-md:hidden">
          <div className="w-[15%] lg:w-[20%] flex items-center justify-center">
            <Link href={"/"}>
              <Image
                src={logo}
                alt="logo"
                className="w-[150px] lg:w-[200px]  "
              />
            </Link>
          </div>
          <div className="w-[90%] flex items-center justify-center space-x-16 text-[20px] font-mainB max-md:text-[12px] max-lg:text-[12px] max-xl:text-[14px] max-2xl:text-[16px] max-md:space-x-5 max-lg:space-x-5 max-xl:space-x-8 max-2xl:space-x-14">
            <button
              className={`hover:text-[#639F7A] ${
                pathname === `/${locale}` ? "border-b-[2.5px] border-black" : ""
              }`}
            >
              <Link href={`/${locale}`}>{t("Home")}</Link>
            </button>

            <button
              className={`hover:text-[#639F7A] ${
                pathname.startsWith(`/${locale}/our`)
                  ? "border-b-[2.5px] border-black"
                  : ""
              }`}
              onMouseEnter={() => setShowIntro(true)}
              onMouseLeave={() => setShowIntro(false)}
            >
              <p>{t("Our")}</p>
              <AnimatePresence>
                {showIntro && (
                  <motion.div
                    className="absolute w-[240px] bg-white shadow-md rounded-md p-4 z-50 pl-10 max-lg:pl-4 max-xl:pl-6 max-lg:w-[180px] max-xl:w-[180px] "
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex flex-col font-mainR text-[#E1E1E1] text-[18px] space-y-3 max-md:text-[12px] max-lg:text-[12px] max-xl:text-[14px] max-2xl:text-[16px]">
                      <button className="text-left hover:text-black">
                        <Link href={`/${locale}/our/introduction`}>
                          {tOur("Introduction")}
                        </Link>
                      </button>
                      <button className="text-left hover:text-black">
                        <Link href={`/${locale}/our/certificate`}>
                          {tOur("QualityCertificate")}
                        </Link>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Product button with dropdown */}
            <button
              className={`hover:text-[#639F7A] relative ${
                pathname.startsWith(`/${locale}/product`)
                  ? "border-b-[2.5px] border-black"
                  : ""
              }`}
              onMouseEnter={() => setShowProducts(true)}
              onMouseLeave={() => setShowProducts(false)}
            >
              <p>{t("Product")}</p>
              <AnimatePresence>
                {showProducts && (
                  <motion.div
                    className="absolute w-[240px] bg-white shadow-md rounded-md p-4 z-50 pl-10 max-lg:pl-4 max-xl:pl-6 max-lg:w-[180px] max-xl:w-[180px] "
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex flex-col font-mainR text-[#E1E1E1] text-[18px] space-y-3 max-md:text-[12px] max-lg:text-[12px] max-xl:text-[14px] max-2xl:text-[16px]">
                      <button className="text-left hover:text-black">
                        <Link href={`/${locale}/product/coconut-charcoal-cube`}>
                          {tProduct("ThanVuong")}
                        </Link>
                      </button>
                      <button className="text-left hover:text-black">
                        <Link
                          href={`/${locale}/product/coconut-charcoal-stick`}
                        >
                          {tProduct("ThanQue")}
                        </Link>
                      </button>
                      <button className="text-left hover:text-black">
                        <Link
                          href={`/${locale}/product/coconut-charcoal-hexagonal`}
                        >
                          {tProduct("ThanLG")}
                        </Link>
                      </button>
                      <button className="text-left hover:text-black">
                        <Link href={`/${locale}/product/coconut-charcoal-bbq`}>
                          {tProduct("ThanBBQ")}
                        </Link>
                      </button>
                      <button className="text-left hover:text-black">
                        <Link
                          href={`/${locale}/product/coconut-charcoal-material`}
                        >
                          {tProduct("ThanNL")}
                        </Link>
                      </button>
                      <button className="text-left hover:text-black">
                        <Link href={`/${locale}/product/charcoal-nacre`}>
                          {tProduct("ThanXC")}
                        </Link>
                      </button>
                      <button className="text-left hover:text-black">
                        <Link href={`/${locale}/product/charcoal-cafe`}>
                          {tProduct("ThanCF")}
                        </Link>
                      </button>
                      <button className="text-left hover:text-black">
                        <Link href={`/${locale}/product/cashew`}>
                          {tProduct("HatDieu")}
                        </Link>
                      </button>
                      <button className="text-left hover:text-black">
                        <Link href={`/${locale}/product/coconut`}>
                          {tProduct("Dua")}
                        </Link>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <button
              className={`hover:text-[#639F7A] ${
                pathname.startsWith(`/${locale}/news`)
                  ? "border-b-[2.5px] border-black"
                  : ""
              }`}
              onMouseEnter={() => setShowNews(true)}
              onMouseLeave={() => setShowNews(false)}
            >
              <p>{t("News")}</p>
              <AnimatePresence>
                {showNews && (
                  <motion.div
                    className="absolute w-[240px] bg-white shadow-md rounded-md p-4 z-50 pl-10 max-lg:pl-4 max-xl:pl-6 max-lg:w-[180px] max-xl:w-[180px] "
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex flex-col font-mainR text-[#E1E1E1] text-[18px] space-y-3 max-md:text-[12px] max-lg:text-[12px] max-xl:text-[14px] max-2xl:text-[16px]">
                      <button className="text-left hover:text-black">
                        <Link href={`/${locale}/news`}>{tNews("News")}</Link>
                      </button>
                      <button className="text-left hover:text-black">
                        <Link href={`/${locale}/photo`}>{tNews("Photo")}</Link>
                      </button>
                      <button className="text-left hover:text-black">
                        <Link href={`/${locale}/video`}>{tNews("Video")}</Link>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {locale === "en" ? (
              ""
            ) : (
              <button
                className={`hover:text-[#639F7A] ${
                  pathname === `/${locale}/recruitment`
                    ? "border-b-[2.5px] border-black"
                    : ""
                }`}
              >
                <Link href={`/${locale}/recruitment`}>{t("Recruitment")}</Link>
              </button>
            )}
            <button
              className={`hover:text-[#639F7A] ${
                pathname === `/${locale}/contact`
                  ? "border-b-[2.5px] border-black"
                  : ""
              }`}
            >
              <Link href={`/${locale}/contact`}>{t("Contact")}</Link>
            </button>
          </div>
        </div>

        {/* Mobile */}
        <Menu locale={locale} />
      </div>
    </div>
  );
};

export default Navbar;

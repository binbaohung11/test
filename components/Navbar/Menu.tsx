import Image from "next/image";
import React, { useState } from "react";
import icon_menu from "../../assets/icons_navbar/icon_menu_main.png";
import logo from "../../assets/image/home/image_logo.png";
import arrow from "../../assets/icons_navbar/down-arrow.png";
import { useTranslations } from "next-intl";

const Menu = () => {
  const t = useTranslations("Menu");
  const tOur = useTranslations("Menu-Our");
  const tProduct = useTranslations("Menu-Product");
  const tLibrary = useTranslations("Menu-Library");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOurOpen, setIsSubmenuOurOpen] = useState(false);
  const [isSubmenuProductOpen, setIsSubmenuProductOpen] = useState(false);
  const [isSubmenuLibraryOpen, setIsSubmenuLibraryOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenuOur = () => {
    setIsSubmenuOurOpen(!isSubmenuOurOpen);
  };

  const toggleSubmenuProduct = () => {
    setIsSubmenuProductOpen(!isSubmenuProductOpen);
  };

  const toggleSubmenuLibrary = () => {
    setIsSubmenuLibraryOpen(!isSubmenuLibraryOpen);
  };

  return (
    <div className="hidden max-md:block relative w-full border">
      {/* Menu Icon */}
      <div className="absolute top-1.5 -left-6 ">
        <Image
          src={icon_menu}
          alt="icon_menu"
          onClick={toggleMenu}
          className="cursor-pointer"
        />
      </div>

      {/* Centered Logo and Input */}
      <div className="w-full flex items-center justify-center">
        <div className="w-[25%]">
          <Image src={logo} alt="logo" className="w-[36px] h-[36px]" />
        </div>
        <div className="w-[70%] text-right">
          <input
            type="text"
            className="bg-[#D9D9D9] py-1 px-5 rounded-[15px]"
          />
        </div>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute -left-12 w-[220px] bg-white shadow-lg rounded-r-[10px] p-4 text-[14px] font-mainB">
          <ul>
            <li className="py-2 cursor-pointer px-6">{t("Home")}</li>
            <li className="py-2 cursor-pointer px-6 space-y-2">
              <div
                onClick={toggleSubmenuOur}
                className="flex items-center space-x-3"
              >
                <p>{t("Our")}</p>
                <div>
                  <Image src={arrow} alt="arrow" />
                </div>
              </div>
              {isSubmenuOurOpen && (
                <div className="text-[13px] font-mainR text-[#969696] space-y-1">
                  <p className="hover:text-black">{tOur("Introduction")}</p>
                  <p className="hover:text-black">
                    {tOur("QualityCertificate")}
                  </p>
                </div>
              )}
            </li>
            <li className="py-2 cursor-pointer px-6 space-y-2">
              <div
                onClick={toggleSubmenuProduct}
                className="flex items-center space-x-3"
              >
                <p>{t("Product")}</p>
                <div>
                  <Image src={arrow} alt="arrow" />
                </div>
              </div>
              {isSubmenuProductOpen && (
                <div className="text-[13px] font-mainR text-[#969696] space-y-1">
                  <p className="hover:text-black">{tProduct("ThanVuong")}</p>
                  <p className="hover:text-black">{tProduct("ThanQue")}</p>
                  <p className="hover:text-black">{tProduct("ThanLG")}</p>
                  <p className="hover:text-black">{tProduct("ThanBBQ")}</p>
                  <p className="hover:text-black">{tProduct("ThanNL")}</p>
                  <p className="hover:text-black">{tProduct("HatDieu")}</p>
                  <p className="hover:text-black">{tProduct("Coconut")}</p>
                </div>
              )}
            </li>
            <li className="py-2 cursor-pointer px-6 space-y-2">
              <div
                onClick={toggleSubmenuLibrary}
                className="flex items-center space-x-3"
              >
                <p>{t("Library")}</p>
                <div>
                  <Image src={arrow} alt="arrow" />
                </div>
              </div>
              {isSubmenuLibraryOpen && (
                <div className="text-[13px] font-mainR text-[#969696] ">
                  <p className="hover:text-black">{tLibrary("Image")}</p>
                  <p className="hover:text-black">{tLibrary("Video")}</p>
                </div>
              )}
            </li>
            <li className="py-2 cursor-pointer px-6">{t("News")}</li>
            <li className="py-2 cursor-pointer px-6">{t("Recruitment")}</li>
            <li className="py-2 cursor-pointer px-6">{t("Contact")}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;

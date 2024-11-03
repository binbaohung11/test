import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import icon_menu from "../../assets/icons_navbar/icon_menu_main.png";
import logo from "../../assets/icons_navbar/highlandbp-logo-iso.png";
import arrow from "../../assets/icons_navbar/down-arrow.png";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Menu = ({ locale }: { locale: string }) => {
  const t = useTranslations("Menu");
  const tOur = useTranslations("Menu-Our");
  const tProduct = useTranslations("Menu-Product");
  const tLibrary = useTranslations("Menu-Library");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOurOpen, setIsSubmenuOurOpen] = useState(false);
  const [isSubmenuProductOpen, setIsSubmenuProductOpen] = useState(false);
  const [isSubmenuLibraryOpen, setIsSubmenuLibraryOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null); // Specify the type for the ref

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        setIsSubmenuOurOpen(false);
        setIsSubmenuProductOpen(false);
        setIsSubmenuLibraryOpen(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="hidden max-md:block relative w-full">
      {/* Menu Icon */}
      <div className="absolute top-1.5 -left-6">
        <Image
          src={icon_menu}
          alt="icon_menu"
          onClick={toggleMenu}
          className="cursor-pointer"
        />
      </div>

      {/* Centered Logo and Input */}
      <div className="w-full flex items-center justify-between">
        <div className="w-[35%]">
          <Image src={logo} alt="logo" className="" />
        </div>
        <div className="w-[65%] text-right">
          <input
            type="text"
            className="bg-[#D9D9D9] py-1 px-5 rounded-[15px] w-[90%]"
          />
        </div>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute -left-12 w-[220px] bg-white shadow-lg rounded-r-[10px] p-4 text-[14px] font-mainB"
        >
          <ul>
            <li onClick={toggleMenu} className="py-2 cursor-pointer px-6">
              <Link href={`/${locale}`}>{t("Home")}</Link>
            </li>
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
                  <p onClick={toggleMenu} className="hover:text-black">
                    <Link href={`/${locale}/our/introduction`}>
                      {tOur("Introduction")}
                    </Link>
                  </p>
                  <p className="hover:text-black">
                    <Link
                      onClick={toggleMenu}
                      href={`/${locale}/our/certificate`}
                    >
                      {tOur("QualityCertificate")}{" "}
                    </Link>
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
                  <p className="hover:text-black">
                    <Link
                      onClick={toggleMenu}
                      href={`/${locale}/product/coconut-charcoal-cube`}
                    >
                      {tProduct("ThanVuong")}
                    </Link>
                  </p>
                  <p className="hover:text-black">
                    <Link
                      onClick={toggleMenu}
                      href={`/${locale}/product/coconut-charcoal-stick`}
                    >
                      {tProduct("ThanQue")}
                    </Link>
                  </p>
                  <p className="hover:text-black">
                    <Link
                      onClick={toggleMenu}
                      href={`/${locale}/product/coconut-charcoal-hexagonal`}
                    >
                      {tProduct("ThanLG")}
                    </Link>
                  </p>
                  <p className="hover:text-black">
                    <Link
                      onClick={toggleMenu}
                      href={`/${locale}/product/coconut-charcoal-bbq`}
                    >
                      {tProduct("ThanBBQ")}
                    </Link>
                  </p>
                  <p className="hover:text-black">
                    <Link
                      onClick={toggleMenu}
                      href={`/${locale}/product/coconut-charcoal-material`}
                    >
                      {tProduct("ThanNL")}{" "}
                    </Link>
                  </p>
                  <p className="hover:text-black">
                    <Link
                      onClick={toggleMenu}
                      href={`/${locale}/product/charcoal-nacre`}
                    >
                      {tProduct("ThanXC")}{" "}
                    </Link>
                  </p>
                  <p className="hover:text-black">
                    <Link
                      onClick={toggleMenu}
                      href={`/${locale}/product/charcoal-cafe`}
                    >
                      {tProduct("ThanCF")}{" "}
                    </Link>
                  </p>
                  <p className="hover:text-black">
                    <Link
                      onClick={toggleMenu}
                      href={`/${locale}/product/cashew`}
                    >
                      {tProduct("HatDieu")}
                    </Link>
                  </p>
                  <p className="hover:text-black">
                    <Link
                      onClick={toggleMenu}
                      href={`/${locale}/product/coconut`}
                    >
                      {tProduct("Coconut")}
                    </Link>
                  </p>
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
                <div className="text-[13px] font-mainR text-[#969696]">
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

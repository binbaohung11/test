"use client";
import Image from "next/image";
import React from "react";
import phone from "../../assets/icon_header/icon_phone.png";
import mail from "../../assets/icon_header/icon_email.png";
import search from "../../assets/icon_header/icon_search.png";
import flag_vn from "../../assets/icon_header/icon_vn.png";
import flag_uk from "../../assets/icon_header/icon_uk.png";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (newLocale: string) => {
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };

  return (
    <div className="w-full">
      <div className="flex">
        <div className="w-[47%] text-[18px] bg-[#39444D] py-5 flex justify-center items-center text-[#FFFFFF] space-x-10 max-md:space-x-2 max-xl:space-x-5 max-md:w-[75%] max-md:text-[10px] max-lg:text-[12px] max-xl:text-[14px] max-2xl:text-[16px] max-xl:py-2 max-2xl:py-3">
          <div className="flex items-center space-x-2 max-md:space-x-0 max-lg:space-x-1">
            <Image
              src={phone}
              alt="icon_phone"
              className="w-[31px] max-md:w-[10px] max-lg:w-[15px] max-xl:w-[20px] max-2xl:w-[25px]"
            />
            <a href="tel:+84915430543">+84 915 430 543</a>
          </div>
          <div className="flex items-center space-x-2 max-md:space-x-0 max-lg:space-x-1">
            <Image
              src={mail}
              alt="icon_mail"
              className="w-[31px] max-md:w-[10px] max-lg:w-[15px] max-xl:w-[20px] max-2xl:w-[25px]"
            />
            <a href="mailto:CAONGUYENBP.COCO@GMAIL.COM">
              CAONGUYENBP.COCO@GMAIL.COM
            </a>
          </div>
        </div>

        <div className="w-[53%] bg-[#969696] flex justify-center items-center text-[#FFFFFF] space-x-10 max-md:w-[25%] max-md:space-x-0">
          <div className="relative flex items-center space-x-2 max-md:hidden">
            <input
              className="py-2 px-5 text-[18px] text-black w-[440px] rounded-[34px] max-md:w-[200px] max-lg:w-[200px] max-xl:w-[250px] max-2xl:w-[300px] max-xl:py-0 max-2xl:py-1 max-md:text-[10px] max-lg:text-[12px] max-xl:text-[14px] max-2xl:text-[16px]"
              placeholder="search" // Optional: Add a placeholder from translations
            />
            <div className="absolute right-5 max-xl:right-2 max-2xl:right-3">
              <Image
                src={search}
                alt="icon_search"
                className="text-black w-[18px] max-md:w-[10px] max-lg:w-[12px] max-xl:w-[12px] max-2xl:w-[16px]"
              />
            </div>
          </div>
          <div className="flex space-x-2">
            <button onClick={() => handleLanguageChange("en")}>
              <Image src={flag_uk} alt="flag_uk" />
            </button>
            <button onClick={() => handleLanguageChange("vn")}>
              <Image src={flag_vn} alt="flag_vn" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;



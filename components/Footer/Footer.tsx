import React from "react";
import tron from "../../assets/image/contact/highlandbp-logo.png";
import phone from "../../assets/image/footer/phone-icon.png";
import mail from "../../assets/image/footer/mail-icon.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import fb from "../../assets/image/footer/fb-icon.png";
import zalo from "../../assets/image/footer/zalo-icon.png";
import p from "../../assets/image/contact/snap-image.png";
import {
  fb_help,
  mail_help,
  map_help,
  phone_help,
  snap_help,
  zalo_help,
} from "@/lib/helpFunc";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <>
      {/* Mobile */}
      <div className="bg-[#39444D] text-white w-full px-5 md:px-10 lg:px-20 xl:px-32  py-10 lg:py-20 space-y-6 text-[12px] font-mainR md:hidden">
        <div className="w-full flex">
          <div className="w-[20%] flex justify-center items-center">
            <Image src={tron} alt="tron" className="w-[43px]" />
          </div>
          <div className="w-[60%] text-[14px] font-mainB">{t("Title")}</div>
        </div>
        <div>
          <p className="text-[14px] font-mainB">{t("Address")}</p>
          <a
            href={map_help}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {t("Address1")}
          </a>
        </div>
        <div>
          <p className="text-[14px] font-mainB">{t("Contact")}</p>
          <div className="flex items-center space-x-2">
            <Image src={phone} alt="phone" className="w-[12px]" />
            <a href={phone_help} className="hover:underline">
              +84 915 430 543
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Image src={mail} alt="mail" className="w-[12px]" />
            <a href={mail_help} className="hover:underline">
              CAONGUYENBP.COCO@GMAIL.COM
            </a>
          </div>
        </div>
        <div className="flex ">
          <div className="w-[50%]">
            <p className="text-[14px] font-mainB">{t("Recruitment")}</p>
            <p className="text-[14px] font-mainB">{t("News")}</p>
          </div>
          <div className="w-[50%] space-y-2">
            <div className="text-[14px] font-mainB">{t("Connect")}</div>
            <div className="flex space-x-3">
              <a href={fb_help} target="_blank" rel="noopener noreferrer">
                <Image src={fb} alt="Facebook" className="w-[25px]" />
              </a>
              <a href={zalo_help} target="_blank" rel="noopener noreferrer">
                <Image src={zalo} alt="Zalo" className="w-[25px]" />
              </a>
              <a href={snap_help} target="_blank" rel="noopener noreferrer">
                <Image src={p} alt="Printer" className="w-[25px]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* PC */}
      <div className="bg-[#39444D] text-white w-full px-5 md:px-10 lg:px-20 xl:px-32  py-10 lg:py-16 space-y-6 text-[12px] font-mainR hidden md:block">
        <div className="w-full flex">
          <div className="w-[20%] flex justify-center items-center">
            <Image
              src={tron}
              alt="tron"
              className="w-[43px] md:w-[60px] lg:w-[80px] xl:w-[120px]"
            />
          </div>
          <div className="w-[60%] text-[14px] md:text-[20px] lg:text-[28px] xl:text-[34px] font-mainB lg:w-[50%] ">
            {t("Title")}
          </div>
        </div>
        <div className="flex w-full">
          <div className="w-[50%]">
            <p className="text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-mainB">
              {t("Address")}
            </p>
            <a
              href={map_help}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] md:text-[14px] lg:text-[18px] xl:text-[20px] hover:underline"
            >
              {t("Address1")}
            </a>
          </div>
          <div className="w-[50%]">
            <p className="text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-mainB">
              {t("Contact")}
            </p>
            <div className="flex items-center space-x-2">
              <Image src={phone} alt="phone" className="w-[12px]" />
              <a
                href={phone_help}
                className="text-[12px] md:text-[14px] lg:text-[18px] xl:text-[20px] hover:underline"
              >
                +84 915 430 543
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Image src={mail} alt="mail" className="w-[12px]" />
              <a
                href={mail_help}
                className="text-[12px] md:text-[14px] lg:text-[18px] xl:text-[20px] hover:underline"
              >
                CAONGUYENBP.COCO@GMAIL.COM
              </a>
            </div>
          </div>
        </div>
        <div className="flex ">
          <div className="w-[50%]">
            <p className="text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-mainB">
              {t("Recruitment")}
            </p>
            <p className="text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-mainB">
              {t("News")}
            </p>
          </div>
          <div className="w-[50%] space-y-2">
            <div className="text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-mainB">
              {t("Connect")}
            </div>
            <div className="flex space-x-3">
              <a href={fb_help} target="_blank" rel="noopener noreferrer">
                <Image
                  src={fb}
                  alt="Facebook"
                  className="w-[25px] md:w-[35px] lg:w-[45px] xl:w-[55px]"
                />
              </a>
              <a href={zalo_help} target="_blank" rel="noopener noreferrer">
                <Image
                  src={zalo}
                  alt="Zalo"
                  className="w-[25px] md:w-[35px] lg:w-[45px] xl:w-[55px]"
                />
              </a>
              <a href={snap_help} target="_blank" rel="noopener noreferrer">
                <Image
                  src={p}
                  alt="Printer"
                  className="w-[25px] md:w-[35px] lg:w-[45px] xl:w-[55px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

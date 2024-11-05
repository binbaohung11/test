import { useTranslations } from "next-intl";
import React from "react";
import logo from "../../assets/image/contact/highlandbp-logo.png";
import Image from "next/image";
import address from "../../assets/image/contact/address.png";
import phone from "../../assets/image/contact/phone-contact.png";
import mail from "../../assets/image/contact/mail-contact.png";
import fb from "../../assets/image/contact/fb-icon.png";
import zalo from "../../assets/image/contact/zalo-icon.png";
import snap from "../../assets/image/contact/snap-image.png";
import Form from "./Form";
import { fb_help, mail_help, map_help, phone_help, snap_help, zalo_help } from "@/lib/helpFunc";

const Contact = () => {
  const t = useTranslations("Contact");

  return (
    <div className="py-5 text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-mainR">
      <div className="w-full space-y-3">
        <div className="w-full">
          <h1 className="py-5 lg:py-5 text-[14px] md:text-[24px] lg:text-[34px] xl:text-[40px] font-mainB">
            {t("LH")}
          </h1>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src={logo}
            alt="logo"
            className="w-[100px] md:w-[150px] lg:w-[200px] xl:w-[300px]"
          />
        </div>

        <div className="">
          <p className="text-center">{t("Content")}</p>
        </div>

        <div>
          <div>
            <h2 className="pt-5 lg:pt-5 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[24px] font-mainB">
              {t("TTLL")}
            </h2>
          </div>
          <div className="px-10 py-2 lg:px-20">
            <div className="flex items-center space-x-3">
              <a href={phone_help}>
                <Image
                  src={phone}
                  alt="phone"
                  className="w-[16px] md:w-[18px] lg:w-[20px] xl:w-[26px]"
                />
              </a>
              <a href={phone_help} className="hover:underline">
                0915 430 543
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <a href={mail_help}>
                <Image
                  src={mail}
                  alt="mail"
                  className="w-[16px] md:w-[18px] lg:w-[20px] xl:w-[26px]"
                />
              </a>
              <a href={mail_help} className="hover:underline">
                CAONGUYENBP.COCO@GMAIL.COM
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <a
                href={map_help}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={address}
                  alt="address"
                  className="w-[16px] md:w-[18px] lg:w-[20px] xl:w-[26px]"
                />
              </a>
              <a
                href={map_help}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Ấp Thuận Hòa, Xã Thuận Lợi, Huyện Đồng Phú, Tỉnh Bình Phước
              </a>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h2 className="pt-5 lg:pt-5 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[24px] font-mainB">
              {t("Social")}
            </h2>
          </div>
          <div className="px-10 py-2 lg:px-20 flex space-x-2">
            <a
              href={fb_help}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={fb}
                alt="facebook"
                className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px]"
              />
            </a>
            <a href={zalo_help} target="_blank" rel="noopener noreferrer">
              <Image
                src={zalo}
                alt="zalo"
                className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px]"
              />
            </a>
            <a
              href={snap_help}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={snap}
                alt="snap"
                className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px]"
              />
            </a>
          </div>
        </div>

        <div className="w-full">
          <div className="w-full pb-2 lg:py-5 xl:py-10">
            <h2 className="text-center px-5 md:px-20 lg:px-40 pt-5 lg:pt-5 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[24px] font-mainB">
              {t("Content2")}
            </h2>
          </div>
        </div>

        <div className="flex justify-center">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;

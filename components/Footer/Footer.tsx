import React from "react";
import tron from "../../assets/image/footer/tron-image.png";
import phone from "../../assets/image/footer/phone-icon.png";
import mail from "../../assets/image/footer/mail-icon.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import fb from "../../assets/image/footer/fb-icon.png";
import zalo from "../../assets/image/footer/zalo-icon.png";
import p from "../../assets/image/footer/p-icon.png";

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
          <p>Ấp Thuận Hòa, Xã Thuận Lợi, Huyện Đồng Phú, Tỉnh Bình Phước</p>
        </div>
        <div>
          <p className="text-[14px] font-mainB">{t("Contact")}</p>
          <div className="flex items-center space-x-2">
            <Image src={phone} alt="phone" className="w-[12px]" />
            <a>+84 915 430 543</a>
          </div>
          <div className="flex items-center space-x-2">
            <Image src={mail} alt="mail" className="w-[12px]" />
            <a>CAONGUYENBP.COCO@GMAIL.COM</a>
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
              <Image src={fb} alt="fb" className="w-[25px]" />
              <Image src={zalo} alt="zalo" className="w-[25px]" />
              <Image src={p} alt="p" className="w-[25px]" />
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
          <div className="w-[60%] text-[14px] md:text-[20px] lg:text-[28px] xl:text-[34px] font-mainB">
            {t("Title")}
          </div>
        </div>
        <div className="flex w-full">
          <div className="w-[50%]">
            <p className="text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px]  font-mainB">
              {t("Address")}
            </p>
            <p className="text-[12px] md:text-[14px] lg:text-[18px] xl:text-[20px]">
              Ấp Thuận Hòa, Xã Thuận Lợi, Huyện Đồng Phú, Tỉnh Bình Phước
            </p>
          </div>
          <div className="w-[50%]"> 
            <p className="text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-mainB">
              {t("Contact")}
            </p>
            <div className="flex items-center space-x-2">
              <Image src={phone} alt="phone" className="w-[12px]" />
              <a className="text-[12px] md:text-[14px] lg:text-[18px] xl:text-[20px]">
                +84 915 430 543
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Image src={mail} alt="mail" className="w-[12px] " />
              <a className="text-[12px] md:text-[14px] lg:text-[18px] xl:text-[20px]">
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
              <Image src={fb} alt="fb" className="w-[25px] md:w-[35px] lg:w-[45px] xl:w-[55px]" />
              <Image src={zalo} alt="zalo" className="w-[25px] md:w-[35px] lg:w-[45px] xl:w-[55px]" />
              <Image src={p} alt="p" className="w-[25px] md:w-[35px] lg:w-[45px] xl:w-[55px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

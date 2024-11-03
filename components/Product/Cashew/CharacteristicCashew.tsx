import { useTranslations } from "next-intl";
import React from "react";
import cashew from "../../../assets/image/product/cashew/hat-dieu-rang-muoi-1.jpg";
import Image from "next/image";

const CharacteristicCashew = () => {
  const t = useTranslations("Cashew");
  const data = [
    { id: 1, title: t("Box1"), description: t("Box1Content") },
    { id: 2, title: t("Box2"), description: t("Box2Content") },
    { id: 3, title: t("Box3"), description: t("Box3Content") },
    {
      id: 4,
      title: t("Box4"),
      description: t("Box4Content"),
    },
    { id: 5, title: t("Box5"), description: t("Box5Content") },
  ];
  const data1 = [
    {
      id: 6,
      title: t("Box6"),
      description: t("Box6Content"),
      description2: t("Box6Content2"),
    },
    {
      id: 7,
      title: t("Box7"),
      description: t("Box7Content"),
    },
  ];

  return (
    <>
      {/* mobile */}
      <div className=" w-full py-10 lg:py-20 space-y-4 text-[12px] font-mainR md:hidden">
        <div className="bg-[#EEEEEE] rounded-[10px] w-full py-5 px-5">
          <h2 className="text-[16px] font-mainB text-center py-5">
            {t("Benefit")}
          </h2>
          <div className="scrollbar-hidden overflow-scroll h-[300px]">
            <div className="w-full pt-5 flex items-center justify-center">
              <Image
                src={cashew}
                alt="Cahew"
                className="w-[200px]  lg:w-[300px]"
              />
            </div>
            <div className="py-5 px-5 space-y-5">
              {data?.map((data) => {
                return (
                  <div key={data.id} className="w-full flex ">
                    <div className="w-[10%] flex justify-end items-start">
                      <div className="text-[14px] font-mainB border bg-[#639F7A] px-4 py-2 text-center text-white  rounded-full">
                        {data.id}
                      </div>
                    </div>
                    <div className="w-[90%] px-3">
                      <div className="text-[14px] font-mainB text-[#639F7A]">
                        {data.title}
                      </div>
                      <div className="text-[12px]">{data.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className=" px-5 space-y-5">
              {data1?.map((data) => {
                return (
                  <div key={data.id} className="w-full flex ">
                    <div className="w-[10%] flex justify-end items-start">
                      <div className="text-[14px] font-mainB border bg-[#639F7A] px-4 py-2 text-center text-white  rounded-full">
                        {data.id}
                      </div>
                    </div>
                    <div className="w-[90%] px-3">
                      <div className="text-[14px] font-mainB text-[#639F7A]">
                        {data.title}
                      </div>
                      <div className="text-[12px]">{data.description}</div>
                      {data.description2 ? (
                        <div className="text-[12px]">{data.description2}</div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* PC */}
      <div className=" w-full py-10 lg:py-20 space-y-4 text-[12px] font-mainR hidden md:block">
        <div className="bg-[#EEEEEE] rounded-[10px] w-full py-5 px-5">
          <h2 className="text-[16px] font-mainB text-center md:text-[24px] py-10 lg:text-[34px] xl:text-[40px]">
            {t("Benefit")}
          </h2>
          <div className="py-5 px-5 w-full flex">
            <div className="space-y-6 w-[50%]">
              {data?.map((data) => {
                return (
                  <div key={data.id} className="w-full flex ">
                    <div className="w-[10%] flex justify-end items-start">
                      <div className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-mainB border bg-[#639F7A] px-4 py-2 text-center text-white  rounded-full">
                        {data.id}
                      </div>
                    </div>
                    <div className="w-[90%] px-3">
                      <div className="text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-mainB text-[#639F7A]">
                        {data.title}
                      </div>
                      <div className="text-[12px] md:text-[14px] lg:text-[18px] xl:text-[20px]">
                        {data.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="space-y-6 w-[50%]">
              {data1?.map((data) => {
                return (
                  <div key={data.id} className="w-full flex ">
                    <div className="w-[10%] flex justify-end items-start">
                      <div className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  font-mainB border bg-[#639F7A] px-4 py-2 text-center text-white  rounded-full">
                        {data.id}
                      </div>
                    </div>
                    <div className="w-[90%] px-3">
                      <div className="text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-mainB text-[#639F7A]">
                        {data.title}
                      </div>
                      <div className="text-[12px] md:text-[14px] lg:text-[18px] xl:text-[20px]">
                        {data.description}
                      </div>
                      {data.description2 ? (
                        <div className="text-[12px] md:text-[14px] lg:text-[18px] xl:text-[20px]">
                          {data.description2}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                );
              })}
              <div className="w-full flex items-center justify-center">
                <Image
                  src={cashew}
                  alt="Cahew"
                  className="w-[250px]  lg:w-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacteristicCashew;

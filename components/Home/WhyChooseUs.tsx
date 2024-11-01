import { useTranslations } from "next-intl";
import React from "react";

const WhyChooseUs = () => {
  const t = useTranslations("Home");
  const data = [
    { id: 1, title: t("SmellFree"), description: t("SmellFreeContent") },
    { id: 2, title: t("SmokeFree"), description: t("SmokeFreeContent") },
    { id: 3, title: t("Temperature"), description: t("TemperatureContent") },
    {
      id: 4,
      title: t("Concentration"),
      description: t("ConcentrationContent"),
    },
    { id: 5, title: t("BurnTime"), description: t("BurnTimeContent") },
  ];
  const data1 = [
    {
      id: 6,
      title: t("HealthProtect"),
      description: t("HealthProtectContent"),
    },
    {
      id: 7,
      title: t("EnvironmentFriendly"),
      description: t("EnvironmentFriendlyContent"),
    },
  ];

  console.log(data);

  return (
    <>
      {/* mobile */}
      <div className="px-5 md:px-10 lg:px-20 xl:px-32 w-full py-10 lg:py-20 space-y-4 text-[12px] font-mainR md:hidden">
        <div className="bg-[#EEEEEE] rounded-[10px] w-full py-5 px-5">
          <h2 className="text-[16px] font-mainB text-center">
            {t("WhyChooseUs")}
          </h2>
          <div className="scrollbar-hidden overflow-scroll h-[300px]">
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
                      <div className="text-[14px] font-mainB">{data.title}</div>
                      <div className="text-[12px]">{data.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-full flex items-center justify-center">
              <iframe
                className="w-[80%]"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* PC */}
      <div className="px-5 md:px-10 lg:px-20 xl:px-32 w-full py-10 lg:py-20 space-y-4 text-[12px] font-mainR hidden md:block">
        <div className="bg-[#EEEEEE] rounded-[10px] w-full py-5 px-5">
          <h2 className="text-[16px] font-mainB text-center md:text-[24px] lg:text-[34px] xl:text-[40px]">
            {t("WhyChooseUs")}
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
                      <div className="text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-mainB">
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
                      <div className="text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-mainB">
                        {data.title}
                      </div>
                      <div className="text-[12px] md:text-[14px] lg:text-[18px] xl:text-[20px]">
                        {data.description}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="w-full flex items-center justify-center">
                <iframe
                  className="w-[80%]"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;

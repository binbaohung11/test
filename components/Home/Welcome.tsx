import Image from "next/image";
import Certification from "../../assets/image/home/certification.png";
import { useTranslations } from "next-intl";

export default function Welcome() {
  const t = useTranslations("Home");

  return (
    <div className="px-5 md:px-10 lg:px-20 xl:px-32 w-full flex  py-10 lg:py-20">
      <div className="w-[50%] flex flex-col justify-center ">
        <div className="-space-y-1 md:-space-y-2 lg:-space-y-5">
          <p className="text-[14px] md:text-[24px] lg:text-[34px] xl:text-[40px] font-mainB">
            {t("Title")}
          </p>
          <p className="text-[20px] md:text-[34px] lg:text-[50px] xl:text-[64px] font-mainB text-[#639F7A]">
            HIGHLANDBP
          </p>
        </div>
        <p className="text-[12px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-mainR">
          {t("Content")}
        </p>
        <div className="text-left mt-2 lg:mt-5">
          <button className="text-[11px] md:text-[16px] lg:text-[18px] xl:text-[20px] px-3 py-1.5 font-mainB border border-[#969696] rounded-full">
            {t("SeeMore")}
          </button>
        </div>
      </div>
      <div className="w-[50%] flex items-center justify-center">
        <Image
          src={Certification}
          alt="certification"
          className="rotate-15 w-[110px] md:w-[190px] lg:w-[250px] xl:w-[340px]"
        />
      </div>
    </div>
  );
}

import { useTranslations } from "next-intl";
import structure from "../../../assets/image/our/introduction/structure-image.png";
import Image from "next/image";

const Structure = () => {
  const t = useTranslations("Our-Intro");

  return (
    <div className="w-full pt-10 lg:pt-20 lg:flex">
      <div className=" w-full lg:w-[50%]">
        <h2 className="py-2 lg:py-5 text-[14px] md:text-[24px] lg:text-[34px] xl:text-[40px] font-mainB">
          {t("Structure")}
        </h2>
        <div className="text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-mainR">
          <div className="space-y-2 ">
            <p>{t("Structure1")}</p>
            <p>{t("Structure2")}</p>
            <p>{t("Structure3")}</p>
          </div>
        </div>
      </div>
      <div className="lg:w-[50%]">
        <Image src={structure} alt="structure" />
      </div>
    </div>
  );
};

export default Structure;

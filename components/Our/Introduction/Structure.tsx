import { useTranslations } from "next-intl";
import product3 from "../../../assets/image/our/introduction/product-image-3.png";

const Structure = () => {
  const t = useTranslations("Our-Intro");

  return (
    <div className="pt-10 lg:pt-20">
      <h2 className="py-2 lg:py-5 text-[14px] md:text-[24px] lg:text-[34px] xl:text-[40px] font-mainB">
        {t("Structure")}
      </h2>
      <div className="text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-mainR">
        <div className="space-y-2 md:w-[60%]">
          <p>{t("Structure1")}</p>
          <p>{t("Structure2")}</p>
          <p>{t("Structure3")}</p>
        </div>
      </div>
    </div>
  );
};

export default Structure;

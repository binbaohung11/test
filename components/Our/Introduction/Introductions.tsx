import {useTranslations} from "next-intl";
import intro1 from "../../../assets/image/our/introduction/intro-image-1.png";
import intro2 from "../../../assets/image/our/introduction/intro-image-2.jpg";
import intro3 from "../../../assets/image/our/introduction/intro-image-3.jpg";
import Image from "next/image";

const Introductions = () => {
    const t = useTranslations("Our-Intro");

    return (
        <div>
            <h1 className="py-2 lg:py-5 text-[14px] md:text-[24px] lg:text-[34px] xl:text-[40px] font-mainB">
                {t("CompanyProfile")}
            </h1>

            <div className="text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-mainR">
                <div className="space-y-2">
                    <p className="">
                        <span className="font-mainB">{t("IntroBold")}</span>
                        <span>{t("Intro1")}</span>
                    </p>
                    <p>{t("Intro2")}</p>
                    <p>{t("Intro3")}</p>
                    <p>{t("Intro4")}</p>
                </div>
            </div>

            <div
                className="w-full text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-mainR mt-5 md:flex md:space-x-3 lg:space-x-10">
                <div className="flex items-center justify-center w-full md:w-[50%]">
                    <Image
                        src={intro1}
                        alt="intro 1"
                        className=" w-[340px] md:w-[440px] lg:w-[540px] xl:w-[640px]"
                    />
                </div>
                <div className="w-full md:w-[50%] font-mainB mt-5">
                    <h2>{t("Intro5Bold")}</h2>
                    <ul className="list-disc pl-5">
                        {/* Add 'pl-5' for padding left */}
                        <li>{t("Intro6Bold")}</li>
                        <li>{t("Intro7Bold")}</li>
                        <li>{t("Intro8Bold")}</li>
                        <li>{t("Intro9Bold")}</li>
                        <li>{t("Intro10Bold")}</li>
                        <li>{t("Intro11Bold")}</li>
                        <li>{t("Intro12Bold")}</li>
                        <li>{t("Intro13Bold")}</li>
                    </ul>
                </div>
            </div>

            <div className="w-full text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-mainR py-5 lg:py-10">
                <p>{t("Intro14")}</p>
                <p>{t("Intro15")}</p>
            </div>

            <div className="w-full space-y-5 md:space-y-0 md:flex md:space-x-5 md:items-center md:justify-center ">
                <div className="w-full md:w-[50%] md:h-[400px]  overflow-hidden rounded-md">
                    <Image
                        src={intro2}
                        alt="intro2"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-full md:w-[50%] md:h-[400px]  overflow-hidden boder rounded-md">
                    <Image
                        src={intro3}
                        alt="intro3"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Introductions;

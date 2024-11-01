"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";
import recycle from "../../assets/image/home/recycle.png";
import safely from "../../assets/image/home/safely.png";
import product from "../../assets/image/home/product.png";
import Image from "next/image";

const Introduction = () => {
  const t = useTranslations("Home");

  // Framer Motion animation controls for each box
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controlss1 = useAnimation();
  const controlss2 = useAnimation();
  const controlss3 = useAnimation();

  // Setting up in-view hooks for each box
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: ref1s, inView: inView1s } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref2s, inView: inView2s } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref3s, inView: inView3s } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Animation effect for each box with delay
  useEffect(() => {
    if (inView1) controls1.start({ opacity: 1, y: 0 });
    if (inView2) controls2.start({ opacity: 1, y: 0 });
    if (inView3) controls3.start({ opacity: 1, y: 0 });

    if (inView1s) controlss1.start({ opacity: 1, y: 0 });
    if (inView2s) controlss2.start({ opacity: 1, y: 0 });
    if (inView3s) controlss3.start({ opacity: 1, y: 0 });
  }, [
    controls1,
    inView1,
    controls2,
    inView2,
    controls3,
    inView3,
    controlss1,
    inView1s,
    controlss2,
    inView2s,
    controlss3,
    inView3s,
  ]);

  // Initial hidden state for animation
  const initialAnimationState = { opacity: 0, y: 50 };

  return (
    <>
      {/* Mobile */}
      <div className="px-5 md:px-10 lg:px-20 xl:px-32 w-full flex py-10 lg:py-20 md:hidden">
        <div className="w-full flex flex-col text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-mainR space-y-5">
          {/* Box 1 */}
          <motion.div
            ref={ref1}
            initial={initialAnimationState}
            animate={controls1}
            transition={{ duration: 0.6, delay: 0 }}
            className="w-full border bg-[#EEEEEE] rounded-[10px] flex px-3 py-3"
          >
            <div className="w-[85%]">
              <p className="text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-mainB">
                {t("Box1")}
              </p>
              <p>{t("Box1Content")}</p>
            </div>
            <div className="w-[15%] flex justify-end">
              <Image
                src={recycle}
                alt="recycle"
                className="w-[25px] h-[25px]"
              />
            </div>
          </motion.div>

          {/* Box 2 */}
          <motion.div
            ref={ref2}
            initial={initialAnimationState}
            animate={controls2}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full border bg-[#EEEEEE] rounded-[10px] flex px-3 py-3"
          >
            <div className="w-[85%]">
              <p className="text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-mainB">
                {t("Box2")}
              </p>
              <p>{t("Box2Content")}</p>
            </div>
            <div className="w-[15%] flex justify-end">
              <Image src={safely} alt="safely" className="w-[25px] h-[25px]" />
            </div>
          </motion.div>

          {/* Box 3 */}
          <motion.div
            ref={ref3}
            initial={initialAnimationState}
            animate={controls3}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full border bg-[#EEEEEE] rounded-[10px] flex px-3 py-3"
          >
            <div className="w-[85%]">
              <p className="text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-mainB">
                {t("Box3")}
              </p>
              <p>{t("Box3Content")}</p>
            </div>
            <div className="w-[15%] flex justify-end">
              <Image
                src={product}
                alt="product"
                className="w-[25px] h-[25px]"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Desktop */}
      <div className="px-5 md:px-10 lg:px-20 xl:px-32 w-full py-10 lg:py-20 hidden md:block">
        <div className="w-full flex flex-row text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-mainR space-x-3">
          {/* Box 1 */}
          <motion.div
            ref={ref1s}
            initial={initialAnimationState}
            animate={controlss1}
            transition={{ duration: 0.6, delay: 0 }}
            className="w-full border bg-[#EEEEEE] rounded-[10px] flex flex-col px-5 py-10 space-y-4"
          >
            <div className="w-full flex justify-end">
              <Image
                src={recycle}
                alt="recycle"
                className="w-[25px] h-[25px] md:w-[35px] lg:w-[45px] xl:w-[53px] md:h-[35px] lg:h-[45px] xl:h-[53px]"
              />
            </div>
            <div className="w-full">
              <p className="text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-mainB">
                {t("Box1")}
              </p>
              <p>{t("Box1Content")}</p>
            </div>
          </motion.div>

          {/* Box 2 */}
          <motion.div
            ref={ref2s}
            initial={initialAnimationState}
            animate={controlss2}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full border bg-[#EEEEEE] rounded-[10px] flex flex-col px-5 py-10 space-y-4"
          >
            <div className="w-full flex justify-end">
              <Image
                src={safely}
                alt="safely"
                className="w-[25px] h-[25px] md:w-[35px] lg:w-[45px] xl:w-[53px] md:h-[35px] lg:h-[45px] xl:h-[53px]"
              />
            </div>
            <div className="w-full">
              <p className="text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-mainB">
                {t("Box2")}
              </p>
              <p>{t("Box2Content")}</p>
            </div>
          </motion.div>

          {/* Box 3 */}
          <motion.div
            ref={ref3s}
            initial={initialAnimationState}
            animate={controlss3}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full border bg-[#EEEEEE] rounded-[10px] flex flex-col px-5 py-10 space-y-4"
          >
            <div className="w-full flex justify-end">
              <Image
                src={product}
                alt="product"
                className="w-[25px] h-[25px] md:w-[35px] lg:w-[45px] xl:w-[53px] md:h-[35px] lg:h-[45px] xl:h-[53px]"
              />
            </div>
            <div className="w-full">
              <p className="text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-mainB">
                {t("Box3")}
              </p>
              <p>{t("Box3Content")}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Introduction;

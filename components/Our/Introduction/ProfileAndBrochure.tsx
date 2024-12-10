"use client";
import { useTranslations } from "next-intl";
import React from "react";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const ProfileAndBrochure = () => {
  const t = useTranslations("Profile");
  return (
    <div className="pt-10 lg:pt-20">
      <div>
        <h2 className="py-2 lg:py-5 text-[14px] md:text-[24px] lg:text-[34px] xl:text-[40px] font-mainB">
          {t("DetailBROCHURE")}
        </h2>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          {/* Bọc Viewer trong một div để kiểm soát kích thước */}
          <div
            style={{ margin: "0 auto" }}
            className="h-screen w-full md:w-[70%]"
          >
            <Viewer fileUrl="/BROCHURE.pdf" />
          </div>
        </Worker>
      </div>
      <div>
        <h2 className="py-2 mt-10 lg:py-5 text-[14px] md:text-[24px] lg:text-[34px] xl:text-[40px] font-mainB">
          {t("DetailPROFILE")}
        </h2>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          {/* Bọc Viewer trong một div để kiểm soát kích thước */}
          <div
            style={{ margin: "0 auto" }}
            className="h-screen w-full md:w-[70%]"
          >
            <Viewer fileUrl="/PROFILE.pdf" />
          </div>
        </Worker>
      </div>
    </div>
  );
};

export default ProfileAndBrochure;

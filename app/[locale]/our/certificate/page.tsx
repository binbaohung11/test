import PathLink from "@/components/Path/PathLink";
import { Metadata } from "next";
import React from "react";
import Certificate from "@/components/Our/Certificate/Certificate";

const seo = {
  title: "Introduction - Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước",
  description:
    "Highland Bp., Ltd was established on February 27, 2019, Business registration certificate number: 3801195652 Binh Phuoc Department of Planning and Investment.",
  openGraph: {
    title: "Introduction - Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước",
    description:
      "Highland Bp., Ltd was established on February 27, 2019, Business registration certificate number: 3801195652 Binh Phuoc Department of Planning and Investment.",
    url: "https://highlandbp.com.vn/introduction",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "https://highlandbp.com.vn/wp-content/uploads/2020/07/than-gao-dua-vuong.jpg",
        width: 810,
        height: 463,
        alt: "Introduction",
        type: "image/jpeg",
      },
    ],
    publishedTime: "2020-07-16T19:54:36+07:00",
  },
  twitter: {
    card: "summary_large_image",
    title: "Introduction - Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước",
    description:
      "Highland Bp., Ltd was established on February 27, 2019, Business registration certificate number: 3801195652 Binh Phuoc Department of Planning and Investment.",
    images:
      "https://highlandbp.com.vn/wp-content/uploads/2020/07/than-gao-dua-vuong.jpg",
  },
};

export const metadata: Metadata = { ...seo };
const page = () => {
  return (
    <>
      <div className="py-5 px-3 md:px-10 lg:px-20 xl:px-40 lg:py-20">
        <PathLink />

        <div>
          <Certificate />
        </div>
      </div>
    </>
  );
};

export default page;

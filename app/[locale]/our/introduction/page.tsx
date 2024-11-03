import Infrastructure from "@/components/Our/Introduction/Infrastructure";
import Introductions from "@/components/Our/Introduction/Introductions";
import Materials from "@/components/Our/Introduction/Materials";
import Product from "@/components/Our/Introduction/Product";
import Structure from "@/components/Our/Introduction/Structure";
import PathLink from "@/components/Path/PathLink";
import { DOMAIN_NAME, IMAGE_INTRO_SEO } from "@/lib/helpFunc";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  // Kiểm tra `params.locale` để xác định canonical URL
  const baseUrl = DOMAIN_NAME;
  const canonicalUrl =
    params.locale === "vn"
      ? `${baseUrl}/vn/our/introduction`
      : params.locale === "en"
      ? `${baseUrl}/en/our/introduction`
      : baseUrl;

  return {
    title: "Giới Thiệu - Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước",
    description:
      "Công ty TNHH XNK Cao Nguyên Bình phước được thành lập ngày 27/02/2019, Giấy đăng ký kinh doanh số: 3801195652 Sở kế hoạch và đầu tư Bình phước cấp. Vốn điều lệ 10,5 tỷ đồng.",
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true, // Cho phép lập chỉ mục
      follow: true, // Cho phép bot theo các liên kết trên trang
      nocache: false, // Không chặn lưu cache của công cụ tìm kiếm
    },
    openGraph: {
      title: "Giới Thiệu - Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước",
      description:
        "Công ty TNHH XNK Cao Nguyên Bình phước được thành lập ngày 27/02/2019, Giấy đăng ký kinh doanh số: 3801195652 Sở kế hoạch và đầu tư Bình phước cấp. Vốn điều lệ 10,5 tỷ đồng.",
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: IMAGE_INTRO_SEO,
          width: 810,
          height: 463,
          alt: "Giới Thiệu",
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Giới Thiệu - Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước",
      description:
        "Công ty TNHH XNK Cao Nguyên Bình phước được thành lập ngày 27/02/2019, Giấy đăng ký kinh doanh số: 3801195652 Sở kế hoạch và đầu tư Bình phước cấp. Vốn điều lệ 10,5 tỷ đồng.",
      images: IMAGE_INTRO_SEO,
    },
  };
}

const Introduction = () => {
  return (
    <>
      <div className="py-5 px-3 md:px-10 lg:px-20 xl:px-40 lg:py-20">
        <PathLink />

        <div>
          <Introductions />
        </div>
        <div>
          <Product />
        </div>
        <div>
          <Structure />
        </div>
        <div>
          <Infrastructure />
        </div>
        <div>
          <Materials />
        </div>
      </div>
    </>
  );
};

export default Introduction;

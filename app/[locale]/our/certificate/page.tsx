import PathLink from "@/components/Path/PathLink";
import { Metadata } from "next";
import React from "react";
import Certificate from "@/components/Our/Certificate/Certificate";
import { DOMAIN_NAME, IMAGE_INTRO_SEO } from "@/lib/helpFunc";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  // Kiểm tra `params.locale` để xác định canonical URL
  const baseUrl = DOMAIN_NAME;
  const canonicalUrl =
    params.locale === "vn"
      ? `${baseUrl}/vn/our/certificate`
      : params.locale === "en"
      ? `${baseUrl}/en/our/certificate`
      : baseUrl;

  return {
    title:
      "Chứng Chỉ Chất Lượng - Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước",
    description:
      "CHÚNG TÔI CAM KẾT - Với khách hàng: Cung cấp, thỏa mãn các nhu cầu của khách hàng với chất lượng sản phẩm và dịch vụ tốt nhất. Là sự lựa chọn đáng tin cậy và hiệu quả cho khách hàng.",
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true, // Cho phép lập chỉ mục
      follow: true, // Cho phép bot theo các liên kết trên trang
      nocache: false, // Không chặn lưu cache của công cụ tìm kiếm
    },
    openGraph: {
      title:
        "Chứng Chỉ Chất Lượng - Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước",
      description:
        "CHÚNG TÔI CAM KẾT - Với khách hàng: Cung cấp, thỏa mãn các nhu cầu của khách hàng với chất lượng sản phẩm và dịch vụ tốt nhất. Là sự lựa chọn đáng tin cậy và hiệu quả cho khách hàng.",
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
      title: "Chứng Chỉ Chất Lượng - Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước",
      description:
        "CHÚNG TÔI CAM KẾT - Với khách hàng: Cung cấp, thỏa mãn các nhu cầu của khách hàng với chất lượng sản phẩm và dịch vụ tốt nhất. Là sự lựa chọn đáng tin cậy và hiệu quả cho khách hàng.",
      images: IMAGE_INTRO_SEO,
    },
  };
}

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

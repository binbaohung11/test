import PathLink from "@/components/Path/PathLink";
import Cashew from "@/components/Product/Cashew/Cashew";
import { DOMAIN_NAME, IMAGE_CASHEW_SEO } from "@/lib/helpFunc";
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
      ? `${baseUrl}/vn/product/cashew`
      : params.locale === "en"
      ? `${baseUrl}/en/product/cashew`
      : baseUrl;

  return {
    title:
      "Hạt Điều Rang Muối - Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước",
    description:
      "Hạt Điều Rang Muối của HighlandBP có xuất xứ từ tỉnh Bình Phước, nơi nổi tiếng cho ra hạt điều thơm ngon, chất lượng nhất cả nước và còn được xuất khẩu ra nước ngoài. Với công nghệ tân tiến, từng hạt điều được phủ một lớp muối giúp gia tăng vị ngọt, bùi béo đặc trưng của hạt, kích thích vị giác tăng thêm sự ngon miệng.",
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
        "Hạt Điều Rang Muối - Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước",
      description:
        "Hạt Điều Rang Muối của HighlandBP có xuất xứ từ tỉnh Bình Phước, nơi nổi tiếng cho ra hạt điều thơm ngon, chất lượng nhất cả nước và còn được xuất khẩu ra nước ngoài. Với công nghệ tân tiến, từng hạt điều được phủ một lớp muối giúp gia tăng vị ngọt, bùi béo đặc trưng của hạt, kích thích vị giác tăng thêm sự ngon miệng.",
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: IMAGE_CASHEW_SEO,
          width: 810,
          height: 463,
          alt: "Trang Chủ",
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Hạt Điều Rang Muối - Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước",
      description:
        "Sản phẩm của công ty chúng tôi không chỉ chất lượng cao mà còn được đóng gói đẹp và bắt mắt.",
      images: IMAGE_CASHEW_SEO,
    },
  };
}


const CashewPage = () => {
  return (
    <div className="py-5 px-3 md:px-10 lg:px-20 xl:px-40 lg:py-20">
      <PathLink />
      <div>
        <Cashew />
      </div>
    </div>
  );
};

export default CashewPage;

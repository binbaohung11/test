import PathLink from "@/components/Path/PathLink";
import Coconut from "@/components/Product/Coconut/Coconut";
import { DOMAIN_NAME, IMAGE_COCONUT_SEO } from "@/lib/helpFunc";
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
      ? `${baseUrl}/vn/product/coconut`
      : params.locale === "en"
      ? `${baseUrl}/en/product/coconut`
      : baseUrl;

  return {
    title:
      "Dừa Trái - Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước",
    description:
      "Dừa Trái của HighlandBP có xuất xứ từ Bến tre (Dừa tiện lợi) được sử dụng như là một loại thức uống ưa thích và được sử dụng rất nhiều trong chế biến thực phẩm, như dùng làm nước màu, ướp thịt kho để tăng thêm hương vị…",
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true, // Cho phép lập chỉ mục
      follow: true, // Cho phép bot theo các liên kết trên trang
      nocache: false, // Không chặn lưu cache của công cụ tìm kiếm
    },
    openGraph: {
      title: "Dừa Trái - Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước",
      description:
        "Dừa Trái của HighlandBP có xuất xứ từ Bến tre (Dừa tiện lợi) được sử dụng như là một loại thức uống ưa thích và được sử dụng rất nhiều trong chế biến thực phẩm, như dùng làm nước màu, ướp thịt kho để tăng thêm hương vị…",
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: IMAGE_COCONUT_SEO,
          width: 810,
          height: 463,
          alt: "Trang Chủ",
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Dừa Trái - Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước",
      description:
        "Dừa Trái của HighlandBP có xuất xứ từ Bến tre (Dừa tiện lợi) được sử dụng như là một loại thức uống ưa thích và được sử dụng rất nhiều trong chế biến thực phẩm, như dùng làm nước màu, ướp thịt kho để tăng thêm hương vị…",
      images: IMAGE_COCONUT_SEO,
    },
  };
}

const CoconutPage = () => {
  return (
    <div className="py-5 px-3 md:px-10 lg:px-20 xl:px-40 lg:py-20">
      <PathLink />
      <div>
        <Coconut />
      </div>
    </div>
  );
};

export default CoconutPage;

import ListNews from "@/components/News/ListNews";
import { DOMAIN_NAME, IMAGE_INTRO_SEO } from "@/lib/helpFunc";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

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
    title: "Tin tức - Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước",
    description: "Tin tức - Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước",
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true, // Cho phép lập chỉ mục
      follow: true, // Cho phép bot theo các liên kết trên trang
      nocache: false, // Không chặn lưu cache của công cụ tìm kiếm
    },
    openGraph: {
      title: "Tin tức - Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước",
      description:
        "Tin tức - Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước",
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
      title: "Tin tức - Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước",
      description:
        "Tin tức - Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước",
      images: IMAGE_INTRO_SEO,
    },
  };
}

const NewsPage = () => {
  const t = useTranslations("Link");

  return (
    <div className="py-5 px-3 md:px-10 lg:px-20 xl:px-40 lg:py-20">
      <div className="pb-10 text-[20px] lg:text-[30px] font-mainB">
        {t("News")}
      </div>
      <div>
        <ListNews />
      </div>
    </div>
  );
};

export default NewsPage;

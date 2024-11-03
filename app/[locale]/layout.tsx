import Navbar from "@/components/Navbar/Navbar";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Metadata } from "next";
import { DOMAIN_NAME, IMAGE_HOME_SEO } from "@/lib/helpFunc";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  // Kiểm tra `params.locale` để xác định canonical URL
  const baseUrl = DOMAIN_NAME;
  const canonicalUrl =
    params.locale === "vn"
      ? `${baseUrl}/vn`
      : params.locale === "en"
      ? `${baseUrl}/en`
      : baseUrl;

  return {
    title: "Trang Chủ - Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước",
    description:
      "Sản phẩm của công ty chúng tôi không chỉ chất lượng cao mà còn được đóng gói đẹp và bắt mắt.",
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true, // Cho phép lập chỉ mục
      follow: true, // Cho phép bot theo các liên kết trên trang
      nocache: false, // Không chặn lưu cache của công cụ tìm kiếm
    },
    openGraph: {
      title: "Trang Chủ - Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước",
      description:
        "Sản phẩm của công ty chúng tôi không chỉ chất lượng cao mà còn được đóng gói đẹp và bắt mắt.",
      url: canonicalUrl,
      type: "website",

      images: [
        {
          url: IMAGE_HOME_SEO,
          width: 810,
          height: 463,
          alt: "Trang Chủ",
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Trang Chủ - Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước",
      description:
        "Sản phẩm của công ty chúng tôi không chỉ chất lượng cao mà còn được đóng gói đẹp và bắt mắt.",
      images: IMAGE_HOME_SEO,
    },
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const message = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={message}>
          <div className="">
            <Header />
            <Navbar locale={locale} />
            {children}
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

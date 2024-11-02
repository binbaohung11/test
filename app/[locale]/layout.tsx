import Navbar from "@/components/Navbar/Navbar";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home - Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước',
  description: 'Sản phẩm của công ty chúng tôi không chỉ chất lượng cao mà còn được đóng gói đẹp và bắt mắt.',
  openGraph: {
    title: 'Home - Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước',
    description: 'Sản phẩm của công ty chúng tôi không chỉ chất lượng cao mà còn được đóng gói đẹp và bắt mắt.',
    url: 'https://highlandbp.com.vn',
    type: 'website',
    locale: 'vi_VN',
    images: [
      {
        url: 'https://highlandbp.com.vn/wp-content/uploads/2020/07/than-gao-dua-vuong.jpg',
        width: 810,
        height: 463,
        alt: 'Home',
        type: 'image/jpeg'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home - Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước',
    description: 'Sản phẩm của công ty chúng tôi không chỉ chất lượng cao mà còn được đóng gói đẹp và bắt mắt.',
    images: 'https://highlandbp.com.vn/wp-content/uploads/2020/07/than-gao-dua-vuong.jpg',
  }
};

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

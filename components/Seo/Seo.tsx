import Head from "next/head";
import React from "react";

const Seo = () => {
  return (
    <>
      <Head>
        <title>
          Introduction - Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước
        </title>
        <meta
          name="description"
          content="Highland Bp., Ltd was established on February 27, 2019, Business registration certificate number: 3801195652 Binh Phuoc Department of Planning and Investment."
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <link rel="canonical" href="https://highlandbp.com.vn/introduction" />

        {/* Open Graph metadata */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Introduction - Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước"
        />
        <meta
          property="og:description"
          content="Highland Bp., Ltd was established on February 27, 2019, Business registration certificate number: 3801195652 Binh Phuoc Department of Planning and Investment."
        />
        <meta
          property="og:url"
          content="https://highlandbp.com.vn/introduction"
        />
        <meta
          property="og:site_name"
          content="Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước"
        />
        <meta
          property="og:image"
          content="https://highlandbp.com.vn/wp-content/uploads/2020/07/than-gao-dua-vuong.jpg"
        />
        <meta property="og:image:width" content="810" />
        <meta property="og:image:height" content="463" />
        <meta property="og:image:alt" content="Introduction" />

        {/* Twitter metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Introduction - Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước"
        />
        <meta
          name="twitter:description"
          content="Highland Bp., Ltd was established on February 27, 2019, Business registration certificate number: 3801195652 Binh Phuoc Department of Planning and Investment."
        />
        <meta
          name="twitter:image"
          content="https://highlandbp.com.vn/wp-content/uploads/2020/07/than-gao-dua-vuong.jpg"
        />
      </Head>
    </>
  );
};

export default Seo;

/** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.ts");

const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com"], // Thêm miền này cho phép ảnh từ Firebase
  },
};

export default withNextIntl(nextConfig);

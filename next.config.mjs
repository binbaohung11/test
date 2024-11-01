/** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  output: "export", // Thêm cấu hình này để xuất các file tĩnh HTML
};

export default withNextIntl(nextConfig);

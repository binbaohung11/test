"use client";
import { usePathname } from "next/navigation";
import React from "react";

const PathLink = () => {
  const pathname = usePathname();

  const breadcrumbs: { [key: string]: React.ReactNode } = {
    "[locale]/our/introduction": (
      <div className="text-[10px] md:text-[16px] lg:text-[20px] xl:text-[24px]">
        <span className="text-[#969696]">Chúng tôi {">"} </span>
        <span className="text-black">Giới thiệu chung</span>
      </div>
    ),
    "[locale]/Test/Than": (
      <>
        <span className="text-[#969696]">Thử</span>
        <span className="text-black"> {">"} Than</span>
      </>
    ),
  };

  const normalizedPath = pathname.replace(/^\/[^/]+/, "[locale]");
  const breadcrumb = breadcrumbs[normalizedPath] || "Đường dẫn không xác định";

  return (
    <div>
      {breadcrumb} {/* No <p> here, just render the breadcrumb directly */}
    </div>
  );
};

export default PathLink;

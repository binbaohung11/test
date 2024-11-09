// app/layout.tsx (hoặc nơi bạn định nghĩa layout)
import NavbarAdmin from "@/components/Admin/Dashboard/NavbarAdmin";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavbarAdmin />
        {children}
      </body>
    </html>
  );
}

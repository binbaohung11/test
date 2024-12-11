// app/layout.tsx (hoặc nơi bạn định nghĩa layout)
import NavbarAdmin from "@/components/Admin/Dashboard/NavbarAdmin";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        <NavbarAdmin />
        {children}
      </body>
    </html>
  );
}

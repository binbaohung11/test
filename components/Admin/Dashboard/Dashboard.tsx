// app/dashboard/page.tsx
"use client";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig"; // Đảm bảo đường dẫn này đúng với cấu hình Firebase của bạn
import React from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth); // Đăng xuất người dùng
      console.log("Đăng xuất thành công!"); // Hiển thị thông báo thành công (nếu cần)

      router.push("/"); // Chuyển hướng về trang chính
    } catch (error) {
      console.error("Đăng xuất không thành công:", error); // Xử lý lỗi nếu có
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Chào mừng, </p> {/* Hiển thị email người dùng */}
      <button onClick={handleLogout}>Đăng xuất</button> {/* Nút đăng xuất */}
    </div>
  );
};

export default Dashboard;
"use client"; // Đánh dấu đây là Client Component

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebaseConfig";

interface MyComponentProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<MyComponentProps> = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!user) {
    // Chuyển hướng đến trang đăng nhập
    return <div>Trang Này Không Hoạt Động</div>;
  }

  return children;
};

export default PrivateRoute;

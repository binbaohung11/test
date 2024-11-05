import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebaseConfig'; // Đảm bảo đường dẫn này đúng với cấu hình Firebase của bạn

const useAuth = () => {
  const [user, setUser] = useState<any>(null); // Trạng thái người dùng
  const [loading, setLoading] = useState(true); // Trạng thái tải

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // Đặt trạng thái tải thành false khi có kết quả
    });

    return () => unsubscribe(); // Dọn dẹp khi component unmount
  }, []);

  return { user, loading }; // Trả về thông tin người dùng và trạng thái tải
};

export default useAuth;
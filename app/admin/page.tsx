import PrivateRoute from "@/components/Admin/Dashboard/PrivateRoute";
import MyRecruitment from "@/components/Admin/Dashboard/Recruitment/MyRecruitment";
import React from "react";

const AdminPage = () => {
  return (
    <PrivateRoute>
      <MyRecruitment />
    </PrivateRoute>
  );
};

export default AdminPage;

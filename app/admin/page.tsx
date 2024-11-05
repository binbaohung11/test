import Dashboard from "@/components/Admin/Dashboard/Dashboard";
import PrivateRoute from "@/components/Admin/Dashboard/PrivateRoute";
import React from "react";

const AdminPage = () => {
  return (
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  );
};

export default AdminPage;

import PrivateRoute from "@/components/Admin/Dashboard/PrivateRoute";
import Selection from "@/components/Admin/Dashboard/Selection";
import React from "react";
import "./createBlog.css";

const page = () => {
  return (
    <PrivateRoute>
      <Selection />
    </PrivateRoute>
  );
};

export default page;

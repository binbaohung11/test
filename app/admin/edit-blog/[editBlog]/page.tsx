import EditBlog from "@/components/Admin/Dashboard/Blog/EditBlog";
import React from "react";

const page = ({ params }: { params: { editBlog: string } }) => {
  return (
    <div>
      <EditBlog params={params} />
    </div>
  );
};

export default page;

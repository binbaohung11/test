import React from "react";
import "./news.css";
import BlogDetail from "@/components/Admin/BlogDetail/BlogDetail";
const DetailBlog = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="text-3xl font-mainB">
      <BlogDetail params={params} /> {/* Pass the params to BlogDetail */}
    </div>
  );
};

export default DetailBlog;

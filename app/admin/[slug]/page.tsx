import BlogDetail from '@/components/Admin/BlogDetail/BlogDetail';
import React from 'react';

const BlogDetailPage = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <BlogDetail params={params} /> {/* Pass the params to BlogDetail */}
    </div>
  );
};

export default BlogDetailPage;
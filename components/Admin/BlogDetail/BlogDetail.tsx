"use client";
import React, { useEffect, useState } from "react";
import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import parse from "html-react-parser";
import "../../../app/admin/[slug]/detail.css";

// Define a Blog interface
interface Blog {
  id: string;
  title: string;
  content: string;
  createdAt: { seconds: number }; // Adjust if your createdAt field structure is different
}

const BlogDetail = ({ params }: { params: { slug: string } }) => {
  const [blog, setBlog] = useState<Blog | null>(null); // Use Blog type or null
  const [loading, setLoading] = useState(true);

  console.log(blog);

  useEffect(() => {
    const fetchBlogBySlug = async () => {
      try {
        const blogQuery = query(
          collection(db, "editorData"),
          where("slug", "==", params.slug)
        );
        const blogSnapshot = await getDocs(blogQuery);

        if (!blogSnapshot.empty) {
          const blogData = blogSnapshot.docs[0];
          setBlog({ id: blogData.id, ...blogData.data() } as Blog); // Assert the type here
        } else {
          console.error("Blog not found");
        }
      } catch (error) {
        console.error("Error fetching blog: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogBySlug();
  }, [params.slug]);

  if (loading) return <p>Loading...</p>;
  if (!blog) return <p>Blog post not found.</p>;

  // Function to add classes to specific elements
  const transformContent = (html: string) => {
    const transformedHtml = html
      .replace(/<h1>/g, '<h1 class="text-3xl font-bold mb-4">')
      .replace(/<h2>/g, '<h2 class="text-2xl font-semibold mb-3">') // If you also have h2
      .replace(/<ul>/g, '<ul class="list-disc pl-5">')
      .replace(/<ol>/g, '<ol class="list-decimal pl-5">') // Add classes for ordered list
      .replace(/<li>/g, '<li class="mb-2">')
      .replace(/<blockquote>/g, '<blockquote class="border-l-4 border-gray-400 pl-4 italic">');

    return transformedHtml;
  };

  return (
    <div className="blog-page p-4">
      <div className="blog-container mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <div className="blog-content">
          {parse(transformContent(blog.content))}
        </div>
        <p className="blog-date text-gray-500">
          {new Date(blog.createdAt.seconds * 1000).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default BlogDetail;

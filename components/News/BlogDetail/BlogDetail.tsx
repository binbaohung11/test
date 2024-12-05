"use client";
import React, { useEffect, useState } from "react";
import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import parse from "html-react-parser";
import "../../../app/[locale]/news/[slug]/news.css";
import PathLink from "@/components/Path/PathLink";
import BlogOther from "../BlogOther";
import { Spin } from "antd";

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

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    );
  if (!blog) return <p>Blog post not found.</p>;

  // Function to add classes to specific elements
  const transformContent = (html: string) => {
    const transformedHtml = html
      .replace(/<h1>/g, '<h1 class="text-3xl font-bold mb-4">')
      .replace(/<h2>/g, '<h2 class="text-2xl font-semibold mb-3">')
      .replace(/<ul>/g, '<ul class="list-disc pl-5">')
      .replace(/<ol>/g, '<ol class="list-decimal pl-5">')
      .replace(/<li>/g, '<li class="mb-2">')
      .replace(/<p>/g, '<p class="my-2">')
      .replace(
        /<blockquote>/g,
        '<blockquote class="border-l-4 border-gray-400 pl-4 italic">'
      )
      // Corrected regex and replacement for YouTube embeds
      .replace(
        /<figure.*?>\s*<oembed url="https:\/\/www\.youtube\.com\/watch\?v=(.*?)"><\/oembed>\s*<\/figure>/g,
        `
        <div class="flex justify-center items-center my-4">
          <iframe width="600" height="315" src="https://www.youtube.com/embed/$1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>`
      );

    return transformedHtml;
  };

  return (
    <div className="blog-page">
      <div className="blog-container px-5">
        <p className="py-10 text-[15px]">
          <PathLink />
        </p>
        <div>
          <h1 className="text-[20px] md:text-[30px] md:px-20 font-bold">
            {blog.title}
          </h1>
          <p className="blog-date text-gray-500 text-center">
            {new Date(blog.createdAt.seconds * 1000).toLocaleDateString()}
          </p>
        </div>
        <div className="blog-content pb-10">
          {parse(transformContent(blog.content))}
        </div>
      </div>
      <BlogOther />
    </div>
  );
};

export default BlogDetail;

"use client";

import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import './detail.css';

// Define a Blog interface
interface Blog {
  id: string;
  title: string;
  content: string;
  createdAt: { seconds: number }; // Adjust this if your createdAt field structure is different
}

const BlogPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]); // Use the Blog type here

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsCollection = collection(db, "editorData");
        const blogSnapshot = await getDocs(blogsCollection);
        const blogList = blogSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Blog[]; // Assert the type here
        setBlogs(blogList);
      } catch (error) {
        console.error("Error fetching blogs: ", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-page">
      <h1>Blog Posts</h1>
      {blogs.length === 0 ? (
        <p className="no-blogs">No blog posts found.</p>
      ) : (
        <div>
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-container">
              <h2 className="blog-title">{blog.title}</h2>
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
              <p className="blog-date">
                {new Date(blog.createdAt.seconds * 1000).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPage;

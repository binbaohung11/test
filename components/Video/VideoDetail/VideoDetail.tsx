"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/lib/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Spin } from "antd";
import PathLink from "@/components/Path/PathLink";
import BlogOther from "@/components/News/BlogOther";
import "../../../app/[locale]/news/[slug]/news.css";

interface ImageData {
  createdAt: { seconds: number }; // Adjust if your createdAt field structure is different
  description: string;
  imageUrl: string;
  keywords: string;
  slug: string;
  title: string;
  youtubeLink: string; // Includes full YouTube link
}

// Function to extract video ID from full YouTube link
const extractYouTubeId = (url: string): string | null => {
  const match = url.match(/v=([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
};

const VideoDetail = ({ params }: { params: { slug: string } }) => {
  const [data, setData] = useState<ImageData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const imageRef = collection(db, "videoData");
      const q = query(imageRef, where("slug", "==", params.slug));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        const fetchedData = doc.data() as ImageData;
        setData(fetchedData);
      } else {
        console.warn("No document found with the specified slug.");
        setData(null);
      }

      setLoading(false);
    };

    fetchImages();
  }, [params.slug]);

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <Spin size="large" />
        </div>
      ) : data ? (
        <div className="blog-page">
          <div className="blog-container px-5">
            <p className="py-10 text-[15px]">
              <PathLink />
            </p>
            <div>
              <h1 className="text-[20px] md:text-[30px] md:px-20 font-bold">
                {data.title}
              </h1>
              <p className="blog-date text-gray-500 text-center">
                {new Date(data.createdAt.seconds * 1000).toLocaleDateString()}
              </p>
            </div>
            <div className="blog-content pb-10 flex justify-center">
              {data.youtubeLink && (
                <iframe
                  width="1000"
                  height="650"
                  src={`https://www.youtube.com/embed/${extractYouTubeId(
                    data.youtubeLink
                  )}`}
                  title={data.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
          <BlogOther />
        </div>
      ) : (
        <p className="text-center py-10">No data available for this slug.</p>
      )}
    </div>
  );
};

export default VideoDetail;

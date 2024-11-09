"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { Pagination, Spin } from "antd";

// Define the interface based on your Firebase data structure
interface ImageData {
  id: string;
  createdAt: Timestamp;
  description: string;
  imageUrl: string;
  keywords: string;
  secondaryImageUrls: string[];
  slug: string;
  title: string;
}

const ListVideo: React.FC = () => {
  const [imageData, setImageData] = useState<ImageData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // Loading state
  const itemsPerPage = 6;
  const locale = useLocale();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "videoData"));
        const images: ImageData[] = querySnapshot.docs.map(
          (doc) => ({ id: doc.id, ...doc.data() } as ImageData)
        );
        setImageData(images);
      } catch (error) {
        console.error("Error fetching image data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = imageData.slice(startIndex, startIndex + itemsPerPage);
  const totalItems = imageData.length;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <Spin size="large" /> {/* Antd loading spinner */}
        </div>
      ) : (
        <div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
            {currentItems.map((news) => (
              <div key={news.id} className="w-full py-4">
                <div className="flex justify-center md:block">
                  <Image
                    src={news.imageUrl}
                    alt={news.title}
                    width={1000}
                    height={1000}
                    className="w-[400px] max-h-[200px] xl:w-[600px] xl:max-h-[380px] rounded-[10px]"
                  />
                </div>
                <div className="text-[16px] md:text-[20px] xl:text-[24px] font-mainB w-full md:w-[85%] xl:w-[80%] text-center md:text-start md:px-2">
                  {news.title}
                </div>
                <div className="text-[#525252] text-[11px] md:text-[14px] py-2 text-center md:text-start md:px-2">
                  <p>Bởi HIGLANDBP</p>
                  <p>
                    {new Date(
                      news.createdAt.seconds * 1000
                    ).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-center md:text-start md:px-2">
                  <Link href={`/${locale}/video/${news.slug}`}>
                    <button className="border-2 border-[#39444D] px-5 py-1.5 md:px-10 md:py-2 rounded-full font-mainB hover:bg-[#E1E1E1]">
                      Xem thêm
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Pagination
              current={currentPage}
              total={totalItems}
              pageSize={itemsPerPage}
              onChange={handlePageChange}
              showSizeChanger={false}
              style={{ marginTop: "20px" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ListVideo;

"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/lib/firebaseConfig";
import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  startAfter,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";
import { Pagination, Spin } from "antd"; // Import Ant Design Pagination and Spin components
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";

// Define the type for news items
interface NewsItem {
  id: string;
  title: string;
  imageUrl: string;
  slug: string;
  createdAt: { seconds: number };
  // Add other fields here if needed, e.g., content, createdAt, etc.
}

const ListNews = () => {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [lastDoc, setLastDoc] =
    useState<null | QueryDocumentSnapshot<DocumentData>>(null);
  const itemsPerPage = 6;

  const locale = useLocale();

  const fetchNews = async (page: number) => {
    setLoading(true);
    try {
      let newsQuery;
      if (page === 1) {
        // Fetch the first page
        newsQuery = query(
          collection(db, "editorData"),
          orderBy("createdAt"),
          limit(itemsPerPage)
        );
      } else {
        // Fetch subsequent pages using startAfter
        if (!lastDoc) return; // Prevent querying if lastDoc is not set
        newsQuery = query(
          collection(db, "editorData"),
          orderBy("createdAt"),
          startAfter(lastDoc),
          limit(itemsPerPage)
        );
      }

      const querySnapshot = await getDocs(newsQuery);
      const data = querySnapshot.docs.map(
        (doc) => ({ id: doc.id, ...doc.data() } as NewsItem)
      );

      // Update the last document (for pagination)
      setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);

      setNewsData(data);

      // Fetch total count to calculate total pages (only once for performance reasons)
      if (page === 1) {
        const totalCountQuery = query(collection(db, "editorData"));
        const totalCountSnapshot = await getDocs(totalCountQuery);
        const totalItems = totalCountSnapshot.size;
        setTotalPages(Math.ceil(totalItems / itemsPerPage));
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    }
    setLoading(false);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    fetchNews(page);
  };

  useEffect(() => {
    fetchNews(currentPage);
  }, []);

  console.log(newsData);

  return (
    <div>
      {loading ? (
        <Spin tip="Loading..." /> // Show loading spinner while fetching data
      ) : (
        <>
          {/* Display news items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {newsData.map((news) => (
              <div key={news.id} className="w-full py-4">
                <div className="flex justify-center md:block">
                  <Image
                    src={news?.imageUrl}
                    alt={news.title}
                    width={1000} // Set the width explicitly
                    height={1000} // Set the height explicitly
                    className="w-[400px] max-h-[200px]  xl:w-[600px] xl:max-h-[380px] rounded-[10px]"
                  />
                </div>
                <div className="text-[16px] md:text-[20px] xl:text-[24px]  font-mainB w-full md:w-[85%] xl:w-[80%] text-center md:text-start md:px-2">
                  {news.title}
                </div>
                <div className=" text-[#525252] text-[11px] md:text-[14px] py-2 text-center md:text-start md:px-2">
                  <p>Bởi HIGLANDBP</p>
                  <p>
                    {new Date(
                      news.createdAt.seconds * 1000
                    ).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-center md:text-start md:px-2">
                  <Link href={`/${locale}/news/${news.slug}`}>
                    <button className="border-2 border-[#39444D] px-5 py-1.5 md:px-10 md:py-2 rounded-full font-mainB hover:bg-[#E1E1E1]">
                      Xem thêm
                    </button>
                  </Link>
                </div>
              </div> // Display relevant fields from editorData
            ))}
          </div>

          {/* Pagination controls from Ant Design */}
          <div className="flex justify-center ">
            <Pagination
              current={currentPage}
              total={totalPages * itemsPerPage} // Total number of items
              pageSize={itemsPerPage}
              onChange={handlePageChange}
              showSizeChanger={false} // Hide the option to change page size
              style={{ marginTop: "20px" }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ListNews;

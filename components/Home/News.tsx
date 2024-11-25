"use client";
import { useState, useEffect } from "react";
import { db } from "@/lib/firebaseConfig";
import {
  collection,
  query,
  getDocs,
  limit,
  orderBy,
  startAfter,
} from "firebase/firestore";
import { Pagination } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

interface EditorDataItem {
  id: string;
  title: string;
  content: string;
  slug: string;
  imageUrl: string;
  createdAt: { seconds: number }; // Adjust if your createdAt field structure is different
}

const News: React.FC = () => {
  const [editorData, setEditorData] = useState<EditorDataItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(2);
  const [lastVisible, setLastVisible] = useState<any>(null);
  const [prevLastVisible, setPrevLastVisible] = useState<any[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const locale = useLocale();

  const t = useTranslations("Home");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const editorDataRef = collection(db, "editorData");
        let q;

        if (currentPage > 1 && lastVisible) {
          q = query(
            editorDataRef,
            orderBy("createdAt", "desc"),
            startAfter(lastVisible),
            limit(dataPerPage)
          );
        } else {
          q = query(
            editorDataRef,
            orderBy("createdAt", "desc"),
            limit(dataPerPage)
          );
        }

        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(
          (doc) => ({ id: doc.id, ...doc.data() } as EditorDataItem)
        );

        setEditorData(data);
        setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);

        // Store last visible for current page
        if (currentPage === 1) {
          setPrevLastVisible([
            querySnapshot.docs[querySnapshot.docs.length - 1],
          ]);
        } else {
          setPrevLastVisible((prev) => [
            ...prev,
            querySnapshot.docs[querySnapshot.docs.length - 1],
          ]);
        }

        // Get total items only once
        if (currentPage === 1) {
          const totalItemsSnapshot = await getDocs(editorDataRef);
          setTotalItems(totalItemsSnapshot.size);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage, dataPerPage]);

  const paginate = (pageNumber: number) => {
    if (pageNumber > currentPage) {
      setLastVisible(prevLastVisible[pageNumber - 2]);
    } else if (pageNumber < currentPage) {
      setLastVisible(prevLastVisible[pageNumber - 2] || null);
    }
    setCurrentPage(pageNumber);
  };

  return (
    <div className="px-5 md:px-10 lg:px-20 xl:px-32 w-full py-10 lg:py-20 space-y-4 text-[12px] font-mainR">
      <p className="text-center md:text-start text-[16px] md:text-[24px] lg:text-[34px] xl:text-[40px] font-mainB py-3">
        {t("News")}
      </p>

      <div>
        <div className="flex space-x-5 pb-10">
          {editorData.map((item) => (
            <Link href={`/${locale}/news/${item.slug}`} key={item.id}>
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={1000}
                height={1000}
                className="h-[130px] md:h-[280px] rounded-[10px]"
              />
              <p className="text-[12px] lg:text-[16px] text-[#969696] px-2">
                {new Date(item.createdAt.seconds * 1000).toLocaleDateString()}
              </p>
              <div className="text-[20px] lg:text-[24px] px-2 font-mainB">
                {item.title}
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <Pagination
            current={currentPage}
            pageSize={dataPerPage}
            total={totalItems}
            onChange={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default News;

"use client";
import React, { useState, useEffect, useRef } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Spin } from "antd"; // Import Ant Design's Spin component

// Define types for each collection
interface EditorData {
  id: string;
  title: string;
  imageUrl: string;
  url: string;
  slug: string;
  createdAt?: { seconds: number };
}

interface ImageData {
  id: string;
  title: string;
  imageUrl: string;
  url: string;
  slug: string;
  createdAt?: { seconds: number };
}

interface VideoData {
  id: string;
  title: string;
  imageUrl: string;
  url: string;
  slug: string;
  createdAt?: { seconds: number };
}

// Define the type for the combined result
type SearchResult = (EditorData | ImageData | VideoData) & { type: string };

const Find = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const searchRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const t = useTranslations("Link");

  const searchParams = useSearchParams();
  const currentSearchTerm = searchParams.get("searchTerm") || ""; // Get the search term from URL

  // Set the search term based on URL on initial render
  useEffect(() => {
    setSearchTerm(currentSearchTerm);
    handleSearch(currentSearchTerm);
  }, [currentSearchTerm]);

  // Define the search function with proper types
  const handleSearch = async (term: string) => {
    const lowerCaseTerm = term.toLowerCase(); // Convert search term to lowercase

    if (term) {
      setLoading(true); // Show loading spinner when searching

      // Query for each collection
      const editorQuery = query(collection(db, "editorData"));
      const imageQuery = query(collection(db, "imageData"));
      const videoQuery = query(collection(db, "videoData"));

      // Execute the queries
      const [editorSnapshot, imageSnapshot, videoSnapshot] = await Promise.all([
        getDocs(editorQuery),
        getDocs(imageQuery),
        getDocs(videoQuery),
      ]);

      // Map the results and add a 'type' field to each result
      const editorResults: SearchResult[] = editorSnapshot.docs
        .map((doc) => ({
          id: doc.id,
          title: doc.data().title.toLowerCase(),
          imageUrl: doc.data().imageUrl,
          type: t("News"),
          url: `/${locale}/news`,
          slug: doc.data().slug,
          createdAt: doc.data().createdAt,
        }))
        .filter((item) => item.title.includes(lowerCaseTerm)); // Filter by search term

      const imageResults: SearchResult[] = imageSnapshot.docs
        .map((doc) => ({
          id: doc.id,
          title: doc.data().title.toLowerCase(),
          imageUrl: doc.data().imageUrl,
          type: t("Photo"),
          url: `/${locale}/photo`,
          slug: doc.data().slug,
          createdAt: doc.data().createdAt,
        }))
        .filter((item) => item.title.includes(lowerCaseTerm)); // Filter by search term

      const videoResults: SearchResult[] = videoSnapshot.docs
        .map((doc) => ({
          id: doc.id,
          title: doc.data().title.toLowerCase(),
          imageUrl: doc.data().imageUrl,
          type: t("Video"),
          url: `/${locale}/video`,
          slug: doc.data().slug,
          createdAt: doc.data().createdAt,
        }))
        .filter((item) => item.title.includes(lowerCaseTerm)); // Filter by search term

      // Combine all results
      const allResults = [...editorResults, ...imageResults, ...videoResults];
      setResults(allResults);
      setIsDropdownVisible(true);
      setLoading(false); // Hide loading spinner once results are fetched
    } else {
      setResults([]);
      setIsDropdownVisible(false);
      setLoading(false); // Hide loading spinner if there's no search term
    }
  };

  // Update URL with search term
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        // Update the searchTerm in the URL
        const url = new URL(window.location.href);
        url.searchParams.set("searchTerm", searchTerm);
        window.history.pushState({}, "", url.toString());
      } else {
        // Remove searchTerm from URL if empty
        const url = new URL(window.location.href);
        url.searchParams.delete("searchTerm");
        window.history.pushState({}, "", url.toString());
      }
      handleSearch(searchTerm);
    }, 300); // debounce to optimize API calls

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative font-mainR" ref={searchRef}>
      <input
        className="py-2 px-5 pr-10 text-[18px] text-black w-[440px] rounded-[34px] max-md:w-[200px] max-lg:w-[200px] max-xl:w-[250px] max-2xl:w-[300px] max-xl:py-0 max-2xl:py-1 max-md:text-[10px] max-lg:text-[12px] max-xl:text-[14px] max-2xl:text-[16px]"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {loading ? (
        <div className="absolute top-12 h-[400px] w-full bg-white z-50 flex justify-center items-center shadow-xl">
          <Spin size="large" /> {/* Show loading spinner */}
        </div>
      ) : (
        isDropdownVisible &&
        (results.length > 0 ? (
          <div className="absolute top-12 h-[400px] w-[550px] z-50 text-black bg-white overflow-y-auto rounded-[10px] shadow-xl">
            {results.map((item) => (
              <Link key={item.id} href={`${item.url}/${item.slug}`}>
                <div className="p-4 hover:bg-gray-700 hover:text-white cursor-pointer flex items-center space-x-5">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={1000}
                    height={1000}
                    className="w-[25px] h-[25px] lg:w-[35px] lg:h-[35px] xl:w-[45px] xl:h-[45px] rounded-full"
                  />
                  <div className="w-[70%]">
                    <p className="font-mainB text-[12px] lg:text-[12px] xl:text-[17px] 2xl:text-[20px]">
                      {item.title}
                    </p>
                    <p className="text-[10px] lg:text-[10px] xl:text-[12px] text-gray-500">
                      {item.createdAt
                        ? `${new Date(
                            item.createdAt.seconds * 1000
                          ).toLocaleDateString([], {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          })}`
                        : ""}
                    </p>
                  </div>
                  <div className="text-right text-[10px] lg:text-[12px] xl:text-[14px]">
                    ({item.type})
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="absolute top-12 h-[100px] z-50 text-black bg-white w-full overflow-y-auto rounded-[10px] font-mainB shadow-xl">
            <div className="flex items-center justify-center h-[100px]">
              Không tìm thấy dữ liệu nào
            </div>
          </div> // Display "No results found" message
        ))
      )}
    </div>
  );
};

export default Find;

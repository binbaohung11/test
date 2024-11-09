"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import Link from "next/link";
import { Pagination, Spin } from "antd"; // Import Spin từ Ant Design

type DataItem = {
  id: string;
  category: string;
  title?: string;
  createdAt?: { seconds: number };
};

const DashboardBlog = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [filteredData, setFilteredData] = useState<DataItem[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState(""); // State to store the selected category
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [loading, setLoading] = useState(true); // State for loading
  const itemsPerPage = 10; // Số lượng item mỗi trang

  console.log(selectedIds);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true when starting fetch data
      const editorData = await getCollectionData("editorData", "Tin Tức");
      const imageData = await getCollectionData("imageData", "Hình Ảnh");
      const videoData = await getCollectionData("videoData", "Video");

      const combinedData = [...editorData, ...imageData, ...videoData];
      setData(combinedData);
      setFilteredData(combinedData);
      setLoading(false); // Set loading to false after data is fetched
    };

    fetchData();
  }, []);

  const getCollectionData = async (
    collectionName: string,
    category: string
  ) => {
    const collectionRef = collection(db, collectionName);
    const querySnapshot = await getDocs(collectionRef);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      category,
    })) as DataItem[];
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    filterData(category, query);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    filterData(selectedCategory, searchQuery);
  };

  const filterData = (selectedCategory: string, searchQuery: string) => {
    const filtered = data.filter(
      (item) =>
        (selectedCategory ? item.category === selectedCategory : true) &&
        (item.title?.toLowerCase().includes(searchQuery) || false)
    );
    setFilteredData(filtered);
    setCurrentPage(1); // Reset page khi lọc dữ liệu
  };

  const handleSelectAll = () => {
    if (selectedIds.length === filteredData.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredData.map((item) => item.id));
    }
  };

  const handleSelect = (id: string) => {
    setSelectedIds((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((selectedId) => selectedId !== id)
        : [...prevSelected, id]
    );
  };

  const handleDeleteSelected = () => {
    if (confirm("Bạn Có Chắc Là Muốn Xóa?")) {
      const newData = data.filter((item) => !selectedIds.includes(item.id));
      setData(newData);
      setFilteredData(newData);
      setSelectedIds([]);
    }
  };

  const handleDeleteIndividual = (id: string) => {
    if (confirm("Bạn Có Chắc Là Muốn Xóa?")) {
      const newData = data.filter((item) => item.id !== id);
      setData(newData);
      setFilteredData(newData);
    }
  };

  // Define base URL based on category
  const getBaseUrl = (category: string) => {
    switch (category) {
      case "Tin Tức":
        return "edit-blog";
      case "Hình Ảnh":
        return "edit-image";
      case "Video":
        return "edit-video";
      default:
        return "";
    }
  };

  // Hàm phân trang
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Dữ liệu cần hiển thị trên mỗi trang
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="py-10 px-10">
      <div className="flex justify-between items-center">
        <h1 className="text-[30px] font-mainB">Bài Viết</h1>
        <select
          className="border-2 border-black px-5 py-3 w-[200px]"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="">Tất cả</option>
          <option value="Tin Tức">Tin Tức</option>
          <option value="Hình Ảnh">Hình Ảnh</option>
          <option value="Video">Video</option>
        </select>
        <input
          type="text"
          className="border-2 border-black px-5 py-3 w-[400px]"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="py-5 flex justify-between">
        <Link href={"/admin/create"}>
          <button className="bg-[#F3F3F3] text-[#639F7A] px-7 py-3 rounded-[10px] ring-1 border-[#639F7A] font-mainB">
            Thêm Bài Viết
          </button>
        </Link>
        {selectedIds.length === 0 ? (
          ""
        ) : (
          <button
            onClick={handleDeleteSelected}
            className="px-5 py-3 bg-red-500 text-white ml-5 rounded-xl"
            disabled={selectedIds.length === 0}
          >
            Xóa đã chọn
          </button>
        )}
      </div>

      {/* Hiển thị loading khi dữ liệu đang được tải */}
      {loading ? (
        <div className="flex justify-center items-center py-10 h-screen">
          <Spin size="large" />
        </div>
      ) : (
        <>
          <table className="w-full border rounded-3xl">
            <thead>
              <tr className="text-[20px] font-mainB">
                <th className="px-4 py-2">
                  <input
                    type="checkbox"
                    checked={
                      selectedIds.length === currentData.length &&
                      currentData.length > 0
                    }
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="px-4 py-2">Tiêu Đề</th>
                <th className="px-4 py-2">Tác Giả</th>
                <th className="px-4 py-2">Danh Mục</th>
                <th className="px-4 py-2">Thời Gian</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {currentData.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="px-4 py-2 border-l border-b">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(item.id)}
                      onChange={() => handleSelect(item.id)}
                    />
                  </td>
                  <td className="px-4 py-2 border-l border-b text-left">
                    <p className="text-[#639F7A] text-[16px] font-mainB">
                      {item.title}
                    </p>
                    <div>
                      <Link
                        href={`/admin/${getBaseUrl(item.category)}/${item.id}`}
                      >
                        <button>Sửa</button>
                      </Link>{" "}
                      |{" "}
                      <button onClick={() => handleDeleteIndividual(item.id)}>
                        Xóa
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-2 border-b">HiglandBP</td>
                  <td className="px-4 py-2 border-b">{item.category}</td>
                  <td className="px-4 py-2 border-b border-r">
                    Đã Xuất Bản{" "}
                    {item.createdAt
                      ? `${new Date(
                          item.createdAt.seconds * 1000
                        ).toLocaleDateString([], {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        })}`
                      : ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Hiển thị phân trang */}
          <Pagination
            current={currentPage}
            pageSize={itemsPerPage}
            total={filteredData.length}
            onChange={handlePageChange}
            className="py-5"
          />
        </>
      )}
    </div>
  );
};

export default DashboardBlog;

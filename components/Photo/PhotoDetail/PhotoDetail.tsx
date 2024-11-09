"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { db } from "@/lib/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Spin } from "antd"; // Import Spin từ antd

interface ImageData {
  createdAt: string;
  description: string;
  imageUrl: string;
  keywords: string;
  secondaryImageUrls: string[];
  slug: string;
  title: string;
}

const PhotoDetail = ({ params }: { params: { slug: string } }) => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [pageTitle, setPageTitle] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Trạng thái loading

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true); // Khi bắt đầu tải dữ liệu, set loading là true
      const imageRef = collection(db, "imageData");
      const q = query(imageRef, where("slug", "==", params.slug));
      const querySnapshot = await getDocs(q);

      const fetchedImages: ImageData[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        setPageTitle(data.title); // Lấy giá trị title từ Firebase và gán cho pageTitle

        // Loop through secondaryImageUrls to extract each image
        data.secondaryImageUrls.forEach((url: string) => {
          fetchedImages.push({
            createdAt: data.createdAt,
            description: data.description,
            imageUrl: url, // Overwrite with secondary image URL
            keywords: data.keywords,
            secondaryImageUrls: data.secondaryImageUrls,
            slug: data.slug,
            title: data.title,
          });
        });
      });

      setImages(fetchedImages);
      setLoading(false); // Sau khi tải xong, set loading là false
    };

    fetchImages();
  }, [params.slug]);

  return (
    <div className="container mx-auto p-4">
      {/* Hiển thị loading nếu đang tải dữ liệu */}
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <Spin size="large" /> {/* Biểu tượng loading */}
        </div>
      ) : (
        <>
          {/* Hiển thị title từ dữ liệu Firebase */}
          <h2 className="text-2xl font-semibold mb-4 text-center py-10">
            {pageTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg"
                onClick={() => setSelectedImage(image.imageUrl)}
              >
                <Image
                  src={image.imageUrl}
                  alt={image.title || "Gallery Image"}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                  width={500}
                  height={500}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-semibold">
                  {image.description}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Modal for zoomed image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative p-4"
            onClick={(e) => e.stopPropagation()} // Prevents modal close on image click
          >
            <Image
              src={selectedImage}
              alt="Zoomed Image"
              className="max-w-full max-h-screen object-contain rounded-xl"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoDetail;

"use client";
import React, { useEffect, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "@/lib/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import slugify from "slugify";
import "../../../../app/admin/create/createBlog.css";
import Image from "next/image";
import { toast } from "react-toastify";

const EditPhoto = ({ params }: { params: { editImage: string } }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [secondaryImages, setSecondaryImages] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { editImage } = params; // Get the blog post ID from the URL

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const docRef = doc(db, "imageData", editImage);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setTitle(data?.title || "");
          setDescription(data?.description || "");
          setKeywords(data?.keywords || "");
          setImageUrl(data?.imageUrl || "");
        } else {
          alert("No data found for the given image ID");
        }
      } catch (e) {
        console.error("Error fetching document: ", e);
      }
    };

    fetchImageData();
  }, [editImage]);

  const generateSlug = (title: string) => {
    const randomId = Math.floor(Math.random() * 100000);
    const slug = slugify(title, {
      lower: true,
      strict: true,
      locale: "vi",
    });
    return `${randomId}-${slug}.html`;
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSecondaryImagesChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      if (filesArray.length > 25) {
        alert("Bạn chỉ có thể chọn tối đa 10 ảnh phụ.");
        e.target.value = ""; // Clear the file input
        setSecondaryImages([]); // Reset the secondary images array
        return;
      }
      setSecondaryImages(filesArray);
    }
  };

  const uploadImageToFirebase = async (file: File) => {
    const fileName = `${Date.now()}-${file.name}`;
    const storageRef = ref(storage, `images/${fileName}`);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      const slug = generateSlug(title);
      let uploadedImageUrl = imageUrl;

      if (image) {
        uploadedImageUrl = await uploadImageToFirebase(image);
        setImageUrl(uploadedImageUrl);
      }

      const secondaryImageUrls: string[] = [];
      for (const image of secondaryImages) {
        const uploadedSecondaryImageUrl = await uploadImageToFirebase(image);
        secondaryImageUrls.push(uploadedSecondaryImageUrl);
      }

      const docRef = doc(db, "imageData", editImage);
      await updateDoc(docRef, {
        title: title,
        description: description,
        keywords: keywords,
        slug: slug,
        imageUrl: uploadedImageUrl,
        createdAt: new Date(),
        secondaryImageUrls: secondaryImageUrls, // Update secondary image URLs
      });

      toast.success("Cập nhật thành công!");
    } catch (e) {
      console.error("Error updating document: ", e);
      alert("Error saving data!");
    }
    setIsLoading(false);
  };

  return (
    <div className="editor-container">
      <h1 className="text-[30px] text-center py-5 font-mainB">Sửa Ảnh</h1>
      <div>
        <div>
          <p className="text-[20px]">Tên Tiêu Đề</p>
          <input
            type="text"
            placeholder="Tên Tiêu Đề"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-field"
          />
        </div>
        <div>
          <p className="text-[20px]">Tên Tiêu Đề</p>
          <textarea
            placeholder="Mô Tả Sơ Lược"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea-field"
            rows={3}
          />
        </div>
        <div>
          <p className="text-[20px]">Tên Tiêu Đề</p>
          <input
            type="text"
            placeholder="KeyWord cho SEO ví dụ: mua laptop, laptop gaming, laptop văn phòng"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            className="input-field"
          />
        </div>
        <div>
          <p className="text-[20px]">Hình Ảnh Chính</p>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="input-field"
          />
          {imageUrl && (
            <div>
              <Image src={imageUrl} alt={title} width={1000} height={1000} />
            </div>
          )}
        </div>
      </div>
      <div>
        <p className="text-[20px] pt-5">Ảnh Phụ (tối đa 25 ảnh)</p>
        <input
          type="file"
          accept="image/*"
          multiple // Allow multiple file selection
          onChange={handleSecondaryImagesChange}
          className="input-field"
        />
      </div>

      <button onClick={handleSave} className="save-button">
        {isLoading ? "Đang Chỉnh Sửa..." : "Chỉnh Sửa"}
      </button>
    </div>
  );
};

export default EditPhoto;

"use client";
import React, { useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/lib/firebaseConfig";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import slugify from "slugify";
import "../../../../app/admin/create/createBlog.css";
import { toast } from "react-toastify";

const MyVideo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const db = getFirestore();

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

      const docRef = await addDoc(collection(db, "videoData"), {
        title: title,
        description: description,
        keywords: keywords,
        slug: slug,
        imageUrl: uploadedImageUrl,
        youtubeLink: youtubeLink, // Store YouTube link
        createdAt: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
      toast.success("Video đã được lưu thành công!");
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error saving data!");
    }
    setIsLoading(false);
  };

  return (
    <div className="editor-container">
      <h1 className="text-[30px] text-center py-5 font-mainB">
        Thêm Video Mới
      </h1>
      <div>
        <input
          type="text"
          placeholder="Tên Tiêu Đề"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-field"
        />
        <textarea
          placeholder="Mô Tả Sơ Lược"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="textarea-field"
          rows={3}
        />
        <input
          type="text"
          placeholder="KeyWord cho SEO ví dụ: mua laptop, laptop gaming, laptop văn phòng"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          className="input-field"
        />
        <div>
          <p>Hình Ảnh Chính</p>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="input-field"
          />
        </div>
        <input
          type="text"
          placeholder="Link YouTube (nếu có)"
          value={youtubeLink}
          onChange={(e) => setYoutubeLink(e.target.value)}
          className="input-field"
        />
      </div>

      <button onClick={handleSave} className="save-button">
        {isLoading ? "Đang tải..." : "Lưu Video"}
      </button>
    </div>
  );
};

export default MyVideo;

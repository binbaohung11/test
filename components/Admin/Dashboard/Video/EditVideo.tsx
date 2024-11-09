"use client";
import React, { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebaseConfig";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import slugify from "slugify";
import "../../../../app/admin/create/createBlog.css";
import Image from "next/image";

const EditVideo = ({ params }: { params: { editVideo: string } }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const db = getFirestore();

  useEffect(() => {
    // Fetch the existing video data based on `editVideo` (slug)
    const fetchVideoData = async () => {
      try {
        const docRef = doc(db, "videoData", params.editVideo);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const videoData = docSnap.data();
          setTitle(videoData.title);
          setDescription(videoData.description);
          setKeywords(videoData.keywords);
          setImageUrl(videoData.imageUrl);
          setYoutubeLink(videoData.youtubeLink);
        } else {
          console.log("No such document!");
        }
      } catch (e) {
        console.error("Error fetching video data: ", e);
      }
    };

    fetchVideoData();
  }, [params.editVideo, db]);

  const generateSlug = (title: string) => {
    const slug = slugify(title, {
      lower: true,
      strict: true,
      locale: "vi",
    });
    return slug;
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
    try {
      const slug = generateSlug(title);
      let uploadedImageUrl = imageUrl;

      if (image) {
        uploadedImageUrl = await uploadImageToFirebase(image);
        setImageUrl(uploadedImageUrl);
      }

      const docRef = doc(db, "videoData", params.editVideo);
      await updateDoc(docRef, {
        title: title,
        description: description,
        keywords: keywords,
        slug: slug,
        imageUrl: uploadedImageUrl,
        youtubeLink: youtubeLink,
        updatedAt: new Date(),
      });

      alert("Video updated successfully!");
    } catch (e) {
      console.error("Error updating document: ", e);
      alert("Error updating video!");
    }
  };

  return (
    <div className="editor-container">
      <h1 className="text-[30px] text-center py-5 font-mainB">
        Chỉnh Sửa Video
      </h1>
      <div>
        <div>
          <p className="text-[20px]">Tên Đường Dẫn</p>
          <input
            type="text"
            placeholder="Tên Tiêu Đề"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-field"
          />
        </div>
        <div>
          <p className="text-[20px]">Tên Đường Dẫn</p>
          <textarea
            placeholder="Mô Tả Sơ Lược"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea-field"
            rows={3}
          />
        </div>

        <div>
          <p className="text-[20px]">Tên Đường Dẫn</p>
          <input
            type="text"
            placeholder="KeyWord cho SEO"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            className="input-field"
          />
        </div>

        <div>
          <p>Hình Ảnh Chính</p>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="input-field"
          />
        </div>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="current"
            className="image-preview"
            width={1000}
            height={1000}
          />
        )}

        <div>
          <p className="text-[20px] pt-5">Tên Đường Dẫn</p>
          <input
            type="text"
            placeholder="Link YouTube (nếu có)"
            value={youtubeLink}
            onChange={(e) => setYoutubeLink(e.target.value)}
            className="input-field"
          />
        </div>
      </div>

      <button onClick={handleSave} className="save-button">
        Save
      </button>
    </div>
  );
};

export default EditVideo;

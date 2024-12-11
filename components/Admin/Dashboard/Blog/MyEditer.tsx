"use client";
import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/lib/firebaseConfig"; // Import Firebase storage config
import { addDoc, collection, getFirestore } from "firebase/firestore"; // Import Firestore functions
import slugify from "slugify"; // Import slugify
import "../../../../app/admin/create/createBlog.css";
import { toast } from "react-toastify";

const MyEditor = () => {
  const [editorData, setEditorData] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [image, setImage] = useState<File | null>(null); // New state for image file
  const [imageUrl, setImageUrl] = useState(""); // New state for image URL
  const [loading, setLoading] = useState(false);
  const db = getFirestore();

  const handleEditorChange = (event: any, editor: any) => {
    const data = editor.getData();
    setEditorData(data);
  };

  // Use slugify to generate a slug from the title
  const generateSlug = (title: string) => {
    const randomId = Math.floor(Math.random() * 100000); // Random ID generation
    const slug = slugify(title, {
      lower: true,
      strict: true,
      locale: "vi",
    });
    return `${randomId}-${slug}.html`; // Prepend the random ID to the slug
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

  const uploadAdapter = (loader: any) => {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = async (readEvent) => {
            try {
              const file = readEvent.target?.result as ArrayBuffer;
              const fileName = `${Date.now()}-${Math.round(
                Math.random() * 1e9,
              )}.png`;
              const storageRef = ref(storage, fileName);

              await uploadBytes(storageRef, file);
              const downloadURL = await getDownloadURL(storageRef);

              resolve({
                default: downloadURL,
                width: 300,
                height: 200,
                style: "display: inline-block; margin-right: 10px;",
              });
            } catch (error) {
              reject(error);
            }
          };
          loader.file.then((file: File) => reader.readAsArrayBuffer(file));
        });
      },
    };
  };

  function uploadPlugin(editor: any) {
    editor.plugins.get("FileRepository").createUploadAdapter = (
      loader: any,
    ) => {
      return uploadAdapter(loader);
    };
  }

  const handleSave = async () => {
    try {
      const slug = generateSlug(title);
      let uploadedImageUrl = imageUrl;
      setLoading(true);

      // Upload the selected image file if there's an image
      if (image) {
        uploadedImageUrl = await uploadImageToFirebase(image);
        setImageUrl(uploadedImageUrl);
      }

      const docRef = await addDoc(collection(db, "editorData"), {
        title: title,
        description: description,
        content: editorData,
        keywords: keywords,
        slug: slug,
        imageUrl: uploadedImageUrl, // Save image URL in Firestore
        createdAt: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
      // add toast-react for success message
      toast.success("Đã Lưu Dữ Liệu Thành Công!");
      // Redirect to the blog edit page with the generated slug
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error saving data!");
    }
    setLoading(false);
  };

  return (
    <div className="editor-container">
      <h1 className="text-[30px] text-center py-5 font-mainB">Thêm Blog Mới</h1>
      {/* Title, Description, and Keywords Inputs */}
      <div>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-field"
        />
        <textarea
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="textarea-field"
          rows={3}
        />
        <input
          type="text"
          placeholder="Enter Keywords (comma-separated)"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          className="input-field"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="input-field"
        />
      </div>

      <div>
        <CKEditor
          editor={ClassicEditor}
          data={editorData}
          onChange={handleEditorChange}
          config={{
            extraPlugins: [uploadPlugin],
            removePlugins: ["Table"],
            image: {
              toolbar: [
                "imageTextAlternative",
                "|",
                "imageStyle:inline",
                "imageStyle:block",
                "imageStyle:side",
                "|",
                "toggleImageCaption",
                "imageResize",
              ],
            },
          }}
        />
      </div>

      <button onClick={handleSave} className="save-button">
        {loading ? "Đang Lưu..." : "Lưu"}
      </button>
    </div>
  );
};

export default MyEditor;

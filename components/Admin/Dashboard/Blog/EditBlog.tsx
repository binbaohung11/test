"use client";
import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/lib/firebaseConfig";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import slugify from "slugify";
import "../../../../app/admin/create/createBlog.css"; // Import CSS
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "react-toastify";

const EditBlog = ({ params }: { params: { editBlog: string } }) => {
  const router = useRouter();
  const [editorData, setEditorData] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const db = getFirestore();
  const { editBlog } = params; // Get the blog post ID from the URL

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const docRef = doc(db, "editorData", editBlog);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setTitle(data.title);
          setDescription(data.description);
          setKeywords(data.keywords);
          setEditorData(data.content);
          setImageUrl(data.imageUrl);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, [editBlog, db]);

  const handleEditorChange = (event: any, editor: any) => {
    const data = editor.getData();
    setEditorData(data);
  };

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

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const slug = generateSlug(title);
      let uploadedImageUrl = imageUrl; // Keep the existing image URL by default

      if (image) {
        // Upload the new image if there's a new image selected
        uploadedImageUrl = await uploadImageToFirebase(image);
        setImageUrl(uploadedImageUrl);
      }

      // Update the document in Firestore
      const docRef = doc(db, "editorData", editBlog);
      await updateDoc(docRef, {
        title: title,
        description: description,
        content: editorData,
        keywords: keywords,
        slug: slug,
        imageUrl: uploadedImageUrl,
      });

      console.log("Document updated with ID: ", editBlog);
      toast.success("Cập nhật thành công!");
    } catch (e) {
      console.error("Error updating document: ", e);
      alert("Error updating data!");
    }
    setLoading(false);
  };

  return (
    <div className="editor-container">
      <h1 className="text-[30px] text-center py-5 font-mainB">
        Chỉnh Sửa Blog
      </h1>
      {/* Title, Description, and Keywords Inputs */}
      <div>
        <div>
          <p className="text-[20px]">Tên Tiêu Đề</p>
          <input
            type="text"
            placeholder="Nhập Tên Tiêu Đề"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-field"
          />
        </div>
        <div>
          <p className="text-[20px]">Miêu Tả</p>
          <textarea
            placeholder="Nhập Miêu Tả"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea-field"
            rows={3}
          />
        </div>
        <div>
          <p className="text-[20px]">Key Word</p>
          <input
            type="text"
            placeholder="Nhập KeyWord"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            className="input-field"
          />
        </div>
        <div>
          <p className="text-[20px]">Ảnh Chính</p>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="input-field"
          />
        </div>

        {imageUrl && (
          <div>
            <Image src={imageUrl} alt={title} width={1000} height={1000} />
          </div>
        )}
      </div>

      <div>
        <p className="text-[20px] pt-5">Nội Dung Blog</p>

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

      <button onClick={handleUpdate} className="save-button">
        {loading ? "Đang Chỉnh Sửa..." : "Chỉnh Sửa"}
      </button>
    </div>
  );
};

export default EditBlog;

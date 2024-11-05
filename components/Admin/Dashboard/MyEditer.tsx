"use client";
import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebaseConfig"; // Import Firebase storage config
import { getFirestore, collection, addDoc } from "firebase/firestore"; // Import Firestore functions
import slugify from "slugify"; // Import slugify
import "../../../app/admin/create-blog/createBlog.css"; // Import CSS

const MyEditor = () => {
  const [editorData, setEditorData] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const db = getFirestore();

  const handleEditorChange = (event: any, editor: any) => {
    const data = editor.getData();
    setEditorData(data);
  };

  // Use slugify to generate a slug from the title
  const generateSlug = (title: string) => {
    return slugify(title, {
      lower: true, // Convert to lower case
      strict: true, // Strip special characters
      locale: "vi", // Set locale to Vietnamese for proper handling
    });
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
                Math.random() * 1e9
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
      loader: any
    ) => {
      return uploadAdapter(loader);
    };
  }

  const handleSave = async () => {
    try {
      const slug = generateSlug(title); // Generate the slug from the title
      const docRef = await addDoc(collection(db, "editorData"), {
        title: title,
        description: description,
        content: editorData,
        slug: slug, // Add slug to the document
        createdAt: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Data saved successfully!");
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error saving data!");
    }
  };

  return (
    <div className="editor-container">
      {/* Title and Description Inputs */}
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
      </div>

      <div>
        <CKEditor
          editor={ClassicEditor}
          data={editorData}
          onChange={handleEditorChange}
          config={{
            extraPlugins: [uploadPlugin],
            removePlugins: ["MediaEmbed", "BlockQuote"],
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
        Save
      </button>
    </div>
  );
};

export default MyEditor;

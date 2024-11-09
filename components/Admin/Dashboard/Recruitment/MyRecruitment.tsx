"use client";
import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebaseConfig";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import "../../../../app/admin/create/createBlog.css";

const MyRecruitment = () => {
  const [editorData, setEditorData] = useState("");
  const db = getFirestore();
  const documentId = "Va1xvFuDzQrr4uVt3cn8"; // The document ID to edit

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "recruitment", documentId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setEditorData(docSnap.data().content);
        } else {
          console.log("No document found!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchData();
  }, [db]);

  const handleEditorChange = (event: any, editor: any) => {
    const data = editor.getData();
    setEditorData(data);
  };

  const uploadAdapter = (loader: any) => {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = async (readEvent) => {
            try {
              const file = readEvent.target?.result as ArrayBuffer;
              const fileName = `${Date.now()}-${Math.round(Math.random() * 1e9)}.png`;
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
    editor.plugins.get("FileRepository").createUploadAdapter = (loader: any) => {
      return uploadAdapter(loader);
    };
  }

  const handleSave = async () => {
    try {
      const docRef = doc(db, "recruitment", documentId);
      await updateDoc(docRef, {
        content: editorData,
        updatedAt: new Date(),
      });
      alert("Data updated successfully!");
    } catch (e) {
      console.error("Error updating document:", e);
      alert("Error updating data!");
    }
  };

  return (
    <div className="editor-container">
      <h1 className="text-[30px] text-center py-5 font-mainB">Chỉnh Sửa Tuyển Dụng</h1>

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
        Update
      </button>
    </div>
  );
};

export default MyRecruitment;
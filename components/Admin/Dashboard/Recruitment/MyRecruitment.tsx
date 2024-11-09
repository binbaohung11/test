"use client";
import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { db } from "@/lib/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import "../../../../app/admin/create/createBlog.css";

const MyRecruitment = () => {
  const [editorData, setEditorData] = useState("");
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

  // Function to save content to Firebase
  const handleSave = async () => {
    try {
      const docRef = doc(db, "recruitment", documentId);
      await updateDoc(docRef, {
        content: editorData, // Save the editor data
        updatedAt: new Date(), // Optionally, add a timestamp for the update
      });
      console.log("Document updated successfully!");
      alert("Tuyển Dụng đã được chỉnh sửa thành công!"); // Show success message
    } catch (error) {
      console.error("Error updating document:", error);
      alert("Có lỗi xảy ra khi lưu dữ liệu!"); // Show error message
    }
  };

  return (
    <div className="editor-container">
      <h1 className="text-[30px] text-center py-5 font-mainB">
        Chỉnh Sửa Tuyển Dụng
      </h1>

      <div>
        <CKEditor
          editor={ClassicEditor}
          data={editorData}
          onChange={(editor) => {
            setEditorData(editor.getData()); // Update state with editor content
          }}
          config={{
            removePlugins: ["Table", "MediaEmbed"], // Disable the image plugin
          }}
        />
      </div>

      <button className="save-button" onClick={handleSave}>
        Chỉnh Sửa Tuyển Dụng
      </button>
    </div>
  );
};

export default MyRecruitment;

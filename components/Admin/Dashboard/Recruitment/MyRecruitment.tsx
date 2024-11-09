"use client";
import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { db } from "@/lib/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
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

  return (
    <div className="editor-container">
      <h1 className="text-[30px] text-center py-5 font-mainB">
        Chỉnh Sửa Tuyển Dụng
      </h1>

      <div>
        <CKEditor
          editor={ClassicEditor}
          data={editorData}
          onChange={(event, editor) => {
            setEditorData(editor.getData()); // Update state with editor content
          }}
          config={{
            removePlugins: ["Table", "MediaEmbed"], // Disable the image plugin
          }}
        />
      </div>

      <button className="save-button">Chỉnh Sửa Tuyển Dụng</button>
    </div>
  );
};

export default MyRecruitment;